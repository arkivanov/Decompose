package com.arkivanov.todo.main

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.material.Text
import androidx.compose.material.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.arkivanov.todo.add.invoke
import com.arkivanov.todo.list.invoke

@Composable
operator fun TodoMain.Model.invoke() {
    Column {
        TopAppBar(title = { Text(text = "Todo List") })

        Box(modifier = Modifier.weight(1F)) {
            list.model()
        }
        add.model()
    }
}
