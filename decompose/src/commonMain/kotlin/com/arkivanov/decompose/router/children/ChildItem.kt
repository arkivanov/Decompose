package com.arkivanov.decompose.router.children

import androidx.navigationevent.NavigationEventDispatcher
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.statekeeper.SerializableContainer
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher
import kotlin.uuid.ExperimentalUuidApi
import kotlin.uuid.Uuid

internal sealed interface ChildItem<out C : Any, out T : Any> {

    val configuration: C
    val key: String
    val instance: T?
    val lifecycleRegistry: LifecycleRegistry?
    val stateKeeperDispatcher: StateKeeperDispatcher?
    val instanceKeeperDispatcher: InstanceKeeperDispatcher?
    val navigationEventDispatcher: NavigationEventDispatcher?

    data class Created<out C : Any, out T : Any>(
        override val configuration: C,
        override val key: String,
        override val instance: T,
        override val lifecycleRegistry: LifecycleRegistry,
        override val stateKeeperDispatcher: StateKeeperDispatcher,
        override val instanceKeeperDispatcher: InstanceKeeperDispatcher,
        override val navigationEventDispatcher: NavigationEventDispatcher,
    ) : ChildItem<C, T>

    data class Destroyed<out C : Any>(
        override val configuration: C,
        override val key: String,
        val savedState: SerializableContainer? = null
    ) : ChildItem<C, Nothing> {
        override val instance: Nothing? = null
        override val lifecycleRegistry: LifecycleRegistry? = null
        override val stateKeeperDispatcher: StateKeeperDispatcher? = null
        override val instanceKeeperDispatcher: InstanceKeeperDispatcher? = null
        override val navigationEventDispatcher: NavigationEventDispatcher? = null
    }
}

@OptIn(ExperimentalUuidApi::class)
internal fun randomKey(): String = Uuid.random().toString()
