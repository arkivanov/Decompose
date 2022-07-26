package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.backhandler.child
import com.arkivanov.decompose.lifecycle.MergedLifecycle
import com.arkivanov.essenty.backhandler.BackHandler
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.parcelable.ParcelableContainer
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher

internal class RouterEntryFactoryImpl<C : Any, out T : Any>(
    private val lifecycle: Lifecycle,
    private val backHandler: BackHandler,
    private val childFactory: (configuration: C, ComponentContext) -> T
) : RouterEntryFactory<C, T> {

    override fun invoke(
        configuration: C,
        savedState: ParcelableContainer?,
        instanceKeeperDispatcher: InstanceKeeperDispatcher?
    ): RouterEntry.Created<C, T> {
        val componentLifecycleRegistry = LifecycleRegistry()
        val mergedLifecycle = MergedLifecycle(lifecycle, componentLifecycleRegistry)
        val stateKeeperDispatcher = StateKeeperDispatcher(savedState)
        val instanceKeeperRegistry = instanceKeeperDispatcher ?: InstanceKeeperDispatcher()
        val backHandler = backHandler.child()

        val component =
            childFactory(
                configuration,
                DefaultComponentContext(
                    lifecycle = mergedLifecycle,
                    stateKeeper = stateKeeperDispatcher,
                    instanceKeeper = instanceKeeperRegistry,
                    backHandler = backHandler,
                )
            )

        return RouterEntry.Created(
            configuration = configuration,
            instance = component,
            lifecycleRegistry = componentLifecycleRegistry,
            stateKeeperDispatcher = stateKeeperDispatcher,
            instanceKeeperDispatcher = instanceKeeperRegistry,
            backHandler = backHandler,
        )
    }
}
