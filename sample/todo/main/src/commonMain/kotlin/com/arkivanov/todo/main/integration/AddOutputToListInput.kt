package com.arkivanov.todo.main.integration

import com.arkivanov.todo.add.TodoAdd.Output as AddOutput
import com.arkivanov.todo.list.TodoList.Input as ListInput

internal val addOutputToListInput: AddOutput.() -> ListInput? =
    {
        when (this) {
            is AddOutput.Added -> ListInput.Put(id = id, order = order, text = text)
        }
    }
