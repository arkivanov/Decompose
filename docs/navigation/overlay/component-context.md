# Child Overlay with custom `ComponentContext`

Custom `ComponentContext` allowes to pass extra data and functionality to all initialized child components. See [Custom ComponentContext](../../component/custom-component-context.md) page for more information about creating custom AppComponentContext.

In order to pass custom component context like `AppComponentContext` to child overlay components, make an extension function on your `AppComponentContext` interface. This custom extension function will initialize the `Child Overlay` and provide every child an `AppComponentContext`.

```kotlin
fun <C : Parcelable, T : Any> AppComponentContext.appChildOverlay(
    source: OverlayNavigationSource<C>,
    initialConfiguration: () -> C?,
    configurationClass: KClass<out C>,
    key: String = "DefaultOverlay",
    handleBackButton: Boolean = false,
    persistent: Boolean = false,
    childFactory: (configuration: C, AppComponentContext) -> T
): Value<ChildOverlay<C, T>> =
    childOverlay(
        source = source,
        configurationClass = configurationClass,
        key = key,
        handleBackButton = handleBackButton,
        initialConfiguration = initialConfiguration,
        persistent = persistent
    ) { configuration, componentContext ->
        childFactory(
            configuration,
            DefaultAppComponentContext(
                componentContext = componentContext,
                bundleId,
                settings,
                boarding
            )
        )
    }

inline fun <reified C : Parcelable, T : Any> AppComponentContext.appChildStack(
    source: OverlayNavigationSource<C>,
    noinline  initialConfiguration: () -> C?,
    key: String = "DefaultOverlay",
    handleBackButton: Boolean = false,
    persistent: Boolean = false,
    noinline childFactory: (configuration: C, AppComponentContext) -> T
): Value<ChildOverlay<C, T>> =
    appChildOverlay(
        source = source,
        initialConfiguration = initialConfiguration,
        configurationClass = C::class,
        key = key,
        handleBackButton = handleBackButton,
        persistent = persistent,
        childFactory = childFactory,
    )
```

Finally, in your components you can use the new extension function that will utilize the custom `AppComponentContext`.

```kotlin
interface RootComponent {
    val dialog: Value<ChildOverlay<*, DialogComponent>>
}

class DefaultRootComponent(
    componentContext: AppComponentContext,
) : RootComponent, AppComponentContext by componentContext {

    private val dialogNavigation = OverlayNavigation<DialogConfig>()

    private val _dialog =
        appChildOverlay(
            source = dialogNavigation,
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
    private data class DialogConfig(val message: String) : Parcelable
}
```
