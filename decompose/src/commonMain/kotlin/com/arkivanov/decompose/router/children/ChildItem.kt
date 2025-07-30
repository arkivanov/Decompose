package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.backhandler.ChildBackHandler
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

    data class Created<out C : Any, out T : Any>(
        override val configuration: C,
        override val key: String,
        override val instance: T,
        val lifecycleRegistry: LifecycleRegistry,
        val stateKeeperDispatcher: StateKeeperDispatcher,
        val instanceKeeperDispatcher: InstanceKeeperDispatcher,
        val backHandler: ChildBackHandler,
    ) : ChildItem<C, T>

    data class Destroyed<out C : Any>(
        override val configuration: C,
        override val key: String,
        val savedState: SerializableContainer? = null
    ) : ChildItem<C, Nothing> {
        override val instance: Nothing? = null
    }
}

@OptIn(ExperimentalUuidApi::class)
internal fun randomKey(): String = Uuid.random().toString()

internal fun <C : Any, T : Any> ChildItem.Created<C, T>.toDestroyed(
    savedState: SerializableContainer? = null,
): ChildItem.Destroyed<C> =
    ChildItem.Destroyed(
        configuration = configuration,
        key = key,
        savedState = savedState,
    )
