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

## How to create router with custom ComponentContext

In order to pass this `AppComponentContext` to other components in an application from the `Router`,
make an extension function on the `AppComponentContext` interface. This custom extension function will
create the `Router` and provide child `AppComponentContext`.

```kotlin
fun <C : Parcelable, T : Any> AppComponentContext.appRouter(
    initialStack: () -> List<C>,
    configurationClass: KClass<out C>,
    key: String = "DefaultRouter",
    handleBackButton: Boolean = false,
    childFactory: (configuration: C, AppComponentContext) -> T
): Router<C, T> =
    router(
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
```

Finally, in your components you can create a new router that will utilize the new custom component context. 

```kotlin
class MyComponent(componentContext: AppComponentContext): AppComponentContext by componentContext {

    private val router = appRouter(
        initialStack = { listOf(Configuration.Home) },
        childFactory = { configuration, appComponentContext ->
            // return child components using the custom component context
        }
    )
}
```
