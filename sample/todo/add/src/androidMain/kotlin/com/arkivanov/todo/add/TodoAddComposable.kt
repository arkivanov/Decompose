package com.arkivanov.todo.add

import androidx.compose.foundation.Text
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.padding
import androidx.compose.material.Button
import androidx.compose.material.OutlinedTextField
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.invoke

@Composable
operator fun TodoAdd.Model.invoke() {
    Row(verticalGravity = Alignment.CenterVertically, modifier = Modifier.padding(8.dp)) {
        data { data ->
            OutlinedTextField(
                value = data.text,
                modifier = Modifier.weight(weight = 1F),
                onValueChange = ::onTextChanged,
                label = { Text(text = "Add a todo") }
            )

            Button(modifier = Modifier.padding(start = 8.dp), onClick = ::onAddClicked) {
                Text(text = "+")
            }
        }
    }
}
