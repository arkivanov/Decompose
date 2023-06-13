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

## Custom child ComponentContext

The default [ComponentContext#childContext](child-components/#adding-a-child-component-manually) extension function returns the default `ComponentContext`. In order to create custom child `ComponentContext`, a special extension function is required.

```kotlin
fun AppComponentContext.childAppContext(key: String, lifecycle: Lifecycle? = null): AppComponentContext =
    DefaultAppComponentContext(
        componentContext = childContext(key = key, lifecycle = lifecycle),
        // Supply additional dependencies here
    )
```

## Navigation with custom ComponentContext

- [Using Child Stack](../navigation/stack/component-context.md)
- [Using Child Slot](../navigation/slot/component-context.md)
