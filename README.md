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

Each `Component` is represented by the [Component](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/Component.kt) interface (actually, should I find a better name?).

### ComponentContext

Each `Component` has an associated [ComponentContext](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/ComponentContext.kt) which implements the following interfaces:
- [RouterFactory](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/RouterFactory.kt), so you can create nested `Routers` in your `Componenets`
- [StateKeeperOwner](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/statekeeper/StateKeeperOwner.kt), so you can preserve any state during configuration changes and/or process death
- [InstanceKeeperOwner](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/instancekeeper/InstanceKeeperOwner.kt), so you can retain instances in your `Components` (like with AndroidX ViewModels)
- [LifecycleOwner](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/lifecycle/LifecycleOwner.kt), so each `Component` has its own lifecycle
- [BackPressedDispatcherOwner](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/backpressed/BackPressedDispatcherOwner.kt), so each `Component` can handle back button events

### The Router

A key unit is the [Router](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/Router.kt). It is responsible for managing `Components`, just like `FragmentManager`.

The `Router` supports back stack and so each `Component` has its own `Lifecycle`. Each time a new `Component` is pushed, the currently active `Component` is stopped. When a `Component` is popped from the back stack, the previous `Component` is resumed. This allows business logic to run while the component is in the back stack.

Each `Component` is created based on an associated `Configuration`. `Configurations` can be persisted via Android's `saved state`, thus allowing back stack restoration after configurations change or process death. When the back stack is restored, only currently active `Components` are recreated. All others in the back stack remain destroyed, and recreated on demand when navigating back.

`Routers` can be nested, and each `Component` can have more than one `Router`.

## Sample apps

There are two sample apps.

### Sample counter app

This sample demonstrates the following features:
- Nested `Components`
- Routing
- Reused `Components`
- State preservation (using `StateKeeper`)
- Retaining instances (using `InstanceKeeper`)
- Pluggable UI (Jetpack Compose, SwiftUI, JS React)

Content:
- [Shared module](https://github.com/arkivanov/Decompose/tree/master/sample/counter/shared) which includes the following `Components`:
    - [Counter](https://github.com/arkivanov/Decompose/blob/master/sample/counter/shared/src/commonMain/kotlin/com/arkivanov/sample/counter/shared/counter/Counter.kt) - this `Component` just increments the counter every 250 ms. It starts counting once created and stops when destroyed. So `Counter` continues counting while in the back stack, unless recreated. It uses the `InstanceKeeper`, so counting continues after configuration changes.
    - [CounterInnerContainer](https://github.com/arkivanov/Decompose/blob/master/sample/counter/shared/src/commonMain/kotlin/com/arkivanov/sample/counter/shared/inner/CounterInnerContainer.kt) - this `Component` contains the `Counter` and two `Routers` on the left and on the right side. Each `Router` displays its stack of `Counters` and two buttons for navigation. "Next" button pushes another `Counter` to the corresponding `Router`, "Prev" button pops the active `Counter` for the `Router`.
    - [CounterRootComponent](https://github.com/arkivanov/Decompose/blob/master/sample/counter/shared/src/commonMain/kotlin/com/arkivanov/sample/counter/shared/root/CounterRootContainer.kt) - this `Component` contains the `Counter`, the `Router` of `CounterInnerContainer` and a button pushing another `CounterInnerContainer` to the stack. System back button is used for backward navigation.
- [Android sample app](https://github.com/arkivanov/Decompose/tree/master/sample/counter/app-android)
- [iOS sample app](https://github.com/arkivanov/Decompose/tree/master/sample/counter/ios-app)
- [JavaScript sample app](https://github.com/arkivanov/Decompose/tree/master/sample/counter/app-js)

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleCounterDemo.gif" width="196"> <img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleCounterIos.png" width="196"> <img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleCounterJs.png" width="196">

#### Sample Counter Component structure 

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleCounterStructure.png" width="384">

### Sample todo app

This sample can be found [here](https://github.com/arkivanov/Decompose/tree/master/sample/todo).

It demonstrates the following features:
- Nested `Components`
- Routing
- Using `Lifecycle`
- Multi-module structure (one `Component` per module)
- Inter-Component communication (via [Reaktive](https://github.com/badoo/Reaktive), just an example)
- MVI using [MVIKotlin](https://github.com/arkivanov/MVIKotlin)
- Data persistance using [SQLDelight](https://github.com/cashapp/sqldelight)
- Pluggable UI (Jetpack Compose, SwiftUI, JS React)

There are multiple `Components`, each in a separate module:
- [list](https://github.com/arkivanov/Decompose/tree/master/sample/todo/list) - the top part of the `Main` screen, displays a list of todo items. Tap on an item opens the `Editor` screen.
- [add](https://github.com/arkivanov/Decompose/tree/master/sample/todo/add) - the bottom part of the `Main` screen, displays input field and a button. Tap on the button adds a new todo item to the list.
- [main](https://github.com/arkivanov/Decompose/tree/master/sample/todo/main) - aggregates both `list` and `add` `Components`, represents the `Main` screen.
- [edit](https://github.com/arkivanov/Decompose/tree/master/sample/todo/edit) - provides the ability to edit a selected todo item.
- [root](https://github.com/arkivanov/Decompose/tree/master/sample/todo/root) - aggregates both `main` and `edit` components and uses `Router` to switch between them.

#### Sample Todo Component structure 

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleTodoStructure.png" width="512">

## Author

Twitter: [@arkann1985](https://twitter.com/arkann1985)
