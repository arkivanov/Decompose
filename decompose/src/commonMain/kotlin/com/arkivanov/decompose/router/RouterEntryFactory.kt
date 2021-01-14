package com.arkivanov.decompose.router

import com.arkivanov.decompose.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.decompose.statekeeper.ParcelableContainer

internal interface RouterEntryFactory<C, out T> {

    operator fun invoke(
        configuration: C,
        savedState: ParcelableContainer? = null,
        instanceKeeperDispatcher: InstanceKeeperDispatcher? = null
    ): RouterEntry.Created<C, T>
}
