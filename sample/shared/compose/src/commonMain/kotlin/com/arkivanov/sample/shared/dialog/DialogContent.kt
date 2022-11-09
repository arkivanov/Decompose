package com.arkivanov.sample.shared.dialog

import androidx.compose.material.Text
import androidx.compose.material.AlertDialog
import androidx.compose.material.TextButton
import androidx.compose.runtime.Composable

@Composable
fun DialogContent(dialogComponent: DialogComponent) {
    AlertDialog(
        onDismissRequest = {
            dialogComponent.onDismissClicked()
        },
        title = {
            Text(text = "Decompose Sample Dialog")
        },
        text = {
            Text(text = dialogComponent.message)
        },
        confirmButton = {},
        dismissButton = {
            TextButton(
                onClick = {
                    dialogComponent.onDismissClicked()
                }
            ) {
                Text("Dismiss")
            }
        }
    )
}
