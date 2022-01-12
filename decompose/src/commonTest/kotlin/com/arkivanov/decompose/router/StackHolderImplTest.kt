package com.arkivanov.decompose.router

import com.arkivanov.decompose.statekeeper.ParcelableStub
import com.arkivanov.decompose.statekeeper.TestStateKeeperDispatcher
import com.arkivanov.essenty.backpressed.BackPressedDispatcher
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.parcelable.ParcelableContainer
import com.arkivanov.essenty.statekeeper.consume
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertSame
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class StackHolderImplTest {

    @Test
    fun WHEN_recreated_THEN_instances_retained_in_active_component() {
        val instanceKeeperDispatcher = InstanceKeeperDispatcher()
        val stackSaver = stackSaver()
        val oldHolder = stackHolder(instanceKeeperDispatcher = instanceKeeperDispatcher, stackSaver = stackSaver)
        val instance = TestInstance()
        oldHolder.stack.active.instanceKeeperDispatcher.put("key", instance)
        val savedState = stackSaver.save()

        val newHolder = stackHolder(instanceKeeperDispatcher = instanceKeeperDispatcher, stackSaver = stackSaver(savedState = savedState))

        assertSame(instance, newHolder.stack.active.instanceKeeperDispatcher.get("key"))
    }

    @Test
    fun WHEN_recreated_without_saved_state_THEN_previous_retained_instance_destroyed() {
        val instanceKeeperDispatcher = InstanceKeeperDispatcher()
        val oldHolder = stackHolder(instanceKeeperDispatcher = instanceKeeperDispatcher)
        val instance = TestInstance()
        oldHolder.stack.active.instanceKeeperDispatcher.put("key", instance)

        stackHolder(instanceKeeperDispatcher = instanceKeeperDispatcher)

        assertTrue(instance.isDestroyed)
    }

    @Test
    fun GIVEN_created_WHEN_InstanceKeeper_destroyed_THEN_active_InstanceKeeper_destroyed() {
        val instanceKeeperDispatcher = InstanceKeeperDispatcher()
        val holder = stackHolder(instanceKeeperDispatcher = instanceKeeperDispatcher)
        val instance = TestInstance()
        holder.stack.active.instanceKeeperDispatcher.put("key", instance)

        instanceKeeperDispatcher.destroy()

        assertTrue(instance.isDestroyed)
    }

    @Test
    fun WHEN_recreated_THEN_active_component_restored() {
        val stackSaver = stackSaver()
        val oldHolder = stackHolder(stackSaver = stackSaver)
        val originalStack = oldHolder.stack
        val savedState = stackSaver.save()

        val newHolder = stackHolder(stackSaver = stackSaver(savedState = savedState))

        assertEquals(originalStack.active.configuration, newHolder.stack.active.configuration)
    }

    @Test
    fun WHEN_recreated_THEN_back_stack_restored() {
        val stackSaver = stackSaver()
        val oldHolder = stackHolder(stackSaver = stackSaver)
        val originalStack = oldHolder.stack
        val savedState = stackSaver.save()

        val newHolder = stackHolder(stackSaver = stackSaver(savedState = savedState))

        assertEquals(originalStack.backStack.map { it.configuration }, newHolder.stack.backStack.map { it.configuration })
    }

    @Test
    fun WHEN_recreated_THEN_state_restored_for_active_component() {
        val stackSaver = stackSaver()
        val oldHolder = stackHolder(stackSaver = stackSaver)
        val originalStack = oldHolder.stack
        val savedComponentState = ParcelableStub()
        originalStack.active.stateKeeperDispatcher.register("key") { savedComponentState }
        val savedState = stackSaver.save()

        val newHolder = stackHolder(stackSaver = stackSaver(savedState = savedState))

        val restoredComponentState = newHolder.stack.active.stateKeeperDispatcher.consume<ParcelableStub>("key")
        assertSame(savedComponentState, restoredComponentState)
    }

    @Test
    fun WHEN_recreated_THEN_state_restored_for_back_stack() {
        val stackSaver = stackSaver()
        val oldHolder = stackHolder(stackSaver = stackSaver)
        val savedState1 = ParcelableContainer()
        val savedState2 = ParcelableContainer()

        val originalStack =
            RouterStack(
                active = TestRouterEntryFactory.invoke(configuration = Config("3")),
                backStack = listOf(
                    RouterEntry.Destroyed(configuration = Config("1"), savedState = savedState1),
                    RouterEntry.Destroyed(configuration = Config("2"), savedState = savedState2)
                )
            )

        oldHolder.stack = originalStack
        val savedState = stackSaver.save()

        val newHolder = stackHolder(stackSaver = stackSaver(savedState = savedState))

        assertEquals(listOf(savedState1, savedState2), newHolder.stack.backStack.map { it.savedState })
    }

    private fun stackHolder(
        initialConfiguration: Config = Config("1"),
        stackSaver: StackSaver<Config> = stackSaver(),
        instanceKeeperDispatcher: InstanceKeeperDispatcher = InstanceKeeperDispatcher(),
        routerEntryFactory: RouterEntryFactory<Config, Component> = TestRouterEntryFactory
    ): StackHolderImpl<Config, Component> =
        StackHolderImpl(
            initialStack = { listOf(initialConfiguration) },
            lifecycle = LifecycleRegistry(),
            key = "key",
            stackSaver = stackSaver,
            instanceKeeper = instanceKeeperDispatcher,
            routerEntryFactory = routerEntryFactory
        )

    private fun stackSaver(savedState: TestStackSaver.SavedState<Config>? = null): TestStackSaver<Config> =
        TestStackSaver(
            copyConfiguration = Config::copy,
            savedState = savedState
        )

    private data class Config(val key: String)

    private class Component

    private object TestRouterEntryFactory : RouterEntryFactory<Config, Component> {
        override fun invoke(
            configuration: Config,
            savedState: ParcelableContainer?,
            instanceKeeperDispatcher: InstanceKeeperDispatcher?
        ): RouterEntry.Created<Config, Component> {
            val instanceKeeper = instanceKeeperDispatcher ?: InstanceKeeperDispatcher()
            val stateKeeper = TestStateKeeperDispatcher(savedState)

            return RouterEntry.Created(
                configuration = configuration,
                savedState = null,
                instance = Component(),
                lifecycleRegistry = LifecycleRegistry(),
                stateKeeperDispatcher = stateKeeper,
                instanceKeeperDispatcher = instanceKeeper,
                backPressedDispatcher = BackPressedDispatcher()
            )
        }
    }
}
