package com.arkivanov.decompose

import com.arkivanov.decompose.testutils.TestComponentContext
import com.arkivanov.essenty.backhandler.BackCallback
import kotlin.test.Test
import kotlin.test.assertEquals

@Suppress("TestFunctionName")
class ChildContextWithBackHandlerPriorityTest {

    @Test
    fun GIVEN_backHandlerPriority_specified_WHEN_back_THEN_order_according_to_priority() {
        val context = TestComponentContext()
        val childContext1 = context.childContext(key = "context1", backHandlerPriority = 3)
        val childContext2 = context.childContext(key = "context2", backHandlerPriority = 4)
        val childContext3 = context.childContext(key = "context3", backHandlerPriority = 2)
        val events = ArrayList<String>()
        val backCallback01 = BackCallback(priority = 1) { events += "01" }
        val backCallback02 = BackCallback(priority = 5) { events += "02" }
        val backCallback1 = BackCallback { events += "1" }
        val backCallback2 = BackCallback { events += "2" }
        val backCallback3 = BackCallback { events += "3" }
        context.backHandler.register(backCallback01)
        context.backHandler.register(backCallback02)
        childContext1.backHandler.register(backCallback1)
        childContext2.backHandler.register(backCallback2)
        childContext3.backHandler.register(backCallback3)

        context.backHandler.back()
        backCallback02.isEnabled = false
        context.backHandler.back()
        backCallback2.isEnabled = false
        context.backHandler.back()
        backCallback1.isEnabled = false
        context.backHandler.back()
        backCallback3.isEnabled = false
        context.backHandler.back()

        assertEquals(listOf("02", "2", "1", "3", "01"), events)
    }

    @Test
    fun GIVEN_backHandlerPriority_not_specified_WHEN_back_THEN_reverse_order() {
        val context = TestComponentContext()
        val childContext1 = context.childContext(key = "context1")
        val childContext2 = context.childContext(key = "context2")
        val childContext3 = context.childContext(key = "context3")
        val events = ArrayList<String>()
        val backCallback01 = BackCallback { events += "01" }
        val backCallback02 = BackCallback { events += "02" }
        val backCallback1 = BackCallback { events += "1" }
        val backCallback2 = BackCallback { events += "2" }
        val backCallback3 = BackCallback { events += "3" }
        context.backHandler.register(backCallback01)
        context.backHandler.register(backCallback02)
        childContext1.backHandler.register(backCallback1)
        childContext2.backHandler.register(backCallback2)
        childContext3.backHandler.register(backCallback3)

        context.backHandler.back()
        backCallback02.isEnabled = false
        context.backHandler.back()
        backCallback01.isEnabled = false
        context.backHandler.back()
        backCallback3.isEnabled = false
        context.backHandler.back()
        backCallback2.isEnabled = false
        context.backHandler.back()
        backCallback1.isEnabled = false
        context.backHandler.back()

        assertEquals(listOf("02", "01", "3", "2", "1"), events)
    }
}
