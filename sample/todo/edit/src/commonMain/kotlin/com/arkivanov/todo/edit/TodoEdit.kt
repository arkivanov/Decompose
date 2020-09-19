package com.arkivanov.todo.edit

import com.arkivanov.decompose.value.Value

interface TodoEdit {

    val model: Model

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
