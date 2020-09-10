package com.arkivanov.decompose.instancekeeper

interface InstanceKeeper {

    fun get(key: Any): Instance?

    fun put(key: Any, instance: Instance)

    interface Instance {
        fun onDestroy()
    }
}
