package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.DecomposeExperimentFlags
import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.consume
import com.arkivanov.decompose.register
import com.arkivanov.decompose.router.children.ChildNavState.Status.RESUMED
import com.arkivanov.decompose.router.children.ChildNavState.Status.DESTROYED
import com.arkivanov.decompose.router.children.ChildNavState.Status.CREATED
import com.arkivanov.decompose.router.children.ChildNavState.Status.STARTED
import com.arkivanov.decompose.statekeeper.TestStateKeeperDispatcher
import com.arkivanov.decompose.value.getValue
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class ChildrenSavedStateTest : ChildrenTestBase() {

    @Test
    fun WHEN_child_switched_from_resumed_to_started_THEN_state_not_saved() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        var isCalled = false
        children.getByConfig(config = 4).requireInstance().stateKeeper.register(key = "key") {
            isCalled = true
            "SavedState"
        }

        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by STARTED) }

        assertFalse(isCalled)
    }

    @Test
    fun WHEN_child_switched_from_resumed_to_created_THEN_state_not_saved() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        var isCalled = false
        children.getByConfig(config = 4).requireInstance().stateKeeper.register(key = "key") {
            isCalled = true
            "SavedState"
        }

        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by CREATED) }

        assertFalse(isCalled)
    }

    @Test
    fun WHEN_child_switched_from_resumed_to_destroyed_THEN_state_saved() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        var isCalled = false
        children.getByConfig(config = 4).requireInstance().stateKeeper.register(key = "key") {
            isCalled = true
            "SavedState"
        }

        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by DESTROYED) }

        assertTrue(isCalled)
    }

    @Test
    fun WHEN_child_switched_from_created_to_destroyed_THEN_state_saved() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        var isCalled = false
        children.getByConfig(config = 2).requireInstance().stateKeeper.register(key = "key") {
            isCalled = true
            "SavedState"
        }

        navigate { listOf(1 by DESTROYED, 2 by DESTROYED, 3 by STARTED, 4 by RESUMED) }

        assertTrue(isCalled)
    }

    @Test
    fun WHEN_child_switched_from_created_to_started_THEN_state_not_saved() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        var isCalled = false
        children.getByConfig(config = 2).requireInstance().stateKeeper.register(key = "key") {
            isCalled = true
            "SavedState"
        }

        navigate { listOf(1 by DESTROYED, 2 by STARTED, 3 by STARTED, 4 by RESUMED) }

        assertFalse(isCalled)
    }

    @Test
    fun WHEN_child_switched_from_created_to_resumed_THEN_state_not_saved() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        var isCalled = false
        children.getByConfig(config = 2).requireInstance().stateKeeper.register(key = "key") {
            isCalled = true
            "SavedState"
        }

        navigate { listOf(1 by DESTROYED, 2 by RESUMED, 3 by STARTED, 4 by RESUMED) }

        assertFalse(isCalled)
    }

    @Test
    fun WHEN_child_switched_from_destroyed_to_created_THEN_state_not_saved() {
        var isCalled = false
        context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED)) { config, componentContext ->
            val component = Component(config, componentContext)
            if (config == 1) {
                component.stateKeeper.register(key = "key") {
                    isCalled = true
                    "SavedState"
                }
            }
            component
        }

        navigate { listOf(1 by CREATED, 2 by CREATED, 3 by STARTED, 4 by RESUMED) }

        assertFalse(isCalled)
    }

    @Test
    fun WHEN_child_switched_from_destroyed_to_started_THEN_state_not_saved() {
        var isCalled = false
        context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED)) { config, componentContext ->
            val component = Component(config, componentContext)
            if (config == 1) {
                component.stateKeeper.register(key = "key") {
                    isCalled = true
                    "SavedState"
                }
            }
            component
        }

        navigate { listOf(1 by STARTED, 2 by CREATED, 3 by STARTED, 4 by RESUMED) }

        assertFalse(isCalled)
    }

    @Test
    fun WHEN_child_switched_from_destroyed_to_resumed_THEN_state_not_saved() {
        var isCalled = false
        context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED)) { config, componentContext ->
            val component = Component(config, componentContext)
            if (config == 1) {
                component.stateKeeper.register(key = "key") {
                    isCalled = true
                    "SavedState"
                }
            }
            component
        }

        navigate { listOf(1 by RESUMED, 2 by CREATED, 3 by STARTED, 4 by RESUMED) }

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_child_switched_from_resumed_to_destroyed_WHEN_child_switched_to_resumed_THEN_state_restored() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        children.getByConfig(config = 4).requireInstance().stateKeeper.register(key = "key") { 40 }
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by DESTROYED) }

        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED) }
        val restoredState = children.getByConfig(config = 4).requireInstance().stateKeeper.consume<Int>(key = "key")

        assertEquals(40, restoredState)
    }

    @Test
    fun GIVEN_child_switched_from_resumed_to_destroyed_WHEN_child_switched_to_started_THEN_state_restored() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        children.getByConfig(config = 4).requireInstance().stateKeeper.register(key = "key") { 40 }
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by DESTROYED) }

        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by STARTED) }
        val restoredState = children.getByConfig(config = 4).requireInstance().stateKeeper.consume<Int>(key = "key")

        assertEquals(40, restoredState)
    }

    @Test
    fun GIVEN_child_switched_from_resumed_to_destroyed_WHEN_child_switched_to_created_THEN_state_restored() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        children.getByConfig(config = 4).requireInstance().stateKeeper.register(key = "key") { 40 }
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by DESTROYED) }

        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by CREATED) }
        val restoredState = children.getByConfig(config = 4).requireInstance().stateKeeper.consume<Int>(key = "key")

        assertEquals(40, restoredState)
    }

    @Test
    fun GIVEN_child_switched_from_started_to_destroyed_WHEN_child_switched_to_resumed_THEN_state_restored() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        children.getByConfig(config = 3).requireInstance().stateKeeper.register(key = "key") { 30 }
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by DESTROYED, 4 by RESUMED) }

        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by RESUMED, 4 by RESUMED) }
        val restoredState = children.getByConfig(config = 3).requireInstance().stateKeeper.consume<Int>(key = "key")

        assertEquals(30, restoredState)
    }

    @Test
    fun GIVEN_child_switched_from_started_to_destroyed_WHEN_child_switched_to_started_THEN_state_restored() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        children.getByConfig(config = 3).requireInstance().stateKeeper.register(key = "key") { 30 }
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by DESTROYED, 4 by RESUMED) }

        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED) }
        val restoredState = children.getByConfig(config = 3).requireInstance().stateKeeper.consume<Int>(key = "key")

        assertEquals(30, restoredState)
    }

    @Test
    fun GIVEN_child_switched_from_started_to_destroyed_WHEN_child_switched_to_created_THEN_state_restored() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        children.getByConfig(config = 3).requireInstance().stateKeeper.register(key = "key") { 30 }
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by DESTROYED, 4 by RESUMED) }

        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by CREATED, 4 by RESUMED) }
        val restoredState = children.getByConfig(config = 3).requireInstance().stateKeeper.consume<Int>(key = "key")

        assertEquals(30, restoredState)
    }

    @Test
    fun GIVEN_child_switched_from_created_to_destroyed_WHEN_child_switched_to_resumed_THEN_state_restored() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        children.getByConfig(config = 2).requireInstance().stateKeeper.register(key = "key") { 20 }
        navigate { listOf(1 by DESTROYED, 2 by DESTROYED, 3 by STARTED, 4 by RESUMED) }

        navigate { listOf(1 by DESTROYED, 2 by RESUMED, 3 by STARTED, 4 by RESUMED) }
        val restoredState = children.getByConfig(config = 2).requireInstance().stateKeeper.consume<Int>(key = "key")

        assertEquals(20, restoredState)
    }

    @Test
    fun GIVEN_child_switched_from_created_to_destroyed_WHEN_child_switched_to_started_THEN_state_restored() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        children.getByConfig(config = 2).requireInstance().stateKeeper.register(key = "key") { 20 }
        navigate { listOf(1 by DESTROYED, 2 by DESTROYED, 3 by STARTED, 4 by RESUMED) }

        navigate { listOf(1 by DESTROYED, 2 by STARTED, 3 by STARTED, 4 by RESUMED) }
        val restoredState = children.getByConfig(config = 2).requireInstance().stateKeeper.consume<Int>(key = "key")

        assertEquals(20, restoredState)
    }

    @Test
    fun GIVEN_child_switched_from_created_to_destroyed_WHEN_child_switched_to_created_THEN_state_restored() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        children.getByConfig(config = 2).requireInstance().stateKeeper.register(key = "key") { 20 }
        navigate { listOf(1 by DESTROYED, 2 by DESTROYED, 3 by STARTED, 4 by RESUMED) }

        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED) }
        val restoredState = children.getByConfig(config = 2).requireInstance().stateKeeper.consume<Int>(key = "key")

        assertEquals(20, restoredState)
    }

    @Test
    fun GIVEN_saving_state_WHEN_recreated_THEN_navigation_state_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newChildren by newContext.children()

        newChildren.assertChildren(1 to null, 2 to 2, 3 to 3, 4 to 4)
    }

    @Test
    fun GIVEN_not_saving_state_WHEN_recreated_THEN_navigation_state_not_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED), saveState = { null })

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newChildren by newContext.children(initialState = stateOf())

        newChildren.assertChildren()
    }

    @Test
    fun GIVEN_not_restoring_state_WHEN_recreated_THEN_navigation_state_not_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newChildren by newContext.children(initialState = stateOf(), restoreState = { null })

        newChildren.assertChildren()
    }

    @Test
    fun GIVEN_saving_state_WHEN_recreated_THEN_child_states_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        val oldChildren by oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        oldChildren.getByConfig(config = 2).requireInstance().stateKeeper.register(key = "key") { 20 }
        oldChildren.getByConfig(config = 3).requireInstance().stateKeeper.register(key = "key") { 30 }
        oldChildren.getByConfig(config = 4).requireInstance().stateKeeper.register(key = "key") { 40 }

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newChildren by newContext.children()
        val restoredState2 = newChildren.getByConfig(config = 2).requireInstance().stateKeeper.consume<Int>(key = "key")
        val restoredState3 = newChildren.getByConfig(config = 3).requireInstance().stateKeeper.consume<Int>(key = "key")
        val restoredState4 = newChildren.getByConfig(config = 4).requireInstance().stateKeeper.consume<Int>(key = "key")

        assertEquals(20, restoredState2)
        assertEquals(30, restoredState3)
        assertEquals(40, restoredState4)
    }

    @Test
    fun GIVEN_not_saving_state_WHEN_recreated_THEN_child_states_not_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        val oldChildren by oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED), saveState = { null })
        oldChildren.getByConfig(config = 2).requireInstance().stateKeeper.register(key = "key") { 20 }
        oldChildren.getByConfig(config = 3).requireInstance().stateKeeper.register(key = "key") { 30 }
        oldChildren.getByConfig(config = 4).requireInstance().stateKeeper.register(key = "key") { 40 }

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newChildren by newContext.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        val restoredState2 = newChildren.getByConfig(config = 2).requireInstance().stateKeeper.consume<Int>(key = "key")
        val restoredState3 = newChildren.getByConfig(config = 3).requireInstance().stateKeeper.consume<Int>(key = "key")
        val restoredState4 = newChildren.getByConfig(config = 4).requireInstance().stateKeeper.consume<Int>(key = "key")

        assertNull(restoredState2)
        assertNull(restoredState3)
        assertNull(restoredState4)
    }

    @Test
    fun GIVEN_not_restoring_state_WHEN_recreated_THEN_child_states_not_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        val oldChildren by oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        oldChildren.getByConfig(config = 2).requireInstance().stateKeeper.register(key = "key") { 20 }
        oldChildren.getByConfig(config = 3).requireInstance().stateKeeper.register(key = "key") { 30 }
        oldChildren.getByConfig(config = 4).requireInstance().stateKeeper.register(key = "key") { 40 }

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newChildren by newContext.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED), restoreState = { null })
        val restoredState2 = newChildren.getByConfig(config = 2).requireInstance().stateKeeper.consume<Int>(key = "key")
        val restoredState3 = newChildren.getByConfig(config = 3).requireInstance().stateKeeper.consume<Int>(key = "key")
        val restoredState4 = newChildren.getByConfig(config = 4).requireInstance().stateKeeper.consume<Int>(key = "key")

        assertNull(restoredState2)
        assertNull(restoredState3)
        assertNull(restoredState4)
    }

    @Test
    fun GIVEN_recreated_and_created_child_restored_as_destroyed_WHEN_child_switched_to_created_THEN_state_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        val oldChildren by oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        oldChildren.getByConfig(config = 2).requireInstance().stateKeeper.register(key = "key") { 20 }
        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newChildren by newContext.children(restoreState = { stateOf(1 by DESTROYED, 2 by DESTROYED, 3 by STARTED, 4 by RESUMED) })

        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED) }
        val restoredState3 = newChildren.getByConfig(config = 2).requireInstance().stateKeeper.consume<Int>(key = "key")

        assertEquals(20, restoredState3)
    }

    @Test
    fun GIVEN_recreated_and_created_child_restored_as_destroyed_WHEN_child_switched_to_started_THEN_state_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        val oldChildren by oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        oldChildren.getByConfig(config = 2).requireInstance().stateKeeper.register(key = "key") { 20 }
        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newChildren by newContext.children(restoreState = { stateOf(1 by DESTROYED, 2 by DESTROYED, 3 by STARTED, 4 by RESUMED) })

        navigate { listOf(1 by DESTROYED, 2 by STARTED, 3 by STARTED, 4 by RESUMED) }
        val restoredState3 = newChildren.getByConfig(config = 2).requireInstance().stateKeeper.consume<Int>(key = "key")

        assertEquals(20, restoredState3)
    }

    @Test
    fun GIVEN_recreated_and_created_child_restored_as_destroyed_WHEN_child_switched_to_resumed_THEN_state_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        val oldChildren by oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        oldChildren.getByConfig(config = 2).requireInstance().stateKeeper.register(key = "key") { 20 }
        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newChildren by newContext.children(restoreState = { stateOf(1 by DESTROYED, 2 by DESTROYED, 3 by STARTED, 4 by RESUMED) })

        navigate { listOf(1 by DESTROYED, 2 by RESUMED, 3 by STARTED, 4 by RESUMED) }
        val restoredState3 = newChildren.getByConfig(config = 2).requireInstance().stateKeeper.consume<Int>(key = "key")

        assertEquals(20, restoredState3)
    }

    @Test
    fun GIVEN_recreated_and_started_child_restored_as_destroyed_WHEN_child_switched_to_created_THEN_state_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        val oldChildren by oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        oldChildren.getByConfig(config = 3).requireInstance().stateKeeper.register(key = "key") { 30 }
        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newChildren by newContext.children(restoreState = { stateOf(1 by DESTROYED, 2 by CREATED, 3 by DESTROYED, 4 by RESUMED) })

        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by CREATED, 4 by RESUMED) }
        val restoredState3 = newChildren.getByConfig(config = 3).requireInstance().stateKeeper.consume<Int>(key = "key")

        assertEquals(30, restoredState3)
    }

    @Test
    fun GIVEN_recreated_and_started_child_restored_as_destroyed_WHEN_child_switched_to_started_THEN_state_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        val oldChildren by oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        oldChildren.getByConfig(config = 3).requireInstance().stateKeeper.register(key = "key") { 30 }
        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newChildren by newContext.children(restoreState = { stateOf(1 by DESTROYED, 2 by CREATED, 3 by DESTROYED, 4 by RESUMED) })

        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED) }
        val restoredState3 = newChildren.getByConfig(config = 3).requireInstance().stateKeeper.consume<Int>(key = "key")

        assertEquals(30, restoredState3)
    }

    @Test
    fun GIVEN_recreated_and_started_child_restored_as_destroyed_WHEN_child_switched_to_resumed_THEN_state_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        val oldChildren by oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        oldChildren.getByConfig(config = 3).requireInstance().stateKeeper.register(key = "key") { 30 }
        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newChildren by newContext.children(restoreState = { stateOf(1 by DESTROYED, 2 by CREATED, 3 by DESTROYED, 4 by RESUMED) })

        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by RESUMED, 4 by RESUMED) }
        val restoredState3 = newChildren.getByConfig(config = 3).requireInstance().stateKeeper.consume<Int>(key = "key")

        assertEquals(30, restoredState3)
    }

    @Test
    fun GIVEN_recreated_and_resumed_child_restored_as_destroyed_WHEN_child_switched_to_created_THEN_state_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        val oldChildren by oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        oldChildren.getByConfig(config = 4).requireInstance().stateKeeper.register(key = "key") { 40 }
        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newChildren by newContext.children(restoreState = { stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by DESTROYED) })

        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by CREATED) }
        val restoredState3 = newChildren.getByConfig(config = 4).requireInstance().stateKeeper.consume<Int>(key = "key")

        assertEquals(40, restoredState3)
    }

    @Test
    fun GIVEN_recreated_and_resumed_child_restored_as_destroyed_WHEN_child_switched_to_started_THEN_state_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        val oldChildren by oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        oldChildren.getByConfig(config = 4).requireInstance().stateKeeper.register(key = "key") { 40 }
        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newChildren by newContext.children(restoreState = { stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by DESTROYED) })

        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by STARTED) }
        val restoredState3 = newChildren.getByConfig(config = 4).requireInstance().stateKeeper.consume<Int>(key = "key")

        assertEquals(40, restoredState3)
    }

    @Test
    fun GIVEN_recreated_and_resumed_child_restored_as_destroyed_WHEN_child_switched_to_resumed_THEN_state_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        val oldChildren by oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED))
        oldChildren.getByConfig(config = 4).requireInstance().stateKeeper.register(key = "key") { 40 }
        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newChildren by newContext.children(restoreState = { stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by DESTROYED) })

        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED, 4 by RESUMED) }
        val restoredState3 = newChildren.getByConfig(config = 4).requireInstance().stateKeeper.consume<Int>(key = "key")

        assertEquals(40, restoredState3)
    }

    @Test
    fun GIVEN_child_switched_to_created_and_recreated_twice_WHEN_child_switched_to_resumed_THEN_state_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        val oldChildren by oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by RESUMED, 3 by STARTED))
        oldChildren.getByConfig(config = 2).requireInstance().stateKeeper.register(key = "key") { 30 }
        navigate { listOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED) }

        val savedState1 = oldStateKeeper.save()
        val newStateKeeper1 = TestStateKeeperDispatcher(savedState1)
        val newContext1 = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper1)
        val newChildren1 by newContext1.children(restoreState = { stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED) })
        newChildren1.getByConfig(config = 2).requireInstance().stateKeeper.register(key = "key") { 31 }

        val savedState2 = newStateKeeper1.save()
        val newStateKeeper2 = TestStateKeeperDispatcher(savedState2)
        val newContext2 = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper2)
        val newChildren2 by newContext2.children(restoreState = { stateOf(1 by DESTROYED, 2 by CREATED, 3 by STARTED) })

        val restoredState2 = newChildren2.getByConfig(config = 2).requireInstance().stateKeeper.consume<Int>(key = "key")

        assertEquals(31, restoredState2)
    }

