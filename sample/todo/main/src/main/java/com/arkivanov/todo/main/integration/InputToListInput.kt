package com.arkivanov.todo.main.integration

import com.arkivanov.todo.main.TodoMainComponent.Input
import com.arkivanov.todo.list.TodoListComponent.Input as ListInput

internal val inputToListInput: Input.() -> ListInput? =
    {
        when (this) {
            is Input.Update -> ListInput.Update(id = id, text = text, isDone = isDone)
        }
    }
