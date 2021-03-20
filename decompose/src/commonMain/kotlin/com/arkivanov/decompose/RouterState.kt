package com.arkivanov.decompose

import com.arkivanov.decompose.statekeeper.Parcelable

data class RouterState<out C : Parcelable, out T : Any>(
    val activeChild: Child.Created<C, T>,
    val backStack: List<Child<C, T>>
)
