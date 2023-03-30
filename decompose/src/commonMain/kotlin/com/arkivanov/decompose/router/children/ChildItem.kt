package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.backhandler.ChildBackHandler
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.parcelable.ParcelableContainer
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher

internal sealed interface ChildItem<out C : Any, out T : Any> {

    val configuration: C
    val instance: T?

    data class Created<out C : Any, out T : Any>(
        override val configuration: C,
        override val instance: T,
        val lifecycleRegistry: LifecycleRegistry,
        val stateKeeperDispatcher: StateKeeperDispatcher,
        val instanceKeeperDispatcher: InstanceKeeperDispatcher,
        val backHandler: ChildBackHandler,
    ) : ChildItem<C, T>

    data class Destroyed<out C : Any>(
        override val configuration: C,
        val savedState: ParcelableContainer? = null
    ) : ChildItem<C, Nothing> {
        override val instance: Nothing? = null
    }
}
