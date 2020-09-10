package com.arkivanov.todo.edit

import androidx.compose.foundation.Icon
import androidx.compose.foundation.Text
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.material.Checkbox
import androidx.compose.material.IconButton
import androidx.compose.material.TextField
import androidx.compose.material.TopAppBar
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.invoke

@Composable
operator fun TodoEdit.Model.invoke() {
    Column(horizontalGravity = Alignment.CenterHorizontally) {
        TopAppBar(
            title = { Text("Edit todo") },
            navigationIcon = {
                IconButton(onClick = ::onFinished) {
                    Icon(Icons.Default.ArrowBack)
                }
            }
        )

        data { data ->
            TextField(
                value = data.text,
                modifier = Modifier.weight(1F) + Modifier.fillMaxWidth() + Modifier.padding(8.dp),
                label = { Text("Todo text") },
                onValueChange = ::onTextChanged
            )

            Row(modifier = Modifier.padding(8.dp)) {
                Text(text = "Completed")

                Spacer(modifier = Modifier.width(8.dp))

                Checkbox(
                    checked = data.isDone,
                    onCheckedChange = { onDoneChanged(isDone = !data.isDone) }
                )
            }
        }
    }
}
