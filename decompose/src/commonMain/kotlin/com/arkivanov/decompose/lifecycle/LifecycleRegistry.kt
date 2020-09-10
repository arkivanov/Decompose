package com.arkivanov.decompose.lifecycle

import kotlin.js.JsName

interface LifecycleRegistry : Lifecycle, Lifecycle.Callbacks

@JsName("lifecycleRegistry")
@Suppress("FunctionName")
fun LifecycleRegistry(): LifecycleRegistry = LifecycleRegistryImpl()
