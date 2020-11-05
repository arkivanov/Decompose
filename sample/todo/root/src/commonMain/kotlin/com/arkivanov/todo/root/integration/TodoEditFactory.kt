package com.arkivanov.todo.root.integration

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.mvikotlin.core.store.StoreFactory
import com.arkivanov.todo.database.TodoDatabaseQueries
import com.arkivanov.todo.edit.TodoEdit
import com.badoo.reaktive.base.Consumer

internal fun interface TodoEditFactory {

    operator fun invoke(
        componentContext: ComponentContext,
        storeFactory: StoreFactory,
        queries: TodoDatabaseQueries,
        id: Long,
        output: Consumer<TodoEdit.Output>
    ): TodoEdit
}
