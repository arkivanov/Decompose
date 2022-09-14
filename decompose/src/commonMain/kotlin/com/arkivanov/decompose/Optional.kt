package com.arkivanov.decompose

internal data class Optional<out T : Any>(val value: T?) {

    companion object {
        val EMPTY: Optional<Nothing> = Optional(null)
    }
}

internal fun <T : Any> optionalOf(value: T? = null): Optional<T> =
    if (value == null) Optional.EMPTY else Optional(value)
