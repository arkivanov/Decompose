package com.arkivanov.todo.main.integration

import com.arkivanov.todo.main.TodoMainComponent.Output
import com.arkivanov.todo.list.TodoListComponent.Output as ListOutput

internal val listOutputToOutput: ListOutput.() -> Output? =
    {
        when (this) {
            is ListOutput.Selected -> Output.Selected(id = id)
        }
    }
