package com.arkivanov.decompose.router

import com.arkivanov.decompose.backpressed.BackPressedDispatcher
import com.arkivanov.decompose.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.decompose.lifecycle.LifecycleRegistry
import com.arkivanov.decompose.statekeeper.ParcelableContainer
import com.arkivanov.decompose.statekeeper.StateKeeperDispatcher

internal sealed class RouterEntry<out C, out T> {
    abstract val configuration: C
    abstract val savedState: ParcelableContainer?

    data class Created<out C, out T>(
        override val configuration: C,
        override val savedState: ParcelableContainer? = null,
        val component: T,
        val lifecycleRegistry: LifecycleRegistry,
        val stateKeeperDispatcher: StateKeeperDispatcher,
        val instanceKeeperDispatcher: InstanceKeeperDispatcher,
        val backPressedDispatcher: BackPressedDispatcher
    ) : RouterEntry<C, T>()

    data class Destroyed<out C>(
        override val configuration: C,
        override val savedState: ParcelableContainer? = null
    ) : RouterEntry<C, Nothing>()
}
