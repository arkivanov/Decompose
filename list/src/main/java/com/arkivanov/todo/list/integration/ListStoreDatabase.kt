package com.arkivanov.todo.list.integration

import com.arkivanov.todo.database.TodoDatabaseQueries
import com.arkivanov.todo.list.model.TodoItem
import com.arkivanov.todo.list.store.ListStoreFactory.Database
import com.badoo.reaktive.completable.Completable
import com.badoo.reaktive.completable.completableFromFunction
import com.badoo.reaktive.completable.subscribeOn
import com.badoo.reaktive.scheduler.ioScheduler
import com.badoo.reaktive.single.Single
import com.badoo.reaktive.single.singleFromFunction
import com.badoo.reaktive.single.subscribeOn

internal class ListStoreDatabase(
    private val queries: TodoDatabaseQueries
) : Database {

    override fun loadAll(): Single<List<TodoItem>> =
        singleFromFunction {
            queries
                .selectAll { id, timestamp, text, isDone ->
                    TodoItem(
                        id = id,
                        timestamp = timestamp,
                        text = text,
                        isDone = isDone
                    )
                }
                .executeAsList()
        }.subscribeOn(ioScheduler)

    override fun setDone(id: Long, isDone: Boolean): Completable =
        completableFromFunction {
            queries.setDone(id = id, isDone = isDone)
        }.subscribeOn(ioScheduler)
}
