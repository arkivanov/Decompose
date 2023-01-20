package com.arkivanov.sample.shared

import js.core.Object
import js.core.jso

var uniqueId: Long = 0L

internal fun Any.uniqueId(): Long {
    var id: dynamic = asDynamic().__unique_id
    if (id == undefined) {
        id = ++uniqueId
        Object.defineProperty<Any, Long>(this, "__unique_id", jso { value = id })
    }

    return id
}

internal fun Any.uniqueKey(): String = uniqueId().toString()
