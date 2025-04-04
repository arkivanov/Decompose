package com.arkivanov.decompose.lifecycle

import com.arkivanov.essenty.lifecycle.Lifecycle
import kotlin.test.assertEquals

class TestLifecycleCallbacks(
    private val onEvent: (Event) -> Unit = {},
) : Lifecycle.Callbacks {

    val events: MutableList<Event> = ArrayList<Event>()

    override fun onCreate() {
        addEvent(Event.ON_CREATE)
    }

    override fun onStart() {
        addEvent(Event.ON_START)
    }

    override fun onResume() {
        addEvent(Event.ON_RESUME)
    }

    override fun onPause() {
        addEvent(Event.ON_PAUSE)
    }

    override fun onStop() {
        addEvent(Event.ON_STOP)
    }

    override fun onDestroy() {
        addEvent(Event.ON_DESTROY)
    }

    private fun addEvent(event: Event) {
        events += event
        onEvent(event)
    }

    fun assertEvents(vararg events: Event) {
        assertEquals(events.asList(), this.events)
    }

    fun assertNoEvents() {
        assertEquals(emptyList(), events)
    }

    fun clear() {
        events.clear()
    }

    enum class Event {
        ON_CREATE, ON_START, ON_RESUME, ON_PAUSE, ON_STOP, ON_DESTROY
    }
}
