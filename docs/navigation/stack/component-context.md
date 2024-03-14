# Child Stack with custom `ComponentContext` (before v3.0.0-alpha09)

!!!info "Not required since version 3.0.0-alpha09"

    This section is only relevant for Decompose versions before `3.0.0-alpha09`. Since that version, Child Stack can be created the usual way - using the `childStack` extension function.

Custom `ComponentContext` allows passing extra data and functionality to every child component. See [Custom ComponentContext](../../component/custom-component-context.md) page for more information about creating custom `AppComponentContext`.

In order to pass custom component context (like `AppComponentContext`) to child stack components, make an extension function on your `AppComponentContext` interface. This custom extension function will initialize the `Child Stack` and provide every child an `AppComponentContext`.

=== "Before v2.2.0-alpha01"

    ```kotlin
    import com.arkivanov.decompose.router.stack.ChildStack
    import com.arkivanov.decompose.router.stack.StackNavigationSource
    import com.arkivanov.decompose.router.stack.childStack
    import com.arkivanov.decompose.value.Value
    import com.arkivanov.essenty.parcelable.Parcelable
    
    inline fun <reified C : Parcelable, T : Any> AppComponentContext.appChildStack(
        source: StackNavigationSource<C>,
        noinline initialStack: () -> List<C>,
        key: String = "DefaultStack",
        persistent: Boolean = true,
        handleBackButton: Boolean = false,
        noinline childFactory: (configuration: C, AppComponentContext) -> T
    ): Value<ChildStack<C, T>> =
        childStack(
            source = source,
            initialStack = initialStack,
            key = key,
            persistent = persistent,
            handleBackButton = handleBackButton
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
    import com.arkivanov.decompose.router.stack.ChildStack
    import com.arkivanov.decompose.router.stack.StackNavigationSource
    import com.arkivanov.decompose.router.stack.childStack
    import com.arkivanov.decompose.value.Value
    import kotlinx.serialization.KSerializer
    
    inline fun <reified C : Any, T : Any> AppComponentContext.appChildStack(
        source: StackNavigationSource<C>,
        serializer: KSerializer<C>?,
        noinline initialStack: () -> List<C>,
        key: String = "DefaultStack",
        handleBackButton: Boolean = false,
        noinline childFactory: (configuration: C, AppComponentContext) -> T
    ): Value<ChildStack<C, T>> =
        childStack(
            source = source,
            serializer = serializer,
            initialStack = initialStack,
            key = key,
            handleBackButton = handleBackButton
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
    import com.arkivanov.decompose.router.stack.ChildStack
    import com.arkivanov.decompose.router.stack.StackNavigation
    import com.arkivanov.decompose.value.Value
    import com.arkivanov.essenty.parcelable.Parcelable
    import com.arkivanov.essenty.parcelable.Parcelize
    
    interface RootComponent {
    
        val childStack: Value<ChildStack<*, Child>>
    
        sealed class Child {
            class ListChild(val component: ItemListComponent) : Child()
            class DetailsChild(val component: ItemDetailsComponent) : Child()
        }
    }
    
    class DefaultRootComponent(
        componentContext: AppComponentContext
    ) : RootComponent, AppComponentContext by componentContext {
    
        private val navigation = StackNavigation<Config>()
    
        override val childStack: Value<ChildStack<*, RootComponent.Child>> =
            appChildStack(
                source = navigation,
                initialStack = { listOf(Config.List) },
                handleBackButton = true, // Pop the back stack on back button press
                childFactory = ::createChild,
            )
    
        private fun createChild(config: Config, componentContext: AppComponentContext): RootComponent.Child =
            TODO("Initialize child based on config with the custom component context")
    
        private fun itemList(componentContext: AppComponentContext): ItemListComponent =
            TODO("Initialize ItemDetails with the custom component context")
    
        private fun itemDetails(componentContext: AppComponentContext, config: Config.Details): ItemDetailsComponent =
            TODO("Initialize ItemDetails with the custom component context")
    
        private sealed class Config : Parcelable {
            @Parcelize
            data object List : Config()
    
            @Parcelize
            data class Details(val itemId: Long) : Config()
        }
    }
    ```

=== "Since v2.2.0-alpha01"

    ```kotlin
    import com.arkivanov.decompose.router.stack.ChildStack
    import com.arkivanov.decompose.router.stack.StackNavigation
    import com.arkivanov.decompose.value.Value
    import kotlinx.serialization.Serializable
    
    interface RootComponent {
    
        val childStack: Value<ChildStack<*, Child>>
    
        sealed class Child {
            class ListChild(val component: ItemListComponent) : Child()
            class DetailsChild(val component: ItemDetailsComponent) : Child()
        }
    }
    
    class DefaultRootComponent(
        componentContext: AppComponentContext
    ) : RootComponent, AppComponentContext by componentContext {
    
        private val navigation = StackNavigation<Config>()
    
        override val childStack: Value<ChildStack<*, RootComponent.Child>> =
            appChildStack(
                source = navigation,
                serializer = Config.serializer(),
                initialStack = { listOf(Config.List) },
                handleBackButton = true, // Pop the back stack on back button press
                childFactory = ::createChild,
            )
    
        private fun createChild(config: Config, componentContext: AppComponentContext): RootComponent.Child =
            TODO("Initialize child based on config with the custom component context")
    
        private fun itemList(componentContext: AppComponentContext): ItemListComponent =
            TODO("Initialize ItemDetails with the custom component context")
    
        private fun itemDetails(componentContext: AppComponentContext, config: Config.Details): ItemDetailsComponent =
            TODO("Initialize ItemDetails with the custom component context")
    
        @Serializable
        private sealed class Config {
            @Serializable
            data object List : Config()
    
            @Serializable
            data class Details(val itemId: Long) : Config()
        }
    }
    ```
