package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.children.ChildNavState.Status.ACTIVE
import com.arkivanov.decompose.router.children.ChildNavState.Status.DESTROYED
import com.arkivanov.decompose.router.children.ChildNavState.Status.INACTIVE
import com.arkivanov.decompose.statekeeper.ParcelableStub
import com.arkivanov.decompose.statekeeper.TestStateKeeperDispatcher
import com.arkivanov.decompose.value.getValue
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.statekeeper.consume
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertTrue

@OptIn(ExperimentalDecomposeApi::class)
@Suppress("TestFunctionName")
internal class ChildrenSavedStateTest : ChildrenTestBase() {

    @Test
    fun WHEN_child_switched_from_active_to_inactive_THEN_state_saved() {
        val children by context.children(initialNavState = listOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        var isCalled = false
        children.getById(id = 3).requireInstance().stateKeeper.register(key = "key") {
            isCalled = true
            ParcelableStub()
        }

        navigate { listOf(1 by DESTROYED, 2 by INACTIVE, 3 by INACTIVE) }

        assertTrue(isCalled)
    }

    @Test
    fun WHEN_child_switched_from_active_to_destroyed_THEN_state_saved() {
        val children by context.children(initialNavState = listOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        var isCalled = false
        children.getById(id = 3).requireInstance().stateKeeper.register(key = "key") {
            isCalled = true
            ParcelableStub()
        }

        navigate { listOf(1 by DESTROYED, 2 by INACTIVE, 3 by DESTROYED) }

        assertTrue(isCalled)
    }

    @Test
    fun WHEN_child_switched_from_inactive_to_destroyed_THEN_state_not_saved() {
        val children by context.children(initialNavState = listOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        var isCalled = false
        children.getById(id = 2).requireInstance().stateKeeper.register(key = "key") {
            isCalled = true
            ParcelableStub()
        }

        navigate { listOf(1 by DESTROYED, 2 by DESTROYED, 3 by ACTIVE) }

        assertFalse(isCalled)
    }

    @Test
    fun WHEN_child_switched_from_inactive_to_active_THEN_state_not_saved() {
        val children by context.children(initialNavState = listOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        var isCalled = false
        children.getById(id = 2).requireInstance().stateKeeper.register(key = "key") {
            isCalled = true
            ParcelableStub()
        }

        navigate { listOf(1 by DESTROYED, 2 by ACTIVE, 3 by ACTIVE) }

        assertFalse(isCalled)
    }

    @Test
    fun WHEN_child_switched_from_destroyed_to_inactive_THEN_state_not_saved() {
        var isCalled = false
        context.children(initialNavState = listOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE)) { config, componentContext ->
            val component = Component(config, componentContext)
            if (config.id == 1) {
                component.stateKeeper.register(key = "key") {
                    isCalled = true
                    ParcelableStub()
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
        context.children(initialNavState = listOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE)) { config, componentContext ->
            val component = Component(config, componentContext)
            if (config.id == 1) {
                component.stateKeeper.register(key = "key") {
                    isCalled = true
                    ParcelableStub()
                }
            }
            component
        }

        navigate { listOf(1 by ACTIVE, 2 by INACTIVE, 3 by ACTIVE) }

        assertFalse(isCalled)
    }

    @Test
    fun GIVEN_child_switched_from_active_to_destroyed_WHEN_child_switched_to_active_THEN_state_restored() {
        val children by context.children(initialNavState = listOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        children.getById(id = 3).requireInstance().stateKeeper.register(key = "key") { Config(id = 30) }
        navigate { listOf(1 by DESTROYED, 2 by INACTIVE, 3 by DESTROYED) }

        navigate { listOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE) }
        val restoredState = children.getById(id = 3).requireInstance().stateKeeper.consume<Parcelable>(key = "key")

        assertEquals(Config(id = 30), restoredState)
    }

    @Test
    fun GIVEN_child_switched_from_active_to_destroyed_WHEN_child_switched_to_inactive_THEN_state_restored() {
        val children by context.children(initialNavState = listOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        children.getById(id = 3).requireInstance().stateKeeper.register(key = "key") { Config(id = 30) }
        navigate { listOf(1 by DESTROYED, 2 by INACTIVE, 3 by DESTROYED) }

        navigate { listOf(1 by DESTROYED, 2 by INACTIVE, 3 by INACTIVE) }
        val restoredState = children.getById(id = 3).requireInstance().stateKeeper.consume<Parcelable>(key = "key")

        assertEquals(Config(id = 30), restoredState)
    }

    @Test
    fun GIVEN_saving_state_WHEN_recreated_THEN_navigation_state_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        oldContext.children(initialNavState = listOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))

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
        oldContext.children(initialNavState = listOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE), saveNavState = { null })

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newChildren by newContext.children(initialNavState = listOf(1 by ACTIVE))

        newChildren.assertChildren(1 to 1)
    }

    @Test
    fun GIVEN_not_restoring_state_WHEN_recreated_THEN_navigation_state_not_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        oldContext.children(initialNavState = listOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newChildren by newContext.children(initialNavState = listOf(1 by ACTIVE), restoreNavState = { null })

        newChildren.assertChildren(1 to 1)
    }

    @Test
    fun GIVEN_saving_state_WHEN_recreated_THEN_child_states_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        val oldChildren by oldContext.children(initialNavState = listOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        oldChildren.getById(id = 3).requireInstance().stateKeeper.register(key = "key") { Config(id = 30) }

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newChildren by newContext.children()
        val restoredState3 = newChildren.getById(id = 3).requireInstance().stateKeeper.consume<Config>(key = "key")

        assertEquals(Config(id = 30), restoredState3)
    }

    @Test
    fun GIVEN_not_saving_state_WHEN_recreated_THEN_child_states_not_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        val oldChildren by oldContext.children(initialNavState = listOf(1 by ACTIVE), saveNavState = { null })
        oldChildren.getById(id = 1).requireInstance().stateKeeper.register(key = "key") { Config(id = 30) }

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newChildren by newContext.children(initialNavState = listOf(1 by ACTIVE))
        val restoredState3 = newChildren.getById(id = 1).requireInstance().stateKeeper.consume<Config>(key = "key")

        assertNull(restoredState3)
    }

    @Test
    fun GIVEN_not_restoring_state_WHEN_recreated_THEN_child_states_not_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        val oldChildren by oldContext.children(initialNavState = listOf(1 by ACTIVE), saveNavState = { null })
        oldChildren.getById(id = 1).requireInstance().stateKeeper.register(key = "key") { Config(id = 30) }

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newChildren by newContext.children(initialNavState = listOf(1 by ACTIVE), restoreNavState = { null })
        val restoredState3 = newChildren.getById(id = 1).requireInstance().stateKeeper.consume<Config>(key = "key")

        assertNull(restoredState3)
    }

    @Test
    fun GIVEN_recreated_and_child_restored_as_destroyed_WHEN_child_switched_to_inactive_THEN_state_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        val oldChildren by oldContext.children(initialNavState = listOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        oldChildren.getById(id = 3).requireInstance().stateKeeper.register(key = "key") { Config(id = 30) }
        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newChildren by newContext.children(restoreNavState = { listOf(1 by DESTROYED, 2 by INACTIVE, 3 by DESTROYED) })

        navigate { listOf(1 by DESTROYED, 2 by INACTIVE, 3 by INACTIVE) }
        val restoredState3 = newChildren.getById(id = 3).requireInstance().stateKeeper.consume<Config>(key = "key")

        assertEquals(Config(id = 30), restoredState3)
    }

    @Test
    fun GIVEN_recreated_and_child_restored_as_destroyed_WHEN_child_switched_to_active_THEN_state_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        val oldChildren by oldContext.children(initialNavState = listOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE))
        oldChildren.getById(id = 3).requireInstance().stateKeeper.register(key = "key") { Config(id = 30) }
        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newChildren by newContext.children(restoreNavState = { listOf(1 by DESTROYED, 2 by INACTIVE, 3 by DESTROYED) })

        navigate { listOf(1 by DESTROYED, 2 by INACTIVE, 3 by ACTIVE) }
        val restoredState3 = newChildren.getById(id = 3).requireInstance().stateKeeper.consume<Config>(key = "key")

        assertEquals(Config(id = 30), restoredState3)
    }
}
