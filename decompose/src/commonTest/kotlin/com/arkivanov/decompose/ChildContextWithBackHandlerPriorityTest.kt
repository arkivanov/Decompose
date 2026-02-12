package com.arkivanov.decompose

import androidx.navigationevent.NavigationEventDispatcher
import androidx.navigationevent.NavigationEventDispatcher.Companion.PRIORITY_DEFAULT
import androidx.navigationevent.NavigationEventDispatcher.Companion.PRIORITY_OVERLAY
import com.arkivanov.decompose.backhandler.NavigationEventHandler
import com.arkivanov.decompose.backhandler.addDirectInput
import com.arkivanov.decompose.testutils.TestComponentContext
import kotlin.test.Test
import kotlin.test.assertEquals

@Suppress("TestFunctionName")
class ChildContextWithBackHandlerPriorityTest {

    @Test
    fun GIVEN_backHandlerPriority_specified_WHEN_back_THEN_order_according_to_priority() {
        val backDispatcher = NavigationEventDispatcher()
        val context = TestComponentContext(navigationEventDispatcher = backDispatcher)
        val childContext1 = context.childContext(key = "context1", navigationEventPriority = PRIORITY_DEFAULT)
        val childContext2 = context.childContext(key = "context2", navigationEventPriority = PRIORITY_OVERLAY)
        val childContext3 = context.childContext(key = "context3", navigationEventPriority = PRIORITY_DEFAULT)
        val events = ArrayList<String>()
        val backCallback01 = NavigationEventHandler { events += "01" }
        val backCallback02 = NavigationEventHandler { events += "02" }
        val backCallback1 = NavigationEventHandler { events += "1" }
        val backCallback2 = NavigationEventHandler { events += "2" }
        val backCallback3 = NavigationEventHandler { events += "3" }
        context.navigationEventDispatcher.addHandler(backCallback01, PRIORITY_DEFAULT)
        context.navigationEventDispatcher.addHandler(backCallback02, PRIORITY_OVERLAY)
        childContext1.navigationEventDispatcher.addHandler(backCallback1)
        childContext2.navigationEventDispatcher.addHandler(backCallback2)
        childContext3.navigationEventDispatcher.addHandler(backCallback3)
        val input = backDispatcher.addDirectInput()

        input.backCompleted()
        backCallback02.isBackEnabled = false
        input.backCompleted()
        backCallback2.isBackEnabled = false
        input.backCompleted()
        backCallback01.isBackEnabled = false
        input.backCompleted()
        backCallback3.isBackEnabled = false
        input.backCompleted()
        backCallback1.isBackEnabled = false
        input.backCompleted()

        assertEquals(listOf("02", "2", "01", "3", "1"), events)
    }

    @Test
    fun GIVEN_backHandlerPriority_not_specified_WHEN_back_THEN_reverse_order() {
        val backDispatcher = NavigationEventDispatcher()
        val context = TestComponentContext(navigationEventDispatcher = backDispatcher)
        val childContext1 = context.childContext(key = "context1")
        val childContext2 = context.childContext(key = "context2")
        val childContext3 = context.childContext(key = "context3")
        val events = ArrayList<String>()
        val backCallback01 = NavigationEventHandler { events += "01" }
        val backCallback02 = NavigationEventHandler { events += "02" }
        val backCallback1 = NavigationEventHandler { events += "1" }
        val backCallback2 = NavigationEventHandler { events += "2" }
        val backCallback3 = NavigationEventHandler { events += "3" }
        context.navigationEventDispatcher.addHandler(backCallback01)
        context.navigationEventDispatcher.addHandler(backCallback02)
        childContext1.navigationEventDispatcher.addHandler(backCallback1)
        childContext2.navigationEventDispatcher.addHandler(backCallback2)
        childContext3.navigationEventDispatcher.addHandler(backCallback3)
        val input = backDispatcher.addDirectInput()

        input.backCompleted()
        backCallback02.isBackEnabled = false
        input.backCompleted()
        backCallback01.isBackEnabled = false
        input.backCompleted()
        backCallback3.isBackEnabled = false
        input.backCompleted()
        backCallback2.isBackEnabled = false
        input.backCompleted()
        backCallback1.isBackEnabled = false
        input.backCompleted()

        assertEquals(listOf("02", "01", "3", "2", "1"), events)
    }
}
