package com.arkivanov.decompose

import com.arkivanov.decompose.statekeeper.Parcelable

data class RouterState<out C : Parcelable, out T : Any>(
    val activeChild: Entry.Created<C, T>,
    val backStack: List<Entry<C, T>>
) {

    sealed class Entry<out C : Parcelable, out T : Any> {
        abstract val configuration: C

        data class Created<out C : Parcelable, out T : Any>(
            override val configuration: C,
            val component: T
        ) : Entry<C, T>()

        data class Destroyed<out C : Parcelable>(
            override val configuration: C
        ) : Entry<C, Nothing>()
    }
}
