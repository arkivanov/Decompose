package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.Child

val <C : Any, T : Any> StackRouter<C, T>.activeChild: Child.Created<C, T> get() = stack.value.active
