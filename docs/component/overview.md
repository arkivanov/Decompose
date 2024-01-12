# Component Overview

A component is just a normal class that encapsulates some logic and possibly another (child) components. Every component has its own lifecycle, which is automatically managed by Decompose. So everything encapsulated by a component is scoped. Please head to the [Lifecycle documentation page](lifecycle.md) for more information.

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

!!!warning
    The root `ComponentContext` and the root component should be always created on the UI thread.

### Root ComponentContext in Android

Decompose provides a few handy [helper functions](https://github.com/arkivanov/Decompose/blob/master/decompose/src/androidMain/kotlin/com/arkivanov/decompose/DefaultComponentContextBuilder.kt) for creating the root `ComponentContext` in Android. The preferred way is to create the root `ComponentContext` in an `Activity` or a `Fragment`.

#### Root ComponentContext in Activity

For this case Decompose provides `defaultComponentContext()` extension function, which can be called in scope of an `Activity`.

!!! warning

    The `defaultComponentContext` function must only be called once during the lifetime of the host Activity or Fragment, typically in `onCreate`. Calling it a second time will result in a crash.

```kotlin
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val root = DefaultRootComponent(defaultComponentContext())
    }
}
```

#### Root ComponentContext in Fragment

Use `defaultComponentContext(OnBackPressedDispatcher?)` extension function, which can be called in scope of `Fragment`.

```kotlin
class SomeFragment : Fragment() {
    private lateinit var root: RootComponent

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        root =
            DefaultRootComponent(
                componentContext = defaultComponentContext(
                    onBackPressedDispatcher = requireActivity().onBackPressedDispatcher
                )
            )
    }
}
```

### Root ComponentContext in Jetpack/JetBrains Compose

It is advised to not create the root `ComponentContext` (and a root component) directly in a `Composable` function. Compositions may be performed in a background thread, which may break things. The preferred way is to create the root component on the UI thread outside of Compose.

!!!warning
    If you can't avoid creating the root component in a `Composable` function, please make sure you use `remember`. This will prevent the root component and its `ComponentContext` from being recreated on each composition.

#### Android with Compose

Prefer creating the root `ComponentContext` (and a root component) before starting Compose, e.g. in an `Activity` or a `Fragment`.

```kotlin
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Create the root component before starting Compose
        val root = DefaultRootComponent(componentContext = defaultComponentContext())

        // Start Compose
        setContent {
            // The rest of the code
        }
    }
}
```

#### JVM/Desktop with Compose

Make sure you always create the root component on the UI thread. Please refer to samples for an example of [runOnUiThread](https://github.com/arkivanov/Decompose/blob/master/sample/app-desktop/src/jvmMain/kotlin/com/arkivanov/sample/app/Utils.kt) function .

```kotlin
fun main() {
    // Create the root component on the UI thread before starting Compose
    val root = runOnUiThread { DefaultRootComponent(componentContext = DefaultComponentContext(...)) }

    // Start Compose
    application {
        // The rest of the code
    }
}
```

#### Other platforms with Compose

Prefer creating the root `ComponentContext` (and a root component) before starting Compose, e.g. in directly in the `main` function.

```kotlin
fun main() {
    // Create the root component before starting Compose.
    // Make sure that this happens on the UI thread.
    val root = DefaultRootComponent(componentContext = DefaultComponentContext(...))

    // Start Compose
    application {
        // The rest of the code
    }
}
```

## Value and MutableValue state holders

[Value](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/value/Value.kt) - is a multiplatform way to expose streams of states. It contains the `value` property, which always returns the current state. It also provides the ability to observe state changes via `subscribe`/`unsubscribe` methods. There is [MutableValue](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/value/MutableValueBuilder.kt) which is a mutable variant of `Value`. Since `Value` is a class (not an interface) with a generic type parameter, it can be used to expose state streams to ObjC/Swift.

Using `Value` is not mandatory, you can use any other state holders, e.g. [StateFlow](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/-state-flow/), [State](https://developer.android.com/jetpack/compose/state), [Observable](https://github.com/badoo/Reaktive), [LiveData](https://developer.android.com/topic/libraries/architecture/livedata), etc.

If you are using Jetpack/JetBrains Compose, `Value` can be observed in Composable functions using one of the Compose [extension modules](../extensions/compose.md).

!!!warning
    Even though both `Value` and `MutableValue` are thread-safe, it's recommended to subscribe and update it only on the main thread.

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
        _state.update { it.copy(count = it.count + 1) }
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

    @StateValue
    private var state: CounterState

    init(_ counter: Counter) {
        self.counter = counter
        _state = StateValue(counter.state)
    }

    var body: some View {
        VStack(spacing: 8) {
            Text(state.value.text)
            Button(action: counter.increment, label: { Text("Increment") })
        }
    }
}
```

#### What is StateValue

[StateValue](https://github.com/arkivanov/Decompose/blob/master/sample/app-ios/app-ios/DecomposeHelpers/StateValue.swift) is a property wrapper for `Value` that makes it observable in SwiftUI. Unfortunately it [does not look possible](https://github.com/arkivanov/Decompose/issues/206) to publish utils for SwiftUI as a library or framework, so it has to be copied in your project.

#### More Swift utilities

You can find more useful utilities for SwiftUI in the [DecomposeHelpers/](https://github.com/arkivanov/Decompose/blob/master/sample/app-ios/app-ios/DecomposeHelpers) folder:

* [StackView](https://github.com/arkivanov/Decompose/blob/master/sample/app-ios/app-ios/DecomposeHelpers/StackView.swift) - an adapter for SwiftUI's `NavigationStack` with fallback to `UINavigationView` that works with Decompose's `ChildStack`. See [CountersView.swift](https://github.com/arkivanov/Decompose/blob/master/sample/app-ios/app-ios/CountersView.swift).
* [MutableValue](https://github.com/arkivanov/Decompose/blob/master/sample/app-ios/app-ios/DecomposeHelpers/MutableValue.swift) - helps to stub Decompose's `Value`/`MutableValue` for Preview Components. See `PreviewMultiPaneComponent` in [MultiPaneView.swift](https://github.com/arkivanov/Decompose/blob/master/sample/app-ios/app-ios/MultiPaneView.swift).
* [SimpleChildStack](https://github.com/arkivanov/Decompose/blob/master/sample/app-ios/app-ios/DecomposeHelpers/SimpleChildStack.swift) - helps to stub Decompose's `ChildStack` for Preview Components. See `PreviewCountersComponent` in [CountersView.swift](https://github.com/arkivanov/Decompose/blob/master/sample/app-ios/app-ios/CountersView.swift).
