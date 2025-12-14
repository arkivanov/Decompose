package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.Child
import kotlin.test.Test
import kotlin.test.assertContentEquals

@Suppress("TestFunctionName")
class ChildStackTest {

    @Test
    fun GIVEN_back_stack_empty_WHEN_items_THEN_returns_list_with_active_child() {
        val activeChild = child(configuration = "A")
        val stack = ChildStack(active = activeChild, backStack = emptyList())

        val items = stack.items

        assertContentEquals(listOf(activeChild), items)
    }

    @Test
    fun GIVEN_back_stack_not_empty_WHEN_items_THEN_returns_list_with_back_stack_and_active_child() {
        val activeChild = child(configuration = "A")
        val backStack = List(3) { child(configuration = it.toString()) }
        val stack = ChildStack(active = activeChild, backStack = backStack)

        val items = stack.items

        assertContentEquals(backStack + activeChild, items)
    }

    private fun child(configuration: String): Child.Created<String, String> =
        Child.Created(configuration = configuration, instance = configuration, key = configuration)
}
