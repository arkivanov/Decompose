package com.arkivanov.decompose.router

import com.arkivanov.decompose.backpressed.BackPressedDispatcher
import com.arkivanov.decompose.instancekeeper.InstanceKeeper
import com.arkivanov.decompose.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.decompose.lifecycle.LifecycleRegistry
import com.arkivanov.decompose.router.statekeeper.ParcelableStub
import com.arkivanov.decompose.router.statekeeper.TestParcelableContainer
import com.arkivanov.decompose.router.statekeeper.TestStateKeeperDispatcher
import com.arkivanov.decompose.statekeeper.Parcelable
import com.arkivanov.decompose.statekeeper.ParcelableContainer
import com.arkivanov.decompose.statekeeper.Parcelize
import com.arkivanov.decompose.statekeeper.StateKeeper
import com.arkivanov.decompose.statekeeper.StateKeeperDispatcher
import com.arkivanov.decompose.statekeeper.consume
import kotlin.test.Test
import kotlin.test.assertSame
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class StackHolderImplTest {

    @Parcelize
    private class Config : Parcelable

    @Test
    fun GIVEN_created_WHEN_InstanceKeeper_destroyed_THEN_active_InstanceKeeper_destroyed() {
        val instanceKeeperDispatcher = InstanceKeeperDispatcher()
        val holder = stackHolder(instanceKeeperDispatcher = instanceKeeperDispatcher)

        val instance =
            object : InstanceKeeper.Instance {
                var isDestroyed = false

                override fun onDestroy() {
                    isDestroyed = true
                }
            }

        holder.stack.active.component.instanceKeeper.put("key", instance)

        instanceKeeperDispatcher.destroy()

        assertTrue(instance.isDestroyed)
    }

    @Test
    fun WHEN_router_recreated_THEN_state_restored_for_active_component() {
        var stateKeeperDispatcher = TestStateKeeperDispatcher()
        var holder = stackHolder(stateKeeperDispatcher = stateKeeperDispatcher)
        val savedComponentState = ParcelableStub()
        holder.stack.active.component.stateKeeper.register("MY_KEY") { savedComponentState }

        val savedState = stateKeeperDispatcher.save() as TestParcelableContainer
        stateKeeperDispatcher = TestStateKeeperDispatcher(savedState)
        holder = stackHolder(stateKeeperDispatcher = stateKeeperDispatcher)

        val restoredComponentState = holder.stack.active.component.stateKeeper.consume<ParcelableStub>("MY_KEY")
        assertSame(savedComponentState, restoredComponentState)
    }

    private fun stackHolder(
        stateKeeperDispatcher: StateKeeperDispatcher = TestStateKeeperDispatcher(),
        instanceKeeperDispatcher: InstanceKeeperDispatcher = InstanceKeeperDispatcher(),
        routerEntryFactory: RouterEntryFactory<Config, Component> = TestRouterEntryFactory()
    ): StackHolderImpl<Config, Component> =
        StackHolderImpl(
            initialConfiguration = { Config() },
            initialBackStack = { emptyList() },
            configurationClass = Config::class,
            lifecycle = LifecycleRegistry(),
            key = "key",
            stateKeeper = stateKeeperDispatcher,
            instanceKeeper = instanceKeeperDispatcher,
            routerEntryFactory = routerEntryFactory,
            parcelableContainerFactory = ::TestParcelableContainer
        )

    private class Component(
        val configuration: Config,
        val instanceKeeper: InstanceKeeper,
        val stateKeeper: StateKeeper
    )

    private class TestRouterEntryFactory : RouterEntryFactory<Config, Component> {
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
                component = Component(
                    configuration = configuration,
                    instanceKeeper = instanceKeeper,
                    stateKeeper = stateKeeper
                ),
                lifecycleRegistry = LifecycleRegistry(),
                stateKeeperDispatcher = stateKeeper,
                instanceKeeperDispatcher = instanceKeeper,
                backPressedDispatcher = BackPressedDispatcher()
            )
        }
    }
}
