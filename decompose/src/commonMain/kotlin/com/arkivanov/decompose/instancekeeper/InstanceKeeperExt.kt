package com.arkivanov.decompose.instancekeeper

import androidx.lifecycle.Lifecycle
import com.arkivanov.decompose.lifecycle.doOnDestroy
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher

internal fun InstanceKeeperDispatcher.attachTo(lifecycle: Lifecycle): InstanceKeeperDispatcher {
    lifecycle.doOnDestroy(::destroy)

    return this
}
