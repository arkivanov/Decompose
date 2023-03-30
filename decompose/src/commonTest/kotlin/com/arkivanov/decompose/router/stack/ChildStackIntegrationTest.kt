package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.router.TestInstance
import com.arkivanov.decompose.statekeeper.TestStateKeeperDispatcher
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.getValue
import com.arkivanov.essenty.backhandler.BackCallback
import com.arkivanov.essenty.backhandler.BackDispatcher
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.instancekeeper.getOrCreate
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.resume
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.Parcelize
import com.arkivanov.essenty.statekeeper.consume
import kotlin.test.BeforeTest
import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotEquals
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class ChildStackIntegrationTest {

    private val navigation = StackNavigation<Config>()
    private val lifecycle = LifecycleRegistry()
    private val stateKeeper = TestStateKeeperDispatcher()
    private val instanceKeeper = InstanceKeeperDispatcher()
    private val backDispatcher = BackDispatcher()

    private val context =
        DefaultComponentContext(
            lifecycle = lifecycle,
            stateKeeper = stateKeeper,
            instanceKeeper = instanceKeeper,
            backHandler = backDispatcher,
        )

    @BeforeTest
    fun before() {
        lifecycle.resume()
    }

    @Test
    fun GIVEN_one_child_in_stack_WHEN_push_one_child_THEN_two_children_in_stack() {
        val stack by context.childStack(initialStack = listOf(Config(1)))

        navigation.push(Config(2))

        stack.assertStack(1 to 1, 2 to 2)
    }

    @Test
    fun GIVEN_one_child_in_stack_WHEN_push_two_children_and_pop_one_child_THEN_two_children_in_stack() {
        val stack by context.childStack(initialStack = listOf(Config(1)))

        navigation.push(Config(2))
        navigation.push(Config(3))
        navigation.pop()

        stack.assertStack(1 to 1, 2 to 2)
    }

    @Test
    fun GIVEN_three_children_in_stack_WHEN_pop_one_child_THEN_two_children_in_stack() {
        val stack by context.childStack(initialStack = listOf(Config(1), Config(2), Config(3)))

        navigation.pop()

        stack.assertStack(1 to 1, 2 to 2)
    }

    @Test
    fun GIVEN_one_child_in_stack_WHEN_push_two_children_and_back_pressed_THEN_two_children_in_stack() {
        val stack by context.childStack(initialStack = listOf(Config(1)))

        navigation.push(Config(2))
        navigation.push(Config(3))
        backDispatcher.back()

        stack.assertStack(1 to 1, 2 to 2)
    }

    @Test
    fun GIVEN_three_children_in_stack_WHEN_back_pressed_THEN_two_children_in_stack() {
        val stack by context.childStack(initialStack = listOf(Config(1), Config(2), Config(3)))

        backDispatcher.back()

        stack.assertStack(1 to 1, 2 to 2)
    }

    @Test
    fun GIVEN_two_children_stack_WHEN_replaceCurrent_THEN_two_children_in_stack_and_new_child_is_active() {
        val stack by context.childStack(initialStack = listOf(Config(1), Config(2)))

        navigation.replaceCurrent(Config(3))

        stack.assertStack(1 to 1, 3 to 3)
    }

    @Test
    fun GIVEN_initial_three_children_in_stack_WHEN_reverse_THEN_three_children_reversed_in_stack() {
        val stack by context.childStack(initialStack = listOf(Config(1), Config(2), Config(3)))

        navigation.navigate { it.reversed() }

        stack.assertStack(3 to 3, 2 to 2, 1 to 1)
    }

    @Test
    fun GIVEN_three_active_children_in_stack_WHEN_reverse_THEN_three_children_reversed_in_stack() {
        val stack by context.childStack(initialStack = listOf(Config(1)))
        navigation.push(Config(2))
        navigation.push(Config(3))

        navigation.navigate { it.reversed() }

        stack.assertStack(3 to 3, 2 to 2, 1 to 1)
    }

    @Test
    fun GIVEN_nested_navigation_with_back_handling_and_back_stack_not_empty_WHEN_back_pressed_THEN_inner_stack_popped() {
        val stack by context.childStack(initialStack = listOf(Config(id = 1)))

        navigation.push(
            Config(
                id = 2,
                routingParams = RoutingParams(
                    initialStack = listOf(Config(1)),
                    handleButtonButton = true,
                )
            )
        )

        stack.active.instance.navigation.push(Config(id = 2))

        backDispatcher.back()

        stack.assertStack(1 to 1, 2 to 2)
        stack.active.instance.stack.assertStack(1 to 1)
    }

    @Test
    fun GIVEN_nested_navigation_with_back_handling_and_back_stack_not_empty_and_back_pressed_WHEN_back_pressed_again_THEN_outer_stack_popped() {
        val stack by context.childStack(initialStack = listOf(Config(id = 1)))

        navigation.push(
            Config(
                id = 2,
                routingParams = RoutingParams(
                    initialStack = listOf(Config(1)),
                    handleButtonButton = true,
                )
            )
        )

        stack.active.instance.navigation.push(Config(id = 2))
        backDispatcher.back()

        backDispatcher.back()

        stack.assertStack(1 to 1)
    }

    @Test
    fun GIVEN_two_children_in_stack_and_last_child_has_enabled_back_callback_WHEN_back_pressed_THEN_back_callback_called() {
        val stack by context.childStack(initialStack = listOf(Config(1), Config(2)))
        var isCalled = false
        stack.active.instance.backHandler.register(BackCallback { isCalled = true })

        backDispatcher.back()

        assertTrue(isCalled)
    }

    @Test
    fun GIVEN_two_children_in_stack_and_last_child_has_enabled_back_callback_WHEN_back_pressed_THEN_stack_not_popped() {
        val stack by context.childStack(initialStack = listOf(Config(1), Config(2)))
        stack.active.instance.backHandler.register(BackCallback {})

        backDispatcher.back()

        stack.assertStack(1 to 1, 2 to 2)
    }

    @Test
    fun GIVEN_two_children_in_stack_and_last_child_has_disabled_back_callback_WHEN_back_pressed_THEN_back_callback_not_called() {
        val stack by context.childStack(initialStack = listOf(Config(1), Config(2)))
        var isCalled = false
        stack.active.instance.backHandler.register(BackCallback(isEnabled = false) { isCalled = true })

        backDispatcher.back()

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_two_children_in_stack_and_last_child_has_disabled_back_callback_WHEN_back_pressed_THEN_stack_popped() {
        val stack by context.childStack(initialStack = listOf(Config(1), Config(2)))
        stack.active.instance.backHandler.register(BackCallback(isEnabled = false) {})

        backDispatcher.back()

        stack.assertStack(1 to 1)
    }

    @Test
    fun GIVEN_persistent_WHEN_recreated_THEN_stack_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        oldContext.childStack(initialStack = listOf(Config(1), Config(2)), persistent = true)

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newStack by newContext.childStack()

        newStack.assertStack(1 to 1, 2 to 2)
    }

    @Test
    fun GIVEN_not_persistent_WHEN_recreated_THEN_stack_not_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        oldContext.childStack(initialStack = listOf(Config(1), Config(2)), persistent = false)

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newStack by newContext.childStack(initialStack = listOf(Config(1)))

        newStack.assertStack(1 to 1)
    }

    @Test
    fun WHEN_component_pushed_THEN_state_not_saved_for_previous_component() {
        val stack by context.childStack(initialStack = listOf(Config(1)))
        var isCalled = false
        stack.active.instance.stateKeeper.register(key = "key") {
            isCalled = true
            Config(10)
        }

        navigation.push(Config(2))

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_persistent_WHEN_recreated_THEN_state_restored_for_all_components() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        val oldStack by oldContext.childStack(initialStack = listOf(Config(1), Config(2), Config(3)), persistent = true)
        oldStack.items.forEach { (configuration, instance) ->
            instance.stateKeeper.register(key = "key") { Config(configuration.id) }
        }

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newStack by newContext.childStack()
        val restoredStates = newStack.items.map { it.instance.stateKeeper.consume<Config>(key = "key") }

        assertContentEquals(listOf(Config(1), Config(2), Config(3)), restoredStates)
    }

    @Test
    fun GIVEN_persistent_WHEN_recreated_twice_THEN_state_restored_for_all_components() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        val oldStack by oldContext.childStack(initialStack = listOf(Config(1), Config(2), Config(3)), persistent = true)
        oldStack.items.forEach { (configuration, instance) ->
            instance.stateKeeper.register(key = "key") { Config(configuration.id) }
        }

        val savedState1 = oldStateKeeper.save()
        val newStateKeeper1 = TestStateKeeperDispatcher(savedState1)
        val newContext1 = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper1)
        val newStack1 by newContext1.childStack()
        newStack1.items.forEach { it.instance.stateKeeper.consume<Config>(key = "key") }

        val savedState2 = oldStateKeeper.save()
        val newStateKeeper2 = TestStateKeeperDispatcher(savedState2)
        val newContext2 = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper2)
        val newStack2 by newContext2.childStack()
        val restoredStates = newStack2.items.map { it.instance.stateKeeper.consume<Config>(key = "key") }

        assertContentEquals(listOf(Config(1), Config(2), Config(3)), restoredStates)
    }

    @Test
    fun GIVEN_not_persistent_WHEN_recreated_THEN_state_not_restored_for_any_component() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        val oldStack by oldContext.childStack(initialStack = listOf(Config(1), Config(2), Config(3)), persistent = false)
        oldStack.items.forEach { (configuration, instance) ->
            instance.stateKeeper.register(key = "key") { Config(configuration.id) }
        }

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newStack by newContext.childStack(initialStack = listOf(Config(1), Config(2), Config(3)))
        val restoredStates = newStack.items.map { it.instance.stateKeeper.consume<Config>(key = "key") }

        assertContentEquals(listOf(null, null, null), restoredStates)
    }

    @Test
    fun GIVEN_persistent_WHEN_recreated_THEN_instance_retained_for_all_components() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val instanceKeeper = InstanceKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper, instanceKeeper = instanceKeeper)
        val oldStack by oldContext.childStack(initialStack = listOf(Config(1), Config(2), Config(3)), persistent = true)
        val oldInstances = oldStack.items.map { it.instance.instanceKeeper.getOrCreate(::TestInstance) }

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper, instanceKeeper = instanceKeeper)
        val newStack by newContext.childStack()
        val retainedInstances = newStack.items.map { it.instance.instanceKeeper.getOrCreate(::TestInstance) }

        assertContentEquals(oldInstances, retainedInstances)
    }

    @Test
    fun GIVEN_not_persistent_WHEN_recreated_THEN_instance_not_retained_for_any_component() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val instanceKeeper = InstanceKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper, instanceKeeper = instanceKeeper)
        val oldStack by oldContext.childStack(initialStack = listOf(Config(1), Config(2), Config(3)), persistent = false)
        val oldInstances = oldStack.items.map { it.instance.instanceKeeper.getOrCreate(::TestInstance) }

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper, instanceKeeper = instanceKeeper)
        val newStack by newContext.childStack(initialStack = listOf(Config(1), Config(2), Config(3)))
        val retainedInstances = newStack.items.map { it.instance.instanceKeeper.getOrCreate(::TestInstance) }

        oldInstances.forEachIndexed { index, instance ->
            assertNotEquals(instance, retainedInstances[index])
        }
    }

    @Test
    fun GIVEN_persistent_WHEN_recreated_THEN_instance_not_destroyed_for_any_component() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val instanceKeeper = InstanceKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper, instanceKeeper = instanceKeeper)
        val stack by oldContext.childStack(initialStack = listOf(Config(1), Config(2), Config(3)), persistent = true)
        val instances = stack.items.map { it.instance.instanceKeeper.getOrCreate(::TestInstance) }

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper, instanceKeeper = instanceKeeper)
        newContext.childStack()

        instances.forEach {
            assertFalse(it.isDestroyed)
        }
    }

    @Test
    fun GIVEN_not_persistent_WHEN_recreated_THEN_instances_destroyed_for_all_component() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val instanceKeeper = InstanceKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper, instanceKeeper = instanceKeeper)
        val stack by oldContext.childStack(initialStack = listOf(Config(1), Config(2), Config(3)), persistent = false)
        val instances = stack.items.map { it.instance.instanceKeeper.getOrCreate(::TestInstance) }

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper, instanceKeeper = instanceKeeper)
        newContext.childStack(initialStack = listOf(Config(1), Config(2), Config(3)))

        instances.forEach {
            assertTrue(it.isDestroyed)
        }
    }

    @Test
    fun WHEN_another_child_pushed_THEN_instance_not_destroyed_for_previous_child() {
        val stack by context.childStack(initialStack = listOf(Config(1)))
        val instance = stack.active.instance.instanceKeeper.getOrCreate(::TestInstance)

        navigation.push(Config(2))

        assertFalse(instance.isDestroyed)
    }

    @Test
    fun GIVEN_another_child_pushed_WHEN_recreated_THEN_instance_not_destroyed_for_previous_child() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val instanceKeeper = InstanceKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper, instanceKeeper = instanceKeeper)
        val stack by oldContext.childStack(initialStack = listOf(Config(1)))
        val instance = stack.active.instance.instanceKeeper.getOrCreate(::TestInstance)
        navigation.push(Config(2))

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper, instanceKeeper = instanceKeeper)
        newContext.childStack()

        assertFalse(instance.isDestroyed)
    }

    private fun ComponentContext.childStack(
        initialStack: List<Config> = emptyList(),
        persistent: Boolean = true,
    ): Value<ChildStack<Config, Component>> =
        childStack(
            source = navigation,
            initialStack = { initialStack },
            persistent = persistent,
            handleBackButton = true,
            childFactory = ::Component,
        )

    private val ChildStack<Config, Component>.children: List<Pair<Int, Int>>
        get() = items.map { child -> child.configuration.id to child.instance.id }

    private fun ChildStack<Config, Component>.getById(id: Int): Child.Created<Config, Component> =
        items.first { it.configuration.id == id }

    private fun ChildStack<Config, Component>.assertStack(vararg children: Pair<Int, Int>) {
        assertEquals(children.toList(), this.children)
        assertEquals(Lifecycle.State.RESUMED, active.instance.lifecycle.state)

        assertEquals(
            List(children.size - 1) { Lifecycle.State.CREATED },
            backStack.map { it.instance.lifecycle.state },
        )
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

        val stack: ChildStack<Config, Component> get() = requireNotNull(_stack).value
    }
}
