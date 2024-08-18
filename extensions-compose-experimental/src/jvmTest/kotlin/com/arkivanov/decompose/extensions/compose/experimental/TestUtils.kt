package com.arkivanov.decompose.extensions.compose.experimental

import androidx.compose.ui.semantics.SemanticsConfiguration
import androidx.compose.ui.semantics.SemanticsNode
import androidx.compose.ui.semantics.SemanticsProperties
import androidx.compose.ui.semantics.getOrNull
import androidx.compose.ui.test.SemanticsNodeInteraction
import kotlin.test.fail

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
