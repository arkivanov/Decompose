package com.arkivanov.todo.root

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.todo.database.TodoDatabase
import com.arkivanov.todo.root.integration.TodoRootImpl

@Suppress("FunctionName")
fun TodoRoot(
    componentContext: ComponentContext,
    database: TodoDatabase
): TodoRoot =
    TodoRootImpl(componentContext, database)
