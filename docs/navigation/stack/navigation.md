# Navigation with Child Stack

## The StackNavigator

All navigation in `Child Stack` is performed using the [`StackNavigator`](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/stack/StackNavigator.kt) interface, which is extended by the `StackNavigation` interface.

`StackNavigator` contains the `navigate` method with the following arguments:

- `transformer` - converts the current stack of configurations into a new one. The stack is represented as `List`, where the last element is the top of the stack, and the first element is the bottom of the stack.
- `onComplete` - called when navigation is finished.

There is also `navigate` extension function without the `onComplete` callback, for convenience.

!!!warning
    The configuration stack returned by the `transformer` function must not be empty.

```kotlin title="Creating the navigation"
val navigation = StackNavigation<Configuration>()
```

### The navigation process

During the navigation process, the `Child Stack` compares the new stack of configurations with the previous one. The `Child Stack` ensures that all removed components are destroyed, and that there is only one component resumed at a time - the top one. All components in the back stack are always either stopped or destroyed.

The `Child Stack` usually performs the navigation synchronously, which means that by the time the `navigate` method returns, the navigation is finished and all component lifecycles are moved into required states. However, the navigation is performed asynchronously in case of recursive invocations - e.g. `pop` is called from `onResume` lifecycle callback of a component being pushed. All recursive invocations are queued and performed one by one once the current navigation is finished.

## StackNavigator extension functions

There are `StackNavigator` [extension functions](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/stack/StackNavigatorExt.kt) to simplify the navigation. Some of which were already used in the [Child Stack overview example](overview#routing-example).

The preceding examples will utilize the following `sealed class` & `navigation` for showcasing the usage of the `StackNavigator` extensions.

```kotlin
sealed class Configuration {
    object A : Configuration()
    object B : Configuration()
    object C : Configuration()
    object D : Configuration()
}

val navigation = StackNavigation<Configuration>()
```

### Push

Pushes the provided `Configuration` at the top of the stack.

```kotlin
navigation.push(Configuration.B)
navigation.push(Configuration.C)
```

![](../media/RouterPush.png)

### pop

Pops the latest configuration at the top of the stack.

```kotlin
navigation.pop()
```

Or

```kotlin
navigation.pop { isSuccess ->
    // Called when the navigation is finished.
    // isSuccess - `true` if the stack size was greater than 1 and a component was popped, `false` otherwise.
}
```

![](../media/RouterPop.png)

### popWhile

Drops the configurations at the top of the stack while the provided predicate returns true.

```kotlin
navigation.popWhile { topOfStack: Configuration -> topOfStack !is B }
```

![](../media/RouterPopWhile.png)

### replaceCurrent

Replaces the current configuration at the top of the stack with the provided `Configuration`.

```kotlin
navigation.replaceCurrent(Configuration.D)
```

![](../media/RouterReplaceCurrent.png)

### bringToFront

Removes all components with configurations of the provided `Configuration`'s class, and adds the provided `Configuration` to the top of the stack. This is primarily helpful when implementing a Decompose app with [bottom navigation](https://github.com/arkivanov/Decompose/discussions/178)

!!! note
    The operation is performed as one transaction. If there is already a component with the same configuration, it will not be recreated.

```kotlin
navigation.bringToFront(Configuration.B)
```

![](../media/RouterBringToFront.png)
