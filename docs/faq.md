# FAQ

## Why lifecycle callbacks are not called on iOS (or any other non-Android platform)?

On non-Android platforms the `Lifecycle` should usually be controlled manually. This can be done by creating an instance of `LifecycleRegistry`, passing it to `DefaultComponentContext`, and then controlling the `LifecycleRegistry` based on platform-specific lifecycle events. Please refer to the sample project to learn about platform integrations.

However, there are convenient APIs for some platforms.

### Lifecycle on iOS

If the root component lives in the application scope (i.e. Decompose is used in the entire application, not partially in one screen), then `ApplicationLifecycle` API from Essenty can be used. `ApplicationLifecycle` can be destroyed manually if needed, e.g. when the root component is created in a `UIViewController` and the screen is closed.

### Lifecycle on Compose for Desktop (JVM)

There is the `LifecycleController` API available on Compose for Desktop.

## Error "Another supplier is already registered with the key"

This exception is thrown by `StateKeeper` when its `register` method is called second time with the same key.

- If you are using Compose, make sure that you create the root component context and component outside Compose. See the [docs](component/overview.md#root-componentcontext). Otherwise, a second instance can be created if the root Composable function re-composes.
- Don't use `get() =` for navigation properties (such as `val stack: Value<ChildStack<...>>`), just assign the value to the property.
    ```diff
    - val stack: Value<ChildStack<...>> get() = childStack(...)
    + val stack: Value<ChildStack<...>> = childStack(...)
    ```
- If you are using more than one `childStack` in one component (or more than one navigation model of the same kind in one component), then please supply the `key` argument for every such function.
    ```kotlin
    val stack1: Value<ChildStack<...>> = childStack(key = "stack1", ...)
    val stack2: Value<ChildStack<...>> = childStack(key = "stack2", ...)
    ```

## Error "Configurations must be unique"

This exception is thrown when duplicated component configurations are detected by a navigation model (e.g. Child Stack). Duplicates are checked according to the `equals` method, which all configurations must be properly implementing. See the [docs](navigation/overview.md#component-configurations-and-child-factories) for more information.

- Prefer `pushNew` function instead of `push` when showing a component on a button click, it will properly handle accidental double clicks.
- Prefer `pushToFront` to prevent duplicated components with the same data (configurations) in the stack.

### The Duplicate Configurations mode

!!!note

    The feature is stable since version `3.5.0-alpha01`.

Most navigation models (such as Child Stack and Child Pages) can support duplication configurations. The feature is opt-in, it can be enabled via the [DecomposeSettings](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/DecomposeSettings.kt) `duplicateConfigurationsEnabled` global property since version `3.5.0-alpha01` or via `DecomposeExperimentFlags#duplicateConfigurationsEnabled` flag on earlier versions.

If this mode is enabled, Decompose will not throw errors when duplicate configurations are detected and will try its best to handle duplicates gracefully.

The only navigation model that does not support duplicate configurations is Child Items.
