package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.backhandler.ChildBackHandler
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.statekeeper.SerializableContainer
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher

internal sealed interface ChildItem<out C : Any, out T : Any> {

    val configuration: C
    val instance: T?
    val lifecycleRegistry: LifecycleRegistry?
    val stateKeeperDispatcher: StateKeeperDispatcher?
    val instanceKeeperDispatcher: InstanceKeeperDispatcher?
    val backHandler: ChildBackHandler?

    data class Created<out C : Any, out T : Any>(
        override val configuration: C,
        override val instance: T,
        override val lifecycleRegistry: LifecycleRegistry,
        override val stateKeeperDispatcher: StateKeeperDispatcher,
        override val instanceKeeperDispatcher: InstanceKeeperDispatcher,
        override val backHandler: ChildBackHandler,
    ) : ChildItem<C, T>

    data class Destroyed<out C : Any>(
        override val configuration: C,
        val savedState: SerializableContainer? = null
    ) : ChildItem<C, Nothing> {
        override val instance: Nothing? = null
        override val lifecycleRegistry: LifecycleRegistry? = null
        override val stateKeeperDispatcher: StateKeeperDispatcher? = null
        override val instanceKeeperDispatcher: InstanceKeeperDispatcher? = null
        override val backHandler: ChildBackHandler? = null
    }
}
