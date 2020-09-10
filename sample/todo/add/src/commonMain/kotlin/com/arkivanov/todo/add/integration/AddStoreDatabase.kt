package com.arkivanov.todo.add.integration

import com.arkivanov.todo.add.store.AddStoreFactory.Database
import com.arkivanov.todo.add.store.AddStoreFactory.Database.Result
import com.arkivanov.todo.database.TodoDatabaseQueries
import com.badoo.reaktive.scheduler.ioScheduler
import com.badoo.reaktive.single.Single
import com.badoo.reaktive.single.singleFromFunction
import com.badoo.reaktive.single.subscribeOn

internal class AddStoreDatabase(
    private val queries: TodoDatabaseQueries
) : Database {

    override fun add(text: String): Single<Result> =
        singleFromFunction {
            queries.transactionWithResult<Result> {
                queries.add(text = text)
                val id = queries.getLastInsertId().executeAsOne()
                val order = queries.select(id = id).executeAsOne().orderNum
                Result(id = id, order = order)
            }
        }.subscribeOn(ioScheduler)
}
