# Custom `ComponentContext`

If you need `ComponentContext` to have extra functionality that is not already provided, it is possible to create a custom component context that could be decorated with the desired functionality of your choice. For instance, in some cases it might be useful to create a component context interface with additional properties required by most of the components.

## Create and implement custom ComponentContext

=== "Before version 3.0.0-alpha09"

    To define a custom component context, create an interface that extends the `ComponentContext` interface, then implement it by delegating to the existing `ComponentContext`.
    
    ```kotlin
    import com.arkivanov.decompose.ComponentContext
    
    interface AppComponentContext : ComponentContext {
    
        val logger: Logger // Additional property
    }
    
    class DefaultAppComponentContext(
        componentContext: ComponentContext,
        override val logger: Logger,
    ) : AppComponentContext, ComponentContext by componentContext
    ```

=== "Since version 3.0.0-alpha09"

    To define a custom component context, create an interface that extends the `GenericComponentContext` interface, then implement it by delegating parts to the existing `ComponentContext`. Also, implement the `componentContextFactory` property to allow Decompose creating new instances of the custom component context type.

    ```kotlin
    import com.arkivanov.decompose.ComponentContext
    import com.arkivanov.decompose.ComponentContextFactory
    import com.arkivanov.decompose.GenericComponentContext
    import com.arkivanov.essenty.backhandler.BackHandlerOwner
    import com.arkivanov.essenty.instancekeeper.InstanceKeeperOwner
    import com.arkivanov.essenty.lifecycle.LifecycleOwner
    import com.arkivanov.essenty.statekeeper.StateKeeperOwner
    
    interface AppComponentContext : GenericComponentContext<AppComponentContext> {
    
        val logger: Logger // Additional property
    }
    
    class DefaultAppComponentContext(
        componentContext: ComponentContext,
        override val logger: Logger,
    ) : AppComponentContext,
        LifecycleOwner by componentContext,
        StateKeeperOwner by componentContext,
        InstanceKeeperOwner by componentContext,
        BackHandlerOwner by componentContext {
    
        override val componentContextFactory: ComponentContextFactory<AppComponentContext> =
            ComponentContextFactory { lifecycle, stateKeeper, instanceKeeper, backHandler ->
                val ctx = componentContext.componentContextFactory(lifecycle, stateKeeper, instanceKeeper, backHandler)
                DefaultAppComponentContext(ctx, logger)
            }
    }
    ```

## Custom child ComponentContext (before v3.0.0-alpha09)

!!!info "Not required since version 3.0.0-alpha09"

    This section is only relevant for Decompose versions before `3.0.0-alpha09`. Since that version, the custom component context can be created the usual way - using the `childContext` extension function.

The default [ComponentContext#childContext](child-components.md#adding-a-child-component-manually) extension function returns the default `ComponentContext`. In order to create custom child `ComponentContext`, a special extension function is required.

```kotlin
import com.arkivanov.decompose.childContext
import com.arkivanov.essenty.lifecycle.Lifecycle

fun AppComponentContext.childAppContext(key: String, lifecycle: Lifecycle? = null): AppComponentContext =
    DefaultAppComponentContext(
        componentContext = childContext(key = key, lifecycle = lifecycle),
        // Supply additional dependencies here
    )
```

## Navigation with custom ComponentContext

- [Using Child Stack](../navigation/stack/component-context.md)
- [Using Child Slot](../navigation/slot/component-context.md)
