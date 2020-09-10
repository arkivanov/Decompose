package com.arkivanov.todo.edit

import com.arkivanov.decompose.Component
import com.arkivanov.decompose.value.Value
import com.arkivanov.todo.edit.TodoEdit.Model

interface TodoEdit : Component<Model> {

    interface Model : Events {
        val data: Value<Data>
    }

    class Data(
        val text: String,
        val isDone: Boolean
    )

    interface Events {
        fun onFinished()
        fun onTextChanged(text: String)
        fun onDoneChanged(isDone: Boolean)
    }

    sealed class Output {
        data class Changed(val text: String, val isDone: Boolean) : Output()
        object Finished : Output()
    }
}
