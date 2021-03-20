package com.arkivanov.decompose.router

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.backpressed.BackPressedDispatcher
import com.arkivanov.decompose.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.decompose.lifecycle.Lifecycle
import com.arkivanov.decompose.lifecycle.LifecycleRegistry
import com.arkivanov.decompose.lifecycle.MergedLifecycle
import com.arkivanov.decompose.statekeeper.ParcelableContainer
import com.arkivanov.decompose.statekeeper.StateKeeperDispatcher

internal class RouterEntryFactoryImpl<C : Any, out T : Any>(
    private val lifecycle: Lifecycle,
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
        val backPressedDispatcher = BackPressedDispatcher()

        val component =
            childFactory(
                configuration,
                DefaultComponentContext(
                    mergedLifecycle,
                    stateKeeperDispatcher,
                    instanceKeeperRegistry,
                    backPressedDispatcher
                )
            )

        return RouterEntry.Created(
            configuration = configuration,
            instance = component,
            lifecycleRegistry = componentLifecycleRegistry,
            stateKeeperDispatcher = stateKeeperDispatcher,
            instanceKeeperDispatcher = instanceKeeperRegistry,
            backPressedDispatcher = backPressedDispatcher
        )
    }
}
