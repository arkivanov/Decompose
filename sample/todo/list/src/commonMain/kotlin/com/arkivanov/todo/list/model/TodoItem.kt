package com.arkivanov.todo.list.model

data class TodoItem(
    val id: Long = 0L,
    val order: Long = 0L,
    val text: String = "",
    val isDone: Boolean = false
)
