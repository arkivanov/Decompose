package com.arkivanov.decompose.instancekeeper

internal fun InstanceKeeper.child(key: String): InstanceKeeper =
    getOrCreate(key, ::ChildInstanceKeeperProvider)
        .instanceKeeperRegistry

private class ChildInstanceKeeperProvider : InstanceKeeper.Instance {
    val instanceKeeperRegistry = InstanceKeeperDispatcher()

    override fun onDestroy() {
        instanceKeeperRegistry.destroy()
    }
}
