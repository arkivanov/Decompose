package com.arkivanov.todo.add.store

import com.arkivanov.mvikotlin.core.store.Reducer
import com.arkivanov.mvikotlin.core.store.Store
import com.arkivanov.mvikotlin.core.store.StoreFactory
import com.arkivanov.mvikotlin.extensions.reaktive.ReaktiveExecutor
import com.arkivanov.todo.add.store.AddStore.Intent
import com.arkivanov.todo.add.store.AddStore.Label
import com.arkivanov.todo.add.store.AddStore.State
import com.badoo.reaktive.scheduler.mainScheduler
import com.badoo.reaktive.single.Single
import com.badoo.reaktive.single.map
import com.badoo.reaktive.single.observeOn

internal class AddStoreFactory(
    private val storeFactory: StoreFactory,
    private val database: Database,
    private val currentTimeMillis: () -> Long
) {

    fun create(): AddStore = AddStoreImpl()

    private inner class AddStoreImpl : AddStore, Store<Intent, State, Label> by storeFactory.create(
        name = "AddStore",
        initialState = State(),
        executorFactory = ::ExecutorImpl,
        reducer = ReducerImpl
    )

    private sealed class Result {
        class TextChanged(val text: String) : Result()
        object Added : Result()
    }

    private inner class ExecutorImpl : ReaktiveExecutor<Intent, Nothing, State, Result, Label>() {
        override fun executeIntent(intent: Intent, getState: () -> State) =
            when (intent) {
                is Intent.SetText -> dispatch(Result.TextChanged(intent.text))
                is Intent.Add -> add(getState())
            }

        private fun add(state: State) {
            if (state.text.isNotEmpty()) {
                dispatch(Result.Added)

                val timestamp = currentTimeMillis()

                database
                    .add(timestamp = timestamp, text = state.text)
                    .map { Label.Added(id = it, timestamp = timestamp, text = state.text) }
                    .observeOn(mainScheduler)
                    .subscribeScoped(onSuccess = ::publish)
            }
        }
    }

    private object ReducerImpl : Reducer<State, Result> {
        override fun State.reduce(result: Result): State =
            when (result) {
                is Result.TextChanged -> copy(text = result.text)
                is Result.Added -> copy(text = "")
            }
    }

    interface Database {
        fun add(timestamp: Long, text: String): Single<Long>
    }
}

