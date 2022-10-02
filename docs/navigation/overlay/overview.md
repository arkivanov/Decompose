# Child Overlay overview

## The Child Overlay

`Child Overlay` is a navigation model with either one active component at a time, or none. In other words, each `Child Overlay` allows to activate a child component, replace with another child component, or dismiss when not needed. It is possible to have more than one `Child Overlay` in a component, nested overlays are also supported.

The `Child Overlay` navigation consists of two main entities:

- [ChildOverlay](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/overlay/ChildOverlay.kt) - a simple data class that holds the currently active child, if any.
- [OverlayNavigation](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/overlay/OverlayNavigation.kt) - an interface that accepts navigation commands and forwards them to all subscribed observers.

### Component Configurations

Each component created and managed by the `Child Overlay` has a configuration, please read the documentation about [child configurations](/Decompose/navigation/overview/#component-configurations-and-child-factories). 

### Initializing the Child Overlay

There are three steps to initialize the `Child Overlay`:

- Create a new instance of `OverlayNavigation` and assign it to a variable or a property.
- Initialize the `Child Overlay` using the `ComponentContext#childOverlay` extension function and pass `OverlayNavigation` into it along with other arguments.
- The `childOverlay` function returns `Value<ChildOverlay>` that can be observed in the UI. Assign the returned `Value` to another property or a variable.

## Example

Here is a very basic example of a child overlay:

```kotlin title="Dialog component"
interface DialogComponent {

    fun onDismissClicked()
}

class DefaultDialogComponent(
    private val componentContext: ComponentContext,
    private val message: String,
    private val onDismissed: () -> Unit,
) : DialogComponent, ComponentContext by componentContext {

    override fun onDismissClicked() {
        onDismissed()
    }
}
```

```kotlin title="Root component"
interface RootComponent {

    val dialog: Value<ChildOverlay<*, DialogComponent>>
}

class DefaultRootComponent(
    componentContext: ComponentContext,
) : RootComponent, ComponentContext by componentContext {

    private val dialogNavigation = OverlayNavigation<DialogConfig>()

    private val _dialog =
        childOverlay(
            source = dialogNavigation,
            key = "Dialog",
            // persistent = false, // Disable navigation state saving, if needed
            handleBackButton = true, // Close the dialog on back button press
        ) { config, componentContext ->
            DefaultDialogComponent(
                componentContext = componentContext,
                message = config.message,
                onDismissed = dialogNavigation::dismiss,
            )
        }

    override val dialog: Value<ChildOverlay<*, DialogComponent>> = _dialog

    private fun showDialog(message: String) {
        dialogNavigation.activate(DialogConfig(message = message))
    }

    @Parcelize
    private data class DialogConfig(
        val message: String,
    ) : Parcelable
}
```
