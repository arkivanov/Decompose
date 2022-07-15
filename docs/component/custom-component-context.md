# Custom `ComponentContext`

If one is needing `ComponentContext` to have extra functionality that is not already provided. It is possible to create a custom `ComponentContext` that could be decorated with the desired functionality of your choice. 

## Create and implement custom ComponentContext

For example, to create your own custom `ComponentContext` one must first create an interface that extends `ComponentContext` and then provide its implementation. 

```kotlin
interface AppComponentContext : ComponentContext {

    // Custom things here

}

class DefaultAppComponentContext(
    componentContext: ComponentContext,
    // Additional dependencies here
) : AppComponentContext, ComponentContext by componentContext {

    // Custom things implementation here
}
```

## How to initialize Child Stack with custom ComponentContext

In order to pass this `AppComponentContext` to child components, make an extension function on the `AppComponentContext` interface. This custom extension function will initialize the `Child Stack` and provide child `AppComponentContext`.

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

Finally, in your components you can create the new extension function that will utilize the new custom `AppComponentContext`.

```kotlin
class MyComponent(componentContext: AppComponentContext) : AppComponentContext by componentContext {

    private val navigation = StackNavigation<Configuration>()

    private val childStack = appChildStack(
        source = navigation,
        initialStack = { listOf(Configuration.Home) },
        childFactory = { configuration, appComponentContext ->
            // return child components using the custom component context
        }
    )
}
```
