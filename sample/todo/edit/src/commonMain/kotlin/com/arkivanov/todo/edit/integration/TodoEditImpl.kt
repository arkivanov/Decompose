package com.arkivanov.todo.edit.integration

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.lifecycle.doOnDestroy
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.operator.map
import com.arkivanov.mvikotlin.core.binder.BinderLifecycleMode
import com.arkivanov.mvikotlin.core.store.StoreFactory
import com.arkivanov.mvikotlin.extensions.reaktive.bind
import com.arkivanov.mvikotlin.extensions.reaktive.labels
import com.arkivanov.todo.database.TodoDatabaseQueries
import com.arkivanov.todo.edit.TodoEdit
import com.arkivanov.todo.edit.integration.mappings.labelToOutput
import com.arkivanov.todo.edit.store.EditStore
import com.arkivanov.todo.edit.store.EditStoreFactory
import com.arkivanov.todo.utils.asMviLifecycle
import com.arkivanov.todo.utils.asValue
import com.badoo.reaktive.base.Consumer
import com.badoo.reaktive.observable.mapNotNull

internal class TodoEditImpl(
    componentContext: ComponentContext,
    storeFactory: StoreFactory,
    queries: TodoDatabaseQueries,
    id: Long,
    private val output: Consumer<TodoEdit.Output>
) : TodoEdit, TodoEdit.Events, ComponentContext by componentContext {

    private val store = EditStoreFactory(storeFactory, EditStoreDatabase(queries), id = id).create()

    override val model: TodoEdit.Model =
        object : TodoEdit.Model, TodoEdit.Events by this {
            override val data: Value<TodoEdit.Data> = store.asValue().map { it.toData() }
        }

    init {
        bind(lifecycle.asMviLifecycle(), BinderLifecycleMode.CREATE_DESTROY) {
            store.labels.mapNotNull(labelToOutput) bindTo output
        }

        lifecycle.doOnDestroy(store::dispose)
    }

    private fun EditStore.State.toData(): TodoEdit.Data =
        TodoEdit.Data(text = text, isDone = isDone)

    override fun onFinished() {
        output.onNext(TodoEdit.Output.Finished)
    }

    override fun onTextChanged(text: String) {
        store.accept(EditStore.Intent.SetText(text = text))
    }

    override fun onDoneChanged(isDone: Boolean) {
        store.accept(EditStore.Intent.SetDone(isDone = isDone))
    }
}
