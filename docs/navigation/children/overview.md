# Generic Navigation

The `Generic Navigation` can be used to create custom navigation models, when none of the predefined models fit your needs. It offers a flexible API and allows you to create almost any kind of navigation. Please check out [Child Stack](../stack/overview.md) and [Child Slot](../slot/overview.md) before using the `Generic Navigation`.

The API is based around [NavState](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/children/NavState.kt) and [ChildNavState](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/children/ChildNavState.kt) interfaces that should be implemented by clients. `NavState` represents a persistent state of the navigation. It also holds a navigation state for each child - `ChildNavState`. Both `NavState` and `ChildNavState` must be immutable, and correctly implement `equals` and `hashCode` methods (or just be data objects/classes). There must be no duplicated (by equality) `ChildNavState.configuration` within a `NavState`.

The navigation is performed by transforming the current `NavState` to a new one. The `Generic Navigation` implementation calculates diffs between the old list of `ChildNavState` and the new one, and manipulates child components as needed.

## ChildNavState

`ChildNavState` represents a state of a child component. It holds a `Configuration` that works as a key of the child component, and a `Status` that represents the required lifecycle status of the child component. As mentioned earlier, the `Configuration` must unique within the `NavState`.

The `Status` can be one of the following:

* `ACTIVE` - the child component is instantiated and active. Its maximum lifecycle state is `RESUMED`, depending on the parent's lifecycle state. An active component can handle back button presses. The state of the component is saved when it switches from `ACTIVE` to any other status.

* `INACTIVE` - the child component is instantiated and inactive. Its maximum lifecycle state is `CREATED`, depending on the parent's lifecycle state. An inactive component cannot handle back button presses.

* `DESTROYED` - the child component is destroyed but still managed, e.g. it's state may be saved and restored later.

If you want to completely remove the child component from the navigation, you should remove its `ChildNavState` from the `NavState` altogether.

The [SimpleChildNavState](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/children/SimpleChildNavState.kt) class implements the `ChildNavState` interfaces. It can be used in simple cases when custom implementation is not required.

## Using the Generic Navigation

Using the `Generic Navigation` is pretty similar to any other navigation model, there is [ComponentContext.children(...)](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/children/ChildrenFactory.kt) extension function.

```kotlin
fun <C : Any, T : Any, E : Any, N : NavState<C>, S : Any> ComponentContext.children(
    source: NavigationSource<E>,
    key: String,
    initialState: () -> N,
    saveState: (state: N) -> ParcelableContainer?,
    restoreState: (container: ParcelableContainer) -> N?,
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
- `saveState: (state: N) -> ParcelableContainer` - a function that saves the provided navigation state into `ParcelableContainer`, called when the hosting component goes to background.
- `restoreState: (container: ParcelableContainer) -> N` - a function that restores the navigation state from the provided `ParcelableContainer`. The restored navigation state must have the same amount of child configurations and in the same order. The restored child `Statuses` can be any, e.g. a previously active child may become destroyed, etc.
- `navTransformer: (state: N, event: E) -> N` - a function that transforms the current navigation state to a new one using the provided navigation event. The implementation diffs both navigation states and manipulates child components as needed.
- `stateMapper: (state: N, children: List<Child<C, T>>) -> S` - combines the provided navigation state and list of child components to a resulting custom state.
- `onStateChanged: (newState: N, oldState: N?) -> Unit` - called every time the navigation state changes, `oldState` is `null` when called first time during initialisation. 
- `onEventComplete: (event: E, newState: N, oldState: N) -> Unit` - called when a navigation event is processed and the navigation completed.
- `backTransformer: (state: N) -> (() -> N)?` - a function that checks the provided navigation state, and either returns another function transforming the navigation state to a new one, or `null` if back button handling should be disabled. Called during the initialisation and after each navigation event.
- `childFactory: (configuration: C, componentContext: ComponentContext) -> T` - childFactory a factory function that creates new child component instances.

The `children` function returns an observable `Value` of the resulting children state.

## Examples

All existing navigation models (like [Child Stack](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/stack/ChildStackFactory.kt)) are implemented using the `Generic Navigation`. Please refer to their source code for implementation details.

### Sample project

See the sample project has the [CustomNavigationComponent](https://github.com/arkivanov/Decompose/blob/master/sample/shared/shared/src/commonMain/kotlin/com/arkivanov/sample/shared/customnavigation/DefaultCustomNavigationComponent.kt), which demonstrates how to use the `Generic Navigation`.

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleCustomNavigationDesktop.gif" width="300"><video width="192" autoplay loop muted><source src="/Decompose/media/SampleCustomNavigationIos.mp4" type="video/mp4"></video>
