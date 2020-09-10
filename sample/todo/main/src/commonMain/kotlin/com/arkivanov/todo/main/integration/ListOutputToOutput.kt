package com.arkivanov.todo.main.integration

import com.arkivanov.todo.main.TodoMain.Output
import com.arkivanov.todo.list.TodoList.Output as ListOutput

internal val listOutputToOutput: ListOutput.() -> Output? =
    {
        when (this) {
            is ListOutput.Selected -> Output.Selected(id = id)
        }
    }
