package com.arkivanov.sample.shared.root

import androidx.compose.desktop.ui.tooling.preview.Preview
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.material.BottomNavigation
import androidx.compose.material.BottomNavigationItem
import androidx.compose.material.Icon
import androidx.compose.material.IconButton
import androidx.compose.material.Text
import androidx.compose.material.TopAppBar
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Favorite
import androidx.compose.material.icons.filled.Info
import androidx.compose.material.icons.filled.List
import androidx.compose.material.icons.filled.LocationOn
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
import com.arkivanov.decompose.router.overlay.ChildOverlay
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.counters.CountersContent
import com.arkivanov.sample.shared.counters.PreviewCountersComponent
import com.arkivanov.sample.shared.customnavigation.CustomNavigationComponent
import com.arkivanov.sample.shared.customnavigation.CustomNavigationContent
import com.arkivanov.sample.shared.dialog.DialogComponent
import com.arkivanov.sample.shared.dialog.DialogContent
import com.arkivanov.sample.shared.dynamicfeatures.DynamicFeaturesContent
import com.arkivanov.sample.shared.multipane.MultiPaneContent
import com.arkivanov.sample.shared.root.RootComponent.Child
import com.arkivanov.sample.shared.root.RootComponent.Child.CountersChild
import com.arkivanov.sample.shared.root.RootComponent.Child.CustomNavigationChild
import com.arkivanov.sample.shared.root.RootComponent.Child.DynamicFeaturesChild
import com.arkivanov.sample.shared.root.RootComponent.Child.MultiPaneChild

@OptIn(ExperimentalDecomposeApi::class)
@Composable
fun RootContent(component: RootComponent, modifier: Modifier = Modifier) {
    val childStack by component.childStack.subscribeAsState()
    val activeComponent = childStack.active.instance
    val dialogState by component.dialog.subscribeAsState()

    Column(modifier = modifier) {
        TopAppBar(
            title = { Text("Decompose App Samples") },
            actions = {
                IconButton(onClick = { component.onInfoActionClicked() }) {
                    Icon(Icons.Filled.Info, contentDescription = "Show Application Info")
                }
            }
        )
        Children(
            stack = childStack,
            modifier = Modifier.weight(weight = 1F),
            animation = tabAnimation(),
        ) {
            when (val child = it.instance) {
                is CountersChild -> CountersContent(component = child.component, modifier = Modifier.fillMaxSize())
                is MultiPaneChild -> MultiPaneContent(component = child.component, modifier = Modifier.fillMaxSize())
                is DynamicFeaturesChild -> DynamicFeaturesContent(component = child.component, modifier = Modifier.fillMaxSize())
                is CustomNavigationChild -> CustomNavigationContent(component = child.component, modifier.fillMaxSize())
            }
        }

        BottomNavigation(modifier = Modifier.fillMaxWidth()) {
            BottomNavigationItem(
                selected = activeComponent is CountersChild,
                onClick = component::onCountersTabClicked,
                icon = {
                    Icon(
                        imageVector = Icons.Default.Refresh,
                        contentDescription = "Counters",
                    )
                },
                label = { Text(text = "Counters", softWrap = false) },
            )

            BottomNavigationItem(
                selected = activeComponent is MultiPaneChild,
                onClick = component::onMultiPaneTabClicked,
                icon = {
                    Icon(
                        imageVector = Icons.Default.List,
                        contentDescription = "Multi-Pane",
                    )
                },
                label = { Text(text = "Multi-Pane", softWrap = false) },
            )

            BottomNavigationItem(
                selected = activeComponent is DynamicFeaturesChild,
                onClick = component::onDynamicFeaturesTabClicked,
                icon = {
                    Icon(
                        imageVector = Icons.Default.Favorite,
                        contentDescription = "Dynamic Features",
                    )
                },
                label = { Text(text = "Dyn Features", softWrap = false) },
            )

            BottomNavigationItem(
                selected = activeComponent is CustomNavigationComponent,
                onClick = component::onCustomNavigationTabClicked,
                icon = {
                    Icon(
                        imageVector = Icons.Default.LocationOn,
                        contentDescription = "Custom Navigation",
                    )
                },
                label = { Text(text = "Custom Nav", softWrap = false) },
            )
        }

        dialogState.overlay?.instance?.also {
            DialogContent(dialogComponent = it)
        }
    }
}

@OptIn(ExperimentalDecomposeApi::class)
@Composable
private fun tabAnimation(): StackAnimation<Any, Child> =
    stackAnimation { child, otherChild, direction ->
        val index = child.instance.index
        val otherIndex = otherChild.instance.index
        val anim = slide()
        if ((index > otherIndex) == direction.isEnter) anim else anim.flipSide()
    }

private val Child.index: Int
    get() =
        when (this) {
            is CountersChild -> 0
            is MultiPaneChild -> 1
            is DynamicFeaturesChild -> 2
            is CustomNavigationChild -> 3
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
    RootContent(PreviewRootComponent())
}

internal class PreviewRootComponent : RootComponent {
    override val childStack: Value<ChildStack<*, Child>> =
        MutableValue(
            ChildStack(
                configuration = Unit,
                instance = CountersChild(component = PreviewCountersComponent()),
            )
        )
    override val dialog: Value<ChildOverlay<*, DialogComponent>> =
        MutableValue(
            ChildOverlay<Unit, DialogComponent>()
        )

    override fun onCountersTabClicked() {}
    override fun onMultiPaneTabClicked() {}
    override fun onDynamicFeaturesTabClicked() {}
    override fun onCustomNavigationTabClicked() {}
    override fun onInfoActionClicked() {}
}
