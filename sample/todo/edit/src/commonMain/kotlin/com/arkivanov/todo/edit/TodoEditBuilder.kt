package com.arkivanov.todo.edit

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.mvikotlin.core.store.StoreFactory
import com.arkivanov.todo.database.TodoDatabaseQueries
import com.arkivanov.todo.edit.integration.TodoEditImpl
import com.badoo.reaktive.base.Consumer

@Suppress("FunctionName")
fun TodoEdit(
    componentContext: ComponentContext,
    storeFactory: StoreFactory,
    queries: TodoDatabaseQueries,
    id: Long,
    output: Consumer<TodoEdit.Output>
): TodoEdit =
    TodoEditImpl(componentContext, storeFactory, queries, id, output)
