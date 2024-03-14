# Child Slot with custom `ComponentContext` (before v3.0.0-alpha09)

!!!info "Not required since version 3.0.0-alpha09"

    This section is only relevant for Decompose versions before `3.0.0-alpha09`. Since that version, Child Slot can be created the usual way - using the `childSlot` extension function.

Custom `ComponentContext` allows passing extra data and functionality to every child component. See [Custom ComponentContext](../../component/custom-component-context.md) page for more information about creating custom `AppComponentContext`.

In order to pass the custom `ComponentContext` (like `AppComponentContext`) to child slot components, make an extension function on your `AppComponentContext` interface. This custom extension function will initialize the `Child Slot` and provide every child an `AppComponentContext`.

=== "Before v2.2.0-alpha01"

    ```kotlin
    import com.arkivanov.decompose.router.slot.ChildSlot
    import com.arkivanov.decompose.router.slot.SlotNavigationSource
    import com.arkivanov.decompose.router.slot.childSlot
    import com.arkivanov.decompose.value.Value
    import com.arkivanov.essenty.parcelable.Parcelable
    
    inline fun <reified C : Parcelable, T : Any> AppComponentContext.appChildSlot(
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

=== "Since v2.2.0-alpha01"

    ```kotlin
    import com.arkivanov.decompose.router.slot.ChildSlot
    import com.arkivanov.decompose.router.slot.SlotNavigationSource
    import com.arkivanov.decompose.router.slot.childSlot
    import com.arkivanov.decompose.value.Value
    import kotlinx.serialization.KSerializer
    
    interface AppComponentContext : ComponentContext
    
    class DefaultAppComponentContext(componentContext: ComponentContext) : AppComponentContext
    
    inline fun <reified C : Any, T : Any> AppComponentContext.appChildSlot(
        source: SlotNavigationSource<C>,
        serializer: KSerializer<C>?,
        noinline initialConfiguration: () -> C? = { null },
        key: String = "DefaultSlot",
        handleBackButton: Boolean = false,
        noinline childFactory: (configuration: C, AppComponentContext) -> T
    ): Value<ChildSlot<C, T>> =
        childSlot(
            source = source,
            serializer = serializer,
            key = key,
            handleBackButton = handleBackButton,
            initialConfiguration = initialConfiguration,
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

=== "Before v2.2.0-alpha01"

    ```kotlin
    import com.arkivanov.decompose.router.slot.ChildSlot
    import com.arkivanov.decompose.router.slot.SlotNavigation
    import com.arkivanov.decompose.router.slot.activate
    import com.arkivanov.decompose.router.slot.dismiss
    import com.arkivanov.decompose.value.Value
    import com.arkivanov.essenty.parcelable.Parcelable
    import com.arkivanov.essenty.parcelable.Parcelize
    
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

=== "Since v2.2.0-alpha01"

    ```kotlin
    import com.arkivanov.decompose.router.slot.ChildSlot
    import com.arkivanov.decompose.router.slot.SlotNavigation
    import com.arkivanov.decompose.router.slot.activate
    import com.arkivanov.decompose.router.slot.dismiss
    import com.arkivanov.decompose.value.Value
    import kotlinx.serialization.Serializable
    
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
