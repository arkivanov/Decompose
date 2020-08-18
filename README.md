[![Version](https://jitpack.io/v/arkivanov/decompose.svg)](https://jitpack.io/#arkivanov/decompose)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0)

## Decompose

Lifecycle-aware components for Jetpack Compose with routing functionality.

### Component

Each `Component` is represented by the [Component](https://github.com/arkivanov/Decompose/blob/master/decompose/src/main/java/com/arkivanov/decompose/Component.kt) interface (actually, should I find a better name?).

### The Router

A key unit is the [Router](https://github.com/arkivanov/Decompose/blob/master/decompose/src/main/java/com/arkivanov/decompose/Router.kt).
It is responsible for managing `Component`s, just like `FragmentManager`.

The `Router` supports back stack and so each `Component` has its own `Lifecycle`. Each time a new `Component` is pushed, the currently active `Component` is stopped. When a `Component` is popped from the back stack, the previous `Component` is resumed. This allows business logic to run while the component is in the back stack.

Each `Component` is created based on an associated `Configuration`. `Configurations` can be persisted via Android's `saved state`, thus allowing back stack restoration after configurations change or process death.

### Sample apps

There are two sample apps.

#### Sample counter app

This sample can be found [here](https://github.com/arkivanov/Decompose/tree/master/sample/counter/app).
There are just two components: 
- [CounterComponent](https://github.com/arkivanov/Decompose/blob/master/sample/counter/app/src/main/java/com/arkivanov/counter/app/CounterComponent.kt) - this `Component` just increments the counter every 100 ms. It starts counting once created and stops when destroyed. It also displays a `Button`, its text and click listener are injected via constructor.
- [RootComponent](https://github.com/arkivanov/Decompose/blob/master/sample/counter/app/src/main/java/com/arkivanov/counter/app/RootComponent.kt) - this `Component` aggregates two instances of the `CounterComponent`. The first instance is displayed at the beggining. When the `Button` is clicked the second instance is pushed. When the `Button` or a back button is tapped in the second instance, it's popped and the first instance is displayed again. You can observe that it was counting while in the back stack.

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleCounterDemo.gif" width="196">

#### Sample todo app

This sample can be found [here](https://github.com/arkivanov/Decompose/tree/master/sample/todo).
There are multiple `Components`, each in a separate module:
- [list](https://github.com/arkivanov/Decompose/tree/master/sample/todo/list) - the top part of the `Main` screen, displays a list of todo items. Tap on an item opens the `Editor` screen.
- [add](https://github.com/arkivanov/Decompose/tree/master/sample/todo/add) - the bottom part of the `Main` screen, displays input field and a button. Tap on the button adds a new todo item to the list.
- [main](https://github.com/arkivanov/Decompose/tree/master/sample/todo/add) - aggregates both `list` and `add` `Components`, represents the `Main` screen.
- [edit](https://github.com/arkivanov/Decompose/tree/master/sample/todo/edit) - provides the ability to edit a selected todo item.
- [root](https://github.com/arkivanov/Decompose/tree/master/sample/todo/root) - aggregates both `main` and `edit` components and uses `Router` to switch between them.

All data is persisted using SQLDelight database. The sample intensively uses [MVIKotlin](https://github.com/arkivanov/MVIKotlin) and [Reaktive](https://github.com/badoo/Reaktive) libraries, just for fun.

##### Todo Component structure 

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/TodoApp.png" width="512">
