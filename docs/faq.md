# FAQ

## Why lifecycle callbacks are not called on iOS (or any other non-Android platform)?

On non-Android platforms the `Lifecycle` should usually be controlled manually. This can be done by creating an instance of `LifecycleRegistry`, passing it to `DefaultComponentContext`, and then controlling the `LifecycleRegistry` based on platform-specific lifecycle events. Please refer to the sample project to learn about platform integrations.

However, there are convenient APIs for some platforms.

### Lifecycle on iOS

If the root component lives in the application scope (i.e. Decompose is used in the entire application, not partially in one screen), then `ApplicationLifecycle` API from Essenty can be used (since Essenty version `2.0.0-alpha07`). Prior to that Essenty version, `ApplicationLifecycle` had been provided by Decompose.

### Lifecycle on Compose for Desktop (JVM)

There is the `LifecycleController` API available on Compose for Desktop.

## Error "Another supplier is already registered with the key"

This exception is thrown by `StateKeeper` when its `register` method is called second time with the same key.

- If you are using Compose, make sure that you create the root component context and component outside Compose. See the [docs](component/overview/#root-componentcontext). Otherwise, a second instance can be created if the root Composable function re-composes.
- If you are using more than one `childStack` in one component (or more than one navigation model of the same kind in one component), then please supply the `key` argument for every such function.

## Error "Configurations must be unique"

This exception is thrown when duplicated component configurations are detected by a navigation model (e.g. Child Stack). Duplicates are checked according to the `equals` method, which all configurations must be properly implementing. See the [docs](navigation/overview/#component-configurations-and-child-factories) for more information.

- Prefer `pushNew` function instead of `push` when showing a component on a button click, it will properly handle accidental double clicks.
- Prefer `pushToFront` to prevent duplicated components with the same data (configurations) in the stack.
