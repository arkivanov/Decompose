package com.arkivanov.decompose.lifecycle

import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleEventObserver
import androidx.lifecycle.LifecycleOwner
import kotlin.test.assertEquals

class TestLifecycleObserver(
    private val onEvent: (Lifecycle.Event) -> Unit = {},
) : LifecycleEventObserver {

    val events: MutableList<Lifecycle.Event> = ArrayList()

    override fun onStateChanged(source: LifecycleOwner, event: Lifecycle.Event) {
        events += event
        onEvent(event)
    }

    fun assertEvents(vararg events: Lifecycle.Event) {
        assertEquals(events.asList(), this.events)
    }

    fun assertNoEvents() {
        assertEquals(emptyList(), events)
    }

    fun clear() {
        events.clear()
    }
}
