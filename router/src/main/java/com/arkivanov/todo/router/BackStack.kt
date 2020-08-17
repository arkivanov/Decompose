package com.arkivanov.todo.router

import androidx.lifecycle.LifecycleRegistry

internal class BackStack<out C>(
    val top: Entry.Created<C>? = null,
    val stack: List<Entry<C>> = emptyList()
) {

    sealed class Entry<out C> {
        abstract val configuration: C

        class Created<out C>(
            override val configuration: C,
            val component: Component,
            @Suppress("CanBeParameter") // Must be val
            private val lifecycleHolder: LifecycleHolder,
        ) : Entry<C>() {
            val lifecycle: LifecycleRegistry = lifecycleHolder.registry
        }

        class Destroyed<out C>(
            override val configuration: C
        ) : Entry<C>()
    }
}
