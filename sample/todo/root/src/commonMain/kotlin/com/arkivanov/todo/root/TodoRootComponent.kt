package com.arkivanov.todo.root

import com.arkivanov.decompose.Component
import com.arkivanov.decompose.value.Value
import com.arkivanov.todo.edit.TodoEdit
import com.arkivanov.todo.main.TodoMain
import com.arkivanov.todo.root.TodoRoot.Model

interface TodoRoot : Component<Model> {

    interface Model {
        val child: Value<Child>
    }

    sealed class Child {
        class Main(val model: TodoMain.Model) : Child()
        class Edit(val model: TodoEdit.Model) : Child()
    }
}
