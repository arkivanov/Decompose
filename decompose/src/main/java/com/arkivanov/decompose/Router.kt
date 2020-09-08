package com.arkivanov.decompose

import android.os.Parcelable
import androidx.compose.runtime.State

interface Router<C : Parcelable> {

    val state: State<RouterState<C>>

    fun push(configuration: C)

    fun pop()
}
