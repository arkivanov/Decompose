package com.arkivanov.decompose.extensions.compose.jetpack.pages

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
import org.junit.Test
import java.io.Serializable

class PagesTest {

    @get:Rule
    val composeRule = createComposeRule()

    @OptIn(ExperimentalDecomposeApi::class)
    @Test
    fun GIVEN_pages_dislpayed_WHEN_page_state_changed_THEN_pageCount_updated() {
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

        state.setValueOnIdle(
            ChildPages(
                items = listOf(
                    Child.Created(Config.Config1, Config.Config1),
                    Child.Destroyed(Config.Config2),
                    Child.Created(Config.Config3, Config.Config3),
                ),
                selectedIndex = 2,
            )
        )

        composeRule.onNodeWithText(text = "Page2", substring = true).assertExists()
    }

    @OptIn(ExperimentalDecomposeApi::class)
    @Test
    fun GIVEN_page0_dislpayed_WHEN_switching_pages_THEN_current_page_updated() {
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

        state.setValueOnIdle(state.value.copy(selectedIndex = 1))

        composeRule.onNodeWithText(text = "Page1", substring = true).assertExists()
    }

    @OptIn(ExperimentalDecomposeApi::class, ExperimentalFoundationApi::class)
    private fun setContent(stack: State<ChildPages<Config, Config>>, ) {
        composeRule.setContent {
            Pages(
                pages = stack,
                onPageSelected = {},
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

    private fun <T> MutableState<T>.setValueOnIdle(value: T) {
        composeRule.runOnIdle { this.value = value }
        composeRule.runOnIdle {}
    }

    private sealed class Config : Serializable {
        data object Config1 : Config()
        data object Config2 : Config()
        data object Config3 : Config()
    }
}
