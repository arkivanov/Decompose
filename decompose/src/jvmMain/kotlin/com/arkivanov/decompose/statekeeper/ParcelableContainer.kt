package com.arkivanov.decompose.statekeeper

import kotlin.reflect.KClass

actual class ParcelableContainer actual constructor() : Parcelable {

    private var value: Any? = null

    @Suppress("UNCHECKED_CAST")
    actual fun <T : Parcelable> consume(clazz: KClass<out T>): T? = value as T?

    actual fun set(value: Parcelable?) {
        this.value = value
    }
}
