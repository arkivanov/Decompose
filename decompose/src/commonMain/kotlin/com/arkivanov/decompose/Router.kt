package com.arkivanov.decompose

import com.arkivanov.decompose.statekeeper.Parcelable
import com.arkivanov.decompose.value.Value

interface Router<C : Parcelable, out T : Any> : Component<Value<RouterState<C, T>>> {

    fun push(configuration: C)

    fun pop()
}
