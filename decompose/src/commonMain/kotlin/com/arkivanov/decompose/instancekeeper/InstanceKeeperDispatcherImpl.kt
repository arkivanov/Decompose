package com.arkivanov.decompose.instancekeeper

import com.arkivanov.decompose.instancekeeper.InstanceKeeper.Instance

internal class InstanceKeeperDispatcherImpl : InstanceKeeperDispatcher {

    private val map = HashMap<Any, Instance>()

    override fun get(key: Any): Instance? = map[key]

    override fun put(key: Any, instance: Instance) {
        map[key] = instance
    }

    override fun destroy() {
        map.values.forEach(Instance::onDestroy)
    }
}
