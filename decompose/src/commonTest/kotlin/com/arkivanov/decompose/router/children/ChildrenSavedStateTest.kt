package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.consume
import com.arkivanov.decompose.register
import com.arkivanov.decompose.router.children.ChildNavState.Status.ACTIVE
import com.arkivanov.decompose.router.children.ChildNavState.Status.DESTROYED
import com.arkivanov.decompose.router.children.ChildNavState.Status.INACTIVE
import com.arkivanov.decompose.statekeeper.TestStateKeeperDispatcher
import com.arkivanov.decompose.value.getValue
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
internal class ChildrenSavedStateTest : ChildrenTestBase() {

    @Test
    fun WHEN_child_switched_from_active_to_inactive_THEN_state_not_saved() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        var isCalled = false
        children.getByConfig(config = 3).requireInstance().stateKeeper.register(key = "key") {
            isCalled = true
            "SavedState"
        }

        navigate { listOf(1 by DESTROYED, 2 by INACTIVE, 3 by INACTIVE) }

        assertFalse(isCalled)
    }

    @Test
    fun WHEN_child_switched_from_active_to_destroyed_THEN_state_saved() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        var isCalled = false
        children.getByConfig(config = 3).requireInstance().stateKeeper.register(key = "key") {
            isCalled = true
            "SavedState"
        }

        navigate { listOf(1 by DESTROYED, 2 by INACTIVE, 3 by DESTROYED) }

        assertTrue(isCalled)
    }

    @Test
    fun WHEN_child_switched_from_inactive_to_destroyed_THEN_state_saved() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        var isCalled = false
        children.getByConfig(config = 2).requireInstance().stateKeeper.register(key = "key") {
            isCalled = true
            "SavedState"
        }

        navigate { listOf(1 by DESTROYED, 2 by DESTROYED, 3 by ACTIVE) }

        assertTrue(isCalled)
    }

    @Test
    fun WHEN_child_switched_from_inactive_to_active_THEN_state_not_saved() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        var isCalled = false
        children.getByConfig(config = 2).requireInstance().stateKeeper.register(key = "key") {
            isCalled = true
            "SavedState"
        }

        navigate { listOf(1 by DESTROYED, 2 by ACTIVE, 3 by ACTIVE) }

        assertFalse(isCalled)
    }

    @Test
    fun WHEN_child_switched_from_destroyed_to_inactive_THEN_state_not_saved() {
        var isCalled = false
        context.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE)) { config, componentContext ->
            val component = Component(config, componentContext)
            if (config == 1) {
                component.stateKeeper.register(key = "key") {
                    isCalled = true
                    "SavedState"
                }
            }
            component
        }

        navigate { listOf(1 by INACTIVE, 2 by INACTIVE, 3 by ACTIVE) }

        assertFalse(isCalled)
    }

    @Test
    fun WHEN_child_switched_from_destroyed_to_active_THEN_state_not_saved() {
        var isCalled = false
        context.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE)) { config, componentContext ->
            val component = Component(config, componentContext)
            if (config == 1) {
                component.stateKeeper.register(key = "key") {
                    isCalled = true
                    "SavedState"
                }
            }
            component
        }

        navigate { listOf(1 by ACTIVE, 2 by INACTIVE, 3 by ACTIVE) }

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_child_switched_from_active_to_destroyed_WHEN_child_switched_to_active_THEN_state_restored() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        children.getByConfig(config = 3).requireInstance().stateKeeper.register(key = "key") { 30 }
        navigate { listOf(1 by DESTROYED, 2 by INACTIVE, 3 by DESTROYED) }

        navigate { listOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE) }
        val restoredState = children.getByConfig(config = 3).requireInstance().stateKeeper.consume<Int>(key = "key")

        assertEquals(30, restoredState)
    }

    @Test
    fun GIVEN_child_switched_from_active_to_destroyed_WHEN_child_switched_to_inactive_THEN_state_restored() {
        val children by context.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        children.getByConfig(config = 3).requireInstance().stateKeeper.register(key = "key") { 30 }
        navigate { listOf(1 by DESTROYED, 2 by INACTIVE, 3 by DESTROYED) }

        navigate { listOf(1 by DESTROYED, 2 by INACTIVE, 3 by INACTIVE) }
        val restoredState = children.getByConfig(config = 3).requireInstance().stateKeeper.consume<Int>(key = "key")

        assertEquals(30, restoredState)
    }

    @Test
    fun GIVEN_saving_state_WHEN_recreated_THEN_navigation_state_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newChildren by newContext.children()

        newChildren.assertChildren(1 to null, 2 to 2, 3 to 3)
    }

    @Test
    fun GIVEN_not_saving_state_WHEN_recreated_THEN_navigation_state_not_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE), saveState = { null })

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newChildren by newContext.children(initialState = stateOf(1 by ACTIVE))

        newChildren.assertChildren(1 to 1)
    }

    @Test
    fun GIVEN_not_restoring_state_WHEN_recreated_THEN_navigation_state_not_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newChildren by newContext.children(initialState = stateOf(1 by ACTIVE), restoreState = { null })

        newChildren.assertChildren(1 to 1)
    }

    @Test
    fun GIVEN_saving_state_WHEN_recreated_THEN_child_states_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        val oldChildren by oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        oldChildren.getByConfig(config = 2).requireInstance().stateKeeper.register(key = "key") { 20 }
        oldChildren.getByConfig(config = 3).requireInstance().stateKeeper.register(key = "key") { 30 }

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newChildren by newContext.children()
        val restoredState2 = newChildren.getByConfig(config = 2).requireInstance().stateKeeper.consume<Int>(key = "key")
        val restoredState3 = newChildren.getByConfig(config = 3).requireInstance().stateKeeper.consume<Int>(key = "key")

        assertEquals(20, restoredState2)
        assertEquals(30, restoredState3)
    }

    @Test
    fun GIVEN_not_saving_state_WHEN_recreated_THEN_child_states_not_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        val oldChildren by oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE), saveState = { null })
        oldChildren.getByConfig(config = 2).requireInstance().stateKeeper.register(key = "key") { 20 }
        oldChildren.getByConfig(config = 3).requireInstance().stateKeeper.register(key = "key") { 30 }

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newChildren by newContext.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        val restoredState2 = newChildren.getByConfig(config = 2).requireInstance().stateKeeper.consume<Int>(key = "key")
        val restoredState3 = newChildren.getByConfig(config = 3).requireInstance().stateKeeper.consume<Int>(key = "key")

        assertNull(restoredState2)
        assertNull(restoredState3)
    }

    @Test
    fun GIVEN_not_restoring_state_WHEN_recreated_THEN_child_states_not_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        val oldChildren by oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        oldChildren.getByConfig(config = 2).requireInstance().stateKeeper.register(key = "key") { 20 }
        oldChildren.getByConfig(config = 3).requireInstance().stateKeeper.register(key = "key") { 30 }

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newChildren by newContext.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE), restoreState = { null })
        val restoredState2 = newChildren.getByConfig(config = 2).requireInstance().stateKeeper.consume<Int>(key = "key")
        val restoredState3 = newChildren.getByConfig(config = 3).requireInstance().stateKeeper.consume<Int>(key = "key")

        assertNull(restoredState2)
        assertNull(restoredState3)
    }

    @Test
    fun GIVEN_recreated_and_child_restored_as_destroyed_WHEN_child_switched_to_inactive_THEN_state_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        val oldChildren by oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        oldChildren.getByConfig(config = 3).requireInstance().stateKeeper.register(key = "key") { 30 }
        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newChildren by newContext.children(restoreState = { stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by DESTROYED) })

        navigate { listOf(1 by DESTROYED, 2 by INACTIVE, 3 by INACTIVE) }
        val restoredState3 = newChildren.getByConfig(config = 3).requireInstance().stateKeeper.consume<Int>(key = "key")

        assertEquals(30, restoredState3)
    }

    @Test
    fun GIVEN_recreated_and_child_restored_as_destroyed_WHEN_child_switched_to_active_THEN_state_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        val oldChildren by oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        oldChildren.getByConfig(config = 3).requireInstance().stateKeeper.register(key = "key") { 30 }
        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newChildren by newContext.children(restoreState = { stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by DESTROYED) })

        navigate { listOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE) }
        val restoredState3 = newChildren.getByConfig(config = 3).requireInstance().stateKeeper.consume<Int>(key = "key")

        assertEquals(30, restoredState3)
    }

    @Test
    fun GIVEN_child_switched_to_inactive_and_recreated_twice_WHEN_child_switched_to_active_THEN_state_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        val oldChildren by oldContext.children(initialState = stateOf(1 by DESTROYED, 2 by ACTIVE, 3 by ACTIVE))
        oldChildren.getByConfig(config = 2).requireInstance().stateKeeper.register(key = "key") { 30 }
        navigate { listOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE) }

        val savedState1 = oldStateKeeper.save()
        val newStateKeeper1 = TestStateKeeperDispatcher(savedState1)
        val newContext1 = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper1)
        val newChildren1 by newContext1.children(restoreState = { stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE) })
        newChildren1.getByConfig(config = 2).requireInstance().stateKeeper.register(key = "key") { 31 }

        val savedState2 = newStateKeeper1.save()
        val newStateKeeper2 = TestStateKeeperDispatcher(savedState2)
        val newContext2 = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper2)
        val newChildren2 by newContext2.children(restoreState = { stateOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE) })

        val restoredState2 = newChildren2.getByConfig(config = 2).requireInstance().stateKeeper.consume<Int>(key = "key")

        assertEquals(31, restoredState2)
    }
}
