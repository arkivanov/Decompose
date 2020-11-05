package com.arkivanov.todo.root.integration

import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.lifecycle.LifecycleRegistry
import com.arkivanov.decompose.lifecycle.resume
import com.arkivanov.todo.database.test.TestTodoDatabase
import com.arkivanov.todo.edit.TodoEdit
import com.arkivanov.todo.main.TodoMain
import com.arkivanov.todo.root.TodoRoot
import com.badoo.reaktive.test.observable.assertValue
import kotlin.test.BeforeTest
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class TodoRootTest {

    private val lifecycle = LifecycleRegistry()
    private val database = TestTodoDatabase()

    private lateinit var todoMain: FakeTodoMain
    private lateinit var todoEdit: FakeTodoEdit

    private val root =
        TodoRootImpl(
            componentContext = DefaultComponentContext(lifecycle = lifecycle),
            database = database,
            todoMainFactory = { _, _, _, input, output ->
                todoMain = FakeTodoMain(input = input, output = output)
                todoMain
            },
            todoEditFactory = { _, _, _, id, output ->
                todoEdit = FakeTodoEdit(id = id, output = output)
                todoEdit
            }
        )

    private val activeChild: TodoRoot.Child get() = root.model.routerState.value.activeChild.component

    @BeforeTest
    fun before() {
        lifecycle.resume()
    }

    @Test
    fun WHEN_main_output_Selected_THEN_editor_active() {
        todoMain.output.onNext(TodoMain.Output.Selected(id = 1L))

        assertTrue(activeChild is TodoRoot.Child.Edit)
        assertEquals(1L, todoEdit.id)
    }

    @Test
    fun GIVEN_editor_opened_WHEN_editor_output_Finished_THEN_main_active() {
        todoMain.output.onNext(TodoMain.Output.Selected(id = 1L))

        todoEdit.output.onNext(TodoEdit.Output.Finished)

        assertTrue(activeChild is TodoRoot.Child.Main)
    }

    @Test
    fun GIVEN_editor_opened_WHEN_editor_output_Changed_THEN_main_input_Update() {
        todoMain.output.onNext(TodoMain.Output.Selected(id = 1L))

        todoEdit.output.onNext(TodoEdit.Output.Changed(text = "text", isDone = true))

        todoMain.input.assertValue(TodoMain.Input.Update(id = 1L, text = "text", isDone = true))
    }
}
