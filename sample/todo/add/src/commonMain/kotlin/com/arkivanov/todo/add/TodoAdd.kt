package com.arkivanov.todo.add

import com.arkivanov.decompose.value.Value

interface TodoAdd {

    val model: Model

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
