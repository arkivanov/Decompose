package com.arkivanov.sample.shared.root

import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.ui.Modifier
import androidx.compose.ui.window.ComposeUIViewController
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.PredictiveBackGestureIcon
import com.arkivanov.decompose.extensions.compose.PredictiveBackGestureOverlay
import com.arkivanov.essenty.backhandler.BackDispatcher
import platform.UIKit.UIViewController

@OptIn(ExperimentalDecomposeApi::class)
fun rootViewController(root: RootComponent, backDispatcher: BackDispatcher): UIViewController =
    ComposeUIViewController {
        PredictiveBackGestureOverlay(
            backDispatcher = backDispatcher,
            backIcon = { progress, _ ->
                PredictiveBackGestureIcon(
                    imageVector = Icons.Default.ArrowBack,
                    progress = progress,
                )
            },
            modifier = Modifier.fillMaxSize(),
        ) {
            RootContent(component = root, modifier = Modifier.fillMaxSize())
        }
    }
