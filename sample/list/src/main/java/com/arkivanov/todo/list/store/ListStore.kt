package com.arkivanov.todo.list.store

import com.arkivanov.mvikotlin.core.store.Store
import com.arkivanov.todo.list.model.TodoItem
import com.arkivanov.todo.list.store.ListStore.Intent
import com.arkivanov.todo.list.store.ListStore.State

internal interface ListStore : Store<Intent, State, Nothing> {

    sealed class Intent {
        data class SetDone(val id: Long, val isDone: Boolean) : Intent()
        data class Put(val id: Long, val timestamp: Long, val text: String) : Intent()
        data class Update(val id: Long, val text: String, val isDone: Boolean) : Intent()
    }

    data class State(
        val items: List<TodoItem> = emptyList()
    )
}