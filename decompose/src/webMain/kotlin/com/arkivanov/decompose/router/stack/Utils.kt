package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.Cancellation
import com.arkivanov.decompose.value.Value
import kotlin.math.min

internal fun <T> List<T>.startsWith(other: List<T>): Boolean {
    if (other.size > size) {
        return false
    }

    for (i in other.indices) {
        if (this[i] != other[i]) {
            return false
        }
    }

    return true
}

internal fun <T> List<T>.findFirstDifferentIndex(other: List<T>): Int {
    val minSize = min(size, other.size)

    if (minSize <= 0) {
        return -1
    }

    var i = 0
    while ((i < minSize) && (this[i] == other[i])) {
        i++
    }

    return i
}

internal fun <T : Any> Value<T>.subscribe(observer: (new: T, old: T) -> Unit): Cancellation {
    var old = value

    return subscribe callback@{ new ->
        val tmp = old
        old = new
        observer(new, tmp)
    }
}
