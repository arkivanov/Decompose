package com.arkivanov.todo.edit

import androidx.compose.Composable
import androidx.compose.getValue
import androidx.compose.setValue
import androidx.compose.state
import androidx.ui.core.Alignment
import androidx.ui.core.Modifier
import androidx.ui.foundation.Icon
import androidx.ui.foundation.Text
import androidx.ui.foundation.TextField
import androidx.ui.input.TextFieldValue
import androidx.ui.layout.Column
import androidx.ui.layout.Row
import androidx.ui.layout.Spacer
import androidx.ui.layout.fillMaxWidth
import androidx.ui.layout.padding
import androidx.ui.layout.width
import androidx.ui.material.Checkbox
import androidx.ui.material.IconButton
import androidx.ui.material.TopAppBar
import androidx.ui.material.icons.Icons
import androidx.ui.material.icons.filled.ArrowBack
import androidx.ui.unit.dp
import com.arkivanov.mvikotlin.core.binder.BinderLifecycleMode
import com.arkivanov.mvikotlin.core.lifecycle.Lifecycle
import com.arkivanov.mvikotlin.core.lifecycle.doOnDestroy
import com.arkivanov.mvikotlin.core.store.StoreFactory
import com.arkivanov.mvikotlin.extensions.reaktive.bind
import com.arkivanov.mvikotlin.extensions.reaktive.labels
import com.arkivanov.todo.database.TodoDatabaseQueries
import com.arkivanov.todo.edit.integration.EditStoreDatabase
import com.arkivanov.todo.edit.integration.mappings.labelToOutput
import com.arkivanov.todo.edit.store.EditStore.Intent
import com.arkivanov.todo.edit.store.EditStoreFactory
import com.arkivanov.todo.router.ComposableComponent
import com.arkivanov.todo.utils.observableState
import com.badoo.reaktive.base.Consumer
import com.badoo.reaktive.observable.mapNotNull

class TodoEditComponent(
    storeFactory: StoreFactory,
    queries: TodoDatabaseQueries,
    id: Long,
    lifecycle: Lifecycle,
    private val output: Consumer<Output>
) : ComposableComponent {

    private val store = EditStoreFactory(storeFactory, EditStoreDatabase(queries), id = id).create()

    init {
        bind(lifecycle, BinderLifecycleMode.CREATE_DESTROY) {
            store.labels.mapNotNull(labelToOutput) bindTo output
        }

        lifecycle.doOnDestroy(store::dispose)
    }

    @Composable
    override fun content() {
        val state = store.observableState().value

        Column(horizontalGravity = Alignment.CenterHorizontally) {
            TopAppBar(
                title = { Text("Edit todo") },
                navigationIcon = {
                    IconButton(onClick = { output.onNext(Output.Finished) }) {
                        Icon(Icons.Default.ArrowBack)
                    }
                }
            )

            var text by state { TextFieldValue() }

            TextField(
                value = text.copy(text = state.text),
                modifier = Modifier.weight(1F) + Modifier.fillMaxWidth() + Modifier.padding(8.dp),
                onValueChange = {
                    text = it
                    store.accept(Intent.SetText(text = it.text))
                }
            )

            Row(modifier = Modifier.padding(8.dp)) {
                Text(text = "Completed")

                Spacer(modifier = Modifier.width(8.dp))

                Checkbox(
                    checked = state.isDone,
                    onCheckedChange = { store.accept(Intent.SetDone(isDone = !state.isDone)) }
                )
            }
        }
    }

    sealed class Output {
        data class Changed(val text: String, val isDone: Boolean) : Output()
        object Finished : Output()
    }
}