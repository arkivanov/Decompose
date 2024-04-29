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
import kotlinx.serialization.builtins.serializer
import kotlin.test.BeforeTest
import kotlin.test.Test
import kotlin.test.assertEquals

@Suppress("TestFunctionName")
class ChildPagesIntegrationTest {

    private val navigation = PagesNavigation<Int>()
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
        val pages by context.childPages(initialPages = Pages(items = listOf(1, 2, 3), selectedIndex = 2))

        navigation.selectNext(circular = true)

        assertEquals(0, pages.selectedIndex)
    }

    @Test
    fun GIVEN_three_pages_and_first_selected_WHEN_selectNext_circular_THEN_first_selected() {
        val pages by context.childPages(initialPages = Pages(items = listOf(1, 2, 3), selectedIndex = 2))

        navigation.selectNext(circular = true)

        assertEquals(0, pages.selectedIndex)
    }

    private fun ComponentContext.childPages(
        initialPages: Pages<Int> = Pages(),
        persistent: Boolean = true,
    ): Value<ChildPages<Int, Any>> =
        childPages(
            source = navigation,
            serializer = Int.serializer().takeIf { persistent },
            initialPages = { initialPages },
            handleBackButton = true,
            childFactory = { config, _ -> config },
        )
}
