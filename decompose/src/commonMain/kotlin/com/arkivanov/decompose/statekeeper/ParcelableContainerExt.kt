package com.arkivanov.decompose.statekeeper

import kotlin.reflect.KClass

fun <T : Parcelable> ParcelableContainer.consumeRequired(clazz: KClass<out T>): T = requireNotNull(consume(clazz))

inline fun <reified T : Parcelable> ParcelableContainer.consume(): T? = consume(T::class)

inline fun <reified T : Parcelable> ParcelableContainer.consumeRequired(): T = consumeRequired(T::class)
