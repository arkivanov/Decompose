# Child Stack with custom `ComponentContext`

Custom `ComponentContext` allows passing extra data and functionality to every child component. See [Custom ComponentContext](../../component/custom-component-context.md) page for more information about creating custom `AppComponentContext`.

In order to pass custom component context (like `AppComponentContext`) to child stack components, make an extension function on your `AppComponentContext` interface. This custom extension function will initialize the `Child Stack` and provide every child an `AppComponentContext`.

```kotlin
inline fun <reified C : Parcelable, T : Any> AppComponentContext.appChildStack(
    source: StackNavigationSource<C>,
    noinline initialStack: () -> List<C>,
    key: String = "DefaultStack",
    handleBackButton: Boolean = false,
    noinline childFactory: (configuration: C, AppComponentContext) -> T
): Value<ChildStack<C, T>> =
    childStack(
        source = source,
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

```kotlin
interface RootComponent {

    val childStack: Value<ChildStack<*, Child>>

    sealed class Child {
        class ListChild(val component: ItemList) : Child()
        class DetailsChild(val component: ItemDetails) : Child()
    }
}

class DefaultRootComponent(
    componentContext: AppComponentContext
) : RootComponent, AppComponentContext by componentContext {

    private val navigation = StackNavigation<Config>()

    override val childStack: Value<ChildStack<*, RootComponent.Child>> =
        appChildStack(
            source = navigation,
            initialConfiguration = Config.List,
            handleBackButton = true, // Pop the back stack on back button press
            childFactory = ::createChild,
        )

    private fun createChild(config: Config, componentContext: AppComponentContext): RootComponent.Child =
        TODO('Initialize child based on config with the custom component context')

    private fun itemList(componentContext: AppComponentContext): ItemListComponent =
        TODO('Initialize ItemDetails with the custom component context')

    private fun itemDetails(componentContext: AppComponentContext, config: Config.Details): ItemDetailsComponent =
        TODO('Initialize ItemDetails with the custom component context')

    private sealed class Config : Parcelable {
        @Parcelize
        data object List : Config()

        @Parcelize
        data class Details(val itemId: Long) : Config()
    }
}
```
