# Component Overview

A component is just a normal class that encapsulates some logic and possibly another (child) components. Every component has its own lifecycle, which is automatically managed by Decompose. So everything encapsulated by a component is scoped. Please head to the [Lifecycle documentation page](/Decompose/component/lifecycle/) for more information.

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

## Value and MutableValue state holders

[Value](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/value/Value.kt) - is a multiplatform way to expose streams of states. It contains the `value` property, which always returns the current state. It also provides the ability to observe state changes via `subscribe`/`unsubscribe` methods. There is [MutableValue](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/value/MutableValueBuilder.kt) which is a mutable variant of `Value`. Since `Value` is a class (not an interface) with a generic type parameter, it can be used to expose state streams to ObjC/Swift.

Using `Value` is not mandatory, you can use any other state holders, e.g. [StateFlow](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/-state-flow/), [State](https://developer.android.com/jetpack/compose/state), [Observable](https://github.com/badoo/Reaktive), [LiveData](https://developer.android.com/topic/libraries/architecture/livedata), etc.

If you are using Jetpack/JetBrains Compose, `Value` can be observed in Composable functions using one of the Compose [extension modules](/Decompose/extensions/compose/).

!!!warning
    `Value` is not thread-safe, it should be accessed only from the main thread.

### Why not StateFlow?

Decompose uses `Value` to avoid dependency on Kotlin coroutines. One may prefer using Reaktive, RxJava, etc. instead of coroutines. It also provides better interoperability with ObjC/Swift and simplifies testing. Feel free to convert `Value` to `StateFlow` or any other state holder if you need it.

## Examples

### Simplest Component Example

Here is an example of simple Counter component:

```kotlin
class Counter {
    private val _state = MutableValue(State())
    val state: Value<State> = _state

    fun increment() {
        _state.reduce { it.copy(count = it.count + 1) }
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

#### What is ObservableValue?

[ObservableValue](https://github.com/arkivanov/Decompose/blob/master/sample/app-ios/app-ios/ObservableValue.swift) is a wrapper around `Value` that makes it compatible with SwiftUI. It is a simple class that conforms to `ObservableObject` protocol. Unfortunately it [does not look possible](https://github.com/arkivanov/Decompose/issues/206) to publish utils for SwiftUI as a library or framework, so it has to be copied to your project.
