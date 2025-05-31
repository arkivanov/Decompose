# Navigation with Child Items

## The ItemsNavigator

All navigation in `Child Items` is performed using the [
`ItemsNavigator`](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/items/ItemsNavigator.kt)
interface, which is extended by the `ItemsNavigation` interface.

`ItemsNavigator` contains the `navigate` method with the following arguments:

- `transformer` - converts the current `Items` state to a new one.
- `onComplete` - called when navigation is finished.

There is also `navigate` extension function without the `onComplete` callback, for convenience.

```kotlin title="Creating the navigation"
// In your component class
val navigation = ItemsNavigation<Configuration>()
```

### The navigation process

During the navigation process, the `Child Items` navigation model compares the new state with the previous one. It
ensures that all deactivated or removed components are destroyed, and updates lifecycles of the active components to
match the new state.

The `Child Items` navigation model usually performs the navigation synchronously, which means that by the time the
`navigate` method returns, the navigation is finished and all component lifecycles are moved into required states.
However, the navigation is performed asynchronously in case of recursive invocations - e.g. `setActiveItems` is called
from `onCreate` lifecycle callback of a component being activated. All recursive invocations are queued and performed
one by one once the current navigation is finished.

## ItemsNavigator extension functions

There are
`ItemsNavigator` [extension functions](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/items/ItemsNavigatorExt.kt)
to simplify the navigation. Some of which were already used in the [Child Items Overview example](overview.md#example).

### setItems(transformer)

Replaces the items with the provided list using a transformer function.

!!! note "Illustration"

    ```title="Before"
    [Item1:DESTROYED, Item2:STARTED, Item3:RESUMED]
    ```

    ```kotlin
    navigation.setItems { items -> items + Item4 - Item1 }
    ```

    ```title="After"
    [Item2:STARTED, Item3:RESUMED, Item4:DESTROYED]
    ```

### setActiveItems(transformer)

Sets the currently instantiated (active) items with the provided lifecycle states using a transformer function.

!!! note "Illustration"

    ```title="Before"
    [Item1:DESTROYED, Item2:STARTED, Item3:RESUMED]
    ```

    ```kotlin
    navigation.setActiveItems { activeItems ->
        activeItems + (Item1 to ActiveLifecycleState.RESUMED) - Item3
    }
    ```

    ```title="After"
    [Item1:RESUMED, Item2:STARTED, Item3:DESTROYED]
    ```
