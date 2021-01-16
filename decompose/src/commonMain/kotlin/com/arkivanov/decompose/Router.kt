package com.arkivanov.decompose

import com.arkivanov.decompose.statekeeper.Parcelable
import com.arkivanov.decompose.value.Value

interface Router<C : Parcelable, out T : Any> : Navigator<C> {

    val state: Value<RouterState<C, T>>
}
