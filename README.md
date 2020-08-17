## Decompose

Lifecycle-aware components for Jetpack Compose with routing functionality.

### Component

Each `Component` is represented by the [Component](https://github.com/arkivanov/ComposeComponents/blob/master/router/src/main/java/com/arkivanov/todo/router/Component.kt) interface (actually, should I find a better name?).

### The Router

A key unit is the [Router](https://github.com/arkivanov/ComposeComponents/blob/master/router/src/main/java/com/arkivanov/todo/router/Router.kt).
It is responsible for managing `Component`s, just like `FragmentManager`.
The `Router` supports back stack and so each `Component` has its own `Lifecycle`. Each time a new `Component` is pushed, the currently active `Component` is stopped. When a `Component` is popped from the back stack, the previous `Component` is resumed.
Each `Component` is created based on an associated `Configuration`. `Configurations` can be persisted via Android's `saved state`, thus allowing back stack restoration after configurations change or process death.

### Sample app

The sample app is a simple todo list.

#### Sample app Component structure

<img src="https://raw.githubusercontent.com/arkivanov/ComposeComponents/master/docs/media/TodoApp.png" width="512">
