package com.arkivanov.decompose.router.stack

import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.parcelable.ParcelableContainer

internal interface RouterEntryFactory<C : Any, out T : Any> {

    operator fun invoke(
        configuration: C,
        savedState: ParcelableContainer? = null,
        instanceKeeperDispatcher: InstanceKeeperDispatcher? = null
    ): RouterEntry.Created<C, T>
}
