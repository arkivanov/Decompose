package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.router.children.ChildNavState.Status.*
import kotlin.test.Test
import kotlin.test.assertContentEquals

@Suppress("TestFunctionName")
internal class ChildrenBasicTest : ChildrenTestBase() {

    @Test
    fun WHEN_navigate_THEN_onComplete_called() {
        val results = ArrayList<Pair<List<SimpleChildNavState<Config>>, List<SimpleChildNavState<Config>>>>()
        context.children(initialNavState = listOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))

        navigate(transformer = { emptyList() }, onComplete = { newNavState, oldNavState -> results += newNavState to oldNavState })

        assertContentEquals(
            listOf(emptyList<SimpleChildNavState<Config>>() to listOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE)),
            results,
        )
    }
}
