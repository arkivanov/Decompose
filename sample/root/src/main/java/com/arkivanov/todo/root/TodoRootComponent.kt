package com.arkivanov.todo.root

import android.content.Context
import android.os.Parcelable
import androidx.activity.OnBackPressedDispatcher
import androidx.compose.foundation.layout.Column
import androidx.compose.runtime.Composable
import androidx.savedstate.SavedStateRegistry
import com.arkivanov.mvikotlin.core.binder.BinderLifecycleMode
import com.arkivanov.mvikotlin.core.lifecycle.Lifecycle
import com.arkivanov.mvikotlin.extensions.androidx.lifecycle.asMviLifecycle
import com.arkivanov.mvikotlin.extensions.reaktive.bind
import com.arkivanov.mvikotlin.main.store.DefaultStoreFactory
import com.arkivanov.todo.database.TodoDatabase
import com.arkivanov.todo.edit.TodoEditComponent
import com.arkivanov.todo.main.TodoMainComponent
import com.arkivanov.todo.root.integration.editOutputToListInput
import com.arkivanov.decompose.Component
import com.arkivanov.decompose.ParcelableRouterStateKeeper
import com.arkivanov.decompose.Router
import com.arkivanov.decompose.RouterParams
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
    context: Context,
    private val savedStateRegistry: SavedStateRegistry,
    private val onBackPressedDispatcher: OnBackPressedDispatcher
) : Component {

    private val storeFactory = DefaultStoreFactory
    private val database = TodoDatabase(AndroidSqliteDriver(TodoDatabase.Schema, context, "TodoDatabase"))
    private val mainInput = PublishSubject<MainInput>()

    @Composable
    override fun content() {
        Column {
            Router(params = ::routerParams) { configuration, lifecycle ->
                when (configuration) {
                    is Configuration.Main -> main(lifecycle.asMviLifecycle())
                    is Configuration.Edit -> edit(lifecycle.asMviLifecycle(), id = configuration.id)
                }
            }
        }
    }

    private fun routerParams(): RouterParams<Configuration> =
        RouterParams(
            initialConfiguration = Configuration.Main,
            stateKeeper = ParcelableRouterStateKeeper(
                savedStateRegistry = savedStateRegistry,
                key = "TodoRootRouter"
            ),
            onBackPressedDispatcher = onBackPressedDispatcher
        )

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

    private sealed class Configuration : Parcelable {
        @Parcelize
        object Main : Configuration()

        @Parcelize
        class Edit(val id: Long) : Configuration()
    }
}
