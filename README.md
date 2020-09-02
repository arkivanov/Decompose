[![Version](https://jitpack.io/v/arkivanov/decompose.svg)](https://jitpack.io/#arkivanov/decompose)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0)

## Decompose

Lifecycle-aware components for Jetpack Compose with routing functionality. This project is inspired by [Badoos RIBs](https://github.com/badoo/RIBs) fork of the [Uber RIBs](https://github.com/uber/RIBs) framework.

### Component

Each `Component` is represented by the [Component](https://github.com/arkivanov/Decompose/blob/master/decompose/src/main/java/com/arkivanov/decompose/Component.kt) interface (actually, should I find a better name?).

### ComponentContext

Each `Component` has an associated [ComponentContext](https://github.com/arkivanov/Decompose/blob/master/decompose/src/main/java/com/arkivanov/decompose/ComponentContext.kt) which implements the following interfaces:
- [RouterFactory](https://github.com/arkivanov/Decompose/blob/master/decompose/src/main/java/com/arkivanov/decompose/RouterFactory.kt), so you can create nested `Routers` in your `Componenets`
- [SavedStateKeeperOwner](https://github.com/arkivanov/Decompose/blob/master/decompose/src/main/java/com/arkivanov/decompose/SavedStateKeeperOwner.kt), so you can preserve any state during configuration changes and/or process death
- AndroidX [LifecycleOwner](https://developer.android.com/reference/kotlin/androidx/lifecycle/LifecycleOwner), so each `Component` has its own lifecycle
- AndroidX [OnBackPressedDispatcherOwner](https://developer.android.com/reference/androidx/activity/OnBackPressedDispatcher), so each `Component` can handle back button events
- AndroidX [ViewModelStoreOwner](https://developer.android.com/reference/androidx/lifecycle/ViewModelStoreOwner), so can use AndroidX `ViewModels` in your `Components` (e.g. to retain data over configuration changes)

### The Router

A key unit is the [Router](https://github.com/arkivanov/Decompose/blob/master/decompose/src/main/java/com/arkivanov/decompose/Router.kt).
It is responsible for managing `Components`, just like `FragmentManager`.

The `Router` supports back stack and so each `Component` has its own `Lifecycle`. Each time a new `Component` is pushed, the currently active `Component` is stopped. When a `Component` is popped from the back stack, the previous `Component` is resumed. This allows business logic to run while the component is in the back stack.

Each `Component` is created based on an associated `Configuration`. `Configurations` can be persisted via Android's `saved state`, thus allowing back stack restoration after configurations change or process death. When the back stack is restored, only currently active `Components` are recreated. All others in the back stack remain destroyed, and recreated on demand when navigating back.

`Routers` can be nested, and each `Component` can have more than one `Router`.

### Sample apps

There are two sample apps.

#### Sample counter app

This sample can be found [here](https://github.com/arkivanov/Decompose/tree/master/sample/counter/app).
There are three components: 
- [Counter](https://github.com/arkivanov/Decompose/blob/master/sample/counter/app/src/main/java/com/arkivanov/counter/app/Counter.kt) - this `Component` just increments the counter every 500 ms. It starts counting once created and stops when destroyed. So `Counter` continues counting while in the back stack, unless recreated. It uses the AndroidX `ViewModel`, so counting continues after configuration changes.
- [CounterInnerContainer](https://github.com/arkivanov/Decompose/blob/master/sample/counter/app/src/main/java/com/arkivanov/counter/app/CounterInnerContainer.kt) - this `Component` contains the `Counter` and two `Routers` on the left and on the right side. Each `Router` displays its stack of `Counters` and two buttons for navigation. "Next" button pushes another `Counter` to the corresponding `Router`, "Prev" button pops the active `Counter` for the `Router`.
- [CounterRootComponent](https://github.com/arkivanov/Decompose/blob/master/sample/counter/app/src/main/java/com/arkivanov/counter/app/CounterRootContainer.kt) - this `Component` also contains the `Counter`, the `Router` of `CounterInnerContainer` and a button pushing another `CounterInnerContainer` to the stack. System back button is used for backward navigation.

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleCounterDemo.gif" width="196">

##### Sample Counter Component structure 

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleCounterStructure.png" width="384">

#### Sample todo app

This sample can be found [here](https://github.com/arkivanov/Decompose/tree/master/sample/todo).
There are multiple `Components`, each in a separate module:
- [list](https://github.com/arkivanov/Decompose/tree/master/sample/todo/list) - the top part of the `Main` screen, displays a list of todo items. Tap on an item opens the `Editor` screen.
- [add](https://github.com/arkivanov/Decompose/tree/master/sample/todo/add) - the bottom part of the `Main` screen, displays input field and a button. Tap on the button adds a new todo item to the list.
- [main](https://github.com/arkivanov/Decompose/tree/master/sample/todo/add) - aggregates both `list` and `add` `Components`, represents the `Main` screen.
- [edit](https://github.com/arkivanov/Decompose/tree/master/sample/todo/edit) - provides the ability to edit a selected todo item.
- [root](https://github.com/arkivanov/Decompose/tree/master/sample/todo/root) - aggregates both `main` and `edit` components and uses `Router` to switch between them.

All data is persisted using SQLDelight database. The sample intensively uses [MVIKotlin](https://github.com/arkivanov/MVIKotlin) and [Reaktive](https://github.com/badoo/Reaktive) libraries, just for fun.

##### Sample Todo Component structure 

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleTodoStructure.png" width="512">

