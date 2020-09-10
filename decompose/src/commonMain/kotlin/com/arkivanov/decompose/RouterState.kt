package com.arkivanov.decompose

import com.arkivanov.decompose.statekeeper.Parcelable

class RouterState<out C : Parcelable, out T : Any>(
    val activeChild: Entry.Created<C, T>,
    val backStack: List<Entry<C, T>>
) {

    sealed class Entry<out C : Parcelable, out T : Any> {
        abstract val configuration: C

        class Created<out C : Parcelable, out T : Any>(
            override val configuration: C,
            val component: T
        ) : Entry<C, T>()

        class Destroyed<out C : Parcelable>(
            override val configuration: C
        ) : Entry<C, Nothing>()
    }
}
