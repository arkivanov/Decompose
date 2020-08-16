package com.arkivanov.todo.add

import androidx.compose.Composable
import androidx.ui.core.Alignment
import androidx.ui.core.Modifier
import androidx.ui.foundation.Text
import androidx.ui.layout.Row
import androidx.ui.layout.padding
import androidx.ui.material.Button
import androidx.ui.material.OutlinedTextField
import androidx.ui.unit.dp
import com.arkivanov.mvikotlin.core.binder.BinderLifecycleMode
import com.arkivanov.mvikotlin.core.lifecycle.Lifecycle
import com.arkivanov.mvikotlin.core.lifecycle.doOnDestroy
import com.arkivanov.mvikotlin.core.store.StoreFactory
import com.arkivanov.mvikotlin.extensions.reaktive.bind
import com.arkivanov.mvikotlin.extensions.reaktive.labels
import com.arkivanov.todo.add.integration.AddStoreDatabase
import com.arkivanov.todo.add.integration.mappings.labelToOutput
import com.arkivanov.todo.add.store.AddStore.Intent
import com.arkivanov.todo.add.store.AddStoreFactory
import com.arkivanov.todo.database.TodoDatabaseQueries
import com.arkivanov.todo.router.ComposableComponent
import com.arkivanov.todo.utils.observableState
import com.badoo.reaktive.base.Consumer
import com.badoo.reaktive.observable.mapNotNull

class TodoAddComponent(
    storeFactory: StoreFactory,
    queries: TodoDatabaseQueries,
    lifecycle: Lifecycle,
    private val output: Consumer<Output>
) : ComposableComponent {

    private val store = AddStoreFactory(storeFactory, AddStoreDatabase(queries), System::currentTimeMillis).create()

    init {
        bind(lifecycle, BinderLifecycleMode.CREATE_DESTROY) {
            store.labels.mapNotNull(labelToOutput) bindTo output
        }

        lifecycle.doOnDestroy(store::dispose)
    }

    @Composable
    override fun content() {
        val state = store.observableState().value

        Row(verticalGravity = Alignment.CenterVertically, modifier = Modifier.padding(8.dp)) {
            OutlinedTextField(
                value = state.text,
                modifier = Modifier.weight(weight = 1F),
                onValueChange = { store.accept(Intent.SetText(it)) },
                label = { Text(text = "Add a todo") }
            )

            Button(modifier = Modifier.padding(start = 8.dp), onClick = { store.accept(Intent.Add) }) {
                Text(text = "+")
            }
        }
    }

    sealed class Output {
        data class Added(val id: Long, val timestamp: Long, val text: String) : Output()
    }
}
