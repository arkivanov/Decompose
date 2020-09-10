package com.arkivanov.todo.list

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.mvikotlin.core.store.StoreFactory
import com.arkivanov.todo.database.TodoDatabaseQueries
import com.arkivanov.todo.list.TodoList.Input
import com.arkivanov.todo.list.TodoList.Output
import com.arkivanov.todo.list.integration.TodoListImpl
import com.badoo.reaktive.base.Consumer
import com.badoo.reaktive.observable.Observable

@Suppress("FunctionName")
fun TodoList(
    componentContext: ComponentContext,
    storeFactory: StoreFactory,
    queries: TodoDatabaseQueries,
    input: Observable<Input>,
    output: Consumer<Output>
): TodoList =
    TodoListImpl(componentContext, storeFactory, queries, input, output)
