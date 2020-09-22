package com.arkivanov.decompose.value

import com.arkivanov.decompose.lifecycle.Lifecycle
import com.arkivanov.decompose.lifecycle.doOnStart
import com.arkivanov.decompose.lifecycle.doOnStop
import kotlin.reflect.KProperty

operator fun <T : Any> Value<T>.getValue(thisRef: Any?, property: KProperty<*>): T = value

fun <T : Any> Value<T>.render(lifecycle: Lifecycle, render: (T) -> Unit) {
    lifecycle.doOnStart {
        render(value)
        subscribe(render)
    }

    lifecycle.doOnStop { unsubscribe(render) }
}
