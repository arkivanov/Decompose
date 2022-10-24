package com.arkivanov.decompose.router.children

import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.parcelable.ParcelableContainer

internal interface ChildItemFactory<C : Any, out T : Any> {

    operator fun invoke(
        configuration: C,
        savedState: ParcelableContainer? = null,
        instanceKeeperDispatcher: InstanceKeeperDispatcher? = null,
    ): ChildItem.Created<C, T>
}
