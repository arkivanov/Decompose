# Child Slot overview

## The Child Slot

`Child Slot` is a navigation model that allows only one child component at a time, or none. In other words, each `Child Slot` allows to activate a child component, replace with another child component, or dismiss when not needed. It is possible to have more than one `Child Slot` in a component, nested slots are also supported.

The most common use cases include but not limited to displaying dialogs, drawers, bottom sheets, and just changing the visibility of some views. It's not necessarily something that overlays the parent component.

The `Child Slot` navigation consists of two main entities:

- [ChildSlot](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/slot/ChildSlot.kt) - a simple data class that holds the currently active child, if any.
- [SlotNavigation](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/slot/SlotNavigation.kt) - an interface that accepts navigation commands and forwards them to all subscribed observers.

### Component Configurations

Each component created and managed by the `Child Slot` has a configuration, please read the documentation about [child configurations](../overview.md#component-configurations-and-child-factories). 

### Initializing the Child Slot

There are three steps to initialize the `Child Slot`:

- Create a new instance of `SlotNavigation` and assign it to a variable or a property.
- Initialize the `Child Slot` using the `ComponentContext#childSlot` extension function and pass `SlotNavigation` into it along with other arguments.
- The `childSlot` function returns `Value<ChildSlot>` that can be observed in the UI. Assign the returned `Value` to another property or a variable.

## Example

Here is a very basic example of a child slot:

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

=== "Before v2.2.0-alpha01"

    ```kotlin title="Root component"
    interface RootComponent {
    
        val dialog: Value<ChildSlot<*, DialogComponent>>
    }
    
    class DefaultRootComponent(
        componentContext: ComponentContext,
    ) : RootComponent, ComponentContext by componentContext {
    
        private val dialogNavigation = SlotNavigation<DialogConfig>()
    
        override val dialog: Value<ChildSlot<*, DialogComponent>> =
            childSlot(
                source = dialogNavigation,
                // persistent = false, // Disable navigation state saving, if needed
                handleBackButton = true, // Close the dialog on back button press
            ) { config, childComponentContext ->
                DefaultDialogComponent(
                    componentContext = childComponentContext,
                    message = config.message,
                    onDismissed = dialogNavigation::dismiss,
                )
            }
    
        private fun showDialog(message: String) {
            dialogNavigation.activate(DialogConfig(message = message))
        }
    
        @Parcelize // kotlin-parcelize plugin must be applied if you are targetting Android
        private data class DialogConfig(
            val message: String,
        ) : Parcelable
    }
    ```

=== "Since v2.2.0-alpha01"

    ```kotlin title="Root component"
    interface RootComponent {
    
        val dialog: Value<ChildSlot<*, DialogComponent>>
    }
    
    class DefaultRootComponent(
        componentContext: ComponentContext,
    ) : RootComponent, ComponentContext by componentContext {
    
        private val dialogNavigation = SlotNavigation<DialogConfig>()
    
        override val dialog: Value<ChildSlot<*, DialogComponent>> =
            childSlot(
                source = dialogNavigation,
                serializer = DialogConfig.serializer(), // Or null to disable navigation state saving
                handleBackButton = true, // Close the dialog on back button press
            ) { config, childComponentContext ->
                DefaultDialogComponent(
                    componentContext = childComponentContext,
                    message = config.message,
                    onDismissed = dialogNavigation::dismiss,
                )
            }
    
        private fun showDialog(message: String) {
            dialogNavigation.activate(DialogConfig(message = message))
        }
    
        @Serializable // kotlinx-serialization plugin must be applied
        private data class DialogConfig(
            val message: String,
        )
    }
    ```

## Multiple Child Slots in a component

When multiple `Child Slots` are used in one component, each such `Child Slot` must have a unique key associated. The keys are required to be unique only within the parent (hosting) component, so it is ok for different components to have `Child Slots` with same keys. An exception will be thrown if multiple `Child Slots` with the same key are detected in a component.

```kotlin title="Two Child Slots in one component"
class Root(
    componentContext: ComponentContext
) : ComponentContext by componentContext {

    private val topNavigation = SlotNavigation<TopConfig>()
    
    private val topSlot =
        childSlot<TopConfig, TopChild>(
            source = topNavigation,
            key = "TopSlot",
            // Omitted code
        )

    private val bottomNavigation = SlotNavigation<BottomConfig>()
    
    private val bottomSlot =
        childSlot<BottomConfig, BottomChild>(
            source = bottomNavigation,
            key = "BottomSlot",
            // Omitted code
        )
}
```
