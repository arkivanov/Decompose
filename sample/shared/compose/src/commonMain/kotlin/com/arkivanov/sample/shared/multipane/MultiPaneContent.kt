package com.arkivanov.sample.shared.multipane

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.experimental.panels.ChildPanels
import com.arkivanov.decompose.extensions.compose.experimental.panels.ChildPanelsAnimators
import com.arkivanov.decompose.extensions.compose.experimental.panels.HorizontalChildPanelsLayout
import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.PredictiveBackParams
import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.fade
import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.plus
import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.scale
import com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback.materialPredictiveBackAnimatable
import com.arkivanov.decompose.extensions.compose.subscribeAsState
import com.arkivanov.decompose.router.panels.ChildPanelsMode
import com.arkivanov.decompose.router.panels.isSingle
import com.arkivanov.sample.shared.multipane.author.ArticleAuthorContent
import com.arkivanov.sample.shared.multipane.details.ArticleDetailsContent
import com.arkivanov.sample.shared.multipane.list.ArticleListContent
import com.arkivanov.sample.shared.utils.TopAppBar

@OptIn(ExperimentalDecomposeApi::class)
@Composable
internal fun MultiPaneContent(component: MultiPaneComponent, modifier: Modifier = Modifier) {
    val panels by component.panels.subscribeAsState()

    Column(modifier = modifier) {
        if (!panels.mode.isSingle) {
            TopAppBar(title = "Multi-Pane Layout")
        }

        BoxWithConstraints(modifier = Modifier.fillMaxSize()) {
            ChildPanels(
                panels = panels,
                mainChild = {
                    Surface(modifier = Modifier.fillMaxSize(), color = MaterialTheme.colors.background) {
                        ArticleListContent(
                            component = it.instance,
                            modifier = Modifier.fillMaxSize(),
                        )
                    }
                },
                detailsChild = {
                    Surface(modifier = Modifier.fillMaxSize(), color = MaterialTheme.colors.background) {
                        ArticleDetailsContent(
                            component = it.instance,
                            modifier = Modifier.fillMaxSize(),
                        )
                    }
                },
                extraChild = {
                    Surface(modifier = Modifier.fillMaxSize(), color = MaterialTheme.colors.background) {
                        ArticleAuthorContent(
                            component = it.instance,
                            modifier = Modifier.fillMaxSize(),
                        )
                    }
                },
                layout = HorizontalChildPanelsLayout(
                    dualWeights = Pair(first = 0.3F, second = 0.7F),
                    tripleWeights = Triple(first = 0.3F, second = 0.4F, third = 0.3F),
                ),
                secondPanelPlaceholder = {
                    Surface(modifier = Modifier.fillMaxSize(), color = MaterialTheme.colors.background) {
                        Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
                            Text(text = "Select an article", style = MaterialTheme.typography.subtitle1)
                        }
                    }
                },
                animators = ChildPanelsAnimators(single = fade() + scale(), dual = fade() to fade()),
                predictiveBackParams = {
                    PredictiveBackParams(
                        backHandler = component.backHandler,
                        onBack = component::onBack,
                        animatable = ::materialPredictiveBackAnimatable,
                    )
                },
            )

            val mode =
                when {
                    maxWidth >= 1200.dp -> ChildPanelsMode.TRIPLE
                    maxWidth >= 800.dp -> ChildPanelsMode.DUAL
                    else -> ChildPanelsMode.SINGLE
                }

            DisposableEffect(mode) {
                component.setMode(mode)
                onDispose {}
            }
        }
    }
}
