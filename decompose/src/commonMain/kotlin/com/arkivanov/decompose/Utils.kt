package com.arkivanov.decompose

import com.arkivanov.essenty.lifecycle.Lifecycle
import kotlin.reflect.KClass

@InternalDecomposeApi
fun Any.hashString(): String =
    "${this::class.uniqueName ?: this::class.simpleName}_${hashCode().toString(radix = 36)}"

internal expect val KClass<*>.uniqueName: String?

internal val Lifecycle.isDestroyed: Boolean get() = state == Lifecycle.State.DESTROYED
