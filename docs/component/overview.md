
# Component Overview

## Component

Every component represents a piece of logic with lifecycle and optional pluggable UI. 

### Simplest component example

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

Jetpack/JetBrains Compose UI example:

```kotlin
@Composable
fun Counter.render() {
    state.observe { state ->
        Column(horizontalGravity = Alignment.CenterHorizontally) {
            Text(text = state.count.toString())

            Button(onClick = ::increment) {
                Text("Increment")
            }
        }
    }
}
```

SwiftUI example:

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

If you are using only Jetpack/JetBrains Compose UI, then most likely you can use its `State` and `MutableState` directly, without intermediate `Value`/`MutableValue` from Decompose.

### ComponentContext

Each component has an associated [ComponentContext](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/ComponentContext.kt) which implements the following interfaces:
- [RouterFactory](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/RouterFactory.kt), so you can create nested `Routers` in your `Componenets`
- [StateKeeperOwner](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/statekeeper/StateKeeperOwner.kt), so you can preserve any state during configuration changes and/or process death
- [InstanceKeeperOwner](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/instancekeeper/InstanceKeeperOwner.kt), so you can retain instances in your components (like with AndroidX ViewModels)
- [LifecycleOwner](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/lifecycle/LifecycleOwner.kt), so each component has its own lifecycle
- [BackPressedDispatcherOwner](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/backpressed/BackPressedDispatcherOwner.kt), so each component can handle back button events

So if a component requires any of the above features, just pass the `ComponentContext` via the component's constructor. When instantiating a root component we have to create ComponentContext manually. There are various helper functions and default implementations to simplify this process. Child contexts are provided by the Router for every child component.