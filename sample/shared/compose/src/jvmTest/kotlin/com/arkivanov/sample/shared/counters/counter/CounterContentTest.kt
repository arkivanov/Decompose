package com.arkivanov.sample.shared.counters.counter

import androidx.compose.ui.test.assertIsNotEnabled
import androidx.compose.ui.test.assertTextEquals
import androidx.compose.ui.test.junit4.createComposeRule
import androidx.compose.ui.test.onNodeWithTag
import androidx.compose.ui.test.performClick
import com.arkivanov.sample.shared.counters.counter.CounterComponent.Model
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.runBlocking
import org.junit.Rule
import kotlin.test.Test
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class CounterContentTest {

    @get:Rule
    val composeRule = createComposeRule()

    @Test
    fun WHEN_shown_THEN_title_displayed() {
        test(model = Model(title = "Title")) {
            composeRule.onNodeWithTag(testTag = "title").assertTextEquals("Title")
        }
    }

    @Test
    fun WHEN_shown_THEN_text_displayed() {
        test(model = Model(text = "Text")) {
            composeRule.onNodeWithTag(testTag = "text").assertTextEquals("Text")
        }
    }

    @Test
    fun WHEN_text_changed_THEN_text_displayed() {
        test { component ->
            runOnIdle { component.model.value = Model(text = "New text") }

            composeRule.onNodeWithTag(testTag = "text").assertTextEquals("New text")
        }
    }

    @Test
    fun WHEN_next_button_clicked_THEN_onNextClicked_called() {
        test { component ->
            composeRule.onNodeWithTag(testTag = "next").performClick()

            assertTrue(component.isNextClicked)
        }
    }

    @Test
    fun GIVEN_isBackEnabled_true_WHEN_prev_button_clicked_THEN_onPrevClicked_called() {
        test(model = Model(isBackEnabled = true)) { component ->
            composeRule.onNodeWithTag(testTag = "prev").performClick()

            assertTrue(component.isPrevClicked)
        }
    }

    @Test
    fun WHEN_isBackEnabled_false_THEN_prev_button_disabled() {
        test(model = Model(isBackEnabled = false)) {
            composeRule.onNodeWithTag(testTag = "prev").assertIsNotEnabled()
        }
    }

    private suspend fun runOnIdle(block: () -> Unit) {
        composeRule.awaitIdle()
        block()
        composeRule.awaitIdle()
    }

    private fun test(
        model: Model = Model(),
        block: suspend CoroutineScope.(TestCounterComponent) -> Unit,
    ) {
        runBlocking(Dispatchers.Main) {
            val component = TestCounterComponent(model = model)
            composeRule.setContent { CounterContent(component = component) }
            composeRule.awaitIdle()
            block(component)
        }
    }
}
