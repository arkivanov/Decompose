# Navigation with Child Overlay

## The OverlayNavigator

All navigation in `Child Overlay` is performed using the [`OverlayNavigator`](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/overlay/OverlayNavigator.kt) interface, which is extended by the `OverlayNavigation` interface. 

`OverlayNavigator` contains the `navigate` method with the following arguments:

- `transformer` - converts the current configuration (if any) into a new one or `null`.
- `onComplete` - called when navigation is finished.

There is also `navigate` extension function without the `onComplete` callback, for convenience.

```kotlin title="Creating the navigation"
val navigation = OverlayNavigation<DialogConfig>()
```

### The navigation process

During the navigation process, `Child Overlay` compares the new configuration with the previous one. If both are the same, then no navigation is performed. Otherwise, the currently active component is destroyed (if any), and a new one is activated (if the new configuration is not `null`).  

`Child Overlay` usually performs the navigation synchronously, which means that by the time the `navigate` method returns, the navigation is finished and all component lifecycles are moved into required states. However, the navigation is performed asynchronously in case of recursive invocations - e.g. `dismiss` is called from `onResume` lifecycle callback of a component being activated. All recursive invocations are queued and performed one by one once the current navigation is finished.

## OverlayNavigator extension functions

There are `OverlayNavigator` [extension functions](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/overlay/OverlayNavigatorExt.kt) to simplify the navigation.

### activate

Activates a component with the provided `Configuration` (if not `null`). Any currently active component is destroyed.

```kotlin
navigation.activate(DialogConfig(title = "Some title"))
```

### dismiss

Destroys the currently active component, if any.

```kotlin
navigation.dismiss()
```
