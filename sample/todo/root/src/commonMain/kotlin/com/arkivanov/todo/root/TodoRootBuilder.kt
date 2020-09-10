package com.arkivanov.todo.root

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.todo.database.TodoDatabaseDriverFactory
import com.arkivanov.todo.root.integration.TodoRootImpl

@Suppress("FunctionName")
fun TodoRoot(
    componentContext: ComponentContext,
    databaseDriverFactory: TodoDatabaseDriverFactory
): TodoRoot =
    TodoRootImpl(componentContext, databaseDriverFactory)
