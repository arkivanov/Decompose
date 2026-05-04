package com.arkivanov.decompose

import androidx.navigationevent.NavigationEventDispatcher
import androidx.navigationevent.NavigationEventDispatcher.Companion.PRIORITY_DEFAULT
import androidx.navigationevent.NavigationEventDispatcher.Companion.PRIORITY_OVERLAY
import androidx.navigationevent.NavigationEventHandler
import androidx.navigationevent.NavigationEventInfo
import androidx.navigationevent.NavigationEventInput
import com.arkivanov.decompose.backhandler.addBackHandler
import com.arkivanov.decompose.backhandler.child
import com.arkivanov.decompose.testutils.addTestInput
import kotlin.test.Test
import kotlin.test.assertTrue

class NavigationEventDispatcherTest {

    @Test
    fun `test NavigationEventDispatcher`() {
        val dispatcher = NavigationEventDispatcher()
        val handler = FakeNavigationEventHandler()
        val input = FakeNavigationEventInput()
        dispatcher.addHandler(handler = handler, priority = PRIORITY_OVERLAY)
        dispatcher.addInput(input = input)

        input.backCompleted()

        assertTrue(handler.isBackCompleted)
        assertTrue(input.hasEnabledHandlers) // This line fails
    }
//
//    @Test
//    fun foo() {
//        val dispatcher = NavigationEventDispatcher()
//        val childDispatcher = dispatcher.child(priority = PRIORITY_OVERLAY)
//        childDispatcher.addBackHandler()
//        assertTrue(dispatcher.addTestInput().hasEnabledHandlers)
//    }
}

private class FakeNavigationEventHandler : NavigationEventHandler<NavigationEventInfo>(
    initialInfo = NavigationEventInfo.None,
    isBackEnabled = true,
) {
    var isBackCompleted = false

    override fun onBackCompleted() {
        isBackCompleted = true
    }
}

private class FakeNavigationEventInput : NavigationEventInput() {
    var hasEnabledHandlers = false

    override fun onHasEnabledHandlersChanged(hasEnabledHandlers: Boolean) {
        this.hasEnabledHandlers = hasEnabledHandlers
    }

    fun backCompleted() {
        dispatchOnBackCompleted()
    }
}
