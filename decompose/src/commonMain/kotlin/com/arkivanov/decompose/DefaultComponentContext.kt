package com.arkivanov.decompose

import androidx.lifecycle.Lifecycle
import androidx.lifecycle.ViewModelStore
import androidx.navigationevent.NavigationEventDispatcher
import com.arkivanov.decompose.instancekeeper.attachTo
import com.arkivanov.decompose.lifecycle.DecomposeLifecycleRegistry
import com.arkivanov.essenty.statekeeper.StateKeeper
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher

/**
 * A default implementation of the [ComponentContext] interface.
 * Can be also used in tests.
 *
 * @param lifecycle a [Lifecycle] of the component context,
 * or `null` to create a new [Lifecycle] in [Lifecycle.State.INITIALIZED] state.
 * Default value is `null`.
 * @param stateKeeper an optional [StateKeeper] for state preservation, or `null` to create a new [StateKeeperDispatcher].
 * Default value is `null`.
 * @param viewModelStore an optional [ViewModelStore] for instance retaining, or `null` to create a new
 * [ViewModelStore] attached to [lifecycle]. Default value is `null`.
 * @param navigationEventDispatcher an optional [NavigationEventDispatcher] for navigation event handling,
 * or `null` to create a new [NavigationEventDispatcher]. Default value is `null`.
 */
class DefaultComponentContext(
    lifecycle: Lifecycle? = null,
    stateKeeper: StateKeeper? = null,
    viewModelStore: ViewModelStore? = null,
    navigationEventDispatcher: NavigationEventDispatcher? = null,
) : ComponentContext {

    override val lifecycle: Lifecycle = lifecycle ?: DecomposeLifecycleRegistry()
    override val stateKeeper: StateKeeper = stateKeeper ?: StateKeeperDispatcher()
    override val viewModelStore: ViewModelStore = viewModelStore ?: ViewModelStore().attachTo(this.lifecycle)
    override val navigationEventDispatcher: NavigationEventDispatcher = navigationEventDispatcher ?: NavigationEventDispatcher()
    override val componentContextFactory: ComponentContextFactory<ComponentContext> = ComponentContextFactory(::DefaultComponentContext)

    constructor(lifecycle: Lifecycle) : this(
        lifecycle = lifecycle,
        stateKeeper = null,
        viewModelStore = null,
        navigationEventDispatcher = null,
    )
}
