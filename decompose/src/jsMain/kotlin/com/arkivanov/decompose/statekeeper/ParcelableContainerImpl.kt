package com.arkivanov.decompose.statekeeper

import kotlin.reflect.KClass

internal actual class ParcelableContainerImpl actual constructor() : ParcelableContainer {

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
