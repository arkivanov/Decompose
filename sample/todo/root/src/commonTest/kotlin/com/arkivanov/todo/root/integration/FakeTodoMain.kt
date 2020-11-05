package com.arkivanov.todo.root.integration

import com.arkivanov.todo.main.TodoMain
import com.badoo.reaktive.base.Consumer
import com.badoo.reaktive.observable.Observable
import com.badoo.reaktive.test.observable.TestObservableObserver
import com.badoo.reaktive.test.observable.test

class FakeTodoMain(
    input: Observable<TodoMain.Input>,
    val output: Consumer<TodoMain.Output>
) : TodoMain {

    val input: TestObservableObserver<TodoMain.Input> = input.test()

    override val model: TodoMain.Model get() = throw UnsupportedOperationException()
}
