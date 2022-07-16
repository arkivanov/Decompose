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
import com.arkivanov.decompose.extensions.compose.jetbrains.subscribeAsState
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
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

@Preview
@Composable
internal fun RootContentPreview() {
    RootContent(RootPreview())
}

internal class RootPreview : Root {
    override val childStack: Value<ChildStack<*, Root.Child>> =
        MutableValue(
            ChildStack(
                configuration = Unit,
                instance = CountersChild(component = CountersPreview()),
            )
        )

    override fun onCountersTabClicked() {}
    override fun onMultiPaneTabClicked() {}
    override fun onDynamicFeaturesTabClicked() {}
}
