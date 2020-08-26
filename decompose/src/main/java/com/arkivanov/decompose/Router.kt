package com.arkivanov.decompose

import android.os.Parcelable

interface Router<C : Parcelable> : Component {

    val stackSize: Int

    fun getStack(): List<C>

    fun push(configuration: C)

    fun pop()
}
