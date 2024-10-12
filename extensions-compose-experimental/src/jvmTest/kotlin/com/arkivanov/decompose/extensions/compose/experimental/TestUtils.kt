package com.arkivanov.decompose.extensions.compose.experimental

import androidx.compose.animation.EnterExitState
import androidx.compose.animation.core.AnimationConstants
import androidx.compose.animation.core.LinearEasing
import androidx.compose.animation.core.Transition
import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.tween
import androidx.compose.runtime.Composable
import androidx.compose.runtime.State
import androidx.compose.ui.semantics.SemanticsConfiguration
import androidx.compose.ui.semantics.SemanticsNode
import androidx.compose.ui.semantics.SemanticsProperties
import androidx.compose.ui.semantics.getOrNull
import androidx.compose.ui.test.SemanticsNodeInteraction
import kotlin.test.fail

@Composable
internal fun Transition<EnterExitState>.animateFloat(durationMillis: Int = AnimationConstants.DefaultDurationMillis): State<Float> =
    animateFloat(transitionSpec = { tween(easing = LinearEasing, durationMillis = durationMillis) }) { state ->
        when (state) {
            EnterExitState.PreEnter -> 0F
            EnterExitState.Visible -> 1F
            EnterExitState.PostExit -> 0F
        }
    }

internal fun <T> List<T>.takeSorted(comparator: Comparator<T>): List<T> =
    takeWhileIndexed { index, item ->
        (index == 0) || (comparator.compare(item, get(index - 1)) >= 0)
    }

internal fun <T> Iterable<T>.takeWhileIndexed(predicate: (Int, T) -> Boolean): List<T> =
    withIndex()
        .takeWhile { (index, item) -> predicate(index, item) }
        .map { it.value }

internal fun SemanticsNodeInteraction.assertTestTagToRootExists(testTag: String) {
    val count = collectTestTagsToRoot().filter { it == testTag }.size
    if (count != 1) {
        fail("Expected to have one node with the specified test tag \"$testTag\", but was $count")
    }
}

internal fun SemanticsNodeInteraction.assertTestTagToRootDoesNotExist(matcher: (String) -> Boolean) {
    val count = collectTestTagsToRoot().filter(matcher).size
    if (count != 0) {
        fail("Expected not to have a node with a test tag matching the specified predicate, but was $count")
    }
}

private fun SemanticsNodeInteraction.collectTestTagsToRoot(): List<String> =
    collectSemanticsFromRoot()
        .mapNotNull { it.getOrNull(SemanticsProperties.TestTag) }

private fun SemanticsNodeInteraction.collectSemanticsFromRoot(): List<SemanticsConfiguration> {
    val list = ArrayList<SemanticsConfiguration>()
    var node: SemanticsNode? = fetchSemanticsNode()
    while (node != null) {
        list += node.config
        node = node.parent
    }

    return list
}
