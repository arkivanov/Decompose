# Child components

Decompose provides ability to organize components into trees, so each parent component is only aware of its immediate children. Hence the name of the library - "Decompose". You decompose your project by multiple independent reusable components. When adding a subtree into another place (reusing), you only need to satisfy its top component's dependencies.

There are two common ways to add a child component:

- Using `Child Stack` - prefer this option when a stack navigation between components is required. Please head to the [Child Stack documentation page](https://arkivanov.github.io/Decompose/child-stack/overview/) for more information.
- Manually - prefer this option if you need to add a permanent child component, or to manually control its `Lifecycle`.

## Adding a child component manually

There are two kinds of manually created child components - permanent and dynamic.

A permanent child component is always instantiated during the initialisation of the parent, and automatically destroyed at the end of the parent's lifecycle. It is possible to manually control the lifecycle of a permanent child component, e.g. resume it, pause or stop. But permanent child components must never be destroyed manually.

A dynamic child component can be created and destroyed on demand, e.g. it's lifecycle can be fully controlled.

!!!warning
    Every child component needs its own `ComponentContext`. Never pass parent's `ComponentContext` to children, always use either the `Child Stack` or the `childContext(...)` function.

There are two ways of creating a child component contexts manually.

### Simple way

Using the following extension function:

`ComponentContext.childContext(key: String): ComponentContext`

This function creates a permanent child `ComponentContext`. Child components created this way always have the same lifecycle as the parent. Also, they are always persistent, e.g. they are able to save states using `StateKeeper` or retain instances using `InstanceKeeper`.

```kotlin
class SomeParent(componentContext: ComponentContext) : ComponentContext by componentContext {

    val counter: Counter = Counter(childContext(key = "Counter"))
}
```

### Delicate way

Using the following extension function:

`ComponentContext.childContext(key: String, lifecycle: Lifecycle, persistent: Boolean): ComponentContext`

This function is annotated as delicate and requires special care. It can be used to create a child `ComponentContext` for both permanent and dynamic components.

The `Lifecycle` of a child `ComponentContext` created this way honours both the parent (`this`) `Lifecycle` and the supplied one. When the supplied `Lifecycle` is explicitly destroyed, the child `ComponentContext` detaches from its parent.

The `persistent` flag indicates whether the child `ComponentContext` should be persistent or not.

- A persistent child `ComponentContext` automatically saves the child state via `StateKeeper` and retains instances via `InstanceKeeper`. In this case **it is your responsibility** to recreate all **currently attached** child components on configuration changes or process death. Otherwise, a memory leak may occur.
- If the component is not persistent, it won't save the state and won't retain instances. Therefore, it is safe to not recreate it on configuration changes or process death.

```kotlin title="Example of a persistent permanent child component"
class SomeParent(componentContext: ComponentContext) : ComponentContext by componentContext {

    // Never destroy the lifecycle of a permanent child component! 
    private val counterLifecycle = LifecycleRegistry()

    val counter: Counter = 
        Counter(
            childContext(
                key = "Counter",
                lifecycle = counterLifecycle,
                persistent = true,
            )
        )

    private fun resumeCounter() {
        counterLifecycle.resume()
    }
   
    private fun stopCounter() {
        counterLifecycle.stop()
    }
}
```

```kotlin title="Example of a NOT persistent dynamic child component"
data class Optional<out T : Any>(val value: T?) {
    companion object {
        val empty: Optional<Nothing> = Optional(null)
    }
}

class SomeParent(componentContext: ComponentContext) : ComponentContext by componentContext {

    private var dialogLifecycle: LifecycleRegistry? = null
    private val _dialog = MutableValue<Optional<DialogComponent>>(Optional.empty)
    
    // The UI can subscribe to this Value and render the dialog
    val dialog: Value<Optional<DialogComponent>> = _dialog

    init {
        // There is no need to save/restore the state
    }

    fun showDialog() {
        if (dialogLifecycle != null) {
            return
        }

        val lifecycle = LifecycleRegistry()
        dialogLifecycle = lifecycle

        // Create a persistent child ComponentContext and the dialog component
        _dialog.value = Optional(dialog(lifecycle))

        // Resume the dialog's lifecycle
        lifecycle.resume()
    }

    private fun dialog(lifecycle: Lifecycle): DialogComponent =
        DialogComponent(
            componentContext = childContext(key = "dialog", lifecycle = lifecycle, persistent = false),
            onDismissed = ::dismissDialog,
        )

    private fun dismissDialog() {
        _dialog.value = Optional.empty
        dialogLifecycle?.destroy() // It's OK to destroy the lifecycle of a dynamic child component
        dialogLifecycle = null
    }
}
```

```kotlin title="Example of a persistent dynamic child component"
class SomeParent(componentContext: ComponentContext) : ComponentContext by componentContext {

    private var dialogLifecycle: LifecycleRegistry? = null
    private val _dialog = MutableValue<Optional<DialogComponent>>(Optional.empty)
    
    // The UI can subscribe to this Value and render the dialog
    val dialog: Value<Optional<DialogComponent>> = _dialog

    init {
        // Show the dialog again if it was previously shown
        val savedState: SavedState? = stateKeeper.consume("state")
        if (savedState?.isDialogShown == true) {
            showDialog()
        }

        // Remember whether the dialog was shown or not
        stateKeeper.register("state") {
            SavedState(
                isDialogShown = dialog.value is Dialog.Shown,
            )
        }
    }

    fun showDialog() {
        // The same as in the previous example
    }

    private fun dialog(lifecycle: Lifecycle): DialogComponent =
        DialogComponent(
            componentContext = childContext(key = "dialog", lifecycle = lifecycle, persistent = false),
            onDismissed = ::dismissDialog,
        )

    // Destroy the dialog's lifecycle and dismiss the dialog
    private fun dismissDialog() {
        // The same as in the previous example
    }

    @Parcelize
    private class SavedState(
        val isDialogShown: Boolean,
    ) : Parcelable
}
```
