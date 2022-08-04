# Component Overview

A component is just a normal class that encapsulates some logic and possibly another (child) components. Every component has its own lifecycle, which is automatically managed by Decompose. So everything encapsulated by a component is scoped. Please head to the [Lifecycle documentation page](https://arkivanov.github.io/Decompose/component/lifecycle/) for more information.

UI is optional and is pluggable from outside of components. Components do not depend on UI, the UI depends on components.

## Component hierarchy

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/ComponentHierarchy.png" width="512">

## Pluggable UI hierarchy

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/PluggableUiHierarchy.png" width="512">

## Typical component structure

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/ComponentStructure.png" width="512">

## ComponentContext

Each component has an associated [`ComponentContext`](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/ComponentContext.kt) which implements the following interfaces:

* `LifecycleOwner`, provided by Essenty library, so each component has its own lifecycle
* `StateKeeperOwner`, provided by Essenty library, so you can preserve any state during configuration changes and/or process death
* `InstanceKeeperOwner`, provided by Essenty library, so you can retain arbitrary object instances in your components (like with AndroidX ViewModels)
* `BackHandlerOwner`, provided by Essenty library, so each component can handle back button events

So if a component requires any of the above features, just pass the `ComponentContext` via the component's constructor. You can use the delegation pattern to add the `ComponentContext` to `this` scope:

```kotlin
class Counter(
    componentContext: ComponentContext
) : ComponentContext by componentContext {

    // The rest of the code
}
```

## Root ComponentContext

When instantiating a root component, the `ComponentContext` should be created manually. There is [DefaultComponentContext](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/DefaultComponentContext.kt) which is the default implementation class of the `ComponentContext`.

### Root ComponentContext in Android

Decompose provides a few handy [helper functions](https://github.com/arkivanov/Decompose/blob/master/decompose/src/androidMain/kotlin/com/arkivanov/decompose/DefaultComponentContextBuilder.kt) for creating the root `ComponentContext` in Android. The preferred way is to create the root `ComponentContext` in an `Activity` or a `Fragment`.

#### Root ComponentContext in Activity

For this case Decompose provides `defaultComponentContext()` extension function, which can be called in scope of an `Activity`.

#### Root ComponentContext in Fragment

The `defaultComponentContext()` extension function can not be used in a Fragment. This is because the `Fragment` class does not implement the `OnBackPressedDispatcherOwner` interface, and so by default can't handle back button events. It is advised to use the Android-specific `DefaultComponentContext(AndroidLifecycle, SavedStateRegistry?, ViewModelStore?, OnBackPressedDispatcher?)` factory function, and supply all the arguments manually. The first three arguments (`AndroidLifecycle`, `SavedStateRegistry` and `ViewModelStore`) can be obtained directly from `Fragment`. However the last argument `OnBackPressedDispatcher` - can not. If you don't need to handle back button events in your Decompose components, then you can just ignore this argument. Otherwise, a manual solution is required.

!!!warning
    Don't take any argument values from the hosting `Activity` (e.g. `requireActivity().onBackPressedDispatcher`), as it may produce memory leaks.

Here is an example with using Decompose in a `DialogFragment`.

```kotlin
class MyFragment : DialogFragment() {
    // Create custom OnBackPressedDispatcher
    private val onBackPressedDispatcher = OnBackPressedDispatcher(::dismiss)

    private lateinit var root: Root

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        root =
            Root(
                DefaultComponentContext(
                    lifecycle = lifecycle,
                    savedStateRegistry = savedStateRegistry,
                    viewModelStore = viewModelStore,
                    onBackPressedDispatcher = onBackPressedDispatcher,
                )
            )
    }

    override fun onCreateDialog(savedInstanceState: Bundle?): Dialog =
        object : Dialog(requireContext(), theme) {
            override fun onBackPressed() {
                onBackPressedDispatcher.onBackPressed()
            }
        }

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View =
        // Start Compose here
}
```

### Root ComponentContext in Jetpack/JetBrains Compose

It is advised to not create the root `ComponentContext` (and a root component) directly in a `Composable` function. Compositions may be performed in a background thread, which may break things. The preferred way is to create the root component outside of Compose.

!!!warning
    If you can't avoid creating the root component in a `Composable` function, please make sure you use `remember`. This will prevent the root component and its `ComponentContext` from being recreated on each composition.

#### Android with Compose

Prefer creating the root `ComponentContext` (and a root component) before starting Compose, e.g. in an `Activity` or a `Fragment`.

```kotlin
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Create the root component before starting Compose
        val root = RootComponent(componentContext = defaultComponentContext())

        // Start Compose
        setContent {
            // The rest of the code
        }
    }
}
```

#### Other platforms with Compose

Prefer creating the root `ComponentContext` (and a root component) before starting Compose, e.g. in directly in the `main` function.

```kotlin
fun main() {
    // Create the root component before starting Compose
    val root = RootComponent(componentContext = DefaultComponentContext(...))

    // Start Compose
    application {
        // The rest of the code
    }
}
```

## Child components

Decompose provides ability to organize components into trees, so each parent component is only aware of its immediate children. Hence the name of the library - "Decompose". You decompose your project by multiple independent reusable components. When adding a sub-tree into another place (reusing), you only need to satisfy its top component's dependencies.

There are two common ways to add a child component:

- Using `Child Stack` - prefer this option when a navigation between components is required. Please head to the [Child Stack documentation page](https://arkivanov.github.io/Decompose/child-stack/overview/) for more information.
- Manually - prefer this option if you need to add a permanent child component, or to manually control its `Lifecycle`.

### Adding a child component manually

In order to add a child component manually, you need to create a separate child `ComponentContext` for it. There is `ComponentContext.childContext(key: String, lifecycle: Lifecycle? = null)` extension function provided by the library, which creates a new instance of `ComponentContext` and attaches it to the parent one. This function has two arguments: 

* `key` - A key of the child `ComponentContext`, must be unique within the parent `ComponentContext`
* `lifecycle` - An optional `Lifecycle` of the child `ComponentContext`, can be used if the child component needs to be destroyed earlier, or if you need manual control. If supplied, then the following conditions apply:

    * the resulting `Lifecycle` of the child component will honour both the parent `Lifecycle` and the supplied one
    * when the supplied `Lifecycle` is explicitly destroyed, the child `ComponentContext` detaches from its parent

Here is an example of creating a permanent child component:

```kotlin
class SomeParent(
    componentContext: ComponentContext
) : ComponentContext by componentContext {

    private val counter: Counter = Counter(childContext(key = "Counter"))
}
```

Here is an example of creating a child component with manual lifecycle:

```kotlin
class SomeParent(
    componentContext: ComponentContext
) : ComponentContext by componentContext {

    private var counterHolder: CounterHolder? = null

    fun createCounter() {
        val lifecycle = LifecycleRegistry()
        val counter = Counter(childContext(key = "Counter", lifecycle = lifecycle))
        lifecycle.resume()
        counterHolder = CounterHolder(counter, lifecycle)
    }

    fun destroyCounter() {
        counterHolder?.lifecycle?.destroy()
        counterHolder = null
    }

    private class CounterHolder(
        val counter: Counter,
        val lifecycle: LifecycleRegistry,
    )
}
```

!!!warning 
    Never pass parent's `ComponentContext` to children, always use either the `Child Stack` or the `childContext(...)` function.

## Examples

### Simplest Component Example

Here is an example of simple Counter component:

```kotlin
class Counter {
    private val _value = MutableValue(State())
    val state: Value<State> = _value

    fun increment() {
        _value.reduce { it.copy(count = it.count + 1) }
    }

    data class State(val count: Int = 0)
}
```

### Jetpack/JetBrains Compose UI Example

```kotlin
@Composable
fun CounterUi(counter: Counter) {
    val state by counter.state.subscribeAsState()

    Column {
        Text(text = state.count.toString())

        Button(onClick = counter::increment) {
            Text("Increment")
        }
    }
}
```

[Value](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/value/Value.kt) - is a multiplatform way to expose streams of states. It contains the `value` property, which always returns the current state. It also provides ability to observe state changes via `subscribe`/`unsubscribe` methods. There is [MutableValue](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/value/MutableValueBuilder.kt) which is a mutable variant of `Value`.

If you are using only Jetpack/JetBrains Compose UI, then most likely you can use its `State` and `MutableState` directly, without intermediate `Value`/`MutableValue` from Decompose. You can convert between `State` and `Value` using one of the Compose [extension modules](https://arkivanov.github.io/Decompose/extensions/compose/).

### SwiftUI Example

```swift
struct CounterView: View {
    private let counter: Counter
    @ObservedObject
    private var state: ObservableValue<CounterState>

    init(_ counter: Counter) {
        self.counter = counter
        self.state = ObservableValue(counter.state)
    }

    var body: some View {
        VStack(spacing: 8) {
            Text(self.state.value.text)
            Button(action: self.counter.increment, label: { Text("Increment") })
        }
    }
}
```
