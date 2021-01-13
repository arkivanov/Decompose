package com.arkivanov.decompose.statekeeper

import android.os.Bundle
import android.os.Parcel
import kotlin.reflect.KClass

internal actual class ParcelableContainerImpl private constructor(
    private val bundle: Bundle
) : ParcelableContainer {

    actual constructor() : this(Bundle())

    private constructor(parcel: Parcel) : this(parcel.readBundle(Bundle::class.java.classLoader) ?: Bundle())

    override fun <T : Parcelable> consume(clazz: KClass<out T>): T? {
        bundle.classLoader = clazz.java.classLoader
        val value: T? = bundle.getParcelable(KEY)
        if (value != null) {
            bundle.remove(KEY)
        }

        return value
    }

    override fun set(value: Parcelable?) {
        bundle.putParcelable(KEY, value)
    }

    override fun writeToParcel(parcel: Parcel, flags: Int) {
        parcel.writeBundle(bundle)
    }

    override fun describeContents(): Int = 0

    companion object CREATOR : android.os.Parcelable.Creator<ParcelableContainerImpl> {
        private const val KEY = "key"

        override fun createFromParcel(parcel: Parcel): ParcelableContainerImpl = ParcelableContainerImpl(parcel)

        override fun newArray(size: Int): Array<ParcelableContainerImpl?> = arrayOfNulls(size)
    }
}
