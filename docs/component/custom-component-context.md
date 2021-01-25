# Custom Component Context

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

In order to pass this `AppComponentContext` to other components in an application from the router, make an extension function on the new interface that will create a router using the implementation of `AppComponentContext` for the component factory. 

```kotlin
fun <C : Parcelable, T : Any> AppComponentContext.appRouter(
    initialConfiguration: () -> C,
    initialBackStack: () -> List<C> = ::emptyList,
    configurationClass: KClass<out C>,
    key: String = "DefaultRouter",
    handleBackButton: Boolean = false,
    componentFactory: (configuration: C, AppComponentContext) -> T
): Router<C, T> =
    router(
        initialConfiguration = initialConfiguration,
        initialBackStack = initialBackStack,
        configurationClass = configurationClass,
        key = key,
        handleBackButton = handleBackButton
    ) { configuration, componentContext ->
        componentFactory(
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
        initialConfiguration = { Configuration.Home },
        componentFactory = { configuration, appComponentContext ->
            //return child components using custom component context
        }
    )
}
```