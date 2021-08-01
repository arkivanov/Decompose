package com.arkivanov.decompose.instancekeeper

import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.instancekeeper.getOrCreate

internal fun InstanceKeeper.child(key: String): InstanceKeeper =
    getOrCreate(key = key, factory = ::ChildInstanceKeeperProvider)
        .instanceKeeperRegistry

private class ChildInstanceKeeperProvider : InstanceKeeper.Instance {
    val instanceKeeperRegistry = InstanceKeeperDispatcher()

    override fun onDestroy() {
        instanceKeeperRegistry.destroy()
    }
}
