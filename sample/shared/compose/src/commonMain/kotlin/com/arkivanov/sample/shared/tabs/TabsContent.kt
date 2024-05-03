package com.arkivanov.sample.shared.tabs

import androidx.compose.desktop.ui.tooling.preview.Preview
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.consumeWindowInsets
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.navigationBars
import androidx.compose.foundation.layout.navigationBarsPadding
import androidx.compose.material.BottomNavigation
import androidx.compose.material.BottomNavigationItem
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.List
import androidx.compose.material.icons.filled.Menu
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.material.primarySurface
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.extensions.compose.stack.Children
import com.arkivanov.decompose.extensions.compose.stack.animation.fade
import com.arkivanov.decompose.extensions.compose.stack.animation.stackAnimation
import com.arkivanov.decompose.extensions.compose.subscribeAsState
import com.arkivanov.sample.shared.SwipeUp
import com.arkivanov.sample.shared.cards.CardsContent
import com.arkivanov.sample.shared.counters.CountersContent
import com.arkivanov.sample.shared.menu.MenuContent
import com.arkivanov.sample.shared.multipane.MultiPaneContent
import com.arkivanov.sample.shared.tabs.TabsComponent.Child.CardsChild
import com.arkivanov.sample.shared.tabs.TabsComponent.Child.CountersChild
import com.arkivanov.sample.shared.tabs.TabsComponent.Child.MenuChild
import com.arkivanov.sample.shared.tabs.TabsComponent.Child.MultiPaneChild

@Composable
internal fun TabsContent(
    component: TabsComponent,
    modifier: Modifier = Modifier,
) {
    Column(modifier = modifier) {
        Children(component = component, modifier = Modifier.weight(1F).consumeWindowInsets(WindowInsets.navigationBars))
        BottomBar(component = component, modifier = Modifier.fillMaxWidth())
    }
}

@Composable
private fun Children(component: TabsComponent, modifier: Modifier = Modifier) {
    Children(
        stack = component.stack,
        modifier = modifier,
        animation = stackAnimation(fade()),
    ) {
        when (val child = it.instance) {
            is MenuChild -> MenuContent(component = child.component, modifier = Modifier.fillMaxSize())
            is CountersChild -> CountersContent(component = child.component, modifier = Modifier.fillMaxSize())
            is CardsChild -> CardsContent(component = child.component, modifier = Modifier.fillMaxSize())
            is MultiPaneChild -> MultiPaneContent(component = child.component, modifier = Modifier.fillMaxSize())
        }
    }
}

@Composable
private fun BottomBar(component: TabsComponent, modifier: Modifier = Modifier) {
    val stack by component.stack.subscribeAsState()
    val activeComponent = stack.active.instance

    BottomNavigation(
        modifier = modifier
            .fillMaxWidth()
            .background(MaterialTheme.colors.primarySurface)
            .navigationBarsPadding(),
        elevation = 0.dp,
    ) {
        BottomNavigationItem(
            selected = activeComponent is MenuChild,
            onClick = component::onMenuTabClicked,
            icon = {
                Icon(
                    imageVector = Icons.Default.Menu,
                    contentDescription = "Menu",
                )
            },
        )

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
                    imageVector = Icons.AutoMirrored.Default.List,
                    contentDescription = "Multi-Pane",
                )
            },
        )
    }
}

@Preview
@Composable
internal fun TabsContentPreview() {
    TabsContent(PreviewTabsComponent())
}
