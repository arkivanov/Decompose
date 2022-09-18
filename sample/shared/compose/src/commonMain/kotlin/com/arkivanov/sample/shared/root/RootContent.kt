package com.arkivanov.sample.shared.root

import androidx.compose.desktop.ui.tooling.preview.Preview
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.material.BottomNavigation
import androidx.compose.material.BottomNavigationItem
import androidx.compose.material.Icon
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Favorite
import androidx.compose.material.icons.filled.List
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.Children
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.Direction
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.StackAnimation
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.StackAnimator
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.isEnter
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.slide
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.stackAnimation
import com.arkivanov.decompose.extensions.compose.jetbrains.subscribeAsState
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.ReqValue
import com.arkivanov.decompose.value.asRequired
import com.arkivanov.sample.shared.counters.CountersContent
import com.arkivanov.sample.shared.counters.CountersPreview
import com.arkivanov.sample.shared.dynamicfeatures.DynamicFeaturesContent
import com.arkivanov.sample.shared.multipane.MultiPaneContent
import com.arkivanov.sample.shared.root.Root.Child.CountersChild
import com.arkivanov.sample.shared.root.Root.Child.DynamicFeaturesChild
import com.arkivanov.sample.shared.root.Root.Child.MultiPaneChild

@OptIn(ExperimentalDecomposeApi::class)
@Composable
fun RootContent(root: Root, modifier: Modifier = Modifier) {
    val childStack by root.childStack.subscribeAsState()
    val activeComponent = childStack.active.instance

    Column(modifier = modifier) {
        Children(
            stack = childStack,
            modifier = Modifier.weight(weight = 1F),
            animation = tabAnimation(),
        ) {
            when (val child = it.instance) {
                is CountersChild -> CountersContent(component = child.component, modifier = Modifier.fillMaxSize())
                is MultiPaneChild -> MultiPaneContent(component = child.component, modifier = Modifier.fillMaxSize())
                is DynamicFeaturesChild -> DynamicFeaturesContent(component = child.component, modifier = Modifier.fillMaxSize())
            }
        }

        BottomNavigation(modifier = Modifier.fillMaxWidth()) {
            BottomNavigationItem(
                selected = activeComponent is CountersChild,
                onClick = root::onCountersTabClicked,
                icon = {
                    Icon(
                        imageVector = Icons.Default.Refresh,
                        contentDescription = "Counters",
                    )
                },
                label = { Text(text = "Counters") },
            )

            BottomNavigationItem(
                selected = activeComponent is MultiPaneChild,
                onClick = root::onMultiPaneTabClicked,
                icon = {
                    Icon(
                        imageVector = Icons.Default.List,
                        contentDescription = "Multi-Pane",
                    )
                },
                label = { Text(text = "Multi-Pane") },
            )

            BottomNavigationItem(
                selected = activeComponent is DynamicFeaturesChild,
                onClick = root::onDynamicFeaturesTabClicked,
                icon = {
                    Icon(
                        imageVector = Icons.Default.Favorite,
                        contentDescription = "Dynamic Features",
                    )
                },
                label = { Text(text = "Dynamic Features") },
            )
        }
    }
}

@OptIn(ExperimentalDecomposeApi::class)
@Composable
private fun tabAnimation(): StackAnimation<Any, Root.Child> =
    stackAnimation { child, otherChild, direction ->
        val index = child.instance.index
        val otherIndex = otherChild.instance.index
        val anim = slide()
        if ((index > otherIndex) == direction.isEnter) anim else anim.flipSide()
    }

private val Root.Child.index: Int
    get() =
        when (this) {
            is CountersChild -> 0
            is MultiPaneChild -> 1
            is DynamicFeaturesChild -> 2
        }

@OptIn(ExperimentalDecomposeApi::class)
private fun StackAnimator.flipSide(): StackAnimator =
    StackAnimator { direction, onFinished, content ->
        invoke(
            direction = direction.flipSide(),
            onFinished = onFinished,
            content = content,
        )
    }

@Suppress("OPT_IN_USAGE")
private fun Direction.flipSide(): Direction =
    when (this) {
        Direction.ENTER_FRONT -> Direction.ENTER_BACK
        Direction.EXIT_FRONT -> Direction.EXIT_BACK
        Direction.ENTER_BACK -> Direction.ENTER_FRONT
        Direction.EXIT_BACK -> Direction.EXIT_FRONT
    }

@Preview
@Composable
internal fun RootContentPreview() {
    RootContent(RootPreview())
}

internal class RootPreview : Root {
    override val childStack: ReqValue<ChildStack<*, Root.Child>> =
        MutableValue(
            ChildStack(
                configuration = Unit,
                instance = CountersChild(component = CountersPreview()),
            )
        ).asRequired()

    override fun onCountersTabClicked() {}
    override fun onMultiPaneTabClicked() {}
    override fun onDynamicFeaturesTabClicked() {}
}
