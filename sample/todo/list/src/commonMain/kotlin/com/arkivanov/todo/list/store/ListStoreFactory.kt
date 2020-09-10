package com.arkivanov.todo.list.store

import com.arkivanov.mvikotlin.core.store.Reducer
import com.arkivanov.mvikotlin.core.store.SimpleBootstrapper
import com.arkivanov.mvikotlin.core.store.Store
import com.arkivanov.mvikotlin.core.store.StoreFactory
import com.arkivanov.mvikotlin.extensions.reaktive.ReaktiveExecutor
import com.arkivanov.todo.list.model.TodoItem
import com.arkivanov.todo.list.store.ListStore.Intent
import com.arkivanov.todo.list.store.ListStore.State
import com.badoo.reaktive.completable.Completable
import com.badoo.reaktive.completable.subscribe
import com.badoo.reaktive.scheduler.mainScheduler
import com.badoo.reaktive.single.Single
import com.badoo.reaktive.single.map
import com.badoo.reaktive.single.observeOn

internal class ListStoreFactory(
    private val storeFactory: StoreFactory,
    private val database: Database
) {

    fun create(): ListStore = ListStoreImpl()

    private inner class ListStoreImpl : ListStore, Store<Intent, State, Nothing> by storeFactory.create(
        name = "ListStore",
        initialState = State(),
        bootstrapper = SimpleBootstrapper(Unit),
        executorFactory = ::ExecutorImpl,
        reducer = ReducerImpl
    )

    private sealed class Result {
        data class Loaded(val items: List<TodoItem>) : Result()
        data class DoneChanged(val id: Long, val isDone: Boolean) : Result()
        data class Put(val item: TodoItem) : Result()
        data class Update(val id: Long, val text: String, val isDone: Boolean) : Result()
    }

    private inner class ExecutorImpl : ReaktiveExecutor<Intent, Unit, State, Result, Nothing>() {
        override fun executeAction(action: Unit, getState: () -> State) {
            database
                .loadAll()
                .map(Result::Loaded)
                .observeOn(mainScheduler)
                .subscribeScoped(onSuccess = ::dispatch)
        }

        override fun executeIntent(intent: Intent, getState: () -> State) =
            when (intent) {
                is Intent.SetDone -> setDone(intent)
                is Intent.Put -> put(intent)
                is Intent.Update -> update(intent)
            }

        private fun setDone(intent: Intent.SetDone) {
            database.setDone(id = intent.id, isDone = intent.isDone).subscribe()
            dispatch(Result.DoneChanged(id = intent.id, isDone = intent.isDone))
        }

        private fun put(intent: Intent.Put) {
            dispatch(Result.Put(TodoItem(id = intent.id, order = intent.order, text = intent.text)))
        }

        private fun update(intent: Intent.Update) {
            dispatch(Result.Update(id = intent.id, text = intent.text, isDone = intent.isDone))
        }
    }

    private object ReducerImpl : Reducer<State, Result> {
        private val comparator = compareByDescending(TodoItem::order)

        override fun State.reduce(result: Result): State =
            when (result) {
                is Result.Loaded -> copy(items = result.items.sortedWith(comparator))
                is Result.DoneChanged -> copy(items = items.map { if (it.id == result.id) it.copy(isDone = result.isDone) else it })
                is Result.Put -> copy(items = items.plus(result.item).sortedWith(comparator))
                is Result.Update -> copy(items = items.update(id = result.id) { copy(text = result.text, isDone = result.isDone) })
            }

        private fun List<TodoItem>.update(id: Long, update: TodoItem.() -> TodoItem): List<TodoItem> =
            map { if (it.id == id) it.update() else it }
    }

    interface Database {
        fun loadAll(): Single<List<TodoItem>>

        fun setDone(id: Long, isDone: Boolean): Completable
    }
}
