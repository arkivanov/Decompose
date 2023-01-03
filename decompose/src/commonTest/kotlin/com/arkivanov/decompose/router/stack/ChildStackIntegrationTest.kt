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
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertSame
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

        stack.assertStack(1 to null, 2 to 2)
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

        stack.assertStack(1 to null, 2 to 2)
    }

    @Test
    fun GIVEN_two_children_stack_WHEN_replaceCurrent_THEN_two_children_in_stack_and_new_child_is_active() {
        val stack by context.childStack(initialStack = listOf(Config(1), Config(2)))

        navigation.replaceCurrent(Config(3))

        stack.assertStack(1 to null, 3 to 3)
    }

    @Test
    fun GIVEN_initial_three_children_in_stack_WHEN_reverse_THEN_three_children_reversed_in_stack() {
        val stack by context.childStack(initialStack = listOf(Config(1), Config(2), Config(3)))

        navigation.navigate { it.reversed() }

        stack.assertStack(3 to 3, 2 to null, 1 to 1)
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

        stack.assertStack(1 to null, 2 to 2)
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
    fun WHEN_recreated_THEN_stack_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        oldContext.childStack(initialStack = listOf(Config(1), Config(2)))

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newStack by newContext.childStack(initialStack = emptyList())

        newStack.assertStack(1 to null, 2 to 2)
    }

    @Test
    fun WHEN_child_pushed_THEN_state_saved_for_previous_child() {
        val stack by context.childStack(initialStack = listOf(Config(1)))
        var isCalled = false
        stack.active.instance.stateKeeper.register(key = "key") {
            isCalled = true
            Config(10)
        }

        navigation.push(Config(2))

        assertTrue(isCalled)
    }

    @Test
    fun WHEN_recreated_THEN_state_restored_for_active_child() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        val oldStack by oldContext.childStack(initialStack = listOf(Config(1)))
        oldStack.active.instance.stateKeeper.register(key = "key") { Config(10) }

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newStack by newContext.childStack(initialStack = emptyList())
        val restoredState = newStack.active.instance.stateKeeper.consume<Config>(key = "key")

        assertEquals(Config(10), restoredState)
    }

    @Test
    fun GIVEN_back_stack_not_empty_and_recreated_WHEN_pop_THEN_state_restored_for_previous_child() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        val oldStack by oldContext.childStack(initialStack = listOf(Config(1)))
        oldStack.active.instance.stateKeeper.register(key = "key") { Config(10) }
        navigation.push(Config(2))
        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newStack by newContext.childStack(initialStack = emptyList())

        navigation.pop()
        val restoredState = newStack.active.instance.stateKeeper.consume<Config>(key = "key")

        assertEquals(Config(10), restoredState)
    }

    @Test
    fun WHEN_recreated_THEN_instance_retained_for_active_component() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val instanceKeeper = InstanceKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper, instanceKeeper = instanceKeeper)
        val oldStack by oldContext.childStack(initialStack = listOf(Config(1)))
        val oldInstance = oldStack.active.instance.instanceKeeper.getOrCreate(::TestInstance)

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper, instanceKeeper = instanceKeeper)
        val newStack by newContext.childStack(initialStack = emptyList())
        val retainedInstance = newStack.active.instance.instanceKeeper.getOrCreate(::TestInstance)

        assertSame(oldInstance, retainedInstance)
    }

    @Test
    fun WHEN_recreated_THEN_instance_not_destroyed_for_active_component() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val instanceKeeper = InstanceKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper, instanceKeeper = instanceKeeper)
        val stack by oldContext.childStack(initialStack = listOf(Config(1)))
        val instance = stack.active.instance.instanceKeeper.getOrCreate(::TestInstance)

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper, instanceKeeper = instanceKeeper)
        newContext.childStack(initialStack = emptyList())

        assertFalse(instance.isDestroyed)
    }

    @Test
    fun WHEN_another_child_pushed_THEN_instance_not_destroyed_for_previous_child() {
        val stack by context.childStack(initialStack = listOf(Config(1)))
        val instance = stack.active.instance.instanceKeeper.getOrCreate(::TestInstance)

        navigation.push(Config(2))

        assertFalse(instance.isDestroyed)
    }

    @Test
    fun GIVEN_another_child_pushed_WHEN_recreated_THEN_instance_destroyed_for_previous_child() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val instanceKeeper = InstanceKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper, instanceKeeper = instanceKeeper)
        val stack by oldContext.childStack(initialStack = listOf(Config(1)))
        val instance = stack.active.instance.instanceKeeper.getOrCreate(::TestInstance)
        navigation.push(Config(2))

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper, instanceKeeper = instanceKeeper)
        newContext.childStack(initialStack = emptyList())

        assertTrue(instance.isDestroyed)
    }

    @Test
    fun GIVEN_back_stack_not_empty_WHEN_recreated_THEN_only_active_child_recreated() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        oldContext.childStack(initialStack = listOf(Config(1), Config(2)))

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newStack by newContext.childStack(initialStack = emptyList())

        newStack.assertStack(1 to null, 2 to 2)
    }

    @Test
    fun GIVEN_backStackCreateDepth_WHEN_created_THEN_back_stack_created() {
        val context = DefaultComponentContext(lifecycle = lifecycle)

        val stack by context.childStack(
            initialStack = listOf(Config(1), Config(2), Config(3), Config(4)),
            backStackCreateDepth = 2,
        )

        stack.assertStack(1 to null, 2 to 2, 3 to 3, 4 to 4)
    }

    @Test
    fun GIVEN_back_stack_not_empty_and_backStackCreateDepth_is_1_WHEN_recreated_THEN_last_to_children_recreated() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        oldContext.childStack(initialStack = listOf(Config(1), Config(2), Config(3)))

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newStack by newContext.childStack(initialStack = emptyList(), backStackCreateDepth = 1)

        newStack.assertStack(1 to null, 2 to 2, 3 to 3)
    }

    @Test
    fun GIVEN_back_stack_not_empty_and_backStackCreateDepth_is_max_WHEN_recreated_THEN_all_children_recreated() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        oldContext.childStack(initialStack = listOf(Config(1), Config(2), Config(3)))

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newStack by newContext.childStack(initialStack = emptyList(), backStackCreateDepth = Int.MAX_VALUE)

        newStack.assertStack(1 to 1, 2 to 2, 3 to 3)
    }

    @Test
    fun GIVEN_back_stack_not_empty_and_backStackCreateDepth_is_1_and_recreated_WHEN_pop_THEN_last_two_children_recreated() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        oldContext.childStack(initialStack = listOf(Config(1), Config(2), Config(3), Config(4)))
        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newStack by newContext.childStack(initialStack = emptyList(), backStackCreateDepth = 1)

        navigation.pop()

        newStack.assertStack(1 to null, 2 to 2, 3 to 3)
    }

    @Test
    fun GIVEN_back_stack_not_empty_and_backStackCreateDepth_is_1_and_recreated_WHEN_back_pressed_THEN_last_two_children_recreated() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        oldContext.childStack(initialStack = listOf(Config(1), Config(2), Config(3), Config(4)))
        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper, backHandler = backDispatcher)
        val newStack by newContext.childStack(initialStack = emptyList(), backStackCreateDepth = 1)

        backDispatcher.back()

        newStack.assertStack(1 to null, 2 to 2, 3 to 3)
    }

    @Test
    fun GIVEN_one_child_in_back_stack_and_backStackCreateDepth_is_1_WHEN_pop_THEN_child_popped() {
        val context = DefaultComponentContext(lifecycle = lifecycle)
        val stack by context.childStack(initialStack = listOf(Config(1), Config(2)), backStackCreateDepth = 1)

        navigation.pop()

        stack.assertStack(1 to 1)
    }

    @Test
    fun GIVEN_one_child_in_back_stack_and_backStackCreateDepth_is_2_WHEN_pop_THEN_child_popped() {
        val context = DefaultComponentContext(lifecycle = lifecycle)
        val stack by context.childStack(initialStack = listOf(Config(1), Config(2)), backStackCreateDepth = 2)

        navigation.pop()

        stack.assertStack(1 to 1)
    }

    @Test
    fun GIVEN_two_children_in_back_stack_and_backStackCreateDepth_is_1_WHEN_pop_THEN_child_popped() {
        val context = DefaultComponentContext(lifecycle = lifecycle)
        val stack by context.childStack(initialStack = listOf(Config(1), Config(2), Config(3)), backStackCreateDepth = 1)

        navigation.pop()

        stack.assertStack(1 to 1, 2 to 2)
    }

    @Test
    fun GIVEN_two_children_in_back_stack_and_backStackCreateDepth_is_2_WHEN_pop_THEN_child_popped() {
        val context = DefaultComponentContext(lifecycle = lifecycle)
        val stack by context.childStack(initialStack = listOf(Config(1), Config(2), Config(3)), backStackCreateDepth = 2)

        navigation.pop()

        stack.assertStack(1 to 1, 2 to 2)
    }

    private fun ComponentContext.childStack(
        initialStack: List<Config>,
        backStackCreateDepth: Int = 0,
    ): Value<ChildStack<Config, Component>> =
        childStack(
            source = navigation,
            initialStack = { initialStack },
            backStackCreateDepth = backStackCreateDepth,
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
        assertEquals(Lifecycle.State.RESUMED, active.instance.lifecycle.state)

        assertEquals(
            children
                .dropLast(1)
                .map { (_, instanceId) -> if (instanceId == null) Lifecycle.State.DESTROYED else Lifecycle.State.CREATED },
            backStack.map { it.instance?.lifecycle?.state ?: Lifecycle.State.DESTROYED },
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
