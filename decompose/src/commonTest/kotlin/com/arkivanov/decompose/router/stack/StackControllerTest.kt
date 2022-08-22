package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.backhandler.ChildBackHandler
import com.arkivanov.decompose.backhandler.TestChildBackHandler
import com.arkivanov.decompose.router.TestInstance
import com.arkivanov.decompose.statekeeper.TestParcelableContainer
import com.arkivanov.decompose.statekeeper.TestStateKeeperDispatcher
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.create
import com.arkivanov.essenty.lifecycle.resume
import com.arkivanov.essenty.parcelable.ParcelableContainer
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotNull
import kotlin.test.assertNull
import kotlin.test.assertSame
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class StackControllerTest {

    private val controller = StackControllerImpl(routerEntryFactory = TestRouterEntryFactory())

    @Test
    fun GIVEN_empty_back_stack_WHEN_push_THEN_active_entry_is_new() {
        val newConfig = Config(id = 2)

        val newStack =
            controller.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config(id = 1)),
                    backStack = emptyList()
                ),
                transformer = { it + newConfig }
            )

        assertEquals(newConfig, newStack.active.configuration)
    }

    @Test
    fun GIVEN_empty_back_stack_WHEN_push_THEN_back_stack_equals_old() {
        val oldConfig = Config(id = 1)

        val newStack =
            controller.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = oldConfig),
                    backStack = emptyList()
                ),
                transformer = { it + Config(id = 2) }
            )

        assertEquals(listOf(oldConfig), newStack.configurationBackStack)
    }

    @Test
    fun GIVEN_not_empty_back_stack_WHEN_push_THEN_back_stack_equals_old_back_stack_plus_old_active() {
        val oldConfig1 = Config(id = 1)
        val oldConfig2 = Config(id = 2)
        val oldConfig3 = Config(id = 3)

        val newStack =
            controller.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = oldConfig3),
                    backStack = listOf(createdEntry(configuration = oldConfig1), createdEntry(configuration = oldConfig2))
                ),
                transformer = { it + Config(id = 4) }
            )

        assertEquals(listOf(oldConfig1, oldConfig2, oldConfig3), newStack.configurationBackStack)
    }

    @Test
    fun GIVEN_empty_back_stack_WHEN_push_THEN_old_component_not_recreated() {
        val oldStack =
            RouterStack(
                active = activeEntry(configuration = Config(id = 1)),
                backStack = emptyList()
            )

        val newStack = controller.navigate(oldStack = oldStack, transformer = { it + Config(id = 2) })

        assertSame(newStack.backStack[0].asCreated().instance, oldStack.active.instance)
    }

    @Test
    fun GIVEN_not_empty_back_stack_WHEN_push_THEN_old_components_not_recreated() {
        val oldStack =
            RouterStack(
                active = activeEntry(configuration = Config(id = 3)),
                backStack = listOf(createdEntry(configuration = Config(id = 1)), createdEntry(configuration = Config(id = 2)))
            )

        val newStack = controller.navigate(oldStack = oldStack, transformer = { it + Config(id = 4) })

        assertSame(oldStack.backStack[0].asCreated().instance, newStack.backStack[0].asCreated().instance)
        assertSame(oldStack.backStack[1].asCreated().instance, newStack.backStack[1].asCreated().instance)
        assertSame(oldStack.active.instance, newStack.backStack[2].asCreated().instance)
    }

    @Test
    fun WHEN_push_THEN_state_saved_for_old_active_component() {
        val stateKeeperDispatcher = TestStateKeeperDispatcher()

        val newStack =
            controller.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config(id = 1), stateKeeperDispatcher = stateKeeperDispatcher),
                    backStack = emptyList()
                ),
                transformer = { it + Config(id = 2) }
            )

        assertNotNull(stateKeeperDispatcher.lastSavedState)
        assertSame(stateKeeperDispatcher.lastSavedState, newStack.backStack[0].savedState)
    }

    @Test
    fun WHEN_push_THEN_new_active_component_resumed() {
        val newStack =
            controller.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config(id = 1)),
                    backStack = emptyList()
                ),
                transformer = { it + Config(id = 2) }
            )

        assertSame(Lifecycle.State.RESUMED, newStack.active.lifecycleRegistry.state)
    }

    @Test
    fun WHEN_push_THEN_new_active_component_back_handler_started() {
        val newStack =
            controller.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config(id = 1)),
                    backStack = emptyList()
                ),
                transformer = { it + Config(id = 2) }
            )

        assertTrue(newStack.active.backHandler.asTest().isStarted)
    }

    @Test
    fun WHEN_push_THEN_old_active_component_stopped() {
        val newStack =
            controller.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config(id = 1)),
                    backStack = emptyList()
                ),
                transformer = { it + Config(id = 2) }
            )

        assertSame(Lifecycle.State.CREATED, newStack.backStack.first().asCreated().lifecycleRegistry.state)
    }

    @Test
    fun WHEN_push_THEN_old_active_component_back_handler_stopped() {
        val newStack =
            controller.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config(id = 1)),
                    backStack = emptyList()
                ),
                transformer = { it + Config(id = 2) }
            )

        assertFalse(newStack.backStack.first().asCreated().backHandler.asTest().isStarted)
    }

    @Test
    fun WHEN_push_THEN_old_components_not_recreated() {
        val newStack =
            controller.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config(id = 1)),
                    backStack = emptyList()
                ),
                transformer = { it + Config(id = 2) }
            )

        assertSame(Lifecycle.State.CREATED, (newStack.backStack[0] as RouterEntry.Created).lifecycleRegistry.state)
    }

    @Test
    fun GIVEN_back_stack_WHEN_pop_THEN_active_entry_is_back() {
        val backConfig = Config(id = 1)

        val newStack =
            controller.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config(id = 2)),
                    backStack = listOf(createdEntry(configuration = backConfig))
                ),
                transformer = { it.dropLast(1) }
            )

        assertEquals(backConfig, newStack.active.configuration)
    }

    @Test
    fun GIVEN_back_stack_with_one_entry_WHEN_pop_THEN_back_stack_is_empty() {
        val newStack =
            controller.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config(id = 2)),
                    backStack = listOf(createdEntry(configuration = Config(id = 1)))
                ),
                transformer = { it.dropLast(1) }
            )

        assertTrue(newStack.backStack.isEmpty())
    }

    @Test
    fun GIVEN_back_stack_WHEN_pop_THEN_old_active_component_destroyed() {
        val lifecycleRegistry = LifecycleRegistry().apply { resume() }

        controller.navigate(
            oldStack = RouterStack(
                active = activeEntry(configuration = Config(id = 2), lifecycleRegistry = lifecycleRegistry),
                backStack = listOf(createdEntry(configuration = Config(id = 1)))
            ),
            transformer = { it.dropLast(1) }
        )

        assertEquals(Lifecycle.State.DESTROYED, lifecycleRegistry.state)
    }

    @Test
    fun GIVEN_back_stack_WHEN_pop_THEN_old_active_component_retained_instance_destroyed() {
        val instanceKeeperDispatcher = InstanceKeeperDispatcher()
        val instance = TestInstance()
        instanceKeeperDispatcher.put("key", instance)

        controller.navigate(
            oldStack = RouterStack(
                active = activeEntry(configuration = Config(id = 2), instanceKeeperDispatcher = instanceKeeperDispatcher),
                backStack = listOf(createdEntry(configuration = Config(id = 1)))
            ),
            transformer = { it.dropLast(1) }
        )

        assertTrue(instance.isDestroyed)
    }

    @Test
    fun GIVEN_back_stack_WHEN_pop_THEN_new_active_component_resumed() {
        val newStack =
            controller.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config(id = 2)),
                    backStack = listOf(createdEntry(configuration = Config(id = 1)))
                ),
                transformer = { it.dropLast(1) }
            )

        assertEquals(Lifecycle.State.RESUMED, newStack.active.lifecycleRegistry.state)
    }

    @Test
    fun GIVEN_back_stack_WHEN_pop_THEN_old_components_not_recreated() {
        val oldStack =
            RouterStack(
                active = activeEntry(configuration = Config(id = 3)),
                backStack = listOf(createdEntry(configuration = Config(id = 1)), createdEntry(configuration = Config(id = 2)))
            )

        val newStack = controller.navigate(oldStack = oldStack, transformer = { it.dropLast(1) })

        assertSame(oldStack.backStack[0].asCreated().instance, newStack.backStack[0].asCreated().instance)
        assertSame(oldStack.backStack[1].asCreated().instance, newStack.active.instance)
    }

    @Test
    fun GIVEN_back_stack_with_created_entry_and_saved_state_WHEN_pop_THEN_new_active_component_without_saved_state() {
        val newStack =
            controller.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config(id = 2)),
                    backStack = listOf(createdEntry(configuration = Config(id = 1), savedState = TestParcelableContainer()))
                ),
                transformer = { it.dropLast(1) }
            )

        assertNull(newStack.active.savedState)
    }

    @Test
    fun GIVEN_back_stack_with_destroyed_entry_and_saved_state_WHEN_pop_THEN_state_restored_for_new_active_component() {
        val savedState = TestParcelableContainer()

        val newStack =
            controller.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config(id = 2)),
                    backStack = listOf(destroyedEntry(configuration = Config(id = 1), savedState = savedState))
                ),
                transformer = { it.dropLast(1) }
            )

        assertSame(savedState, (newStack.active.stateKeeperDispatcher as TestStateKeeperDispatcher).initialSavedState)
    }

    @Test
    fun GIVEN_back_stack_with_destroyed_entry_WHEN_pop_THEN_new_active_component_without_saved_state() {
        val newStack =
            controller.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config(id = 2)),
                    backStack = listOf(destroyedEntry(configuration = Config(id = 1)))
                ),
                transformer = { it.dropLast(1) }
            )

        assertNull(newStack.active.savedState)
    }

    @Test
    fun WHEN_navigate_to_different_stack_THEN_old_active_component_destroyed() {
        val lifecycleRegistry = LifecycleRegistry().apply { resume() }

        controller.navigate(
            oldStack = RouterStack(
                active = activeEntry(configuration = Config(id = 2), lifecycleRegistry = lifecycleRegistry),
                backStack = listOf(createdEntry(configuration = Config(id = 1)))
            ),
            transformer = { listOf(Config(id = 3), Config(id = 4)) }
        )

        assertEquals(Lifecycle.State.DESTROYED, lifecycleRegistry.state)
    }

    @Test
    fun WHEN_navigate_to_different_stack_THEN_old_back_stack_components_destroyed() {
        val lifecycleRegistry = LifecycleRegistry().apply { create() }

        controller.navigate(
            oldStack = RouterStack(
                active = activeEntry(configuration = Config(id = 2)),
                backStack = listOf(createdEntry(configuration = Config(id = 1), lifecycleRegistry = lifecycleRegistry))
            ),
            transformer = { listOf(Config(id = 3), Config(id = 4)) }
        )

        assertEquals(Lifecycle.State.DESTROYED, lifecycleRegistry.state)
    }

    @Test
    fun WHEN_navigate_to_different_stack_THEN_new_stack_contains_only_new_configurations() {
        val lifecycleRegistry = LifecycleRegistry().apply { resume() }
        val newConfigurationStack = listOf(Config(id = 3), Config(id = 4))

        val newStack =
            controller.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config(id = 2), lifecycleRegistry = lifecycleRegistry),
                    backStack = listOf(createdEntry(configuration = Config(id = 1)))
                ),
                transformer = { newConfigurationStack }
            )

        assertEquals(newConfigurationStack, newStack.configurationStack)
    }

    @Test
    fun WHEN_navigate_to_different_stack_THEN_new_active_component_resumed() {
        val newStack =
            controller.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config(id = 2)),
                    backStack = listOf(createdEntry(configuration = Config(id = 1)))
                ),
                transformer = { listOf(Config(id = 3), Config(id = 4)) }
            )

        assertEquals(Lifecycle.State.RESUMED, newStack.active.lifecycleRegistry.state)
    }

    @Test
    fun WHEN_navigate_to_different_stack_THEN_new_back_stack_components_not_created() {
        val newStack =
            controller.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config(id = 2)),
                    backStack = listOf(createdEntry(configuration = Config(id = 1)))
                ),
                transformer = { listOf(Config(id = 3), Config(id = 4)) }
            )

        assertTrue(newStack.backStack.all { it is RouterEntry.Destroyed })
    }

    @Test
    fun WHEN_navigate_to_partially_different_stack_with_new_active_component_THEN_new_stack_contains_same_old_configurations_and_new_configurations() {
        val newConfigurationStack = listOf(Config(id = 6), Config(id = 2), Config(id = 4), Config(id = 7), Config(id = 8))

        val newStack =
            controller.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config(id = 5)),
                    backStack = listOf(
                        createdEntry(configuration = Config(id = 1)),
                        createdEntry(configuration = Config(id = 2)),
                        createdEntry(configuration = Config(id = 3)),
                        createdEntry(configuration = Config(id = 4))
                    )
                ),
                transformer = { newConfigurationStack }
            )

        assertEquals(newConfigurationStack, newStack.configurationStack)
    }

    @Test
    fun WHEN_navigate_to_partially_different_stack_with_new_active_component_THEN_same_old_components_not_recreated() {
        val oldStack =
            RouterStack(
                active = activeEntry(configuration = Config(id = 5)),
                backStack = listOf(
                    createdEntry(configuration = Config(id = 1)),
                    createdEntry(configuration = Config(id = 2)),
                    createdEntry(configuration = Config(id = 3)),
                    createdEntry(configuration = Config(id = 4))
                )
            )

        val newStack =
            controller.navigate(
                oldStack = oldStack,
                transformer = { listOf(Config(id = 6), Config(id = 2), Config(id = 4), Config(id = 7), Config(id = 8)) }
            )

        assertEquals(oldStack.backStack[1].asCreated().instance, newStack.backStack[1].asCreated().instance)
        assertEquals(oldStack.backStack[3].asCreated().instance, newStack.backStack[2].asCreated().instance)
    }

    @Test
    fun WHEN_navigate_to_partially_different_stack_with_same_active_component_THEN_new_stack_contains_same_old_configurations_and_new_configurations() {
        val newConfigurationStack = listOf(Config(id = 6), Config(id = 2), Config(id = 4), Config(id = 7), Config(id = 5))

        val newStack =
            controller.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config(id = 5)),
                    backStack = listOf(
                        createdEntry(configuration = Config(id = 1)),
                        createdEntry(configuration = Config(id = 2)),
                        createdEntry(configuration = Config(id = 3)),
                        createdEntry(configuration = Config(id = 4))
                    )
                ),
                transformer = { newConfigurationStack }
            )

        assertEquals(newConfigurationStack, newStack.configurationStack)
    }

    @Test
    fun WHEN_navigate_to_partially_different_stack_with_same_active_component_THEN_same_old_components_not_recreated() {
        val oldStack =
            RouterStack(
                active = activeEntry(configuration = Config(id = 5)),
                backStack = listOf(
                    createdEntry(configuration = Config(id = 1)),
                    createdEntry(configuration = Config(id = 2)),
                    createdEntry(configuration = Config(id = 3)),
                    createdEntry(configuration = Config(id = 4))
                )
            )

        val newStack =
            controller.navigate(
                oldStack = oldStack,
                transformer = { listOf(Config(id = 6), Config(id = 2), Config(id = 4), Config(id = 7), Config(id = 5)) }
            )

        assertSame(oldStack.backStack[1].asCreated().instance, newStack.backStack[1].asCreated().instance)
        assertSame(oldStack.backStack[3].asCreated().instance, newStack.backStack[2].asCreated().instance)
        assertSame(oldStack.active.instance, newStack.active.instance)
    }

    @Test
    fun WHEN_navigate_to_partially_different_stack_with_same_active_component_from_back_stack_THEN_same_old_components_not_recreated() {
        val oldStack =
            RouterStack(
                active = activeEntry(configuration = Config(id = 5)),
                backStack = listOf(
                    createdEntry(configuration = Config(id = 1)),
                    createdEntry(configuration = Config(id = 2)),
                    createdEntry(configuration = Config(id = 3)),
                    createdEntry(configuration = Config(id = 4))
                )
            )

        val newStack =
            controller.navigate(
                oldStack = oldStack,
                transformer = { listOf(Config(id = 6), Config(id = 2), Config(id = 4), Config(id = 7), Config(id = 3)) }
            )

        assertSame(oldStack.backStack[1].asCreated().instance, newStack.backStack[1].asCreated().instance)
        assertSame(oldStack.backStack[3].asCreated().instance, newStack.backStack[2].asCreated().instance)
        assertSame(oldStack.backStack[2].asCreated().instance, newStack.active.instance)
    }

    @Test
    fun WHEN_navigate_to_equal_stack_THEN_stack_not_changed() {
        val oldStack =
            RouterStack(
                active = activeEntry(configuration = Config(id = 2)),
                backStack = listOf(createdEntry(configuration = Config(id = 1)))
            )

        val newStack = controller.navigate(oldStack = oldStack, transformer = { listOf(Config(id = 1), Config(id = 2)) })

        assertEquals(oldStack, newStack)
    }

    @Test
    fun WHEN_navigate_to_same_stack_THEN_stack_not_changed() {
        val oldStack =
            RouterStack(
                active = activeEntry(configuration = Config(id = 1)),
                backStack = listOf(createdEntry(configuration = Config(id = 2)))
            )

        val newStack = controller.navigate(oldStack = oldStack, transformer = { it })

        assertEquals(oldStack, newStack)
    }

    private fun <C : Any, T : Any> RouterEntry<C, T>.asCreated(): RouterEntry.Created<C, T> =
        this as RouterEntry.Created<C, T>

    private fun ChildBackHandler.asTest(): TestChildBackHandler = this as TestChildBackHandler

    private companion object {
        private fun activeEntry(
            configuration: Config,
            component: Component = Component(),
            lifecycleRegistry: LifecycleRegistry = LifecycleRegistry().apply { resume() },
            stateKeeperDispatcher: StateKeeperDispatcher = TestStateKeeperDispatcher(),
            instanceKeeperDispatcher: InstanceKeeperDispatcher = InstanceKeeperDispatcher(),
            backHandler: ChildBackHandler = TestChildBackHandler(isStarted = true),
        ): RouterEntry.Created<Config, Component> =
            RouterEntry.Created(
                configuration = configuration,
                instance = component,
                lifecycleRegistry = lifecycleRegistry,
                stateKeeperDispatcher = stateKeeperDispatcher,
                instanceKeeperDispatcher = instanceKeeperDispatcher,
                backHandler = backHandler,
            )

        private fun createdEntry(
            configuration: Config,
            component: Component = Component(),
            savedState: ParcelableContainer? = null,
            lifecycleRegistry: LifecycleRegistry = LifecycleRegistry().apply { create() },
            stateKeeperDispatcher: StateKeeperDispatcher = TestStateKeeperDispatcher(savedState),
            backHandler: ChildBackHandler = TestChildBackHandler(),
        ): RouterEntry.Created<Config, Component> =
            RouterEntry.Created(
                configuration = configuration,
                savedState = savedState,
                instance = component,
                lifecycleRegistry = lifecycleRegistry,
                stateKeeperDispatcher = stateKeeperDispatcher,
                instanceKeeperDispatcher = InstanceKeeperDispatcher(),
                backHandler = backHandler,
            )

        private fun destroyedEntry(
            configuration: Config,
            savedState: ParcelableContainer? = null
        ): RouterEntry.Destroyed<Config> =
            RouterEntry.Destroyed(
                configuration = configuration,
                savedState = savedState
            )
    }

    private data class Config(val id: Int)

    private class Component

    private class TestRouterEntryFactory : RouterEntryFactory<Config, Component> {
        override fun invoke(
            configuration: Config,
            savedState: ParcelableContainer?,
            instanceKeeperDispatcher: InstanceKeeperDispatcher?
        ): RouterEntry.Created<Config, Component> =
            createdEntry(
                configuration = configuration,
                component = Component(),
                stateKeeperDispatcher = TestStateKeeperDispatcher(savedState)
            )
    }
}
