package com.arkivanov.decompose.instancekeeper

import kotlin.js.JsName

interface InstanceKeeperDispatcher : InstanceKeeper {

    fun destroy()
}

@JsName("instanceKeeperDispatcher")
@Suppress("FunctionName")
fun InstanceKeeperDispatcher(): InstanceKeeperDispatcher = InstanceKeeperDispatcherImpl()
