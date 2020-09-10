package com.arkivanov.todo.add.store

import com.arkivanov.mvikotlin.core.store.Store
import com.arkivanov.todo.add.store.AddStore.Intent
import com.arkivanov.todo.add.store.AddStore.Label
import com.arkivanov.todo.add.store.AddStore.State

internal interface AddStore : Store<Intent, State, Label> {

    sealed class Intent {
        data class SetText(val text: String) : Intent()
        object Add : Intent()
    }

    data class State(
        val text: String = ""
    )

    sealed class Label {
        data class Added(val id: Long, val order: Long, val text: String) : Label()
    }
}