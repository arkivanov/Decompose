package com.arkivanov.decompose

import android.os.Parcelable

data class RouterState<out C : Parcelable>(
    val stack: List<C>,
    val activeComponent: Component
)
