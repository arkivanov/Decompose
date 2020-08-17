package com.arkivanov.todo.edit.integration.mappings

import com.arkivanov.todo.edit.TodoEditComponent.Output
import com.arkivanov.todo.edit.store.EditStore.Label

internal val labelToOutput: Label.() -> Output? =
    {
        when (this) {
            is Label.Changed -> Output.Changed(text = text, isDone = isDone)
        }
    }