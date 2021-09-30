package com.arkivanov.decompose.instancekeeper

import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.instancekeeper.getOrCreate
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.doOnDestroy

internal fun InstanceKeeper.child(key: String, lifecycle: Lifecycle?): InstanceKeeper {
    val registry = getOrCreate(key, ::ChildInstanceKeeperProvider).instanceKeeperRegistry

    lifecycle?.doOnDestroy {
        remove(key)?.onDestroy()
    }

    return registry
}

private class ChildInstanceKeeperProvider : InstanceKeeper.Instance {
    val instanceKeeperRegistry = InstanceKeeperDispatcher()

    override fun onDestroy() {
        instanceKeeperRegistry.destroy()
    }
}
