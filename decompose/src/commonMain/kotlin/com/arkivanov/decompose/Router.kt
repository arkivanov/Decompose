package com.arkivanov.decompose

import com.arkivanov.decompose.value.Value

interface Router<C : Any, out T : Any> : Navigator<C> {

    val state: Value<RouterState<C, T>>
}
