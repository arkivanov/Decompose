# Navigation with Child Stack

## The StackNavigator

All navigation in `Child Stack` is performed using the [`StackNavigator`](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/stack/StackNavigator.kt) interface, which is extended by the `StackNavigation` interface.

`StackNavigator` contains the `navigate` method with the following arguments:

- `transformer` - converts the current stack of configurations to a new one. The stack is represented as `List`, where the last element is the top of the stack, and the first element is the bottom of the stack.
- `onComplete` - called when navigation is finished.

There is also `navigate` extension function without the `onComplete` callback, for convenience.

!!!warning
    The configuration stack returned by the `transformer` function must not be empty.

```kotlin title="Creating the navigation"
// In your component class
val navigation = StackNavigation<Configuration>()
```

### The navigation process

During the navigation process, the `Child Stack` navigation model compares the new stack of configurations with the previous one. It ensures that all removed components are destroyed, and that there is only one component resumed at a time - the top one. All components in the back stack are always either stopped or destroyed.

The `Child Stack` navigation model usually performs the navigation synchronously, which means that by the time the `navigate` method returns, the navigation is finished and all component lifecycles are moved into required states. However, the navigation is performed asynchronously in case of recursive invocations - e.g. `pop` is called from `onResume` lifecycle callback of a component being pushed. All recursive invocations are queued and performed one by one once the current navigation is finished.

## StackNavigator extension functions

There are `StackNavigator` [extension functions](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/stack/StackNavigatorExt.kt) to simplify the navigation. Some of which were already used in the [Child Stack Overview example](overview.md#example).

### push(configuration)

Pushes the provided `Configuration` at the top of the stack. Decompose will throw an exception if the provided `Configuration` is already present in the stack. This usually happens when a component is pushed on user interaction (e.g. a button click). Consider using [pushNew](#pushnewconfiguration) instead.

!!! note "Illustration"

    ```title="Before"
    [A, B*]
    ```
    
    ```kotlin
    navigation.push(Configuration.C)
    ```
    
    ```title="After"
    [A, B, C*]
    ```

### pushNew(configuration)

Pushes the provided `Configuration` at the top of the stack. Does nothing if the provided `Configuration` is already on top of the stack. Decompose will throw an exception if the provided `Configuration` is already present in the back stack (not at the top of the stack).

This can be useful when pushing a component on button click, to avoid pushing the same component if the user clicks the same button quickly multiple times.

!!! note "Illustration 1"

    ```title="Before"
    [A, B*]
    ```
    
    ```kotlin
    navigation.pushNew(Configuration.C)
    ```
    
    ```title="After"
    [A, B, C*]
    ```

!!! note "Illustration 2"

    ```title="Before"
    [A, B, C*]
    ```
    
    ```kotlin
    navigation.pushNew(Configuration.C)
    ```
    
    ```title="After"
    [A, B, C*]
    ```

### pushToFront(configuration)

Pushes the provided configuration to the top of the stack, removing the configuration from the back stack, if any.

This API works similar to `bringToFront`, except it compares configurations by equality rather than by configuration class.

!!! note "Illustration 1"

    ```title="Before"
    [A(1), B(1)*]
    ```
    
    ```kotlin
    navigation.pushToFront(Configuration.A(2))
    ```
    
    ```title="After"
    [A(1), B(1), A(2)*]
    ```

!!! note "Illustration 2"

    ```title="Before"
    [A(1), B(1), A(2)]
    ```
    
    ```kotlin
    navigation.pushToFront(Configuration.A(1))
    ```
    
    ```title="After"
    [B(1), A(2), A(1)*]
    ```

!!! note "Illustration 3"

    ```title="Before"
    [A(1), B(1), A(2)]
    ```
    
    ```kotlin
    navigation.pushToFront(Configuration.A(2))
    ```
    
    ```title="After"
    [A(1), B(1), A(2)*]
    ```

### pop

Pops the latest configuration at the top of the stack.

!!! note "Illustration"

    ```title="Before"
    [A, B, C*]
    ```
    
    ```kotlin
    navigation.pop()
    
    // Or
    
    navigation.pop { isSuccess ->
        // Called when the navigation is finished.
        // isSuccess - `true` if the stack size was greater than 1 and a component was popped, `false` otherwise.
    }
    ```
    
    ```title="After"
    [A, B*]
    ```

### popWhile(predicate)

Pops configurations at the top of the stack while the provided predicate returns true.

!!! note "Illustration"

    ```title="Before"
    [A, B, C, D*]
    ```
    
    ```kotlin
    navigation.popWhile { topOfStack: Configuration -> topOfStack !is B }
    ```
    
    ```title="After"
    [A, B*]
    ```

### popTo(index)

Pops configurations at the top of the stack so that the provided index becomes active (the new top of the stack).

!!! note "Illustration"

    ```title="Before"
    [A, B, C, D*]
    ```
    
    ```kotlin
    navigation.popTo(index = 1)
    ```
    
    ```title="After"
    [A, B*]
    ```

### popToFirst

Pops configurations at the top of the stack so that the first configuration becomes active (the new top of the stack).

!!! note "Illustration"

    ```title="Before"
    [A, B, C, D*]
    ```
    
    ```kotlin
    navigation.popToFirst()
    ```
    
    ```title="After"
    [A*]
    ```

### replaceCurrent(configuration)

Replaces the current configuration at the top of the stack with the provided `Configuration`.

!!! note "Illustration"

    ```title="Before"
    [A, B, C*]
    ```
    
    ```kotlin
    navigation.replaceCurrent(Configuration.D)
    ```
    
    ```title="After"
    [A, B, D*]
    ```

### replaceAll(vararg configurations)

Replaces all configurations currently in the stack with the provided configurations. Components that remain in the stack are not recreated, components that are no longer in the stack are destroyed.

!!! note "Illustration"

    ```title="Before"
    [A, B, C*]
    ```
    
    ```kotlin
    navigation.replaceAll(Configuration.B, Configuration.C, Configuration.D)
    ```
    
    ```title="After"
    [B, C, D*]
    ```

### bringToFront(configuration)

Removes all components with configurations of the provided `Configuration`'s class, and adds the provided `Configuration` to the top of the stack. This is primarily helpful when implementing a Decompose app with Bottom Navigation. See the [related discussion](https://github.com/badoo/Decompose/discussions/178) in the *old repository*.

!!! note
    The operation is performed as one transaction. If there is already a component with the same configuration, it will not be recreated.

!!! note "Illustration"

    ```title="Before"
    [A, B, C*]
    ```
    
    ```kotlin
    navigation.bringToFront(Configuration.B)
    ```
    
    ```title="After"
    [A, C, B*]
    ```
