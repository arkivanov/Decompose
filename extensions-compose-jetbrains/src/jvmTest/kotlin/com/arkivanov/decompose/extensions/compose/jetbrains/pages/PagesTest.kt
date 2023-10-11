package com.arkivanov.decompose.extensions.compose.jetbrains.pages

import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.text.BasicText
import androidx.compose.runtime.Composable
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.State
import androidx.compose.runtime.mutableStateOf
import androidx.compose.ui.test.junit4.createComposeRule
import androidx.compose.ui.test.onNodeWithText
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.pages.ChildPages
import org.junit.Rule
import kotlin.test.Test
import kotlin.test.assertContentEquals

@OptIn(ExperimentalDecomposeApi::class, ExperimentalFoundationApi::class)
@Suppress("TestFunctionName")
class PagesTest {

    @get:Rule
    val composeRule = createComposeRule()

    @Test
    fun GIVEN_pages_displayed_WHEN_page_state_changed_THEN_pageCount_updated() {
        val state = mutableStateOf(
            ChildPages<Config, Config>(
                items = listOf(
                    Child.Created(Config.Config1, Config.Config1),
                    Child.Destroyed(Config.Config2),
                ),
                selectedIndex = 0,
            ),
        )

        setContent(state)
        composeRule.onNodeWithText(text = "Page0", substring = true).assertExists()

        state.updateOnIdle {
            ChildPages(
                items = listOf(
                    Child.Created(Config.Config1, Config.Config1),
                    Child.Destroyed(Config.Config2),
                    Child.Created(Config.Config3, Config.Config3),
                ),
                selectedIndex = 2,
            )
        }

        composeRule.onNodeWithText(text = "Page2", substring = true).assertExists()
    }

    @Test
    fun GIVEN_page0_displayed_WHEN_switching_pages_THEN_current_page_updated() {
        val state = mutableStateOf(
            ChildPages(
                items = listOf(
                    Child.Created(Config.Config1, Config.Config1),
                    Child.Created(Config.Config2, Config.Config2),
                ),
                selectedIndex = 0,
            ),
        )

        setContent(state)
        composeRule.onNodeWithText(text = "Page0", substring = true).assertExists()

        state.updateOnIdle { it.copy(selectedIndex = 1) }

        composeRule.onNodeWithText(text = "Page1", substring = true).assertExists()
    }

    @Test
    fun GIVEN_pages_without_animation_WHEN_page_changed_from_0_to_2_THEN_onPageSelected_called_with_index_2() {
        val state =
            mutableStateOf(
                ChildPages(
                    items = listOf(
                        Child.Created(Config.Config1, Config.Config1),
                        Child.Created(Config.Config2, Config.Config2),
                        Child.Created(Config.Config3, Config.Config3),
                    ),
                    selectedIndex = 0,
                ),
            )

        val indices = ArrayList<Int>()

        setContent(
            pages = state,
            onPageSelected = { indices += it },
        )

        indices.clear()

        state.updateOnIdle { it.copy(selectedIndex = 2) }

        assertContentEquals(listOf(2), indices)
    }


    @Test
    fun GIVEN_pages_with_animation_WHEN_page_changed_from_0_to_2_THEN_onPageSelected_called_with_index_2() {
        val state =
            mutableStateOf(
                ChildPages(
                    items = listOf(
                        Child.Created(Config.Config1, Config.Config1),
                        Child.Created(Config.Config2, Config.Config2),
                        Child.Created(Config.Config3, Config.Config3),
                    ),
                    selectedIndex = 0,
                ),
            )

        val indices = ArrayList<Int>()

        setContent(
            pages = state,
            onPageSelected = { indices += it },
            scrollAnimation = PagesScrollAnimation.Default,
        )

        indices.clear()

        state.updateOnIdle { it.copy(selectedIndex = 2) }

        assertContentEquals(listOf(2), indices)
    }

    private fun setContent(
        pages: State<ChildPages<Config, Config>>,
        onPageSelected: (index: Int) -> Unit = {},
        scrollAnimation: PagesScrollAnimation = PagesScrollAnimation.Disabled,
    ) {
        composeRule.setContent {
            Pages(
                pages = pages,
                onPageSelected = onPageSelected,
                scrollAnimation = scrollAnimation,
            ) { index, page ->
                Page(index, page)
            }
        }

        composeRule.runOnIdle {}
    }

    @Composable
    private fun Page(index: Int, page: Config) {
        BasicText(text = "Page$index=$page")
    }

    private fun <T> MutableState<T>.updateOnIdle(func: (T) -> T) {
        composeRule.runOnIdle { value = func(value) }
        composeRule.runOnIdle {}
    }

    private sealed class Config {
        data object Config1 : Config()
        data object Config2 : Config()
        data object Config3 : Config()
    }
}
