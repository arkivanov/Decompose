# Quick start

## A simplest component

```kotlin
class RootComponent
```

Yes, a simplest component is just a normal class. No need to extend a class from the library, or implement an interface.

## Extracting an interface

```kotlin
interface RootComponent

class DefaultRootComponent : RootComponent
```

It's often useful to extract an interface for a component. It makes it possible to create test doubles for integration tests (e.g. testing navigation in a container component), or fake implementations for UI previews (e.g. for Jetpack Compose or SwiftUI).

## ComponentContext

[ComponentContext](/Decompose/component/overview/#componentcontext) is probably the most important concept of Decompose. It is an interface that provides access to various tools, like lifecycle, state preservation, instance retaining (aka Android ViewModel), back button handling, etc. Each component has its own `ComponentContext` provided by Decompose.

If your component requires `ComponentContext`, just pass it via constructor. You can also use the delegation pattern to add `ComponentContext` to `this` scope.

```kotlin
class DefaultRootComponent(
    componentContext: ComponentContext,
) : RootComponent, ComponentContext by componentContext {
    
    init {
        lifecycle... // Access the Lifecycle
        stateKeeper... // Access the StateKeeper
        intanceKeeper... // Access the InstanceKeeper
        backHandler... // Access the BackHandler
    }
}
```

## Observable state and callbacks

There are multiple ways of exposing an observable state from a component.

### Using Value from Decompose

Decompose provides an observable state holder - `Value`. It offers great integration with various UI frameworks, such as Jetpack Compose, SwiftUI, React, etc. You can also convert Reaktive `Observable` or coroutines `Flow` to `Value`, if needed.

```kotlin
interface ListComponent {
    val model: Value<Model>

    fun onItemClicked(item: String)

    data class Model(
        val items: List<String>,
    )
}

class DefaultListComponent(
    componentContext: ComponentContext,
    private val onItemSelected: (item: String) -> Unit,
) : ListComponent {
    override val model: Value<ListComponent.Model> =
        MutableValue(Model(items = List(100) { "Item $it" }))

    override fun onItemClicked(item: String) {
        onItemSelected(item)
    }
}
```

Observing `Value` in Jetpack Compose is easy, just use `subscribeAsState` extension function.

```kotlin
@Composable
fun ListContent(component: ListComponent, modifier: Modifier = Modifier) {
    val model by component.model.subscribeAsState()

    LazyColumn {
        items(items = model.items) { item ->
            Text(
                text = item,
                modifier = Modifier.clickable { 
                    component.onItemClicked(item = item) 
                },
            )
        }
    }
}
```

Please refer to the [docs](/Decompose/component/overview/) for information about other platforms and UI frameworks.

### Using Reaktive or coroutines

The state can be also exposed using Reaktive `Observable` or coroutines `Flow`, or any other reactive library. Follow best practices recommended for the reactive library of your choice.

## Navigation

Decompose provides various ways to navigate, you can find more information in the [docs](/Decompose/navigation/overview/). The most common navigation pattern is [Child Stack](/Decompose/navigation/stack/overview/).

### Component configurations

Child component configurations is another important concepts of Decompose. It allows supplying type safe arguments, as well as any kind of dependencies to child components.

Each child component is represented by a persistent configuration class. A configuration class denotes which child component should be instantiated, and holds persistent arguments required for instantiation. A configuration class must be defined for every child component.


### Using the Child Stack

```kotlin
interface RootComponent {

    val stack: Value<ChildStack<*, Child>>

    // Defines all possible child components
    sealed class Child {
        class ListChild(val component: ListComponent) : Child()
        class DetailsChild(val component: DetailsComponent) : Child()
    }
}

class DefaultRootComponent(
    componentContext: ComponentContext,
) : RootComponent, ComponentContext by componentContext {

    private val navigation = StackNavigation<Config>()

    private val _stack =
        childStack(
            source = navigation,
            initialConfiguration = Config.List, // The initial child component is List
            handleBackButton = true, // Automatically pop from the stack on back button presses
            childFactory = ::child,
        )

    override val stack: Value<ChildStack<*, RootComponent.Child>> = _stack

    private fun child(config: Config, componentContext: ComponentContext): RootComponent.Child =
        when (config) {
            is Config.List -> ListChild(listComponent(componentContext))
            is Config.Details -> DetailsChild(detailsComponent(componentContext, config))
        }

    private fun listComponent(componentContext: ComponentContext): ListComponent =
        DefaultListComponent(
            componentContext = componentContext,
            onItemSelected = { item: String -> // Supply dependencies and callbacks
                navigation.push(Config.Details(item = item)) // Push the details component
            },
        )

    private fun detailsComponent(componentContext: ComponentContext, config: Config.Details): DetailsComponent =
        DefaultDetailsComponent(
            componentContext = componentContext,
            item = config.item, // Supply arguments from the configuration
            onFinished = navigation::pop, // Pop the details component
        )

    @Parcelize // The `kotlin-parcelize` plugin must be applied if you are targeting Android 
    private sealed interface Config : Parcelable {
        object List : Config
        data class Details(val item: String) : Config
    }
}
```

### Child Stack with Jetpack Compose

```kotlin
@Composable
fun RootContent(component: RootComponent, modifier: Modifier = Modifier) {
    Children(
        stack = component.stack,
        modifier = modifier,
        animation = stackAnimation(fade() + scale()),
    ) {
        when (val child = it.instance) {
            is ListChild -> ListContent(component = child.component)
            is DetailsChild -> DetailsContent(component = child.component)
        }
    }
}
```

Please refer to [samples](/Decompose/samples/) for integrations with other UI frameworks.

## Initialising a root component

### Android with Jetpack Compose

Use `defaultComponentContext` extension function to create the root `ComponentContext` in an `Activity`.

```kotlin
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Always create the root component outside Compose on the main thread
        val root =
            DefaultRootComponent(
                componentContext = defaultComponentContext(),
            )

        setContent {
            MaterialTheme {
                Surface {
                    RootContent(component = root, modifier = Modifier.fillMaxSize())
                }
            }
        }
    }
}
```

### Desktop with Jetpack Compose

Use `LifecycleController` to bind the root lifecycle with the main window state. See an example of `runOnUiThread` function here - [Utils.kt](https://github.com/arkivanov/Decompose/blob/master/sample/app-desktop/src/jvmMain/kotlin/com/arkivanov/sample/app/Utils.kt).

```kotlin
fun main() {
    val lifecycle = LifecycleRegistry()

    // Always create the root component outside Compose on the main thread
    val root =
        runOnUiThread {
            DefaultRootComponent(
                componentContext = DefaultComponentContext(lifecycle = lifecycle),
            )
        }

    application {
        val windowState = rememberWindowState()

        LifecycleController(lifecycle, windowState)

        Window(
            onCloseRequest = ::exitApplication,
            state = windowState,
            title = "My Application"
        ) {
            MaterialTheme {
                Surface {
                    RootContent(component = root, modifier = Modifier.fillMaxSize())
                }
            }
        }
    }
}
```

### Other platforms and UI frameworks

Please refer to [samples](/Decompose/samples/) for integrations with other platforms and UI frameworks. 
