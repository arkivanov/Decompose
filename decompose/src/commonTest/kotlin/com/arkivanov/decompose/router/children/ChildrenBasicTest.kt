package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.router.children.ChildNavState.Status.ACTIVE
import com.arkivanov.decompose.router.children.ChildNavState.Status.DESTROYED
import com.arkivanov.decompose.router.children.ChildNavState.Status.INACTIVE
import kotlin.test.Test
import kotlin.test.assertContentEquals

@Suppress("TestFunctionName")
internal class ChildrenBasicTest : ChildrenTestBase() {

    @Test
    fun WHEN_navigate_THEN_onEventComplete_called() {
        val results = ArrayList<Pair<TestNavState, TestNavState>>()
        context.children(
            initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE),
            onEventComplete = { _, newState, oldState -> results += newState to oldState },
        )

        navigate { emptyList() }

        assertContentEquals(listOf(stateOf() to stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE)), results)
    }

    @Test
    fun WHEN_created_THEN_onStateChanged_called() {
        val results = ArrayList<Pair<TestNavState, TestNavState?>>()

        context.children(
            initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE),
            onStateChanged = { newState, oldState -> results += newState to oldState },
        )

        assertContentEquals(listOf(stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE) to null), results)
    }

    @Test
    fun WHEN_navigate_THEN_onStateChanged_called() {
        val results = ArrayList<Pair<TestNavState, TestNavState?>>()
        context.children(
            initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE),
            onStateChanged = { newState, oldState -> results += newState to oldState },
        )
        results.clear()

        navigate { emptyList() }

        assertContentEquals(listOf(stateOf() to stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE)), results)
    }

    @Test
    fun WHEN_navigate_THEN_onEventComplete_called_after_onStateChanged_called() {
        val results = ArrayList<String>()
        context.children(
            initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE),
            onEventComplete = { _, _, _ -> results += "onEventComplete" },
            onStateChanged = { _, _ -> results += "onStateChanged" },
        )
        results.clear()

        navigate { emptyList() }

        assertContentEquals(listOf("onStateChanged", "onEventComplete"), results)
    }
}
