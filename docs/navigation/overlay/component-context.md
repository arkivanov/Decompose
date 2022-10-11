# How to initialize Child Overlay with custom ComponentContext 

In order to pass this `AppComponentContext` to child overlay components, make an extension function on the `AppComponentContext` interface. This custom extension function will initialize the `Child Overlay` and provide child `AppComponentContext`.

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

Finally, in your components you can create the new extension function that will utilize the new custom `AppComponentContext`.

```kotlin
class MyComponent(componentContext: AppComponentContext) : AppComponentContext by componentContext {

    private val navigation = OverlayNavigation<Configuration>()

    private val childStack = appChildOverlay(
        source = navigation,
        persistent = false,
        handleBackButton = true,
        childFactory = { configuration, appComponentContext -> {
            // return child components using the custom component context
        }
    )
}
```
