package com.arkivanov.decompose.router.children

import androidx.lifecycle.ViewModelStore
import com.arkivanov.decompose.GenericComponentContext
import com.arkivanov.decompose.lifecycle.LifecycleRegistry
import com.arkivanov.decompose.lifecycle.mergedLifecycle
import com.arkivanov.decompose.navigationevent.NavigationEventPriority
import com.arkivanov.decompose.navigationevent.child
import com.arkivanov.decompose.navigationevent.childNavigationEventDispatcher
import com.arkivanov.decompose.viewmodel.viewModelStoreHost
import com.arkivanov.essenty.statekeeper.SerializableContainer
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher

internal class DefaultChildItemFactory<out Ctx : GenericComponentContext<Ctx>, C : Any, out T : Any>(
    private val componentContext: Ctx,
    private val childFactory: (configuration: C, Ctx) -> T,
) : ChildItemFactory<C, T> {

    private val childNavigationEventDispatcher =
        componentContext.navigationEventDispatcher.child(priority = NavigationEventPriority.Overlay)

    override fun invoke(
        configuration: C,
        key: String,
        savedState: SerializableContainer?,
        viewModelStore: ViewModelStore?,
    ): ChildItem.Created<C, T> {
        val componentLifecycleRegistry = LifecycleRegistry()
        val mergedLifecycle = mergedLifecycle(componentContext.lifecycle, componentLifecycleRegistry)
        val stateKeeperDispatcher = StateKeeperDispatcher(savedState)
        val viewModelStore = viewModelStore ?: ViewModelStore()
        val navigationEventDispatcher = childNavigationEventDispatcher.childNavigationEventDispatcher()

        val component =
            childFactory(
                configuration,
                componentContext.componentContextFactory(
                    lifecycle = mergedLifecycle,
                    stateKeeper = stateKeeperDispatcher,
                    viewModelStoreHost = componentContext.viewModelStoreHost(store = viewModelStore),
                    navigationEventDispatcher = navigationEventDispatcher.dispatcher,
                )
            )

        return ChildItem.Created(
            configuration = configuration,
            key = key,
            instance = component,
            lifecycleRegistry = componentLifecycleRegistry,
            stateKeeperDispatcher = stateKeeperDispatcher,
            viewModelStore = viewModelStore,
            navigationEventDispatcher = navigationEventDispatcher,
        )
    }
}
