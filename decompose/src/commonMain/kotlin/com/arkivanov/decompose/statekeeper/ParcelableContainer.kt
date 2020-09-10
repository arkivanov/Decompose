package com.arkivanov.decompose.statekeeper

import kotlin.reflect.KClass

expect class ParcelableContainer() : Parcelable {

    fun <T : Parcelable> consume(clazz: KClass<out T>): T?

    fun set(value: Parcelable?)
}

@Suppress("FunctionName") // Factory function
fun ParcelableContainer(value: Parcelable?): ParcelableContainer =
    ParcelableContainer().apply {
        set(value)
    }
