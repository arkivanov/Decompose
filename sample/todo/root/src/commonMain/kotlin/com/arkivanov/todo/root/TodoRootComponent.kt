package com.arkivanov.todo.root

import com.arkivanov.decompose.RouterState
import com.arkivanov.decompose.value.Value
import com.arkivanov.todo.edit.TodoEdit
import com.arkivanov.todo.main.TodoMain

interface TodoRoot {

    val model: Model

    interface Model {
        val routerState: Value<RouterState<*, Child>>
    }

    sealed class Child {
        class Main(val model: TodoMain.Model) : Child()
        class Edit(val model: TodoEdit.Model) : Child()
    }
}
