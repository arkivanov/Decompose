package com.arkivanov.todo.main.integration

import com.arkivanov.todo.main.TodoMain.Input
import com.arkivanov.todo.list.TodoList.Input as ListInput

internal val inputToListInput: Input.() -> ListInput? =
    {
        when (this) {
            is Input.Update -> ListInput.Update(id = id, text = text, isDone = isDone)
        }
    }
