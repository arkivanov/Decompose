package com.arkivanov.decompose

import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleRegistry
import androidx.lifecycle.ViewModelStore
import androidx.navigationevent.DirectNavigationEventInput
import androidx.navigationevent.NavigationEventDispatcher
import com.arkivanov.decompose.lifecycle.LifecycleRegistryOwner
import com.arkivanov.decompose.lifecycle.moveTo
import com.arkivanov.decompose.navigationevent.addDirectInput
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher

/**
 * An implementation of [ComponentContext] that (unlike [DefaultComponentContext]) exposes manipulatable
 * [LifecycleRegistry], [StateKeeperDispatcher], [ViewModelStore], and [NavigationEventDispatcher].
 *
 * Primarily designed for using in tests and Compose previews.
 *
 * @param lifecycleState initial [Lifecycle.State] of the [lifecycle]. Default value is [Lifecycle.State.INITIALIZED].
 * You can also use one of the following extension functions to move the [lifecycle] to a required state:
 * - [LifecycleRegistryOwner.created][com.arkivanov.decompose.lifecycle.created]
 * - [LifecycleRegistryOwner.started][com.arkivanov.decompose.lifecycle.started]
 * - [LifecycleRegistryOwner.resumed][com.arkivanov.decompose.lifecycle.resumed]
 * @param stateKeeper a [StateKeeperDispatcher] to be used by this [HostComponentContext],
 * creates a new instance if not provided.
 * @param viewModelStore a [ViewModelStore] to be used by this [HostComponentContext],
 * creates a new instance if not provided.
 * @param navigationEventDispatcher a [NavigationEventDispatcher] to be used by this [HostComponentContext],
 * creates a new instance if not provided.
 */
@ExperimentalDecomposeApi
class HostComponentContext(
    lifecycleState: Lifecycle.State = Lifecycle.State.INITIALIZED,
    override val stateKeeper: StateKeeperDispatcher = StateKeeperDispatcher(),
    override val viewModelStore: ViewModelStore = ViewModelStore(),
    override val navigationEventDispatcher: NavigationEventDispatcher = NavigationEventDispatcher(),
) : ComponentContext, LifecycleRegistryOwner {
    override val lifecycle: LifecycleRegistry = LifecycleRegistry.createUnsafe(this).moveTo(lifecycleState)
    override val componentContextFactory: ComponentContextFactory<ComponentContext> = ComponentContextFactory(::DefaultComponentContext)

    val navigationEventInput: DirectNavigationEventInput = navigationEventDispatcher.addDirectInput()
}
