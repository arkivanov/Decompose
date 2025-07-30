package com.arkivanov.decompose.router.children

import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.statekeeper.SerializableContainer

internal interface ChildItemFactory<C : Any, out T : Any> {

    operator fun invoke(
        configuration: C,
        key: String,
        savedState: SerializableContainer? = null,
        instanceKeeperDispatcher: InstanceKeeperDispatcher? = null,
    ): ChildItem.Created<C, T>
}
