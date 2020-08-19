package com.arkivanov.todo.root

import android.content.Context
import android.os.Parcelable
import android.util.Log
import androidx.activity.OnBackPressedDispatcher
import androidx.compose.runtime.Composable
import androidx.lifecycle.Lifecycle
import androidx.savedstate.SavedStateRegistry
import com.arkivanov.decompose.Component
import com.arkivanov.decompose.ParcelableRouterStateKeeper
import com.arkivanov.decompose.Router
import com.arkivanov.mvikotlin.core.binder.BinderLifecycleMode
import com.arkivanov.mvikotlin.core.lifecycle.doOnCreateDestroy
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
    lifecycle: Lifecycle,
    context: Context,
    savedStateRegistry: SavedStateRegistry,
    onBackPressedDispatcher: OnBackPressedDispatcher
) : Component {

    private val storeFactory = DefaultStoreFactory
    private val database = TodoDatabase(AndroidSqliteDriver(TodoDatabase.Schema, context, "TodoDatabase"))
    private val mainInput = PublishSubject<MainInput>()

    private val router =
        Router<Configuration>(
            initialConfiguration = Configuration.Main,
            lifecycle = lifecycle,
            stateKeeper = ParcelableRouterStateKeeper(
                savedStateRegistry = savedStateRegistry,
                key = "TodoRootRouter"
            ),
            onBackPressedDispatcher = onBackPressedDispatcher,
            resolve = ::resolveChild
        )

    @Composable
    override fun content() {
        router.content()
    }

    private fun resolveChild(configuration: Configuration, lifecycle: Lifecycle): Component =
        when (configuration) {
            is Configuration.Main -> main(lifecycle)
            is Configuration.Edit -> edit(lifecycle, id = configuration.id)
        }

    private fun main(lifecycle: Lifecycle): TodoMainComponent =
        TodoMainComponent(
            storeFactory = storeFactory,
            queries = database.todoDatabaseQueries,
            lifecycle = lifecycle,
            input = mainInput,
            output = Consumer { onMainOutput(it) }
        )

    private fun onMainOutput(output: MainOutput) =
        when (output) {
            is MainOutput.Selected -> router.push(Configuration.Edit(id = output.id))
        }

    private fun edit(lifecycle: Lifecycle, id: Long): TodoEditComponent {
        val editOutput = PublishSubject<EditOutput>()

        bind(lifecycle.asMviLifecycle(), BinderLifecycleMode.CREATE_DESTROY) {
            editOutput.mapNotNull(editOutputToListInput(id = id)) bindTo mainInput
            editOutput.ofType<EditOutput.Finished>() bindTo { router.pop() }
        }

        return TodoEditComponent(
            storeFactory = storeFactory,
            queries = database.todoDatabaseQueries,
            id = id,
            lifecycle = lifecycle,
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
