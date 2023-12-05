package com.arkivanov.decompose.router.pages

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.lifecycle.Lifecycle
import kotlinx.serialization.builtins.serializer
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertIs
import kotlin.test.assertTrue

abstract class BaseChildPagesTest {

    protected val navigation: PagesNavigation<Int> = PagesNavigation()

    protected fun ComponentContext.childPages(
        initialPages: Pages<Int> = Pages(),
        persistent: Boolean = true,
    ): Value<ChildPages<Int, Component>> =
        childPages(
            source = navigation,
            serializer = Int.serializer().takeIf { persistent },
            initialPages = { initialPages },
            handleBackButton = true,
            childFactory = ::Component,
        )

    protected fun ChildPages<Int, Component>.assertPages(selectedIndex: Int, size: Int) {
        assertPages(
            ids = List(size) { it },
            selectedIndex = selectedIndex,
        )
    }

    protected fun ChildPages<Int, Component>.assertPages(ids: List<Int>, selectedIndex: Int) {
        val pages =
            ids.mapIndexed { index, id ->
                id to id.takeIf { index in (selectedIndex - 1)..(selectedIndex + 1) }
            }

        assertContentEquals(pages, items.map { it.configuration to it.instance?.config })
        assertEquals(selectedIndex, selectedIndex)

        items.forEachIndexed { index, item ->
            when (index) {
                selectedIndex -> {
                    assertIs<Child.Created<Int, Component>>(item)
                    assertEquals(Lifecycle.State.RESUMED, item.instance.lifecycle.state)
                }

                in (selectedIndex - 1)..(selectedIndex + 1) -> {
                    assertIs<Child.Created<Int, Component>>(item)
                    assertEquals(Lifecycle.State.CREATED, item.instance.lifecycle.state)
                }

                else -> assertIs<Child.Destroyed<Int>>(item, "Index: $index")
            }
        }
    }

    protected fun ChildPages<Int, Component>.assertPagesEmpty() {
        assertTrue(items.isEmpty())
    }

    protected class Component(
        val config: Int,
        componentContext: ComponentContext,
    ) : ComponentContext by componentContext
}