//    @Test
//    fun GIVEN_first_and_last_children_duplicated_WHEN_recreated_THEN_states_restored() {
//        DecomposeExperimentFlags.duplicateConfigurationsEnabled = true
//        val oldStateKeeper = TestStateKeeperDispatcher()
//        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
//        val oldChildren by oldContext.children(initialState = stateOf(1 by CREATED, 2 by STARTED, 1 by RESUMED))
//        oldChildren.first().requireInstance().stateKeeper.register("key") { 10 }
//        oldChildren.last().requireInstance().stateKeeper.register("key") { 30 }
//
//        val savedState = oldStateKeeper.save()
//        val newStateKeeper = TestStateKeeperDispatcher(savedState)
//        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
//        val newChildren by newContext.children()
//
//        val restoredState1 = newChildren.first().requireInstance().stateKeeper.consume<Int>("key")
//        val restoredState3 = newChildren.last().requireInstance().stateKeeper.consume<Int>("key")
//
//        assertEquals(10, restoredState1)
//        assertEquals(30, restoredState3)
//    }

//    @Test
//    fun GIVEN_first_and_last_children_duplicated_WHEN_children_recreated_THEN_states_restored() {
//        DecomposeExperimentFlags.duplicateConfigurationsEnabled = true
//        val children by context.children(initialState = stateOf(1 by CREATED, 2 by STARTED, 1 by RESUMED))
//        children.first().requireInstance().stateKeeper.register("key") { 10 }
//        children.last().requireInstance().stateKeeper.register("key") { 30 }
//
//        navigate { listOf(1 by DESTROYED, 2 by STARTED, 1 by DESTROYED) }
//        navigate { listOf(1 by CREATED, 2 by STARTED, 1 by RESUMED) }
//
//        val restoredState1 = children.first().requireInstance().stateKeeper.consume<Int>("key")
//        val restoredState3 = children.last().requireInstance().stateKeeper.consume<Int>("key")
//
//        assertEquals(10, restoredState1)
//        assertEquals(30, restoredState3)
//    }
}
