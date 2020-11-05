package com.arkivanov.todo.root.integration

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.mvikotlin.core.store.StoreFactory
import com.arkivanov.todo.database.TodoDatabaseQueries
import com.arkivanov.todo.main.TodoMain
import com.badoo.reaktive.base.Consumer
import com.badoo.reaktive.observable.Observable

internal fun interface TodoMainFactory {

    operator fun invoke(
        componentContext: ComponentContext,
        storeFactory: StoreFactory,
        queries: TodoDatabaseQueries,
        input: Observable<TodoMain.Input>,
        output: Consumer<TodoMain.Output>
    ): TodoMain
}
