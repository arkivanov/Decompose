package com.arkivanov.todo.root.integration

import com.arkivanov.todo.edit.TodoEdit
import com.badoo.reaktive.base.Consumer

class FakeTodoEdit(
    val id: Long,
    val output: Consumer<TodoEdit.Output>
) : TodoEdit {

    override val model: TodoEdit.Model get() = throw UnsupportedOperationException()
}
