package com.arkivanov.decompose.extensions.compose.experimental.stack.animation

import androidx.compose.foundation.layout.Box
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.compose.runtime.snapshots.Snapshot
import androidx.compose.ui.ImageComposeScene
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.experimental.animateFloat
import com.arkivanov.decompose.extensions.compose.experimental.stack.dropLast
import com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback.PredictiveBackAnimatable
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.essenty.backhandler.BackDispatcher
import com.arkivanov.essenty.backhandler.BackEvent
import kotlinx.coroutines.CoroutineExceptionHandler
import kotlinx.coroutines.Dispatchers
import javax.swing.SwingUtilities
import kotlin.test.Test
import kotlin.test.assertEquals

/**
 * Covers https://github.com/arkivanov/Decompose/issues/1012.
 *
 * Uses [ImageComposeScene] to be able to control frame times, which is not possible with the regular Compose test rule.
 */
@Suppress("TestFunctionName")
@OptIn(ExperimentalDecomposeApi::class)
class PredictiveBackNonMonotonicFrameTimeTest {

    private val backDispatcher = BackDispatcher()

    @Test
    fun GIVEN_predictive_animatable_and_content_without_transition_animations_WHEN_back_and_frame_time_goes_backwards_THEN_stack_popped() {
        testFrameTimeGoesBackwards(isContentAnimated = false)
    }

    @Test
    fun GIVEN_predictive_animatable_and_content_with_transition_animations_WHEN_back_and_frame_time_goes_backwards_THEN_stack_popped() {
        testFrameTimeGoesBackwards(isContentAnimated = true)
    }

    private fun testFrameTimeGoesBackwards(isContentAnimated: Boolean) {
        var stack by mutableStateOf(stack("1", "2"))
        val errors = ArrayList<Throwable>()

        // Run everything on the Swing thread, so that snapshot apply notifications scheduled by Compose
        // on Dispatchers.Swing don't race with the test and the order of frames is deterministic.
        SwingUtilities.invokeAndWait {
            val animation =
                DefaultStackAnimation<String, String>(
                    disableInputDuringAnimation = false,
                    predictiveBackParams = {
                        PredictiveBackParams(
                            backHandler = backDispatcher,
                            onBack = { stack = stack.dropLast() },
                            animatable = { TestAnimatable() },
                        )
                    },
                    selector = { _, _, _, _ -> null },
                )

            val scene =
                ImageComposeScene(
                    width = 100,
                    height = 100,
                    coroutineContext = Dispatchers.Unconfined + CoroutineExceptionHandler { _, e -> errors += e },
                ) {
                    animation(stack, Modifier) {
                        if (isContentAnimated) {
                            val alpha by transition.animateFloat()
                            Box(modifier = Modifier.alpha(alpha))
                        } else {
                            Box(modifier = Modifier)
                        }
                    }
                }

            var frameTimeNanos = 1_000_000_000L

            fun render() {
                Snapshot.sendApplyNotifications()
                try {
                    scene.render(nanoTime = frameTimeNanos)
                } catch (e: Throwable) {
                    errors += e
                }
            }

            fun renderNextFrame() {
                frameTimeNanos += FRAME_DURATION_NANOS
                render()
            }

            render()
            backDispatcher.startPredictiveBack(BackEvent(progress = 0F))
            renderNextFrame()
            backDispatcher.progressPredictiveBack(BackEvent(progress = 0.5F))
            renderNextFrame()
            backDispatcher.back()
            renderNextFrame()

            repeat(10) {
                frameTimeNanos -= 1_000_000L // Frame time goes backwards
                render()
            }

            repeat(50) {
                renderNextFrame()
            }

            scene.close()
        }

        assertEquals(emptyList(), errors)
        assertEquals(stack("1"), stack)
    }

    private fun stack(vararg configs: String): ChildStack<String, String> =
        ChildStack(
            active = child(configs.last()),
            backStack = configs.dropLast(1).map(::child),
        )

    private fun child(config: String): Child.Created<String, String> =
        Child.Created(configuration = config, instance = config)

    private class TestAnimatable : PredictiveBackAnimatable {
        override val exitModifier: Modifier get() = Modifier
        override val enterModifier: Modifier get() = Modifier

        override suspend fun animate(event: BackEvent) {
            // no-op
        }

        override suspend fun finish() {
            // no-op
        }

        override suspend fun cancel() {
            // no-op
        }
    }

    private companion object {
        private const val FRAME_DURATION_NANOS = 16_000_000L
    }
}
