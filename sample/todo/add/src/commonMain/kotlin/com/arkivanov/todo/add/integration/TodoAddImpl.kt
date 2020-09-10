package com.arkivanov.todo.add.integration

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.lifecycle.doOnDestroy
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.operator.map
import com.arkivanov.mvikotlin.core.binder.BinderLifecycleMode
import com.arkivanov.mvikotlin.core.store.StoreFactory
import com.arkivanov.mvikotlin.extensions.reaktive.bind
import com.arkivanov.mvikotlin.extensions.reaktive.labels
import com.arkivanov.todo.add.TodoAdd
import com.arkivanov.todo.add.integration.mappings.labelToOutput
import com.arkivanov.todo.add.store.AddStore.Intent
import com.arkivanov.todo.add.store.AddStore.State
import com.arkivanov.todo.add.store.AddStoreFactory
import com.arkivanov.todo.database.TodoDatabaseQueries
import com.arkivanov.todo.utils.asMviLifecycle
import com.arkivanov.todo.utils.asValue
import com.badoo.reaktive.base.Consumer
import com.badoo.reaktive.observable.mapNotNull

internal class TodoAddImpl(
    componentContext: ComponentContext,
    storeFactory: StoreFactory,
    queries: TodoDatabaseQueries,
    private val output: Consumer<TodoAdd.Output>
) : TodoAdd, TodoAdd.Events, ComponentContext by componentContext {

    private val store = AddStoreFactory(storeFactory, AddStoreDatabase(queries)).create()

    override val model: TodoAdd.Model =
        object : TodoAdd.Model, TodoAdd.Events by this {
            override val data: Value<TodoAdd.Data> = store.asValue().map { it.asData() }
        }

    init {
        bind(lifecycle.asMviLifecycle(), BinderLifecycleMode.CREATE_DESTROY) {
            store.labels.mapNotNull(labelToOutput) bindTo output
        }

        lifecycle.doOnDestroy(store::dispose)
    }

    private fun State.asData(): TodoAdd.Data =
        TodoAdd.Data(text = text)

    override fun onTextChanged(text: String) {
        store.accept(Intent.SetText(text))
    }

    override fun onAddClicked() {
        store.accept(Intent.Add)
    }
}
