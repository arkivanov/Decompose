package com.arkivanov.todo.add.integration

import com.arkivanov.todo.add.store.AddStoreFactory.Database
import com.arkivanov.todo.database.TodoDatabaseQueries
import com.badoo.reaktive.scheduler.ioScheduler
import com.badoo.reaktive.single.Single
import com.badoo.reaktive.single.singleFromFunction
import com.badoo.reaktive.single.subscribeOn

internal class AddStoreDatabase(
    private val queries: TodoDatabaseQueries
) : Database {

    override fun add(timestamp: Long, text: String): Single<Long> =
        singleFromFunction {
            queries.transactionWithResult<Long> {
                queries.add(timestamp = timestamp, text = text)
                queries.getLastInsertId().executeAsOne()
            }
        }.subscribeOn(ioScheduler)
}