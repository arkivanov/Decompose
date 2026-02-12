package com.arkivanov.decompose.router.children

import androidx.navigationevent.NavigationEventDispatcher
import com.arkivanov.decompose.ComponentContextFactory
import com.arkivanov.decompose.lifecycle.MergedLifecycle
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.statekeeper.SerializableContainer
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher

internal class DefaultChildItemFactory<out Ctx : Any, C : Any, out T : Any>(
    private val contextFactory: ComponentContextFactory<Ctx>,
    private val lifecycle: Lifecycle,
    private val navigationEventDispatcher: NavigationEventDispatcher,
    private val childFactory: (configuration: C, Ctx) -> T,
) : ChildItemFactory<C, T> {

    override fun invoke(
        configuration: C,
        key: String,
        savedState: SerializableContainer?,
        instanceKeeperDispatcher: InstanceKeeperDispatcher?
    ): ChildItem.Created<C, T> {
        val componentLifecycleRegistry = LifecycleRegistry()
        val mergedLifecycle = MergedLifecycle(lifecycle, componentLifecycleRegistry)
        val stateKeeperDispatcher = StateKeeperDispatcher(savedState)
        val instanceKeeperRegistry = instanceKeeperDispatcher ?: InstanceKeeperDispatcher()
        val navigationEventDispatcher = NavigationEventDispatcher(navigationEventDispatcher)
        navigationEventDispatcher.isEnabled = false

        val component =
            childFactory(
                configuration,
                contextFactory(
                    lifecycle = mergedLifecycle,
                    stateKeeper = stateKeeperDispatcher,
                    instanceKeeper = instanceKeeperRegistry,
                    navigationEventDispatcher = navigationEventDispatcher,
                )
            )

        return ChildItem.Created(
            configuration = configuration,
            key = key,
            instance = component,
            lifecycleRegistry = componentLifecycleRegistry,
            stateKeeperDispatcher = stateKeeperDispatcher,
            instanceKeeperDispatcher = instanceKeeperRegistry,
            navigationEventDispatcher = navigationEventDispatcher,
        )
    }
}
