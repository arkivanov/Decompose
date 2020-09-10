package com.arkivanov.todo.main.integration

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.child
import com.arkivanov.mvikotlin.core.binder.BinderLifecycleMode
import com.arkivanov.mvikotlin.core.store.StoreFactory
import com.arkivanov.mvikotlin.extensions.reaktive.bind
import com.arkivanov.todo.add.TodoAdd
import com.arkivanov.todo.database.TodoDatabaseQueries
import com.arkivanov.todo.list.TodoList
import com.arkivanov.todo.main.TodoMain
import com.arkivanov.todo.main.TodoMain.Input
import com.arkivanov.todo.main.TodoMain.Model
import com.arkivanov.todo.main.TodoMain.Output
import com.arkivanov.todo.utils.asMviLifecycle
import com.badoo.reaktive.base.Consumer
import com.badoo.reaktive.observable.Observable
import com.badoo.reaktive.observable.mapNotNull
import com.badoo.reaktive.observable.merge
import com.badoo.reaktive.subject.publish.PublishSubject

internal class TodoMainImpl(
    componentContext: ComponentContext,
    storeFactory: StoreFactory,
    queries: TodoDatabaseQueries,
    input: Observable<Input>,
    private val output: Consumer<Output>
) : TodoMain, ComponentContext by componentContext {

    private val addOutput = PublishSubject<TodoAdd.Output>()
    private val listOutput = PublishSubject<TodoList.Output>()

    init {
        bind(lifecycle.asMviLifecycle(), BinderLifecycleMode.CREATE_DESTROY) {
            listOutput.mapNotNull(listOutputToOutput) bindTo output
        }
    }

    private val listComponent =
        TodoList(
            componentContext = componentContext.child("ListComponent"),
            storeFactory = storeFactory,
            queries = queries,
            input = merge(addOutput.mapNotNull(addOutputToListInput), input.mapNotNull(inputToListInput)),
            output = listOutput
        )

    private val addComponent =
        TodoAdd(
            componentContext = componentContext.child("AddComponent"),
            storeFactory = storeFactory,
            queries = queries,
            output = addOutput
        )

    override val model: Model =
        object : Model {
            override val listModel: TodoList.Model = listComponent.model
            override val addModel: TodoAdd.Model = addComponent.model
        }
}
