package com.arkivanov.decompose

import androidx.navigationevent.NavigationEventHandler
import androidx.navigationevent.NavigationEventInfo
import kotlin.test.assertEquals

class TestBackHandler(
    isEnabled: Boolean = true,
) : NavigationEventHandler<NavigationEventInfo>(
    initialInfo = NavigationEventInfo.None,
    isBackEnabled = isEnabled,
) {

    val events: MutableList<Event> = ArrayList()

    override fun onBackCompleted() {
        events += Event.OnBack
    }

    sealed interface Event {
        data object OnBack : Event
    }
}

fun TestBackHandler.assertNoEvents() {
    assertEvents()
}

fun TestBackHandler.assertEvents(vararg events: TestBackHandler.Event) {
    assertEquals(events.asList(), this.events)
}
