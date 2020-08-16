package com.arkivanov.todo.edit.integration

import com.arkivanov.todo.database.TodoDatabaseQueries
import com.arkivanov.todo.edit.store.EditStoreFactory.Database
import com.arkivanov.todo.edit.store.EditStoreFactory.Database.TodoItem
import com.badoo.reaktive.completable.Completable
import com.badoo.reaktive.completable.completableFromFunction
import com.badoo.reaktive.completable.subscribeOn
import com.badoo.reaktive.maybe.Maybe
import com.badoo.reaktive.maybe.maybeFromFunction
import com.badoo.reaktive.maybe.notNull
import com.badoo.reaktive.maybe.subscribeOn
import com.badoo.reaktive.scheduler.ioScheduler

internal class EditStoreDatabase(
    private val queries: TodoDatabaseQueries
) : Database {

    override fun load(id: Long): Maybe<TodoItem> =
        maybeFromFunction {
            queries
                .select(id = id) { _, _, text, isDone ->
                    TodoItem(
                        text = text,
                        isDone = isDone
                    )
                }
                .executeAsOneOrNull()
        }
            .notNull()
            .subscribeOn(ioScheduler)

    override fun setText(id: Long, text: String): Completable =
        completableFromFunction {
            queries.setText(id = id, text = text)
        }.subscribeOn(ioScheduler)

    override fun setDone(id: Long, isDone: Boolean): Completable =
        completableFromFunction {
            queries.setDone(id = id, isDone = isDone)
        }.subscribeOn(ioScheduler)
}