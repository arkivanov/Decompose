package com.arkivanov.decompose.statekeeper

import com.arkivanov.decompose.ensureNeverFrozen
import kotlin.reflect.KClass

internal actual class ParcelableContainerImpl actual constructor() : ParcelableContainer {

    init {
        ensureNeverFrozen()
    }

    private var value: Any? = null

    @Suppress("UNCHECKED_CAST")
    override fun <T : Parcelable> consume(clazz: KClass<out T>): T? =
        (value as T?).also {
            value = null
        }

    override fun set(value: Parcelable?) {
        this.value = value
    }
}
