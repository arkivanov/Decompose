package com.arkivanov.todo.edit.store

import com.arkivanov.mvikotlin.core.store.Store
import com.arkivanov.todo.edit.store.EditStore.Intent
import com.arkivanov.todo.edit.store.EditStore.Label
import com.arkivanov.todo.edit.store.EditStore.State

internal interface EditStore : Store<Intent, State, Label> {

    sealed class Intent {
        data class SetText(val text: String) : Intent()
        data class SetDone(val isDone: Boolean) : Intent()
    }

    data class State(
        val text: String = "",
        val isDone: Boolean = false
    )

    sealed class Label {
        data class Changed(val text: String, val isDone: Boolean) : Label()
    }
}