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

### Sample app

The sample app is a simple todo list. An example of using the `Router` can be found in the [TodoRootComponent](https://github.com/arkivanov/Decompose/blob/master/sample/root/src/main/java/com/arkivanov/todo/root/TodoRootComponent.kt).

#### Sample app Component structure

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/TodoApp.png" width="512">
