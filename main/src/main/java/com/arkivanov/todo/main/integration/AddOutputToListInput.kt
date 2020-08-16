package com.arkivanov.todo.main.integration

import com.arkivanov.todo.add.TodoAddComponent.Output as AddOutput
import com.arkivanov.todo.list.TodoListComponent.Input as ListInput

internal val addOutputToListInput: AddOutput.() -> ListInput? =
    {
        when (this) {
            is AddOutput.Added -> ListInput.Put(id = id, timestamp = timestamp, text = text)
        }
    }