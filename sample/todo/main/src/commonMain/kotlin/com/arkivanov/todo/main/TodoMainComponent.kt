package com.arkivanov.todo.main

import com.arkivanov.decompose.Component
import com.arkivanov.todo.add.TodoAdd
import com.arkivanov.todo.list.TodoList
import com.arkivanov.todo.main.TodoMain.Model

interface TodoMain : Component<Model> {

    interface Model {
        val listModel: TodoList.Model
        val addModel: TodoAdd.Model
    }

    sealed class Input {
        data class Update(val id: Long, val text: String, val isDone: Boolean) : Input()
    }

    sealed class Output {
        data class Selected(val id: Long) : Output()
    }
}
