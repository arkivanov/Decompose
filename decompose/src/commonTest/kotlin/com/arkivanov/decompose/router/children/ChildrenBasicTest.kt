package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.children.ChildNavState.Status.*
import kotlin.test.Test
import kotlin.test.assertContentEquals

@OptIn(ExperimentalDecomposeApi::class)
@Suppress("TestFunctionName")
internal class ChildrenBasicTest : ChildrenTestBase() {

    @Test
    fun WHEN_navigate_THEN_onEventComplete_called() {
        val results = ArrayList<Pair<TestNavState, TestNavState>>()
        context.children(
            initialNavState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE),
            onEventComplete = { _, newNavState, oldNavState -> results += newNavState to oldNavState },
        )

        navigate { emptyList() }

        assertContentEquals(listOf(stateOf() to stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE)), results)
    }

    @Test
    fun WHEN_created_THEN_onNavStateChanged_called() {
        val results = ArrayList<Pair<TestNavState, TestNavState?>>()

        context.children(
            initialNavState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE),
            onNavStateChanged = { newNavState, oldNavState -> results += newNavState to oldNavState },
        )

        assertContentEquals(listOf(stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE) to null), results)
    }

    @Test
    fun WHEN_navigate_THEN_onNavStateChanged_called() {
        val results = ArrayList<Pair<TestNavState, TestNavState?>>()
        context.children(
            initialNavState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE),
            onNavStateChanged = { newNavState, oldNavState -> results += newNavState to oldNavState },
        )
        results.clear()

        navigate { emptyList() }

        assertContentEquals(listOf(stateOf() to stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE)), results)
    }

    @Test
    fun WHEN_navigate_THEN_onEventComplete_called_after_onNavStateChanged_called() {
        val results = ArrayList<String>()
        context.children(
            initialNavState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE),
            onEventComplete = { _, _, _ -> results += "onEventComplete" },
            onNavStateChanged = { _, _ -> results += "onNavStateChanged" },
        )
        results.clear()

        navigate { emptyList() }

        assertContentEquals(listOf("onNavStateChanged", "onEventComplete"), results)
    }
}
