@file:Suppress("OPTIONAL_DECLARATION_USAGE_IN_NON_COMMON_SOURCE") // Workaround for KTIJ-22326

package com.arkivanov.sample.shared.root

import androidx.compose.desktop.ui.tooling.preview.Preview
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.WindowInsetsSides
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.only
import androidx.compose.foundation.layout.systemBars
import androidx.compose.foundation.layout.windowInsetsPadding
import androidx.compose.material.BottomNavigation
import androidx.compose.material.BottomNavigationItem
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Favorite
import androidx.compose.material.icons.filled.List
import androidx.compose.material.icons.filled.LocationOn
import androidx.compose.material.icons.filled.Menu
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.rotate
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.Children
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.Direction
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.StackAnimation
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.StackAnimator
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.fade
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.isEnter
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.slide
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation.stackAnimation
import com.arkivanov.decompose.extensions.compose.jetbrains.subscribeAsState
import com.arkivanov.sample.shared.SwipeUp
import com.arkivanov.sample.shared.cards.CardsContent
import com.arkivanov.sample.shared.counters.CountersContent
import com.arkivanov.sample.shared.customnavigation.CustomNavigationComponent
import com.arkivanov.sample.shared.customnavigation.CustomNavigationContent
import com.arkivanov.sample.shared.dynamicfeatures.DynamicFeaturesContent
import com.arkivanov.sample.shared.multipane.MultiPaneContent
import com.arkivanov.sample.shared.pages.PagesComponent
import com.arkivanov.sample.shared.pages.PagesContent
import com.arkivanov.sample.shared.root.RootComponent.Child
import com.arkivanov.sample.shared.root.RootComponent.Child.CardsChild
import com.arkivanov.sample.shared.root.RootComponent.Child.CountersChild
import com.arkivanov.sample.shared.root.RootComponent.Child.CustomNavigationChild
import com.arkivanov.sample.shared.root.RootComponent.Child.DynamicFeaturesChild
import com.arkivanov.sample.shared.root.RootComponent.Child.MultiPaneChild
import com.arkivanov.sample.shared.root.RootComponent.Child.PagesChild

@Composable
fun RootContent(component: RootComponent, modifier: Modifier = Modifier) {
    MaterialTheme {
        Surface(modifier = modifier, color = MaterialTheme.colors.background) {
            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .windowInsetsPadding(WindowInsets.systemBars.only(WindowInsetsSides.Top + WindowInsetsSides.Horizontal)),
            ) {
                Children(component = component, modifier = Modifier.weight(1F))
                BottomBar(component = component, modifier = Modifier.fillMaxWidth())
            }
        }
    }
}

@Composable
private fun Children(component: RootComponent, modifier: Modifier = Modifier) {
    Children(
        stack = component.childStack,
        modifier = modifier,

        // Workaround for https://issuetracker.google.com/issues/270656235
        animation = stackAnimation(fade()),
//            animation = tabAnimation(),
    ) {
        when (val child = it.instance) {
            is CountersChild -> CountersContent(component = child.component, modifier = Modifier.fillMaxSize())
            is CardsChild -> CardsContent(component = child.component, modifier = Modifier.fillMaxSize())
            is MultiPaneChild -> MultiPaneContent(component = child.component, modifier = Modifier.fillMaxSize())
            is DynamicFeaturesChild -> DynamicFeaturesContent(component = child.component, modifier = Modifier.fillMaxSize())
            is CustomNavigationChild -> CustomNavigationContent(component = child.component, modifier = Modifier.fillMaxSize())
            is PagesChild -> PagesContent(component = child.component, modifier = Modifier.fillMaxSize())
        }
    }
}

@Composable
private fun BottomBar(component: RootComponent, modifier: Modifier = Modifier) {
    val childStack by component.childStack.subscribeAsState()
    val activeComponent = childStack.active.instance

    BottomNavigation(modifier = modifier) {
        BottomNavigationItem(
            selected = activeComponent is CountersChild,
            onClick = component::onCountersTabClicked,
            icon = {
                Icon(
                    imageVector = Icons.Default.Refresh,
                    contentDescription = "Counters",
                )
            },
        )

        BottomNavigationItem(
            selected = activeComponent is CardsChild,
            onClick = component::onCardsTabClicked,
            icon = {
                Icon(
                    imageVector = Icons.Filled.SwipeUp,
                    contentDescription = "Cards",
                )
            },
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
        )

        BottomNavigationItem(
            selected = activeComponent is PagesComponent,
            onClick = component::onPagesTabClicked,
            icon = {
                Icon(
                    imageVector = Icons.Default.Menu,
                    contentDescription = "Pages",
                    modifier = Modifier.rotate(90F),
                )
            },
        )
    }
}

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
            is CardsChild -> 1
            is MultiPaneChild -> 2
            is DynamicFeaturesChild -> 3
            is CustomNavigationChild -> 4
            is PagesChild -> 5
        }

private fun StackAnimator.flipSide(): StackAnimator =
    StackAnimator { direction, isInitial, onFinished, content ->
        invoke(
            direction = direction.flipSide(),
            isInitial = isInitial,
            onFinished = onFinished,
            content = content,
        )
    }

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

