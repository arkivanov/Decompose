# Navigation with Child Stack

## The PanelsNavigator

All navigation in `Child Panels` is performed using the [`PanelsNavigator`](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/panels/PanelsNavigator.kt) interface, which is extended by the `PanelsNavigation` interface.

`PanelsNavigator` contains the `navigate` method with the following arguments:

- `transformer` - converts the current `Panels` state to a new one.
- `onComplete` - called when navigation is finished.

There is also `navigate` extension function without the `onComplete` callback, for convenience.

```kotlin title="Creating the navigation"
// In your component class
val navigation = PanelsNavigation<Configuration>()
```

### The navigation process

During the navigation process, the `Child Panels` navigation model compares the new state with the previous one. It ensures that all removed components are destroyed, and all created components have correct lifecycle states

The `Child Panels` navigation model usually performs the navigation synchronously, which means that by the time the `navigate` method returns, the navigation is finished and all component lifecycles are moved into required states. However, the navigation is performed asynchronously in case of recursive invocations - e.g. `navigate` is called from `onResume` lifecycle callback of a component being pushed. All recursive invocations are queued and performed one by one once the current navigation is finished.

## PanelsNavigator extension functions

There are `PanelsNavigator` [extension functions](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/panels/PanelsNavigatorExt.kt) to simplify the navigation. Some of which were already used in the [Child Panels Overview example](overview.md#example).

### navigate(main, details, extra)

Sets the provided Main, Details and Extra configurations.

!!! note "Illustration 1"

    ```title="Before"
    {Main1, Details1, Extra1, SINGLE}
    ```
    
    ```kotlin
    navigation.navigate(main = Main2, details = Details2, extra = Extra2)
    ```
    
    ```title="After"
    {Main2, Details2, Extra2, SINGLE}
    ```

!!! note "Illustration 2"

    ```title="Before"
    {Main1, Details1, Extra1, SINGLE}
    ```
    
    ```kotlin
    navigation.navigate(main = Main2, details = null, extra = null)
    ```
    
    ```title="After"
    {Main2, null, null, SINGLE}
    ```

### navigate(details, extra)

Sets the provided Details and Extra configurations.

!!! note "Illustration 1"

    ```title="Before"
    {Main1, Details1, Extra1, SINGLE}
    ```
    
    ```kotlin
    navigation.navigate(details = Details2, extra = Extra2)
    ```
    
    ```title="After"
    {Main1, Details2, Extra2, SINGLE}
    ```

!!! note "Illustration 2"

    ```title="Before"
    {Main1, Details1, Extra1, SINGLE}
    ```
    
    ```kotlin
    navigation.navigate(details = null, extra = null)
    ```
    
    ```title="After"
    {Main1, null, null, SINGLE}
    ```

### navigate(extra)

Sets the provided Extra configuration.

!!! note "Illustration 2"

    ```title="Before"
    {Main1, Details1, Extra1, SINGLE}
    ```
    
    ```kotlin
    navigation.navigate(extra = Extra2)
    ```
    
    ```title="After"
    {Main1, Details1, Extra2, SINGLE}
    ```

!!! note "Illustration 2"

    ```title="Before"
    {Main1, Details1, Extra1, SINGLE}
    ```
    
    ```kotlin
    navigation.navigate(extra = null)
    ```
    
    ```title="After"
    {Main1, Details1, null, SINGLE}
    ```

### activateMain(main)

Activates the Main component represented by the specified `main` configuration, and dismisses (destroys) any currently active Main component.

!!! note "Illustration"

    ```title="Before"
    {Main1, Details1, Extra1, SINGLE}
    ```
    
    ```kotlin
    navigation.activateMain(main = Main2)
    ```
    
    ```title="After"
    {Main2, Details1, Extra1, SINGLE}
    ```

### activateDetails(details)

Activates the Details component represented by the specified `details` configuration, and dismisses (destroys) any currently active Details component.

!!! note "Illustration 1"

    ```title="Before"
    {Main1, null, Extra1, SINGLE}
    ```
    
    ```kotlin
    navigation.activateDetails(details = Details1)
    ```
    
    ```title="After"
    {Main1, Details1, Extra1, SINGLE}
    ```

!!! note "Illustration 2"

    ```title="Before"
    {Main1, Details1, Extra1, SINGLE}
    ```
    
    ```kotlin
    navigation.activateDetails(details = Details2)
    ```
    
    ```title="After"
    {Main1, Details2, Extra1, SINGLE}
    ```

### dismissDetails()

Dismisses (destroys) the currently active Details component, if any.

!!! note "Illustration 1"

    ```title="Before"
    {Main1, Details1, Extra1, SINGLE}
    ```
    
    ```kotlin
    navigation.dismissDetails()
    ```
    
    ```title="After"
    {Main1, null, Extra1, SINGLE}
    ```

!!! note "Illustration 2"

    ```title="Before"
    {Main1, null, Extra1, SINGLE}
    ```
    
    ```kotlin
    navigation.dismissDetails()
    ```
    
    ```title="After"
    {Main1, null, Extra1, SINGLE}
    ```

### activateExtra(extra)

Activates the Extra component represented by the specified `extra` configuration, and dismisses (destroys) any currently active Extra component.

!!! note "Illustration 1"

    ```title="Before"
    {Main1, Details1, null, SINGLE}
    ```
    
    ```kotlin
    navigation.activateExtra(extra = Extra1)
    ```
    
    ```title="After"
    {Main1, Details1, Extra1, SINGLE}
    ```

!!! note "Illustration 2"

    ```title="Before"
    {Main1, Details1, Extra1, SINGLE}
    ```
    
    ```kotlin
    navigation.activateExtra(extra = Extra2)
    ```

    ```title="After"
    {Main1, Details1, Extra2, SINGLE}
    ```

### dismissExtra()

Dismisses (destroys) the currently active Extra component, if any.

!!! note "Illustration 1"

    ```title="Before"
    {Main1, Details1, Extra1, SINGLE}
    ```
    
    ```kotlin
    navigation.dismissExtra()
    ```
    
    ```title="After"
    {Main1, Details1, null, SINGLE}
    ```

!!! note "Illustration 2"

    ```title="Before"
    {Main1, Details1, null, SINGLE}
    ```
    
    ```kotlin
    navigation.dismissExtra()
    ```

    ```title="After"
    {Main1, Details1, null, SINGLE}
    ```

### pop()

Dismisses the Extra component (if it exists) or the Details component (if it exists).

!!! note "Illustration 1"

    ```title="Before"
    {Main1, Details1, Extra1, SINGLE}
    ```
    
    ```kotlin
    navigation.pop()
    ```
    
    ```title="After"
    {Main1, Details1, null, SINGLE}
    ```

!!! note "Illustration 2"

    ```title="Before"
    {Main1, Details1, null, SINGLE}
    ```
    
    ```kotlin
    navigation.pop()
    ```
    
    ```title="After"
    {Main1, null, null, SINGLE}
    ```

!!! note "Illustration 3"

    ```title="Before"
    {Main1, null, null, SINGLE}
    ```
    
    ```kotlin
    navigation.pop()
    ```
    
    ```title="After"
    {Main1, null, null, SINGLE}
    ```

### setMode(mode)

Sets `Panels.mode` to the specified `mode` value and updates component lifecycles accordingly.

!!! note "Illustration"

    ```title="Before"
    {Main1, Details1, Extra1, SINGLE}
    ```
    
    ```kotlin
    navigation.setMode(ChildPanelsMode.DUAL)
    ```
    
    ```title="After"
    {Main1, Details1, Extra1, DUAL}
    ```
