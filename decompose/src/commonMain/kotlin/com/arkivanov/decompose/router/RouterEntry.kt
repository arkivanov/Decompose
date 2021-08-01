package com.arkivanov.decompose.router

import com.arkivanov.essenty.backpressed.BackPressedDispatcher
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.parcelable.ParcelableContainer
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher

internal sealed class RouterEntry<out C, out T> {
    abstract val configuration: C
    abstract val savedState: ParcelableContainer?

    data class Created<out C, out T>(
        override val configuration: C,
        override val savedState: ParcelableContainer? = null,
        val instance: T,
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
