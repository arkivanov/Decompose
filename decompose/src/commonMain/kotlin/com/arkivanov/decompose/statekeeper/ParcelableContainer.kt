package com.arkivanov.decompose.statekeeper

import kotlin.reflect.KClass

interface ParcelableContainer : Parcelable {

    fun <T : Parcelable> consume(clazz: KClass<out T>): T?

    fun set(value: Parcelable?)
}

fun ParcelableContainer(value: Parcelable? = null): ParcelableContainer =
    ParcelableContainerImpl().apply {
        if (value != null) {
            set(value)
        }
    }
