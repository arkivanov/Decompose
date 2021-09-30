package com.arkivanov.decompose.router

import com.arkivanov.decompose.statekeeper.TestParcelableContainer
import com.arkivanov.decompose.statekeeper.TestStateKeeperDispatcher
import com.arkivanov.essenty.backpressed.BackPressedDispatcher
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.create
import com.arkivanov.essenty.lifecycle.resume
import com.arkivanov.essenty.parcelable.ParcelableContainer
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotNull
import kotlin.test.assertNull
import kotlin.test.assertSame
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class StackNavigatorTest {

    private val navigator = StackNavigatorImpl(routerEntryFactory = TestRouterEntryFactory())

    @Test
    fun GIVEN_empty_back_stack_WHEN_push_THEN_active_entry_is_new() {
        val newConfig = Config()

        val newStack =
            navigator.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config()),
                    backStack = emptyList()
                ),
                transformer = { it + newConfig }
            )

        assertSame(newConfig, newStack.active.configuration)
    }

    @Test
    fun GIVEN_empty_back_stack_WHEN_push_THEN_back_stack_equals_old() {
        val oldConfig = Config()

        val newStack =
            navigator.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = oldConfig),
                    backStack = emptyList()
                ),
                transformer = { it + Config() }
            )

        assertEquals(listOf(oldConfig), newStack.getConfigurationBackStack())
    }

    @Test
    fun GIVEN_not_empty_back_stack_WHEN_push_THEN_back_stack_equals_old_back_stack_plus_old_active() {
        val oldConfig1 = Config()
        val oldConfig2 = Config()
        val oldConfig3 = Config()

        val newStack =
            navigator.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = oldConfig3),
                    backStack = listOf(createdEntry(configuration = oldConfig1), createdEntry(configuration = oldConfig2))
                ),
                transformer = { it + Config() }
            )

        assertEquals(listOf(oldConfig1, oldConfig2, oldConfig3), newStack.getConfigurationBackStack())
    }

    @Test
    fun GIVEN_empty_back_stack_WHEN_push_THEN_old_component_not_recreated() {
        val newStack =
            navigator.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config()),
                    backStack = emptyList()
                ),
                transformer = { it + Config() }
            )

        assertEquals(1, (newStack.backStack[0] as RouterEntry.Created).instance.instanceNumber)
    }

    @Test
    fun GIVEN_not_empty_back_stack_WHEN_push_THEN_old_components_not_recreated() {
        val newStack =
            navigator.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config()),
                    backStack = listOf(createdEntry(configuration = Config()), createdEntry(configuration = Config()))
                ),
                transformer = { it + Config() }
            )

        assertEquals(1, (newStack.backStack[0] as RouterEntry.Created).instance.instanceNumber)
        assertEquals(1, (newStack.backStack[1] as RouterEntry.Created).instance.instanceNumber)
        assertEquals(1, (newStack.backStack[2] as RouterEntry.Created).instance.instanceNumber)
    }

    @Test
    fun WHEN_push_THEN_state_saved_for_old_active_component() {
        val stateKeeperDispatcher = TestStateKeeperDispatcher()

        val newStack =
            navigator.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config(), stateKeeperDispatcher = stateKeeperDispatcher),
                    backStack = emptyList()
                ),
                transformer = { it + Config() }
            )

        assertNotNull(stateKeeperDispatcher.lastSavedState)
        assertSame(stateKeeperDispatcher.lastSavedState, newStack.backStack[0].savedState)
    }

    @Test
    fun WHEN_push_THEN_new_active_component_resumed() {
        val newStack =
            navigator.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config()),
                    backStack = emptyList()
                ),
                transformer = { it + Config() }
            )

        assertSame(Lifecycle.State.RESUMED, newStack.active.lifecycleRegistry.state)
    }

    @Test
    fun WHEN_push_THEN_old_active_component_stopped() {
        val newStack =
            navigator.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config()),
                    backStack = emptyList()
                ),
                transformer = { it + Config() }
            )

        assertSame(Lifecycle.State.CREATED, (newStack.backStack[0] as RouterEntry.Created).lifecycleRegistry.state)
    }

    @Test
    fun WHEN_push_THEN_old_components_not_recreated() {
        val newStack =
            navigator.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config()),
                    backStack = emptyList()
                ),
                transformer = { it + Config() }
            )

        newStack.backStack
        assertSame(Lifecycle.State.CREATED, (newStack.backStack[0] as RouterEntry.Created).lifecycleRegistry.state)
    }

    @Test
    fun GIVEN_back_stack_WHEN_pop_THEN_active_entry_is_back() {
        val backConfig = Config()

        val newStack =
            navigator.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config()),
                    backStack = listOf(createdEntry(configuration = backConfig))
                ),
                transformer = { it.dropLast(1) }
            )

        assertSame(backConfig, newStack.active.configuration)
    }

    @Test
    fun GIVEN_back_stack_with_one_entry_WHEN_pop_THEN_back_stack_is_empty() {
        val newStack =
            navigator.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config()),
                    backStack = listOf(createdEntry(configuration = Config()))
                ),
                transformer = { it.dropLast(1) }
            )

        assertTrue(newStack.backStack.isEmpty())
    }

    @Test
    fun GIVEN_back_stack_WHEN_pop_THEN_old_active_component_destroyed() {
        val lifecycleRegistry = LifecycleRegistry().apply { resume() }

        navigator.navigate(
            oldStack = RouterStack(
                active = activeEntry(configuration = Config(), lifecycleRegistry = lifecycleRegistry),
                backStack = listOf(createdEntry(configuration = Config()))
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

        navigator.navigate(
            oldStack = RouterStack(
                active = activeEntry(configuration = Config(), instanceKeeperDispatcher = instanceKeeperDispatcher),
                backStack = listOf(createdEntry(configuration = Config()))
            ),
            transformer = { it.dropLast(1) }
        )

        assertTrue(instance.isDestroyed)
    }

    @Test
    fun GIVEN_back_stack_WHEN_pop_THEN_new_active_component_resumed() {
        val newStack =
            navigator.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config()),
                    backStack = listOf(createdEntry(configuration = Config()))
                ),
                transformer = { it.dropLast(1) }
            )

        assertEquals(Lifecycle.State.RESUMED, newStack.active.lifecycleRegistry.state)
    }

    @Test
    fun GIVEN_back_stack_WHEN_pop_THEN_old_components_not_recreated() {
        val newStack =
            navigator.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config()),
                    backStack = listOf(createdEntry(configuration = Config()), createdEntry(configuration = Config()))
                ),
                transformer = { it.dropLast(1) }
            )

        assertEquals(1, (newStack.backStack[0] as RouterEntry.Created).instance.instanceNumber)
        assertEquals(1, newStack.active.instance.instanceNumber)
    }

    @Test
    fun GIVEN_back_stack_with_created_entry_and_saved_state_WHEN_pop_THEN_new_active_component_without_saved_state() {
        val newStack =
            navigator.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config()),
                    backStack = listOf(createdEntry(configuration = Config(), savedState = TestParcelableContainer()))
                ),
                transformer = { it.dropLast(1) }
            )

        assertNull(newStack.active.savedState)
    }

    @Test
    fun GIVEN_back_stack_with_destroyed_entry_and_saved_state_WHEN_pop_THEN_state_restored_for_new_active_component() {
        val savedState = TestParcelableContainer()

        val newStack =
            navigator.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config()),
                    backStack = listOf(destroyedEntry(configuration = Config(), savedState = savedState))
                ),
                transformer = { it.dropLast(1) }
            )

        assertSame(savedState, (newStack.active.stateKeeperDispatcher as TestStateKeeperDispatcher).initialSavedState)
    }

    @Test
    fun GIVEN_back_stack_with_destroyed_entry_WHEN_pop_THEN_new_active_component_without_saved_state() {
        val newStack =
            navigator.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config()),
                    backStack = listOf(destroyedEntry(configuration = Config()))
                ),
                transformer = { it.dropLast(1) }
            )

        assertNull(newStack.active.savedState)
    }

    @Test
    fun WHEN_navigate_to_different_stack_THEN_old_active_component_destroyed() {
        val lifecycleRegistry = LifecycleRegistry().apply { resume() }

        navigator.navigate(
            oldStack = RouterStack(
                active = activeEntry(configuration = Config(), lifecycleRegistry = lifecycleRegistry),
                backStack = listOf(createdEntry(configuration = Config()))
            ),
            transformer = { listOf(Config(), Config()) }
        )

        assertEquals(Lifecycle.State.DESTROYED, lifecycleRegistry.state)
    }

    @Test
    fun WHEN_navigate_to_different_stack_THEN_old_back_stack_components_destroyed() {
        val lifecycleRegistry = LifecycleRegistry().apply { create() }

        navigator.navigate(
            oldStack = RouterStack(
                active = activeEntry(configuration = Config()),
                backStack = listOf(createdEntry(configuration = Config(), lifecycleRegistry = lifecycleRegistry))
            ),
            transformer = { listOf(Config(), Config()) }
        )

        assertEquals(Lifecycle.State.DESTROYED, lifecycleRegistry.state)
    }

    @Test
    fun WHEN_navigate_to_different_stack_THEN_new_stack_contains_only_new_configurations() {
        val lifecycleRegistry = LifecycleRegistry().apply { resume() }
        val newConfigurationStack = listOf(Config(), Config())

        val newStack =
            navigator.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config(), lifecycleRegistry = lifecycleRegistry),
                    backStack = listOf(createdEntry(configuration = Config()))
                ),
                transformer = { newConfigurationStack }
            )

        assertEquals(newConfigurationStack, newStack.getConfigurationStack())
    }

    @Test
    fun WHEN_navigate_to_different_stack_THEN_new_active_component_resumed() {
        val newStack =
            navigator.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config()),
                    backStack = listOf(createdEntry(configuration = Config()))
                ),
                transformer = { listOf(Config(), Config()) }
            )

        assertEquals(Lifecycle.State.RESUMED, newStack.active.lifecycleRegistry.state)
    }

    @Test
    fun WHEN_navigate_to_different_stack_THEN_new_back_stack_components_not_created() {
        val newStack =
            navigator.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config()),
                    backStack = listOf(createdEntry(configuration = Config()))
                ),
                transformer = { listOf(Config(), Config()) }
            )

        assertTrue(newStack.backStack.all { it is RouterEntry.Destroyed })
    }

    @Test
    fun WHEN_navigate_to_partially_different_stack_with_new_active_component_THEN_new_stack_contains_same_old_configurations_and_new_configurations() {
        val sameConfig1 = Config()
        val sameConfig2 = Config()
        val newConfigurationStack = listOf(Config(), sameConfig1, sameConfig2, Config(), Config())

        val newStack =
            navigator.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config()),
                    backStack = listOf(
                        createdEntry(configuration = Config()),
                        createdEntry(configuration = sameConfig1),
                        createdEntry(configuration = Config()),
                        createdEntry(configuration = sameConfig2)
                    )
                ),
                transformer = { newConfigurationStack }
            )

        assertEquals(newConfigurationStack, newStack.getConfigurationStack())
    }

    @Test
    fun WHEN_navigate_to_partially_different_stack_with_new_active_component_THEN_same_old_components_not_recreated() {
        val sameConfig1 = Config()
        val sameConfig2 = Config()

        val newStack =
            navigator.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = Config()),
                    backStack = listOf(
                        createdEntry(configuration = Config()),
                        createdEntry(configuration = sameConfig1),
                        createdEntry(configuration = Config()),
                        createdEntry(configuration = sameConfig2)
                    )
                ),
                transformer = { listOf(Config(), sameConfig1, sameConfig2, Config(), Config()) }
            )

        assertEquals(1, (newStack.backStack[1] as RouterEntry.Created).instance.instanceNumber)
        assertEquals(1, (newStack.backStack[2] as RouterEntry.Created).instance.instanceNumber)
    }

    @Test
    fun WHEN_navigate_to_partially_different_stack_with_same_active_component_THEN_new_stack_contains_same_old_configurations_and_new_configurations() {
        val sameConfig1 = Config()
        val sameConfig2 = Config()
        val sameConfig3 = Config()
        val newConfigurationStack = listOf(Config(), sameConfig1, sameConfig2, Config(), sameConfig3)

        val newStack =
            navigator.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = sameConfig3),
                    backStack = listOf(
                        createdEntry(configuration = Config()),
                        createdEntry(configuration = sameConfig1),
                        createdEntry(configuration = Config()),
                        createdEntry(configuration = sameConfig2)
                    )
                ),
                transformer = { newConfigurationStack }
            )

        assertEquals(newConfigurationStack, newStack.getConfigurationStack())
    }

    @Test
    fun WHEN_navigate_to_partially_different_stack_with_same_active_component_THEN_same_old_components_not_recreated() {
        val sameConfig1 = Config()
        val sameConfig2 = Config()
        val sameConfig3 = Config()

        val newStack =
            navigator.navigate(
                oldStack = RouterStack(
                    active = activeEntry(configuration = sameConfig3),
                    backStack = listOf(
                        createdEntry(configuration = Config()),
                        createdEntry(configuration = sameConfig1),
                        createdEntry(configuration = Config()),
                        createdEntry(configuration = sameConfig2)
                    )
                ),
                transformer = { listOf(Config(), sameConfig1, sameConfig2, Config(), sameConfig3) }
            )

        assertEquals(1, (newStack.backStack[1] as RouterEntry.Created).instance.instanceNumber)
        assertEquals(1, (newStack.backStack[2] as RouterEntry.Created).instance.instanceNumber)
        assertEquals(1, newStack.active.instance.instanceNumber)
    }

    private fun RouterStack<Config, *>.getConfigurationBackStack(): List<Config> =
        backStack.map(RouterEntry<Config, *>::configuration)

    private fun RouterStack<Config, *>.getConfigurationStack(): List<Config> =
        getConfigurationBackStack() + active.configuration

    private companion object {
        private fun activeEntry(
            configuration: Config,
            component: Component = Component(),
            lifecycleRegistry: LifecycleRegistry = LifecycleRegistry().apply { resume() },
            stateKeeperDispatcher: StateKeeperDispatcher = TestStateKeeperDispatcher(),
            instanceKeeperDispatcher: InstanceKeeperDispatcher = InstanceKeeperDispatcher()
        ): RouterEntry.Created<Config, Component> =
            RouterEntry.Created(
                configuration = configuration,
                instance = component,
                lifecycleRegistry = lifecycleRegistry,
                stateKeeperDispatcher = stateKeeperDispatcher,
                instanceKeeperDispatcher = instanceKeeperDispatcher,
                backPressedDispatcher = BackPressedDispatcher()
            )

        private fun createdEntry(
            configuration: Config,
            component: Component = Component(),
            savedState: ParcelableContainer? = null,
            lifecycleRegistry: LifecycleRegistry = LifecycleRegistry().apply { create() },
            stateKeeperDispatcher: StateKeeperDispatcher = TestStateKeeperDispatcher(savedState)
        ): RouterEntry.Created<Config, Component> =
            RouterEntry.Created(
                configuration = configuration,
                savedState = savedState,
                instance = component,
                lifecycleRegistry = lifecycleRegistry,
                stateKeeperDispatcher = stateKeeperDispatcher,
                instanceKeeperDispatcher = InstanceKeeperDispatcher(),
                backPressedDispatcher = BackPressedDispatcher()
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

    private class Config

    private data class Component(
        val instanceNumber: Int = 1
    )

    private class TestRouterEntryFactory : RouterEntryFactory<Config, Component> {
        private val components = ArrayList<Pair<Config, Component>>()

        override fun invoke(
            configuration: Config,
            savedState: ParcelableContainer?,
            instanceKeeperDispatcher: InstanceKeeperDispatcher?
        ): RouterEntry.Created<Config, Component> {
            var component: Component? = components.find { it.first === configuration }?.second
            component = component?.copy(instanceNumber = component.instanceNumber + 1) ?: Component()

            components.removeAll { it.first === configuration }
            components += configuration to component

            return createdEntry(
                configuration = configuration,
                component = component,
                stateKeeperDispatcher = TestStateKeeperDispatcher(savedState)
            )
        }
    }
}
