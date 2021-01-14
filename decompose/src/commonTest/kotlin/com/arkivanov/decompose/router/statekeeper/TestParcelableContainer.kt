package com.arkivanov.decompose.router.statekeeper

import com.arkivanov.decompose.statekeeper.Parcelable
import com.arkivanov.decompose.statekeeper.ParcelableContainer
import kotlin.reflect.KClass

class TestParcelableContainer(
    var value: Parcelable? = null
) : ParcelableContainer, Parcelable by ParcelableStub() {

    @Suppress("UNCHECKED_CAST")
    override fun <T : Parcelable> consume(clazz: KClass<out T>): T? =
        (value as T?).also {
            value = null
        }

    override fun set(value: Parcelable?) {
        this.value = value
    }
}
