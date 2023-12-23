# Child Slot with custom `ComponentContext`

Custom `ComponentContext` allows passing extra data and functionality to every child component. See [Custom ComponentContext](../../component/custom-component-context.md) page for more information about creating custom `AppComponentContext`.

In order to pass custom component context (like `AppComponentContext`) to child slot components, make an extension function on your `AppComponentContext` interface. This custom extension function will initialize the `Child Slot` and provide every child an `AppComponentContext`.

```kotlin
inline fun <reified C : Any, T : Any> AppComponentContext.appChildSlot(
    source: SlotNavigationSource<C>,
    noinline initialConfiguration: () -> C? = { null },
    key: String = "DefaultSlot",
    handleBackButton: Boolean = false,
    persistent: Boolean = false,
    noinline childFactory: (configuration: C, AppComponentContext) -> T
): Value<ChildSlot<C, T>> =
    childSlot(
        source = source,
        key = key,
        handleBackButton = handleBackButton,
        initialConfiguration = initialConfiguration,
        persistent = persistent
    ) { configuration, componentContext ->
        childFactory(
            configuration,
            DefaultAppComponentContext(
                componentContext = componentContext,
                // Additional dependencies here
            )
        )
    }
```

Finally, in your components you can use the new extension function that will utilize the custom `AppComponentContext`.

=== "Before v3.0.0-alpha01"

    ```kotlin
    interface RootComponent {
        val dialog: Value<ChildSlot<*, DialogComponent>>
    }
    
    class DefaultRootComponent(
        componentContext: AppComponentContext,
    ) : RootComponent, AppComponentContext by componentContext {
    
        private val dialogNavigation = SlotNavigation<DialogConfig>()
    
        override val dialog: Value<ChildSlot<*, DialogComponent>> =
            appChildSlot(
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
    
        @Parcelize
        private data class DialogConfig(val message: String) : Parcelable
    }
    ```

=== "Since v3.0.0-alpha01"

    ```kotlin
    interface RootComponent {
        val dialog: Value<ChildSlot<*, DialogComponent>>
    }
    
    class DefaultRootComponent(
        componentContext: AppComponentContext,
    ) : RootComponent, AppComponentContext by componentContext {
    
        private val dialogNavigation = SlotNavigation<DialogConfig>()
    
        override val dialog: Value<ChildSlot<*, DialogComponent>> =
            appChildSlot(
                source = dialogNavigation,
                serializer = DialogConfig.serializer(),
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
    
        @Serializable
        private data class DialogConfig(val message: String)
    }
    ```
