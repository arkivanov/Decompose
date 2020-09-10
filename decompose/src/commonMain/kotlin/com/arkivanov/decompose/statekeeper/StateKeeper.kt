package com.arkivanov.decompose.statekeeper

import kotlin.reflect.KClass

interface StateKeeper {

    fun <T : Parcelable> consume(key: String, clazz: KClass<out T>): T?

    fun <T : Parcelable> register(key: String, supplier: () -> T)

    fun unregister(key: String)
}
