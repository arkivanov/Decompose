package com.arkivanov.decompose.router.slot

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.value.Value

val <C : Any, T : Any> Value<ChildSlot<C, T>>.child: Child.Created<C, T>? get() = value.child
