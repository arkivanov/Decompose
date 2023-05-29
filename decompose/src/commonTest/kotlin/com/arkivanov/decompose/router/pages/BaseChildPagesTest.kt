package com.arkivanov.decompose.router.pages

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.Parcelize
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertIs
import kotlin.test.assertTrue

abstract class BaseChildPagesTest {

    protected val navigation: PagesNavigation<Config> = PagesNavigation()

    protected fun ComponentContext.childPages(
        initialPages: Pages<Config> = Pages(),
        persistent: Boolean = true,
    ): Value<ChildPages<Config, Component>> =
        childPages(
            source = navigation,
            initialPages = { initialPages },
            persistent = persistent,
            handleBackButton = true,
            childFactory = ::Component,
        )

    protected fun configs(vararg ids: Int): List<Config> =
        ids.map { Config(id = it) }

    protected fun ChildPages<Config, Component>.assertPages(selectedIndex: Int, size: Int) {
        assertPages(
            ids = List(size) { it },
            selectedIndex = selectedIndex,
        )
    }

    protected fun ChildPages<Config, Component>.assertPages(ids: List<Int>, selectedIndex: Int) {
        val pages =
            ids.mapIndexed { index, id ->
                id to id.takeIf { index in (selectedIndex - 1)..(selectedIndex + 1) }
            }

        assertContentEquals(pages, items.map { it.configuration.id to it.instance?.id })
        assertEquals(selectedIndex, selectedIndex)

        items.forEachIndexed { index, item ->
            when (index) {
                selectedIndex -> {
                    assertIs<Child.Created<Config, Component>>(item)
                    assertEquals(Lifecycle.State.RESUMED, item.instance.lifecycle.state)
                }

                in (selectedIndex - 1)..(selectedIndex + 1) -> {
                    assertIs<Child.Created<Config, Component>>(item)
                    assertEquals(Lifecycle.State.CREATED, item.instance.lifecycle.state)
                }

                else -> assertIs<Child.Destroyed<Config>>(item, "Index: $index")
            }
        }
    }

    protected fun ChildPages<Config, Component>.assertPagesEmpty() {
        assertTrue(items.isEmpty())
    }

    @Parcelize
    protected data class Config(
        val id: Int,
    ) : Parcelable

    protected class Component(
        config: Config,
        componentContext: ComponentContext,
    ) : ComponentContext by componentContext {
        val id: Int = config.id
    }
}
