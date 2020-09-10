package com.arkivanov.todo.main

import androidx.compose.foundation.Text
import androidx.compose.foundation.layout.Column
import androidx.compose.material.TopAppBar
import androidx.compose.runtime.Composable
import com.arkivanov.todo.add.invoke
import com.arkivanov.todo.list.invoke

@Composable
operator fun TodoMain.Model.invoke() {
    Column {
        TopAppBar(title = { Text(text = "Todo List") })

        listModel()
        addModel()
    }
}
