package com.arkivanov.decompose.instancekeeper

import androidx.lifecycle.Lifecycle
import com.arkivanov.decompose.lifecycle.doOnDestroy
import com.arkivanov.decompose.lifecycle.isDestroyed
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.instancekeeper.getOrCreate

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
