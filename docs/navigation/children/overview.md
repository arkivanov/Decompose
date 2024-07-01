# Generic Navigation

The `Generic Navigation` can be used to create custom navigation models, when none of the predefined models fit your needs. It offers a flexible API and allows you to create almost any kind of navigation. Please check out [Child Stack](../stack/overview.md) and [Child Slot](../slot/overview.md) before using the `Generic Navigation`.

The API is based around [NavState](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/children/NavState.kt) and [ChildNavState](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/children/ChildNavState.kt) interfaces that should be implemented by clients. `NavState` represents a persistent state of the navigation. It also holds a navigation state for each child - `ChildNavState`. Both `NavState` and `ChildNavState` must be immutable, and correctly implement `equals` and `hashCode` methods (or just be data objects/classes). There must be no duplicated (by equality) `ChildNavState.configuration` within a `NavState`.

The navigation is performed by transforming the current `NavState` to a new one. The `Generic Navigation` implementation calculates diffs between the old list of `ChildNavState` and the new one, and manipulates child components as needed.

## ChildNavState

`ChildNavState` represents a state of a child component. It holds a `Configuration` that works as a key of the child component, and a `Status` that represents the required lifecycle status of the child component. As mentioned earlier, the `Configuration` must be unique within the `NavState`, unless `DecomposeExperimentFlags.duplicateConfigurationsEnabled` flag is enabled.

The `Status` can be one of the following:

* `RESUMED` - The child component is instantiated and its maximum lifecycle state is `RESUMED`, depending on the parent's lifecycle state. A `RESUMED` component can handle back button presses.

* `STARTED` - The child component is instantiated and its maximum lifecycle state is `STARTED`, depending on the parent's lifecycle state. A `STARTED` component can handle back button presses.

* `CREATED` - The child component is instantiated and its maximum lifecycle state is `CREATED`, depending on the parent's lifecycle state. A `CREATED` component cannot handle back button presses.

* `DESTROYED` - The child component is destroyed but still managed, e.g. it's state may be saved and restored later. The state of the component is saved when it switches from any status to `DESTROYED`.

If you want to completely remove the child component from the navigation, you should remove its `ChildNavState` from the `NavState` altogether.

The [SimpleChildNavState](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/children/SimpleChildNavState.kt) class implements the `ChildNavState` interfaces. It can be used in simple cases when custom implementation is not required.

## Using the Generic Navigation

Using the `Generic Navigation` is pretty similar to any other navigation model, there is [ComponentContext.children(...)](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/children/ChildrenFactory.kt) extension function.

### Saving and restoring the navigation state manually

```kotlin
fun <C : Any, T : Any, E : Any, N : NavState<C>, S : Any> ComponentContext.children(
    source: NavigationSource<E>,
    key: String,
    initialState: () -> N,
    saveState: (state: N) -> SerializableContainer?,
    restoreState: (container: SerializableContainer) -> N?,
    navTransformer: (state: N, event: E) -> N,
    stateMapper: (state: N, children: List<Child<C, T>>) -> S,
    onStateChanged: (newState: N, oldState: N?) -> Unit = { _, _ -> },
    onEventComplete: (event: E, newState: N, oldState: N) -> Unit = { _, _, _ -> },
    backTransformer: (state: N) -> (() -> N)? = { null },
    childFactory: (configuration: C, componentContext: ComponentContext) -> T,
): Value<S>
```

The `children` function has the following type parameters:

- `C` - a type of component configurations.
- `T` - a type of components.
- `E` - a type of navigation events.
- `N` - a type of navigation state, must implement `NavState` interface.
- `S` - a type of the resulting children state.

The `children` function accepts the following arguments:

- `source: NavigationSource<E>` - an observable source of navigation events, the `Generic Navigation` subscribes to the source and performs the navigation. The [SimpleNavigation](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/children/SimpleNavigation.kt) class can be used in simple cases when custom implementation is not required.
- `key: String` - a key of the navigation, must be unique if there are multiple `children` used in the same component.
- `initialState: () -> N` - an initial navigation state that should be used if there is no previously saved state.
- `saveState: (state: N) -> SerializableContainer` - a function that saves the provided navigation state into `SerializableContainer`, called when the hosting component goes to background.
- `restoreState: (container: SerializableContainer) -> N` - a function that restores the navigation state from the provided `SerializableContainer`. The restored navigation state must have the same amount of child configurations and in the same order. The restored child `Statuses` can be any, e.g. a previously active child may become destroyed, etc.
- `navTransformer: (state: N, event: E) -> N` - a function that transforms the current navigation state to a new one using the provided navigation event. The implementation diffs both navigation states and manipulates child components as needed.
- `stateMapper: (state: N, children: List<Child<C, T>>) -> S` - combines the provided navigation state and list of child components to a resulting custom state.
- `onStateChanged: (newState: N, oldState: N?) -> Unit` - called every time the navigation state changes, `oldState` is `null` when called first time during initialisation. 
- `onEventComplete: (event: E, newState: N, oldState: N) -> Unit` - called when a navigation event is processed and the navigation completed.
- `backTransformer: (state: N) -> (() -> N)?` - a function that checks the provided navigation state, and either returns another function transforming the navigation state to a new one, or `null` if back button handling should be disabled. Called during the initialisation and after each navigation event.
- `childFactory: (configuration: C, componentContext: ComponentContext) -> T` - childFactory a factory function that creates new child component instances.

