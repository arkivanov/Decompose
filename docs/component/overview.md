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
* `BackPressedDispatcherOwner`, provided by Essenty library, so each component can handle back button events

So if a component requires any of the above features, just pass the `ComponentContext` via the component's constructor. You can use the delegation pattern to add the `ComponentContext` to `this` scope:

```kotlin
class Counter(
    componentContext: ComponentContext
) : ComponentContext by componentContext {

    // The rest of the code
}
```

When instantiating a root component we have to create `ComponentContext` manually. There is [DefaultComponentContext](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/DefaultComponentContext.kt) which is the default implementation class of the `ComponentContext`. There are also handy helper functions provided by Jetpack/JetBrains Compose extension modules.

## Child components

Decompose provides ability to organize components into trees, so each parent component is only aware of its immediate children. Hence the name of the library - "Decompose". You decompose your project by multiple independent reusable components. When adding a sub-tree into another place (reusing), you only need to satisfy its top component's dependencies.

There are two common ways to add a child component:

- Using the `Router` - prefer this option when a navigation between components is required. Please head to the [Router documentation page](https://arkivanov.github.io/Decompose/router/overview/) for more information.
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

> ⚠️ Never pass parent's `ComponentContext` to children, always use either the `Router` or the `childContext(...)` function.

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
