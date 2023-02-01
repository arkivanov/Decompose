package com.arkivanov.sample.shared.utils

import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier

@Composable
internal expect fun AlertDialog(
    onDismissRequest: () -> Unit,
    confirmButton: @Composable () -> Unit,
    modifier: Modifier,
    title: @Composable () -> Unit,
    text: @Composable () -> Unit,
)