The `children` function returns an observable `Value` of the resulting children state.

### Saving and restoring the navigation state automatically

```kotlin
fun <C : Any, T : Any, E : Any, N : NavState<C>, S : Any> ComponentContext.children(
    source: NavigationSource<E>,
    stateSerializer: KSerializer<N>?,
    initialState: () -> N,
    key: String,
    navTransformer: (state: N, event: E) -> N,
    stateMapper: (state: N, children: List<Child<C, T>>) -> S,
    onStateChanged: (newState: N, oldState: N?) -> Unit = { _, _ -> },
    onEventComplete: (event: E, newState: N, oldState: N) -> Unit = { _, _, _ -> },
    backTransformer: (state: N) -> (() -> N)? = { null },
    childFactory: (configuration: C, componentContext: ComponentContext) -> T,
): Value<S>
```

This is a convenience function similar to the one described above. It accepts an optional `KSerializer<N>` argument, so that the navigation state is saved and restored automatically. The navigation state is never saved or restored if the serializer is not provided.

## Examples

### A stack that can be empty

[Child Stack](../stack/overview.md) provided by Decompose can not be empty. Here is an example of using the Generic Navigation for creating an API for a stack that can be empty.

```kotlin
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.children.ChildNavState
import com.arkivanov.decompose.router.children.ChildNavState.Status
import com.arkivanov.decompose.router.children.NavState
import com.arkivanov.decompose.router.children.NavigationSource
import com.arkivanov.decompose.router.children.SimpleChildNavState
import com.arkivanov.decompose.router.children.children
import com.arkivanov.decompose.value.Value
import kotlinx.serialization.KSerializer
import kotlinx.serialization.Serializable
import kotlinx.serialization.Transient

data class Stack<out C : Any, out T : Any>(
    val items: List<Child.Created<C, T>>,
)

typealias StackNavEvent<C> = (List<C>) -> List<C>

fun <C : Any, T : Any> ComponentContext.stack(
    source: NavigationSource<StackNavEvent<C>>,
    serializer: KSerializer<C>,
    initialStack: () -> List<C> = ::emptyList,
    key: String = "Stack",
    childFactory: (configuration: C, componentContext: ComponentContext) -> T,
): Value<Stack<C, T>> =
    children(
        source = source,
        stateSerializer = StackNavState.serializer(serializer),
        initialState = { StackNavState(initialStack()) },
        key = key,
        navTransformer = { state, event -> StackNavState(event(state.items)) },
        stateMapper = { _, children -> Stack(children as List<Child.Created<C, T>>) },
        backTransformer = { state ->
            state.items.takeUnless(List<*>::isEmpty)?.let { items ->
                { StackNavState(items.dropLast(1)) }
            }
        },
        childFactory = childFactory,
    )

@Serializable
private data class StackNavState<out C : Any>(
    val items: List<C>,
) : NavState<C> {
    @Transient
    override val children: List<ChildNavState<C>> =
        items.mapIndexed { index, config ->
            SimpleChildNavState(
                configuration = config,
                status = if (index == items.lastIndex) Status.RESUMED else Status.CREATED,
            )
        }
}
```

And here is the usage example.

```kotlin
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.children.SimpleNavigation
import com.arkivanov.decompose.value.Value
import kotlinx.serialization.Serializable

class PhotoComponent(url: String) {
    // Some code here
}

interface GalleryComponent {
    val stack: Value<Stack<*, PhotoComponent>>
}

class DefaultGalleryComponent(
    componentContext: ComponentContext,
) : GalleryComponent, ComponentContext by componentContext {

    private val nav = SimpleNavigation<StackNavEvent<Config>>()

    override val stack: Value<Stack<*, PhotoComponent>> =
        stack(
            source = nav,
            serializer = Config.serializer(),
            childFactory = { config, ctx -> PhotoComponent(url = config.url) },
        )

    private fun pushPhoto(url: String) {
        nav.navigate { it + Config(url) }
    }

    private fun popPhoto() {
        nav.navigate { it.dropLast(1) }
    }

    @Serializable
    private data class Config(val url: String)
}
```

### More samples

All existing navigation models (like [Child Stack](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/stack/ChildStackFactory.kt)) are implemented using the `Generic Navigation`. Please refer to their source code for implementation details.

#### Sample project

See the sample project has the [CustomNavigationComponent](https://github.com/arkivanov/Decompose/blob/master/sample/shared/shared/src/commonMain/kotlin/com/arkivanov/sample/shared/customnavigation/DefaultCustomNavigationComponent.kt), which demonstrates how to use the `Generic Navigation`.

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleCustomNavigationDesktop.gif" width="300"><video width="192" autoplay loop muted><source src="/Decompose/media/SampleCustomNavigationIos.mp4" type="video/mp4"></video>
