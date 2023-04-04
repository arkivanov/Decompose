# Navigation with Child Slot

## The SlotNavigator

All navigation in `Child Slot` is performed using the [`SlotNavigator`](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/slot/SlotNavigator.kt) interface, which is extended by the `SlotNavigation` interface. 

`SlotNavigator` contains the `navigate` method with the following arguments:

- `transformer` - converts the current configuration (if any) into a new one or `null`.
- `onComplete` - called when navigation is finished.

There is also `navigate` extension function without the `onComplete` callback, for convenience.

```kotlin title="Creating the navigation"
val navigation = SlotNavigation<DialogConfig>()
```

### The navigation process

During the navigation process, `Child Slot` compares the new configuration with the previous one. If both are the same, then no navigation is performed. Otherwise, the currently active component is destroyed (if any), and a new one is activated (if the new configuration is not `null`).  

`Child Slot` usually performs the navigation synchronously, which means that by the time the `navigate` method returns, the navigation is finished and all component lifecycles are moved into required states. However, the navigation is performed asynchronously in case of recursive invocations - e.g. `dismiss` is called from `onResume` lifecycle callback of a component being activated. All recursive invocations are queued and performed one by one once the current navigation is finished.

## SlotNavigator extension functions

There are `SlotNavigator` [extension functions](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/slot/SlotNavigatorExt.kt) to simplify the navigation.

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
