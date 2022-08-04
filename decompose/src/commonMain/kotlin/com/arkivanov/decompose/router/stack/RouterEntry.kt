package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.backhandler.ChildBackHandler
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.parcelable.ParcelableContainer
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher

internal sealed class RouterEntry<out C : Any, out T : Any> {
    abstract val configuration: C
    abstract val savedState: ParcelableContainer?

    data class Created<out C : Any, out T : Any>(
        override val configuration: C,
        override val savedState: ParcelableContainer? = null,
        val instance: T,
        val lifecycleRegistry: LifecycleRegistry,
        val stateKeeperDispatcher: StateKeeperDispatcher,
        val instanceKeeperDispatcher: InstanceKeeperDispatcher,
        val backHandler: ChildBackHandler,
    ) : RouterEntry<C, T>()

    data class Destroyed<out C : Any>(
        override val configuration: C,
        override val savedState: ParcelableContainer? = null
    ) : RouterEntry<C, Nothing>()
}
