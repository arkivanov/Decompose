package com.arkivanov.decompose.router.overlay

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.value.Value

val <C : Any, T : Any> Value<ChildOverlay<C, T>>.overlay: Child.Created<C, T>? get() = value.overlay
