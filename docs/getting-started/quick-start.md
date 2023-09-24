# Quick start

Please see the [template repository](https://github.com/arkivanov/decompose-multiplatform-template) which can be used to kick-start your project.

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
        instanceKeeper... // Access the InstanceKeeper
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

### Observing Value in Jetpack Compose 

Observing `Value` in Jetpack Compose is easy, just use the `subscribeAsState` extension function.

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

### Observing Value in SwiftUI

```swift
struct DetailsView: View {
    private let list: ListComponent
    
    @StateValue
    private var model: ListComponentModel

    init(_ list: ListComponent) {
        self.list = list
        _model = StateValue(list.model)
    }
    
    var body: some View {
        List(model.items, ...) { item in
            // Display the item
        }
    }
}
```

#### What is StateValue

[StateValue](https://github.com/arkivanov/Decompose/blob/master/sample/app-ios/app-ios/DecomposeHelpers/StateValue.swift) is a property wrapper for `Value` that makes it observable in SwiftUI. Unfortunately it [does not look possible](https://github.com/arkivanov/Decompose/issues/206) to publish utils for SwiftUI as a library or framework, so it has to be copied in your project.

### Observing Value in other UI Frameworks

Please refer to the [docs](/Decompose/component/overview/) for information about other platforms and UI frameworks.

### Using Reaktive or coroutines

The state can be also exposed using Reaktive `Observable` or coroutines `Flow`, or any other reactive library. Follow best practices recommended for the reactive library of your choice.

## Navigation

Decompose provides various ways to navigate, you can find more information in the [docs](/Decompose/navigation/overview/). The most common navigation pattern is [Child Stack](/Decompose/navigation/stack/overview/).

### Component configurations

Child component configurations is another important concepts of Decompose. It allows supplying type safe arguments, as well as any kind of dependencies to child components.

Each child component is represented by a persistent configuration class. A configuration class denotes which child component should be instantiated, and holds persistent arguments required for instantiation. A configuration class must be defined for every child component.

!!!warning
    Before `v2.2.0-alpha01`, configuration classes must implement `Parcelable` interface and be annotated with [@Parcelize](https://developer.android.com/kotlin/parcelize) annotation. Starting with `v2.2.0-alpha01`, Parcelable/Parcelize support is deprecated and the recommended way is to annotate configuration classes with [@Serializable](https://github.com/Kotlin/kotlinx.serialization) annotation.

### Using the Child Stack

=== "Before 2.2.0-alpha01"

    ```kotlin
    interface RootComponent {
    
        val stack: Value<ChildStack<*, Child>>
    
        // It's possible to pop multiple screens at a time on iOS
        fun onBackClicked(toIndex: Int)
    
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
    
        override val stack: Value<ChildStack<*, RootComponent.Child>> =
            childStack(
                source = navigation,
                initialConfiguration = Config.List, // The initial child component is List
                handleBackButton = true, // Automatically pop from the stack on back button presses
                childFactory = ::child,
            )
    
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
        
        override fun onBackClicked(toIndex: Int) {
            navigation.popTo(index = toIndex)
        }
    
        @Parcelize // kotlin-parcelize plugin must be applied if you are targeting Android 
        private sealed interface Config : Parcelable {
            data object List : Config
            data class Details(val item: String) : Config
        }
    }
    ```

=== "Since 2.2.0-alpha01"

    ```kotlin
    interface RootComponent {
    
        val stack: Value<ChildStack<*, Child>>
    
        // It's possible to pop multiple screens at a time on iOS
        fun onBackClicked(toIndex: Int)
    
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
    
        override val stack: Value<ChildStack<*, RootComponent.Child>> =
            childStack(
                source = navigation,
                serializer = Config.serializer(),
                initialConfiguration = Config.List, // The initial child component is List
                handleBackButton = true, // Automatically pop from the stack on back button presses
                childFactory = ::child,
            )
    
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
        
        override fun onBackClicked(toIndex: Int) {
            navigation.popTo(index = toIndex)
        }
    
        @Serializable // kotlinx-serialization plugin must be applied
        private sealed interface Config {
            @Serializable
            data object List : Config

            @Serializable
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

### Child Stack with SwiftUI

```swift
struct RootView: View {
    private let root: RootComponent
    
    init(_ root: RootComponent) {
        self.root = root
    }
    
    var body: some View {
        StackView(
            stackValue: StateValue(root.stack),
            getTitle: {
                switch $0 {
                case is RootComponentChild.ListChild: return "List"
                case is RootComponentChild.DetailsChild: return "Details"
                default: return ""
                }
            },
            onBack: root.onBackClicked,
            childContent: {
                switch $0 {
                case let child as RootComponentChild.ListChild: ListView(child.component)
                case let child as RootComponentChild.DetailsChild: DetailsView(child.component)
                default: EmptyView()
                }
            }
        )
    }
}
```

#### What is StackView?

[StackView](https://github.com/arkivanov/Decompose/blob/master/sample/app-ios/app-ios/DecomposeHelpers/StackView.swift) is a view that displays `Child Stack` using the native SwiftUI navigation and providing the native UX. For the same reason, it has to be copied in your project.

### Child Stack with other UI Frameworks

Please refer to [samples](/Decompose/samples/) for integrations with other UI frameworks.

## Initializing a root component

### Android with Jetpack Compose

Use `defaultComponentContext` extension function to create the root `ComponentContext` in an `Activity` or a `Fragment`.

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

    // Always create the root component outside Compose on the UI thread
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

### IOS with SwiftUI

1. Create `RootHolder` class that holds the root component and its lifecycle.

```swift
class RootHolder : ObservableObject {
    let lifecycle: LifecycleRegistry
    let root: RootComponent

    init() {
        lifecycle = LifecycleRegistryKt.LifecycleRegistry()

        root = DefaultRootComponent(
            componentContext: DefaultComponentContext(lifecycle: lifecycle)
        )

        LifecycleRegistryExtKt.create(lifecycle)
    }

    deinit {
        // Destroy the root component before it is deallocated
        LifecycleRegistryExtKt.destroy(lifecycle)
    }
}
```

2. Declare a simple `AppDelegate` containing `RootHolder`

```swift
class AppDelegate: NSObject, UIApplicationDelegate {
    let rootHolder: RootHolder = RootHolder()
}
```

3. Create `RootHolder` instance and pass it to `RootView`.

```swift
@main
struct app_iosApp: App {
    @UIApplicationDelegateAdaptor(AppDelegate.self)
    var appDelegate: AppDelegate

    @Environment(\.scenePhase)
    var scenePhase: ScenePhase

    var rootHolder: RootHolder { appDelegate.rootHolder }
    
    var body: some Scene {
        WindowGroup {
            RootView(rootHolder.root)
                .onChange(of: scenePhase) { newPhase in
                    switch newPhase {
                    case .background: LifecycleRegistryExtKt.stop(rootHolder.lifecycle)
                    case .inactive: LifecycleRegistryExtKt.pause(rootHolder.lifecycle)
                    case .active: LifecycleRegistryExtKt.resume(rootHolder.lifecycle)
                    @unknown default: break
                    }
                }
        }
    }
}
```

### JavaScript (Web)

In the place where you create your `RootComponent`:

1. Initialize a `LifecycleRegistry`.
2. Pass it into the root `ComponentContext`.
3. Attach the `LifecycleRegistry` to the `document` via an extension function.

```kotlin
@OptIn(ExperimentalDecomposeApi::class)
fun main() {
    // Initialize a `LifecycleRegistry`
    val lifecycle = LifecycleRegistry()

    val root =
        RootComponent(
            // Pass the LifecycleRegistry to the context
            componentContext = DefaultComponentContext(lifecycle = lifecycle),
            ... // Other dependencies here
        )

    // Attach the LifecycleRegistry to document
    lifecycle.attachToDocument()

    // Render the UI
    createRoot(document.getElementById("app")!!).render(
        RootContent.create {
            component = root
        }
    )
}

// Attaches the LifecycleRegistry to the document
private fun LifecycleRegistry.attachToDocument() {
    fun onVisibilityChanged() {
        if (document.visibilityState == "visible") {
            resume()
        } else {
            stop()
        }
    }

    onVisibilityChanged()

    document.addEventListener(type = "visibilitychange", callback = { onVisibilityChanged() })
}

private val Document.visibilityState: String
    get() = asDynamic().visibilityState.unsafeCast<String>()
```

### Other platforms and UI frameworks

Please refer to [samples](/Decompose/samples/) for integrations with other platforms and UI frameworks. 
