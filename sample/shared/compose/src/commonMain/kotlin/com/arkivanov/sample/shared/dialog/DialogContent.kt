package com.arkivanov.sample.shared.dialog

import androidx.compose.foundation.layout.width
import androidx.compose.material.Text
import androidx.compose.material.AlertDialog
import androidx.compose.material.ExperimentalMaterialApi
import androidx.compose.material.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

@OptIn(ExperimentalMaterialApi::class)
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
        confirmButton = {
            TextButton(
                onClick = {
                    dialogComponent.onDismissClicked()
                }
            ) {
                Text("Dismiss")
            }
        },
        modifier = Modifier.width(300.dp),
    )
}
