package com.arkivanov.decompose.value

import kotlin.reflect.KProperty

operator fun <T : Any> Value<T>.getValue(thisRef: Any?, property: KProperty<*>): T = value
