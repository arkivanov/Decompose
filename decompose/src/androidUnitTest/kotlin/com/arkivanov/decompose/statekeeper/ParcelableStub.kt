package com.arkivanov.decompose.statekeeper

import android.os.Parcel
import com.arkivanov.essenty.parcelable.Parcelable

actual class ParcelableStub actual constructor() : Parcelable {

    override fun describeContents(): Int = 0

    override fun writeToParcel(dest: Parcel, flags: Int) {
    }

    companion object CREATOR : android.os.Parcelable.Creator<ParcelableStub> {
        override fun createFromParcel(parcel: Parcel): ParcelableStub = ParcelableStub()

        override fun newArray(size: Int): Array<ParcelableStub?> = arrayOfNulls(size)
    }
}
