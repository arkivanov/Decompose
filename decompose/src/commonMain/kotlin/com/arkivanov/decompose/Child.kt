package com.arkivanov.decompose

import com.arkivanov.decompose.statekeeper.Parcelable

sealed class Child<out C : Parcelable, out T : Any> {

    abstract val configuration: C

    data class Created<out C : Parcelable, out T : Any>(
        override val configuration: C,
        val component: T
    ) : Child<C, T>()

    data class Destroyed<out C : Parcelable>(
        override val configuration: C
    ) : Child<C, Nothing>()
}
