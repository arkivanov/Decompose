package com.arkivanov.decompose

import com.arkivanov.essenty.backhandler.BackCallback
import kotlin.test.assertEquals

class TestBackCallback(
    isEnabled: Boolean = true,
    priority: Int = PRIORITY_DEFAULT,
) : BackCallback(isEnabled = isEnabled, priority = priority) {

    val events: MutableList<Event> = ArrayList()

    override fun onBack() {
        events += Event.OnBack
    }

    sealed interface Event {
        data object OnBack : Event
    }
}

fun TestBackCallback.assertNoEvents() {
    assertEvents()
}

fun TestBackCallback.assertEvents(vararg events: TestBackCallback.Event) {
    assertEquals(events.asList(), this.events)
}
