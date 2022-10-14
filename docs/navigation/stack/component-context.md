# Child Stack with custom `ComponentContext`

Custom `ComponentContext` allows passing extra data and functionality to every child component. See [Custom ComponentContext](../../component/custom-component-context.md) page for more information about creating custom `AppComponentContext`.

In order to pass custom component context like `AppComponentContext` to child stack components, make an extension function on your `AppComponentContext` interface. This custom extension function will initialize the `Child Stack` and provide every child an `AppComponentContext`.

```kotlin
fun <C : Parcelable, T : Any> AppComponentContext.appChildStack(
    source: StackNavigationSource<C>,
    initialStack: () -> List<C>,
    configurationClass: KClass<out C>,
    key: String = "DefaultStack",
    handleBackButton: Boolean = false,
    childFactory: (configuration: C, AppComponentContext) -> T
): Value<ChildStack<C, T>> =
    childStack(
        source = source,
        initialStack = initialStack,
        configurationClass = configurationClass,
        key = key,
        handleBackButton = handleBackButton
    ) { configuration, componentContext ->
        childFactory(
            configuration,
            DefaultAppComponentContext(
                componentContext = componentContext
            )
        )
    }

inline fun <reified C : Parcelable, T : Any> AppComponentContext.appChildStack(
    source: StackNavigationSource<C>,
    noinline initialStack: () -> List<C>,
    key: String = "DefaultStack",
    handleBackButton: Boolean = false,
    noinline childFactory: (configuration: C, AppComponentContext) -> T
): Value<ChildStack<C, T>> =
    appChildStack(
        source = source,
        initialStack = initialStack,
        configurationClass = C::class,
        key = key,
        handleBackButton = handleBackButton,
        childFactory = childFactory,
    )
```

Finally, in your components you can use the new extension function that will utilize the custom `AppComponentContext`.

```kotlin
interface Root {

    val childStack: Value<ChildStack<*, Child>>

    sealed class Child {
        class List(val component: ItemList) : Child()
        class Details(val component: ItemDetails) : Child()
    }
}

class RootComponent(
    componentContext: AppComponentContext
) : Root, AppComponentContext by componentContext {

    private val navigation = StackNavigation<Config>()

    private val _childStack =
        childStack(
            source = navigation,
            initialConfiguration = Config.List,
            handleBackButton = true, // Pop the back stack on back button press
            childFactory = ::createChild,
        )

    override val childStack: Value<ChildStack<*, Root.Child>> = _childStack

    private fun createChild(config: Config, componentContext: AppComponentContext): Root.Child =
        TODO('Initialize child based on config with the custom component context')

    private fun itemList(componentContext: AppComponentContext): ItemList =
        TODO('Initialize ItemDetails with the custom component context')

    private fun itemDetails(componentContext: AppComponentContext, config: Config.Details): ItemDetails =
        TODO('Initialize ItemDetails with the custom component context')

    private sealed class Config : Parcelable {
        @Parcelize
        object List : Config()

        @Parcelize
        data class Details(val itemId: Long) : Config()
    }
}
```
