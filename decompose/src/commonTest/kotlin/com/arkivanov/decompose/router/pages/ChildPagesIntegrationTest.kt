package com.arkivanov.decompose.router.pages

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.statekeeper.TestStateKeeperDispatcher
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.getValue
import com.arkivanov.essenty.backhandler.BackDispatcher
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.resume
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.Parcelize
import kotlin.test.BeforeTest
import kotlin.test.Test
import kotlin.test.assertEquals

@Suppress("TestFunctionName")
class ChildPagesIntegrationTest {

    private val navigation = PagesNavigation<Config>()
    private val lifecycle = LifecycleRegistry()
    private val stateKeeper = TestStateKeeperDispatcher()
    private val instanceKeeper = InstanceKeeperDispatcher()
    private val backDispatcher = BackDispatcher()

    private val context =
        DefaultComponentContext(
            lifecycle = lifecycle,
            stateKeeper = stateKeeper,
            instanceKeeper = instanceKeeper,
            backHandler = backDispatcher,
        )

    @BeforeTest
    fun before() {
        lifecycle.resume()
    }

    @Test
    fun GIVEN_three_pages_and_last_selected_WHEN_selectNext_circular_THEN_first_selected() {
        val pages by context.childPages(initialPages = Pages(items = configs(1, 2, 3), selectedIndex = 2))

        navigation.selectNext(circular = true)

        assertEquals(0, pages.selectedIndex)
    }

    @Test
    fun GIVEN_three_pages_and_first_selected_WHEN_selectNext_circular_THEN_first_selected() {
        val pages by context.childPages(initialPages = Pages(items = configs(1, 2, 3), selectedIndex = 2))

        navigation.selectNext(circular = true)

        assertEquals(0, pages.selectedIndex)
    }

    private fun ComponentContext.childPages(
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

    private fun configs(vararg ids: Int): List<Config> =
        ids.map { Config(id = it) }

    @Parcelize
    private data class Config(
        val id: Int,
    ) : Parcelable

    private class Component(
        config: Config,
        componentContext: ComponentContext,
    ) : ComponentContext by componentContext {
        val id: Int = config.id
    }
}
