package com.arkivanov.sample.masterdetail.composeui.root

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.RouterState
import com.arkivanov.decompose.extensions.compose.jetbrains.Children
import com.arkivanov.decompose.extensions.compose.jetbrains.animation.child.crossfade
import com.arkivanov.decompose.extensions.compose.jetbrains.subscribeAsState
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.masterdetail.composeui.details.ArticleDetailsUi
import com.arkivanov.sample.masterdetail.composeui.list.ArticleListUi
import com.arkivanov.sample.masterdetail.shared.root.Root

@Composable
fun RootUi(component: Root) {
    BoxWithConstraints {
        val multiPaneDetails = component.detailsRouterState.subscribeAsState().value.activeChild.instance

        Row(modifier = Modifier.fillMaxSize()) {
            MainChild(
                mainRouterState = component.mainRouterState,
                modifier = when (multiPaneDetails) {
                    is Root.DetailsChild.None -> Modifier
                    is Root.DetailsChild.NotSelected,
                    is Root.DetailsChild.Selected -> Modifier.weight(0.4F)
                }
            )

            when (multiPaneDetails) {
                is Root.DetailsChild.None -> Unit
                is Root.DetailsChild.NotSelected -> Box(modifier = Modifier.weight(0.6F))

                is Root.DetailsChild.Selected ->
                    ArticleDetailsUi(
                        component = multiPaneDetails.component,
                        modifier = Modifier.weight(0.6F)
                    )
            }.let {}
        }

        val isMultiPaneMode = this@BoxWithConstraints.maxWidth >= 800.dp

        DisposableEffect(isMultiPaneMode) {
            component.setMultiPane(isMultiPaneMode)
            onDispose {}
        }
    }
}

@Composable
private fun MainChild(mainRouterState: Value<RouterState<*, Root.MainChild>>, modifier: Modifier) {
    Box(modifier = modifier) {
        Children(
            routerState = mainRouterState,
            animation = crossfade()
        ) {
            when (val child = it.instance) {
                is Root.MainChild.List -> ArticleListUi(child.component)
                is Root.MainChild.Details -> ArticleDetailsUi(child.component)
            }
        }
    }
}
