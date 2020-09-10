package com.arkivanov.decompose.backpressed

import kotlin.js.JsName

interface BackPressedDispatcher : BackPressedRegistry, BackPressedHandler

@JsName("backPressedDispatcher")
@Suppress("FunctionName")
fun BackPressedDispatcher(): BackPressedDispatcher = BackPressedDispatcherImpl()
