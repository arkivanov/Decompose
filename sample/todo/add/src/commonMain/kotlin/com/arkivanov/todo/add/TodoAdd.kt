package com.arkivanov.todo.add

import com.arkivanov.decompose.Component
import com.arkivanov.decompose.value.Value
import com.arkivanov.todo.add.TodoAdd.Model

interface TodoAdd : Component<Model> {

    interface Model : Events {
        val data: Value<Data>
    }

    class Data(
        val text: String
    )

    interface Events {
        fun onTextChanged(text: String)
        fun onAddClicked()
    }

    sealed class Output {
        data class Added(val id: Long, val order: Long, val text: String) : Output()
    }
}
