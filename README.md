[![Download](https://api.bintray.com/packages/arkivanov/maven/decompose/images/download.svg)](https://bintray.com/arkivanov/maven/decompose/_latestVersion)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0)
[![Twitter URL](https://img.shields.io/badge/Twitter-@arkann1985-blue.svg?style=social&logo=twitter)](https://twitter.com/arkann1985)

## Decompose

Kotlin Multiplatform lifecycle-aware business logic components (aka BLoCs) with routing functionality and pluggable UI (Jetpack Compose, SwiftUI, JS React, etc.) This project is inspired by [Badoos RIBs](https://github.com/badoo/RIBs) fork of the [Uber RIBs](https://github.com/uber/RIBs) framework.

Supported targets:
- Android
- iosX64, iosArm64
- JavaScript

### Setup

Add Bintray repository to your root build.gradle file:

```groovy
repositories {
    maven {
        url  "https://dl.bintray.com/arkivanov/maven"
    }
}
```

Add Decompose dependency to your build.gradle:

```groovy
implementation "com.arkivanov.decompose:decompose:<version>"
```

## Overview

### Component

Every component represents a piece of logic with lifecycle and optional pluggable UI. 

#### Simplest component example

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

Jetpack Compose UI example:

```kotlin
@Composable
operator fun Counter.invoke() {
    state { state ->
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

### ComponentContext

Each component has an associated [ComponentContext](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/ComponentContext.kt) which implements the following interfaces:
- [RouterFactory](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/RouterFactory.kt), so you can create nested `Routers` in your `Componenets`
- [StateKeeperOwner](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/statekeeper/StateKeeperOwner.kt), so you can preserve any state during configuration changes and/or process death
- [InstanceKeeperOwner](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/instancekeeper/InstanceKeeperOwner.kt), so you can retain instances in your components (like with AndroidX ViewModels)
- [LifecycleOwner](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/lifecycle/LifecycleOwner.kt), so each component has its own lifecycle
- [BackPressedDispatcherOwner](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/backpressed/BackPressedDispatcherOwner.kt), so each component can handle back button events

So if a component requires any of the above features, just pass the `ComponentContext` via the component's constructor. When instantiating a root component we have to create ComponentContext manually. There are various helper functions and default implementations to simplify this process. Child contexts are provided by the Router for every child component.

### The Router

A key unit is the [Router](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/Router.kt). It is responsible for managing components, just like `FragmentManager`.

The `Router` supports back stack and so each component has its own `Lifecycle`. Each time a new component is pushed, the currently active component is stopped. When a component is popped from the back stack, the previous component is resumed. This allows business logic to run while the component is in the back stack.

Each component is created based on an associated `Configuration`. `Configurations` can be persisted via Android's `saved state`, thus allowing back stack restoration after configurations change or process death. When the back stack is restored, only currently active components are recreated. All others in the back stack remain destroyed, and recreated on demand when navigating back. Decompose defines both `Parcelable` interface and `@Parcelize` annotation in common code using expect/actual, which works well with Kotlin Multiplatform. You can read more about it [here](https://kotlinlang.org/docs/reference/compiler-plugins.html#parcelable-implementations-generator).

The `Router` has a state consisting of a currently active component and the back stack, so it can be rendered as normal.

`Routers` can be nested, and each component can have more than one `Router`.

#### Routing example

Here is a very basic example of navigation between two children components:

```kotlin
class Child1(componentContext: ComponentContext) : ComponentContext by componentContext {
    // omitted code
}

class Child2(componentContext: ComponentContext, data: String) : ComponentContext by componentContext {
    // omitted code
}

class Parent(componentContext: ComponentContext) : ComponentContext by componentContext {
    private val router =
        router<Config, Any>(
            initialConfiguration = Config.Child1,
            componentFactory = ::createChild
        )
    
    val children: Value<RouterState<Config, Any>> get() = router.state

    private fun createChild(config: Config, componentContext: ComponentContext): Any =
        when (config) {
            is Config.Child1 -> Child1(componentContext)
            is Config.Child2 -> Child2(componentContext, data = config.data)
        }
        
    fun showChild2(data: String) {
        router.push(Config.Child2(data = data))
    }

    fun popChild() {
        router.pop()
    }

    sealed class Config : Parcelable {
        @Parcelize
        object Child1 : Config()

        @Parcelize
        class Child2(val data: String) : Config()
    }
}
```

### Saving state over configurations change or process death

Decompose provides the `StateKeeper` API for state preservation. Currently it relies on `Parcelable` interface. It can be used in multiplatform code but is only useful in Android.

Here is a quick example:

```kotlin
class Child1(componentContext: ComponentContext) : ComponentContext by componentContext {
    private var state = stateKeeper.consume<State>("SAVED_STATE") ?: State()

    init {
        stateKeeper.register("SAVED_STATE") { state }
    }

    @Parcelize
    private class State(val someValue: Int = 0) : Parcelable
}
```

### Retaining instances over configurations change

Decompose provides the `InstanceKeeper` API, similar to AndroidX ViewModels:

```kotlin
class Child1(componentContext: ComponentContext) : ComponentContext by componentContext {
    private val viewModel = instanceKeeper.getOrCreate(::ViewModel)

    private class ViewModel : InstanceKeeper.Instance {
        override fun onDestroy() {
            // Clean-up
        }
    }
}
```

## Sample apps

There are two sample apps: Counter and Todo List.

### Sample counter app

This sample demonstrates the following features:
- Nested components
- Routing
- Reused components
- State preservation (using `StateKeeper`)
- Retaining instances (using `InstanceKeeper`)
- Pluggable UI (Jetpack Compose, SwiftUI, JS React)

Content:
- [Shared module](https://github.com/arkivanov/Decompose/tree/master/sample/counter/shared) which includes the following components:
    - [Counter](https://github.com/arkivanov/Decompose/blob/master/sample/counter/shared/src/commonMain/kotlin/com/arkivanov/sample/counter/shared/counter/Counter.kt) - this component just increments the counter every 250 ms. It starts counting once created and stops when destroyed. So `Counter` continues counting while in the back stack, unless recreated. It uses the `InstanceKeeper`, so counting continues after configuration changes.
    - [CounterInnerContainer](https://github.com/arkivanov/Decompose/blob/master/sample/counter/shared/src/commonMain/kotlin/com/arkivanov/sample/counter/shared/inner/CounterInnerContainer.kt) - this component contains the `Counter` and two `Routers` on the left and on the right side. Each `Router` displays its stack of `Counters` and two buttons for navigation. "Next" button pushes another `Counter` to the corresponding `Router`, "Prev" button pops the active `Counter` for the `Router`.
    - [CounterRootComponent](https://github.com/arkivanov/Decompose/blob/master/sample/counter/shared/src/commonMain/kotlin/com/arkivanov/sample/counter/shared/root/CounterRootContainer.kt) - this component contains the `Counter`, the `Router` of `CounterInnerContainer` and a button pushing another `CounterInnerContainer` to the stack. System back button is used for backward navigation.
- [Android sample app](https://github.com/arkivanov/Decompose/tree/master/sample/counter/app-android)
- [iOS sample app](https://github.com/arkivanov/Decompose/tree/master/sample/counter/ios-app)
- [JavaScript sample app](https://github.com/arkivanov/Decompose/tree/master/sample/counter/app-js)

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleCounterDemo.gif" width="196"> <img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleCounterIos.png" width="196"> <img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleCounterJs.png" width="196">

#### Sample Counter Component structure 

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleCounterStructure.png" width="384">

### Sample todo app

This sample can be found [here](https://github.com/arkivanov/Decompose/tree/master/sample/todo).

It demonstrates the following features:
- Nested components
- Routing
- Using `Lifecycle`
- Multi-module structure (one component per module)
- Inter-Component communication (via [Reaktive](https://github.com/badoo/Reaktive), just an example)
- MVI using [MVIKotlin](https://github.com/arkivanov/MVIKotlin)
- Data persistance using [SQLDelight](https://github.com/cashapp/sqldelight)
- Pluggable UI (Jetpack Compose, SwiftUI, JS React)

There are multiple components, each in a separate module:
- [list](https://github.com/arkivanov/Decompose/tree/master/sample/todo/list) - the top part of the `Main` screen, displays a list of todo items. Tap on an item opens the `Editor` screen.
- [add](https://github.com/arkivanov/Decompose/tree/master/sample/todo/add) - the bottom part of the `Main` screen, displays input field and a button. Tap on the button adds a new todo item to the list.
- [main](https://github.com/arkivanov/Decompose/tree/master/sample/todo/main) - aggregates both `list` and `add` components, represents the `Main` screen.
- [edit](https://github.com/arkivanov/Decompose/tree/master/sample/todo/edit) - provides the ability to edit a selected todo item.
- [root](https://github.com/arkivanov/Decompose/tree/master/sample/todo/root) - aggregates both `main` and `edit` components and uses `Router` to switch between them.

#### Sample Todo Component structure 

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleTodoStructure.png" width="512">

## Author

Twitter: [@arkann1985](https://twitter.com/arkann1985)
