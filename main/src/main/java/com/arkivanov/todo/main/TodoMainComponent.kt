package com.arkivanov.todo.main

import androidx.compose.foundation.Text
import androidx.compose.foundation.layout.Column
import androidx.compose.material.TopAppBar
import androidx.compose.runtime.Composable
import com.arkivanov.mvikotlin.core.binder.BinderLifecycleMode
import com.arkivanov.mvikotlin.core.lifecycle.Lifecycle
import com.arkivanov.mvikotlin.core.store.StoreFactory
import com.arkivanov.mvikotlin.extensions.reaktive.bind
import com.arkivanov.todo.add.TodoAddComponent
import com.arkivanov.todo.database.TodoDatabaseQueries
import com.arkivanov.todo.list.TodoListComponent
import com.arkivanov.todo.main.integration.addOutputToListInput
import com.arkivanov.todo.main.integration.inputToListInput
import com.arkivanov.todo.main.integration.listOutputToOutput
import com.arkivanov.todo.router.ComposableComponent
import com.badoo.reaktive.base.Consumer
import com.badoo.reaktive.observable.Observable
import com.badoo.reaktive.observable.mapNotNull
import com.badoo.reaktive.observable.merge
import com.badoo.reaktive.subject.publish.PublishSubject
import com.arkivanov.todo.add.TodoAddComponent.Output as AddOutput
import com.arkivanov.todo.list.TodoListComponent.Output as ListOutput

class TodoMainComponent(
    storeFactory: StoreFactory,
    queries: TodoDatabaseQueries,
    lifecycle: Lifecycle,
    input: Observable<Input>,
    private val output: Consumer<Output>
) : ComposableComponent {

    private val addOutput = PublishSubject<AddOutput>()
    private val listOutput = PublishSubject<ListOutput>()

    init {
        bind(lifecycle, BinderLifecycleMode.CREATE_DESTROY) {
            listOutput.mapNotNull(listOutputToOutput) bindTo output
        }
    }

    private val listComponent =
        TodoListComponent(
            storeFactory = storeFactory,
            queries = queries,
            lifecycle = lifecycle,
            input = merge(addOutput.mapNotNull(addOutputToListInput), input.mapNotNull(inputToListInput)),
            output = listOutput
        )

    private val addComponent =
        TodoAddComponent(
            storeFactory = storeFactory,
            queries = queries,
            lifecycle = lifecycle,
            output = addOutput
        )

    @Composable
    override fun content() {
        Column {
            TopAppBar(title = { Text(text = "Todo List") })

            listComponent.content()
            addComponent.content()
        }
    }

    sealed class Input {
        data class Update(val id: Long, val text: String, val isDone: Boolean) : Input()
    }

    sealed class Output {
        data class Selected(val id: Long) : Output()
    }
}