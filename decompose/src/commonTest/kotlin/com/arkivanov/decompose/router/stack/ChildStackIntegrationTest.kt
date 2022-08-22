package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.backhandler.BackCallback
import com.arkivanov.essenty.backhandler.BackDispatcher
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.resume
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.Parcelize
import kotlin.test.BeforeTest
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class ChildStackIntegrationTest {

    private val navigation = StackNavigation<Config>()
    private val lifecycle = LifecycleRegistry()
    private val backDispatcher = BackDispatcher()
    private val context = DefaultComponentContext(lifecycle = lifecycle, backHandler = backDispatcher)

    @BeforeTest
    fun before() {
        lifecycle.resume()
    }

    @Test
    fun GIVEN_one_child_in_stack_WHEN_push_one_child_THEN_two_children_in_stack() {
        val stack = childStack(initialConfiguration = Config(1))

        navigation.push(Config(2))

        stack.value.assertStack(1 to 1, 2 to 2)
    }

    @Test
    fun GIVEN_one_child_in_stack_WHEN_push_two_children_and_pop_one_child_THEN_two_children_in_stack() {
        val stack = childStack(initialConfiguration = Config(1))

        navigation.push(Config(2))
        navigation.push(Config(3))
        navigation.pop()

        stack.value.assertStack(1 to 1, 2 to 2)
    }

    @Test
    fun GIVEN_three_children_in_stack_WHEN_pop_one_child_THEN_two_children_in_stack() {
        val stack = childStack(initialStack = listOf(Config(1), Config(2), Config(3)))

        navigation.pop()

        stack.value.assertStack(1 to null, 2 to 2)
    }

    @Test
    fun GIVEN_one_child_in_stack_WHEN_push_two_children_and_back_pressed_THEN_two_children_in_stack() {
        val stack = childStack(initialConfiguration = Config(1))

        navigation.push(Config(2))
        navigation.push(Config(3))
        backDispatcher.back()

        stack.value.assertStack(1 to 1, 2 to 2)
    }

    @Test
    fun GIVEN_three_children_in_stack_WHEN_back_pressed_THEN_two_children_in_stack() {
        val stack = childStack(initialStack = listOf(Config(1), Config(2), Config(3)))

        backDispatcher.back()

        stack.value.assertStack(1 to null, 2 to 2)
    }

    @Test
    fun GIVEN_two_children_stack_WHEN_replaceCurrent_THEN_two_children_in_stack_and_new_child_is_active() {
        val stack = childStack(initialStack = listOf(Config(1), Config(2)))

        navigation.replaceCurrent(Config(3))

        stack.value.assertStack(1 to null, 3 to 3)
    }

    @Test
    fun GIVEN_initial_three_children_in_stack_WHEN_reverse_THEN_three_children_reversed_in_stack() {
        val stack = childStack(initialStack = listOf(Config(1), Config(2), Config(3)))

        navigation.navigate { it.reversed() }

        stack.value.assertStack(3 to 3, 2 to null, 1 to 1)
    }

    @Test
    fun GIVEN_three_active_children_in_stack_WHEN_reverse_THEN_three_children_reversed_in_stack() {
        val stack = childStack(initialConfiguration = Config(1))
        navigation.push(Config(2))
        navigation.push(Config(3))

        navigation.navigate { it.reversed() }

        stack.value.assertStack(3 to 3, 2 to 2, 1 to 1)
    }

    @Test
    fun GIVEN_nested_navigation_with_back_handling_and_back_stack_not_empty_WHEN_back_pressed_THEN_inner_stack_popped() {
        val stack = childStack(initialConfiguration = Config(id = 1))

        navigation.push(
            Config(
                id = 2,
                routingParams = RoutingParams(
                    initialStack = listOf(Config(1)),
                    handleButtonButton = true,
                )
            )
        )

        stack.value.active.instance.navigation.push(Config(id = 2))

        backDispatcher.back()

        stack.value.assertStack(1 to 1, 2 to 2)
        stack.value.active.instance.stack.value.assertStack(1 to 1)
    }

    @Test
    fun GIVEN_nested_navigation_with_back_handling_and_back_stack_not_empty_and_back_pressed_WHEN_back_pressed_again_THEN_outer_stack_popped() {
        val stack = childStack(initialConfiguration = Config(id = 1))

        navigation.push(
            Config(
                id = 2,
                routingParams = RoutingParams(
                    initialStack = listOf(Config(1)),
                    handleButtonButton = true,
                )
            )
        )

        stack.value.active.instance.navigation.push(Config(id = 2))
        backDispatcher.back()

        backDispatcher.back()

        stack.value.assertStack(1 to 1)
    }

    @Test
    fun GIVEN_two_children_in_stack_and_last_child_has_enabled_back_callback_WHEN_back_pressed_THEN_back_callback_called() {
        val stack = childStack(initialStack = listOf(Config(1), Config(2)))
        var isCalled = false
        stack.value.active.instance.backHandler.register(BackCallback { isCalled = true })

        backDispatcher.back()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_two_children_in_stack_and_last_child_has_enabled_back_callback_WHEN_back_pressed_THEN_stack_not_popped() {
        val stack = childStack(initialStack = listOf(Config(1), Config(2)))
        stack.value.active.instance.backHandler.register(BackCallback {})

        backDispatcher.back()

        stack.value.assertStack(1 to null, 2 to 2)
    }

    @Test
    fun GIVEN_two_children_in_stack_and_last_child_has_disabled_back_callback_WHEN_back_pressed_THEN_back_callback_not_called() {
        val stack = childStack(initialStack = listOf(Config(1), Config(2)))
        var isCalled = false
        stack.value.active.instance.backHandler.register(BackCallback(isEnabled = false) { isCalled = true })

        backDispatcher.back()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_two_children_in_stack_and_last_child_has_disabled_back_callback_WHEN_back_pressed_THEN_stack_popped() {
        val stack = childStack(initialStack = listOf(Config(1), Config(2)))
        stack.value.active.instance.backHandler.register(BackCallback(isEnabled = false) {})

        backDispatcher.back()

        stack.value.assertStack(1 to 1)
    }

    private fun childStack(initialConfiguration: Config): Value<ChildStack<Config, Component>> =
        childStack(initialStack = listOf(initialConfiguration))

    private fun childStack(initialStack: List<Config>): Value<ChildStack<Config, Component>> =
        context.childStack(
            source = navigation,
            initialStack = { initialStack },
            handleBackButton = true,
            childFactory = ::Component,
        )

    private val ChildStack<Config, Component>.children: List<Pair<Int, Int?>>
        get() = items.map { child ->
            when (child) {
                is Child.Created -> child.configuration.id to child.instance.id
                is Child.Destroyed -> child.configuration.id to null
            }
        }

    private fun ChildStack<Config, Component>.assertStack(vararg children: Pair<Int, Int?>) {
        assertEquals(children.toList(), this.children)
    }

    @Parcelize
    private data class Config(
        val id: Int,
        val routingParams: RoutingParams? = null,
    ) : Parcelable

    @Parcelize
    private data class RoutingParams(
        val initialStack: List<Config>,
        val handleButtonButton: Boolean = false
    ) : Parcelable

    private class Component(
        config: Config,
        componentContext: ComponentContext,
    ) : ComponentContext by componentContext {
        val id: Int = config.id

        private val _navigation: StackNavigation<Config>? = if (config.routingParams != null) StackNavigation() else null
        val navigation: StackNavigation<Config> get() = requireNotNull(_navigation)

        private val _stack: Value<ChildStack<Config, Component>>? =
            config.routingParams?.let { params ->
                childStack(
                    source = navigation,
                    initialStack = { params.initialStack },
                    handleBackButton = params.handleButtonButton,
                    childFactory = ::Component,
                )
            }

        val stack: Value<ChildStack<Config, Component>> get() = requireNotNull(_stack)
    }
}
