package com.arkivanov.decompose.instancekeeper

import com.arkivanov.decompose.isDestroyed
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.instancekeeper.getOrCreate
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.doOnDestroy

internal fun InstanceKeeper.child(key: String, lifecycle: Lifecycle? = null): InstanceKeeper =
    if ((lifecycle == null) || !lifecycle.isDestroyed) {
        val registry = getOrCreate(key, ::ChildInstanceKeeperProvider).instanceKeeperRegistry

        lifecycle?.doOnDestroy {
            remove(key)?.onDestroy()
        }

        registry
    } else {
        InstanceKeeperDispatcher()
    }

private class ChildInstanceKeeperProvider : InstanceKeeper.Instance {
    val instanceKeeperRegistry = InstanceKeeperDispatcher()

    override fun onDestroy() {
        instanceKeeperRegistry.destroy()
    }
}
