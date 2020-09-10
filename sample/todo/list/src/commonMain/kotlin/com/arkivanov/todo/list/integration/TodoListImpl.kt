package com.arkivanov.todo.list.integration

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.lifecycle.doOnDestroy
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.operator.map
import com.arkivanov.mvikotlin.core.binder.BinderLifecycleMode
import com.arkivanov.mvikotlin.core.store.StoreFactory
import com.arkivanov.mvikotlin.extensions.reaktive.bind
import com.arkivanov.todo.database.TodoDatabaseQueries
import com.arkivanov.todo.list.TodoList
import com.arkivanov.todo.list.TodoList.Data
import com.arkivanov.todo.list.TodoList.Events
import com.arkivanov.todo.list.TodoList.Input
import com.arkivanov.todo.list.TodoList.Model
import com.arkivanov.todo.list.TodoList.Output
import com.arkivanov.todo.list.store.ListStore.Intent
import com.arkivanov.todo.list.store.ListStore.State
import com.arkivanov.todo.list.store.ListStoreFactory
import com.arkivanov.todo.utils.asMviLifecycle
import com.arkivanov.todo.utils.asValue
import com.badoo.reaktive.base.Consumer
import com.badoo.reaktive.observable.Observable
import com.badoo.reaktive.observable.mapNotNull

internal class TodoListImpl(
    componentContext: ComponentContext,
    storeFactory: StoreFactory,
    queries: TodoDatabaseQueries,
    input: Observable<Input>,
    private val output: Consumer<Output>
) : TodoList, Events, ComponentContext by componentContext {

    private val store = ListStoreFactory(storeFactory, ListStoreDatabase(queries)).create()

    override val model: Model =
        object : Model, Events by this {
            override val data: Value<Data> = store.asValue().map { it.asData() }
        }

    init {
        bind(lifecycle.asMviLifecycle(), BinderLifecycleMode.CREATE_DESTROY) {
            input.mapNotNull(inputToIntent) bindTo store
        }

        lifecycle.doOnDestroy(store::dispose)
    }

    private fun State.asData(): Data =
        Data(items = items)

    override fun onItemClicked(id: Long) {
        output.onNext(Output.Selected(id = id))
    }

    override fun onDoneChanged(id: Long, isDone: Boolean) {
        store.accept(Intent.SetDone(id = id, isDone = isDone))
    }
}
