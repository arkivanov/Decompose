package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.router.TestInstance
import com.arkivanov.decompose.router.children.ChildNavState.Status.CREATED
import com.arkivanov.decompose.router.children.ChildNavState.Status.DESTROYED
import com.arkivanov.decompose.router.children.ChildNavState.Status.RESUMED
import com.arkivanov.decompose.router.children.ChildNavState.Status.STARTED
import com.arkivanov.decompose.statekeeper.TestStateKeeperDispatcher
import com.arkivanov.decompose.testutils.getValue
import com.arkivanov.essenty.instancekeeper.getOrCreate
import com.arkivanov.essenty.lifecycle.destroy
import com.arkivanov.essenty.lifecycle.doOnDestroy
import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertFalse

@Suppress("TestFunctionName")
class ChildrenBasicTest : ChildrenTestBase() {

    @Test
    fun WHEN_navigate_THEN_onEventComplete_called() {
        val results = ArrayList<Pair<TestNavState, TestNavState>>()
        context.children(
            initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by RESUMED),
            onEventComplete = { _, newState, oldState -> results += newState to oldState },
        )

        navigate { emptyList() }

        assertContentEquals(listOf(stateOf() to stateOf(1 by DESTROYED, 2 by CREATED, 3 by RESUMED)), results)
    }

    @Test
    fun WHEN_created_THEN_onStateChanged_called() {
        val results = ArrayList<Pair<TestNavState, TestNavState?>>()

        context.children(
            initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by RESUMED),
            onStateChanged = { newState, oldState -> results += newState to oldState },
        )

        assertContentEquals(listOf(stateOf(1 by DESTROYED, 2 by CREATED, 3 by RESUMED) to null), results)
    }

    @Test
    fun WHEN_navigate_THEN_onStateChanged_called() {
        val results = ArrayList<Pair<TestNavState, TestNavState?>>()
        context.children(
            initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by RESUMED),
            onStateChanged = { newState, oldState -> results += newState to oldState },
        )
        results.clear()

        navigate { emptyList() }

        assertContentEquals(listOf(stateOf() to stateOf(1 by DESTROYED, 2 by CREATED, 3 by RESUMED)), results)
    }

    @Test
    fun WHEN_navigate_THEN_onEventComplete_called_after_onStateChanged_called() {
        val results = ArrayList<String>()
        context.children(
            initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by RESUMED),
            onEventComplete = { _, _, _ -> results += "onEventComplete" },
            onStateChanged = { _, _ -> results += "onStateChanged" },
        )
        results.clear()

        navigate { emptyList() }

        assertContentEquals(listOf("onStateChanged", "onEventComplete"), results)
    }

    @Test
    fun WHEN_destroyed_THEN_components_destroyed_in_reversed_order() {
        val destroyEvents = ArrayList<Int>()

        context.children(initialState = stateOf(1 by CREATED, 2 by CREATED, 3 by RESUMED)) { config, componentContext ->
            componentContext.lifecycle.doOnDestroy { destroyEvents += config }
            Component(config = config, componentContext = componentContext)
        }

        lifecycle.destroy()

        assertContentEquals(listOf(3, 2, 1), destroyEvents)
    }

    @Test
    fun WHEN_created_THEN_components_created_in_order() {
        val createEvents = ArrayList<Int>()

        context.children(initialState = stateOf(1 by CREATED, 2 by CREATED, 3 by RESUMED)) { config, componentContext ->
            createEvents += config
            Component(config = config, componentContext = componentContext)
        }

        assertContentEquals(listOf(1, 2, 3), createEvents)
    }

    @Test
    fun WHEN_recreated_THEN_components_created_in_original_order() {
        val createEvents = ArrayList<Int>()

        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        oldContext.children(initialState = stateOf(1 by CREATED, 2 by CREATED, 3 by RESUMED))

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        newContext.children { config, componentContext ->
            createEvents += config
            Component(config = config, componentContext = componentContext)
        }

        assertContentEquals(listOf(1, 2, 3), createEvents)
    }

    @Test
    fun GIVEN_resumed_child_with_retained_instance_WHEN_child_removed_THEN_component_destroyed_before_instance() {
        val destroyEvents = ArrayList<String>()
        val children by context.children(initialState = stateOf(1 by CREATED, 2 by CREATED, 3 by RESUMED))
        val component = children.getByConfig(config = 3).requireInstance()
        val instance = component.instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)
        component.lifecycle.doOnDestroy { destroyEvents += "component" }
        instance.onDestroyed = { destroyEvents += "instance" }

        navigate { listOf(1 by DESTROYED, 2 by CREATED) }

        assertContentEquals(listOf("component", "instance"), destroyEvents)
    }

    @Test
    fun GIVEN_resumed_child_with_retained_instance_WHEN_child_switched_to_destroyed_THEN_component_destroyed_before_instance() {
        val destroyEvents = ArrayList<String>()
        val children by context.children(initialState = stateOf(1 by CREATED, 2 by CREATED, 3 by RESUMED))
        val component = children.getByConfig(config = 3).requireInstance()
        val instance = component.instanceKeeper.getOrCreate(key = "key", factory = ::TestInstance)
        component.lifecycle.doOnDestroy { destroyEvents += "component" }
        instance.onDestroyed = { destroyEvents += "instance" }

        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by DESTROYED) }

        assertContentEquals(listOf("component", "instance"), destroyEvents)
    }

    @Test
    fun WHEN_navigate_and_navigate_recursively_THEN_childFactory_not_called_recursively() {
        var isNavigating = false
        var isCalledRecursively = false
        context.children(initialState = stateOf(1 by CREATED)) { config, ctx ->
            if (isNavigating) {
                isCalledRecursively = true
            }

            if (config == 2) {
                isNavigating = true
                navigate { it + (3 by RESUMED) }
                isNavigating = false
            }

            Component(config, ctx)
        }

        navigate { it + listOf(2 by STARTED) }

        assertFalse(isCalledRecursively)
    }

    @Test
    fun WHEN_navigate_and_navigate_recursively_THEN_state_updated() {
        val children = context.children(initialState = stateOf(1 by CREATED)) { config, ctx ->
            if (config == 2) {
                navigate { it + (3 by RESUMED) }
            }

            Component(config, ctx)
        }

        navigate { it + (2 by STARTED) }

        children.value.assertChildren(1 to 1, 2 to 2, 3 to 3)
    }

    @Test
    fun WHEN_navigate_recursively_during_init_THEN_childFactory_not_called_recursively() {
        var isNavigating = false
        var isCalledRecursively = false
        context.children(initialState = stateOf(1 by CREATED)) { config, ctx ->
            if (isNavigating) {
                isCalledRecursively = true
            }

            if (config == 1) {
                isNavigating = true
                navigate { it + listOf(2 by RESUMED) }
                isNavigating = false
            }

            Component(config, ctx)
        }

        assertFalse(isCalledRecursively)
    }

    @Test
    fun WHEN_navigate_recursively_during_init_THEN_state_updated() {
        val children by context.children(initialState = stateOf(1 by CREATED)) { config, ctx ->
            if (config == 1) {
                navigate { it + (2 by RESUMED) }
            }

            Component(config, ctx)
        }

        children.assertChildren(1 to 1, 2 to 2)
    }
}
