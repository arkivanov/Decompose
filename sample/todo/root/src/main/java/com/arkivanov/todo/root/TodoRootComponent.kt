package com.arkivanov.todo.root

import android.content.Context
import android.os.Parcelable
import androidx.compose.runtime.Composable
import com.arkivanov.decompose.Component
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router
import com.arkivanov.mvikotlin.core.binder.BinderLifecycleMode
import com.arkivanov.mvikotlin.extensions.androidx.lifecycle.asMviLifecycle
import com.arkivanov.mvikotlin.extensions.reaktive.bind
import com.arkivanov.mvikotlin.main.store.DefaultStoreFactory
import com.arkivanov.todo.database.TodoDatabase
import com.arkivanov.todo.edit.TodoEditComponent
import com.arkivanov.todo.main.TodoMainComponent
import com.arkivanov.todo.root.integration.editOutputToListInput
import com.arkivanov.todo.utils.Consumer
import com.badoo.reaktive.observable.mapNotNull
import com.badoo.reaktive.observable.ofType
import com.badoo.reaktive.subject.publish.PublishSubject
import com.squareup.sqldelight.android.AndroidSqliteDriver
import kotlinx.android.parcel.Parcelize
import com.arkivanov.todo.edit.TodoEditComponent.Output as EditOutput
import com.arkivanov.todo.main.TodoMainComponent.Input as MainInput
import com.arkivanov.todo.main.TodoMainComponent.Output as MainOutput

class TodoRootComponent(
    componentContext: ComponentContext,
    context: Context
) : Component, ComponentContext by componentContext {

    private val storeFactory = DefaultStoreFactory
    private val database = TodoDatabase(AndroidSqliteDriver(TodoDatabase.Schema, context, "TodoDatabase"))
    private val mainInput = PublishSubject<MainInput>()

    private val router =
        router<Configuration>(
            initialConfiguration = Configuration.Main,
            handleBackButton = true,
            componentFactory = ::resolveChild
        )

    @Composable
    override fun content() {
        router.state.value.activeComponent.content()
    }

    private fun resolveChild(configuration: Configuration, componentContext: ComponentContext): Component =
        when (configuration) {
            is Configuration.Main -> main(componentContext)
            is Configuration.Edit -> edit(componentContext, id = configuration.id)
        }

    private fun main(componentContext: ComponentContext): TodoMainComponent =
        TodoMainComponent(
            componentContext = componentContext,
            storeFactory = storeFactory,
            queries = database.todoDatabaseQueries,
            input = mainInput,
            output = Consumer { onMainOutput(it) }
        )

    private fun onMainOutput(output: MainOutput) =
        when (output) {
            is MainOutput.Selected -> router.push(Configuration.Edit(id = output.id))
        }

    private fun edit(componentContext: ComponentContext, id: Long): TodoEditComponent {
        val editOutput = PublishSubject<EditOutput>()

        bind(lifecycle.asMviLifecycle(), BinderLifecycleMode.CREATE_DESTROY) {
            editOutput.mapNotNull(editOutputToListInput(id = id)) bindTo mainInput
            editOutput.ofType<EditOutput.Finished>() bindTo { router.pop() }
        }

        return TodoEditComponent(
            componentContext = componentContext,
            storeFactory = storeFactory,
            queries = database.todoDatabaseQueries,
            id = id,
            output = editOutput
        )
    }

    private sealed class Configuration : Parcelable {
        @Parcelize
        object Main : Configuration()

        @Parcelize
        class Edit(val id: Long) : Configuration()
    }
}
