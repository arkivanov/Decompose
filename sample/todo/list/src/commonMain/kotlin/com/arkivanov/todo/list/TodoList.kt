package com.arkivanov.todo.list

import com.arkivanov.decompose.value.Value
import com.arkivanov.todo.list.model.TodoItem

interface TodoList {

    val model: Model

    interface Model : Events {
        val data: Value<Data>
    }

    class Data(
        val items: List<TodoItem>
    )

    interface Events {
        fun onItemClicked(id: Long)
        fun onDoneChanged(id: Long, isDone: Boolean)
    }

    sealed class Input {
        data class Put(val id: Long, val order: Long, val text: String) : Input()
        data class Update(val id: Long, val text: String, val isDone: Boolean) : Input()
    }

    sealed class Output {
        data class Selected(val id: Long) : Output()
    }
}
