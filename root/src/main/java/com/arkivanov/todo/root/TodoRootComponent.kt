package com.arkivanov.todo.root

import android.content.Context
import androidx.activity.OnBackPressedDispatcher
import androidx.compose.foundation.layout.Column
import androidx.compose.runtime.Composable
import com.arkivanov.mvikotlin.core.binder.BinderLifecycleMode
import com.arkivanov.mvikotlin.core.lifecycle.Lifecycle
import com.arkivanov.mvikotlin.extensions.androidx.lifecycle.asMviLifecycle
import com.arkivanov.mvikotlin.extensions.reaktive.bind
import com.arkivanov.mvikotlin.main.store.DefaultStoreFactory
import com.arkivanov.todo.database.TodoDatabase
import com.arkivanov.todo.edit.TodoEditComponent
import com.arkivanov.todo.main.TodoMainComponent
import com.arkivanov.todo.root.integration.editOutputToListInput
import com.arkivanov.todo.router.ComposableComponent
import com.arkivanov.todo.router.Router
import com.arkivanov.todo.utils.Consumer
import com.badoo.reaktive.observable.mapNotNull
import com.badoo.reaktive.observable.ofType
import com.badoo.reaktive.subject.publish.PublishSubject
import com.squareup.sqldelight.android.AndroidSqliteDriver
import com.arkivanov.todo.edit.TodoEditComponent.Output as EditOutput
import com.arkivanov.todo.main.TodoMainComponent.Input as MainInput
import com.arkivanov.todo.main.TodoMainComponent.Output as MainOutput

class TodoRootComponent(
    context: Context,
    private val onBackPressedDispatcher: OnBackPressedDispatcher
) : ComposableComponent {

    private val storeFactory = DefaultStoreFactory
    private val database = TodoDatabase(AndroidSqliteDriver(TodoDatabase.Schema, context, "TodoDatabase"))
    private val mainInput = PublishSubject<MainInput>()

    @Composable
    override fun content() {
        Column {
            Router<Configuration>(Configuration.Main, onBackPressedDispatcher) { configuration, lifecycle ->
                when (configuration) {
                    is Configuration.Main -> main(lifecycle.asMviLifecycle())
                    is Configuration.Edit -> edit(lifecycle.asMviLifecycle(), id = configuration.id)
                }
            }
        }
    }

    private fun Router<Configuration>.main(lifecycle: Lifecycle): TodoMainComponent =
        TodoMainComponent(
            storeFactory = storeFactory,
            queries = database.todoDatabaseQueries,
            lifecycle = lifecycle,
            input = mainInput,
            output = Consumer { onMainOutput(it) }
        )

    private fun Router<Configuration>.onMainOutput(output: MainOutput) =
        when (output) {
            is MainOutput.Selected -> push(Configuration.Edit(id = output.id))
        }

    private fun Router<Configuration>.edit(lifecycle: Lifecycle, id: Long): TodoEditComponent {
        val editOutput = PublishSubject<EditOutput>()

        bind(lifecycle, BinderLifecycleMode.CREATE_DESTROY) {
            editOutput.mapNotNull(editOutputToListInput(id = id)) bindTo mainInput
            editOutput.ofType<EditOutput.Finished>() bindTo { pop() }
        }

        return TodoEditComponent(
            storeFactory = storeFactory,
            queries = database.todoDatabaseQueries,
            id = id,
            lifecycle = lifecycle,
            output = editOutput
        )
    }

    private sealed class Configuration {
        object Main : Configuration()
        class Edit(val id: Long) : Configuration()
    }
}