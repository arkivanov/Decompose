package com.arkivanov.sample.shared.multipane

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.movableContentOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.SaveableStateHolder
import androidx.compose.runtime.saveable.rememberSaveableStateHolder
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.extensions.compose.subscribeAsState
import com.arkivanov.sample.shared.multipane.details.ArticleDetailsComponent
import com.arkivanov.sample.shared.multipane.details.ArticleDetailsContent
import com.arkivanov.sample.shared.multipane.list.ArticleListComponent
import com.arkivanov.sample.shared.multipane.list.ArticleListContent
import com.arkivanov.sample.shared.utils.TopAppBar

@Composable
internal fun MultiPaneContent(component: MultiPaneComponent, modifier: Modifier = Modifier) {
    val children by component.panels.subscribeAsState()
    val listChild = children.main
    val detailsChild = children.details

    val saveableStateHolder = rememberSaveableStateHolder()

    val listPane: @Composable (Child.Created<*, ArticleListComponent>) -> Unit =
        remember {
            movableContentOf { (config, component) ->
                saveableStateHolder.SaveableStateProvider(key = config.hashCode()) {
                    ArticleListContent(
                        component = component,
                        modifier = Modifier.fillMaxSize(),
                    )
                }
            }
        }

    val detailsPane: @Composable (Child.Created<*, ArticleDetailsComponent>) -> Unit =
        remember {
            movableContentOf { (config, component) ->
                saveableStateHolder.SaveableStateProvider(key = config.hashCode()) {
                    ArticleDetailsContent(
                        component = component,
                        modifier = Modifier.fillMaxSize(),
                    )
                }
            }
        }

    saveableStateHolder.OldDetailsKeyRemoved(selectedDetailsKey = detailsChild?.configuration?.hashCode())

    Column(modifier = modifier) {
        if (children.isMultiPane) {
            TopAppBar(title = "Multi-Pane Layout")
        }

        BoxWithConstraints(modifier = Modifier.fillMaxSize()) {
            when {
                children.isMultiPane ->
                    Row(modifier = Modifier.fillMaxSize()) {
                        Box(modifier = Modifier.fillMaxHeight().weight(0.4F)) {
                            listPane(listChild)
                        }

                        Box(modifier = Modifier.fillMaxHeight().weight(0.6F)) {
                            detailsChild?.also {
                                detailsPane(it)
                            }
                        }
                    }

                detailsChild != null -> detailsPane(detailsChild)
                else -> listPane(listChild)
            }

            val isMultiPaneRequired = this@BoxWithConstraints.maxWidth >= 800.dp

            DisposableEffect(isMultiPaneRequired) {
                component.setMultiPane(isMultiPaneRequired)
                onDispose {}
            }
        }
    }
}

@Composable
private fun SaveableStateHolder.OldDetailsKeyRemoved(selectedDetailsKey: Any?) {
    var lastDetailsKey by remember { mutableStateOf(selectedDetailsKey) }

    if (selectedDetailsKey == lastDetailsKey) {
        return
    }

    val keyToRemove = lastDetailsKey
    lastDetailsKey = selectedDetailsKey

    if (keyToRemove == null) {
        return
    }

    DisposableEffect(keyToRemove) {
        removeState(key = keyToRemove)
        onDispose {}
    }
}
