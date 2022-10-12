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

## Navigation with custom ComponentContext

- [Using Child Stack](../navigation/stack/component-context.md)
- [Using Child Overlay](../navigation/overlay/component-context.md)
