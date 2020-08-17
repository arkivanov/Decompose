## Compose Components

Experiments with Jetpack Compose componentization.

### ComposableComponent

Each `Component` is represented by the [ComposableComponent](https://github.com/arkivanov/ComposeComponents/blob/master/router/src/main/java/com/arkivanov/todo/router/ComposableComponent.kt) interface (actually, should I find a better name?).

### The Router

A key unit is the [Router](https://github.com/arkivanov/ComposeComponents/blob/master/router/src/main/java/com/arkivanov/todo/router/Router.kt).
It is responsible for managing `ComposableComponent`s, just like `FragmentManager`.
The `Router` supports back stack and so each `ComposableComponent` has its own life cycle. Each time a new `ComposableComponent` is pushed, the currently active `ComposableComponent` is stopped. When a `ComposableComponent` is popped from the back stack, the previous `ComposableComponent` is resumed.
Each `ComposableComponent` is created based on an associated `Configuration`. `Configurations` can be persisted via Android's `saved state`, thus allowing back stack restoration after configurations change or process death.

### Sample app

The sample app is a simple todo list.

#### Sample app Component structure

<img src="https://raw.githubusercontent.com/arkivanov/ComposeComponents/master/docs/media/TodoApp.png" width="512">
