package com.arkivanov.todo.root.integration

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router
import com.arkivanov.decompose.statekeeper.Parcelable
import com.arkivanov.decompose.statekeeper.Parcelize
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.operator.map
import com.arkivanov.mvikotlin.core.binder.BinderLifecycleMode
import com.arkivanov.mvikotlin.extensions.reaktive.bind
import com.arkivanov.mvikotlin.main.store.DefaultStoreFactory
import com.arkivanov.todo.database.TodoDatabase
import com.arkivanov.todo.database.TodoDatabaseDriverFactory
import com.arkivanov.todo.edit.TodoEdit
import com.arkivanov.todo.main.TodoMain
import com.arkivanov.todo.root.TodoRoot
import com.arkivanov.todo.root.TodoRoot.Child
import com.arkivanov.todo.root.TodoRoot.Model
import com.arkivanov.todo.utils.Consumer
import com.arkivanov.todo.utils.asMviLifecycle
import com.badoo.reaktive.observable.mapNotNull
import com.badoo.reaktive.observable.ofType
import com.badoo.reaktive.subject.publish.PublishSubject
import com.arkivanov.todo.edit.TodoEdit.Output as EditOutput
import com.arkivanov.todo.main.TodoMain.Input as MainInput
import com.arkivanov.todo.main.TodoMain.Output as MainOutput

internal class TodoRootImpl(
    componentContext: ComponentContext,
    databaseDriverFactory: TodoDatabaseDriverFactory
) : TodoRoot, ComponentContext by componentContext {

    private val storeFactory = DefaultStoreFactory
    private val database = TodoDatabase(databaseDriverFactory())
    private val mainInput = PublishSubject<MainInput>()

    private val router =
        router<Configuration, Child>(
            initialConfiguration = Configuration.Main,
            handleBackButton = true,
            componentFactory = ::resolveChild
        )

    override val model: Model =
        object : Model {
            override val child: Value<Child> = router.model.map { it.activeChild.component }
        }

    private fun resolveChild(configuration: Configuration, componentContext: ComponentContext): Child =
        when (configuration) {
            is Configuration.Main -> Child.Main(main(componentContext).model)
            is Configuration.Edit -> Child.Edit(edit(componentContext, id = configuration.id).model)
        }

    private fun main(componentContext: ComponentContext): TodoMain =
        TodoMain(
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

    private fun edit(componentContext: ComponentContext, id: Long): TodoEdit {
        val editOutput = PublishSubject<EditOutput>()

        bind(lifecycle.asMviLifecycle(), BinderLifecycleMode.CREATE_DESTROY) {
            editOutput.mapNotNull(editOutputToListInput(id = id)) bindTo mainInput
            editOutput.ofType<EditOutput.Finished>() bindTo { router.pop() }
        }

        return TodoEdit(
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
