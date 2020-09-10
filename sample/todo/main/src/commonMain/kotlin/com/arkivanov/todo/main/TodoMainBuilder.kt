package com.arkivanov.todo.main

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.mvikotlin.core.store.StoreFactory
import com.arkivanov.todo.database.TodoDatabaseQueries
import com.arkivanov.todo.main.TodoMain.Input
import com.arkivanov.todo.main.TodoMain.Output
import com.arkivanov.todo.main.integration.TodoMainImpl
import com.badoo.reaktive.base.Consumer
import com.badoo.reaktive.observable.Observable

@Suppress("FunctionName")
fun TodoMain(
    componentContext: ComponentContext,
    storeFactory: StoreFactory,
    queries: TodoDatabaseQueries,
    input: Observable<Input>,
    output: Consumer<Output>
): TodoMain =
    TodoMainImpl(componentContext, storeFactory, queries, input, output)
