package com.arkivanov.todo.add

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.mvikotlin.core.store.StoreFactory
import com.arkivanov.todo.add.integration.TodoAddImpl
import com.arkivanov.todo.database.TodoDatabaseQueries
import com.badoo.reaktive.base.Consumer

@Suppress("FunctionName")
fun TodoAdd(
    componentContext: ComponentContext,
    storeFactory: StoreFactory,
    queries: TodoDatabaseQueries,
    output: Consumer<TodoAdd.Output>
): TodoAdd =
    TodoAddImpl(componentContext, storeFactory, queries, output)
