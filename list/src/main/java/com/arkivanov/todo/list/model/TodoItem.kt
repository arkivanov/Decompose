package com.arkivanov.todo.list.model

internal data class TodoItem(
    val id: Long = 0L,
    val timestamp: Long = 0L,
    val text: String = "",
    val isDone: Boolean = false
)
