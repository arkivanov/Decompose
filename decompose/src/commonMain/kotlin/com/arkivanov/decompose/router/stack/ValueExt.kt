package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.value.Value

val <C : Any, T : Any> Value<ChildStack<C, T>>.active: Child.Created<C, T> get() = value.active

val <C : Any, T : Any> Value<ChildStack<C, T>>.backStack: List<Child<C, T>> get() = value.backStack

val <C : Any, T : Any> Value<ChildStack<C, T>>.items: List<Child<C, T>> get() = value.items
