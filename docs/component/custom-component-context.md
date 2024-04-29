# Custom `ComponentContext`

If you need `ComponentContext` to have extra functionality that is not already provided, it is possible to create a custom component context that could be decorated with the desired functionality of your choice. For instance, in some cases it might be useful to create a component context interface with additional properties required by most of the components.

## Create and implement custom ComponentContext

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
