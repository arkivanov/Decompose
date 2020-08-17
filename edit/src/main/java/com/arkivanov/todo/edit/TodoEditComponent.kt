package com.arkivanov.todo.edit

import androidx.compose.foundation.Icon
import androidx.compose.foundation.Text
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.material.Checkbox
import androidx.compose.material.IconButton
import androidx.compose.material.TextField
import androidx.compose.material.TopAppBar
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.setValue
import androidx.compose.runtime.state
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.TextRange
import androidx.compose.ui.text.input.TextFieldValue
import androidx.compose.ui.unit.dp
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
import com.arkivanov.decompose.Component
import com.arkivanov.todo.utils.observableState
import com.badoo.reaktive.base.Consumer
import com.badoo.reaktive.observable.mapNotNull

class TodoEditComponent(
    storeFactory: StoreFactory,
    queries: TodoDatabaseQueries,
    id: Long,
    lifecycle: Lifecycle,
    private val output: Consumer<Output>
) : Component {

    private val store = EditStoreFactory(storeFactory, EditStoreDatabase(queries), id = id).create()

    init {
        bind(lifecycle, BinderLifecycleMode.CREATE_DESTROY) {
            store.labels.mapNotNull(labelToOutput) bindTo output
        }

        lifecycle.doOnDestroy(store::dispose)
    }

    @Composable
    private fun String.asTextFieldValue(): TextFieldValue {
        var textFieldValue by state { TextFieldValue() }

        if (textFieldValue.text != this) {
            textFieldValue = TextFieldValue(
                text = this,
                selection = textFieldValue.selection.constrain(0, length)
            )
        }

        return textFieldValue
    }

    private fun TextRange.constrain(minimumValue: Int, maximumValue: Int): TextRange {
        val newStart = start.coerceIn(minimumValue, maximumValue)
        val newEnd = end.coerceIn(minimumValue, maximumValue)
        if (newStart != start || newEnd != end) {
            return TextRange(newStart, newEnd)
        }
        return this
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

            TextField(
                value = state.text,
                modifier = Modifier.weight(1F) + Modifier.fillMaxWidth() + Modifier.padding(8.dp),
                label = { Text("Todo text") },
                onValueChange = {
                    store.accept(Intent.SetText(text = it))
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
