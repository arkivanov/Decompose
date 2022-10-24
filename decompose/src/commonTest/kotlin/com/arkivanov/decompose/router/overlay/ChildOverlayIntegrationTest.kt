package com.arkivanov.decompose.router.overlay

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.router.TestInstance
import com.arkivanov.decompose.statekeeper.TestStateKeeperDispatcher
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.getValue
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
import kotlin.test.assertNotNull
import kotlin.test.assertSame
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class ChildOverlayIntegrationTest {

    private val navigation = OverlayNavigation<Config>()
    private val lifecycle = LifecycleRegistry()
    private val stateKeeperDispatcher = TestStateKeeperDispatcher()
    private val instanceKeeperDispatcher = InstanceKeeperDispatcher()
    private val backDispatcher = BackDispatcher()

    private val context =
        DefaultComponentContext(
            lifecycle = lifecycle,
            stateKeeper = stateKeeperDispatcher,
            instanceKeeper = instanceKeeperDispatcher,
            backHandler = backDispatcher,
        )

    @BeforeTest
    fun before() {
        lifecycle.resume()
    }

    @Test
    fun WHEN_created_without_configuration_THEN_overlay_not_active() {
        val overlay by context.childOverlay(initialConfiguration = null)

        overlay.assertOverlay(null)
    }

    @Test
    fun WHEN_created_with_configuration_THEN_overlay_active() {
        val overlay by context.childOverlay(initialConfiguration = Config(1))

        overlay.assertOverlay(1)
    }

    @Test
    fun GIVEN_not_active_WHEN_activate_THEN_overlay_active() {
        val overlay by context.childOverlay(initialConfiguration = null)

        navigation.activate(Config(1))

        overlay.assertOverlay(1)
    }

    @Test
    fun GIVEN_active_WHEN_dismiss_THEN_overlay_not_active() {
        val overlay by context.childOverlay(initialConfiguration = Config(1))

        navigation.dismiss()

        overlay.assertOverlay(null)
    }

    @Test
    fun GIVEN_active_WHEN_activate_with_same_configuration_THEN_same_overlay_active() {
        val overlay by context.childOverlay(initialConfiguration = Config(1))

        navigation.activate(Config(1))

        overlay.assertOverlay(1)
    }

    @Test
    fun GIVEN_active_WHEN_activate_with_same_configuration_THEN_same_instance_active() {
        val overlay by context.childOverlay(initialConfiguration = Config(1))
        val instance = overlay.requireOverlay().instance

        navigation.activate(Config(1))

        assertSame(instance, overlay.overlay?.instance)
    }

    @Test
    fun GIVEN_active_WHEN_activate_with_other_configuration_THEN_other_overlay_active() {
        val overlay by context.childOverlay(initialConfiguration = Config(1))

        navigation.activate(Config(2))

        overlay.assertOverlay(2)
    }

    @Test
    fun GIVEN_not_active_WHEN_activate_THEN_lifecycle_resumed() {
        val overlay by context.childOverlay(initialConfiguration = null)

        navigation.activate(Config(1))

        assertEquals(Lifecycle.State.RESUMED, overlay.requireOverlay().instance.lifecycle.state)
    }

    @Test
    fun GIVEN_active_WHEN_dismiss_THEN_lifecycle_destroyed() {
        val overlay by context.childOverlay(initialConfiguration = Config(1))
        val lifecycle = overlay.requireOverlay().instance.lifecycle

        navigation.dismiss()

        assertEquals(Lifecycle.State.DESTROYED, lifecycle.state)
    }

    @Test
    fun GIVEN_not_active_WHEN_parent_backDispatcher_isEnabled_THEN_false() {
        context.childOverlay(initialConfiguration = null)

        assertFalse(backDispatcher.isEnabled)
    }

    @Test
    fun GIVEN_active_WHEN_parent_backDispatcher_isEnabled_THEN_true() {
        context.childOverlay(initialConfiguration = Config(1))

        assertTrue(backDispatcher.isEnabled)
    }

    @Test
    fun GIVEN_active_WHEN_back_pressed_THEN_overlay_not_active() {
        val overlay by context.childOverlay(initialConfiguration = Config(1))

        backDispatcher.back()

        overlay.assertOverlay(null)
    }

    @Test
    fun GIVEN_dismissed_via_back_pressed_WHEN_parent_backDispatcher_isEnabled_THEN_false() {
        context.childOverlay(initialConfiguration = Config(1))
        backDispatcher.back()

        assertFalse(backDispatcher.isEnabled)
    }

    @Test
    fun GIVEN_persistent_WHEN_recreated_THEN_overlay_active() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        oldContext.childOverlay(initialConfiguration = Config(1), persistent = true)

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newOverlay by newContext.childOverlay(initialConfiguration = null, persistent = true)

        newOverlay.assertOverlay(1)
    }

    @Test
    fun GIVEN_persistent_WHEN_recreated_THEN_overlay_state_restored() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        val overlay by oldContext.childOverlay(initialConfiguration = Config(1), persistent = true)
        overlay.requireOverlay().instance.stateKeeper.register("key") { Config(10) }

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newOverlay by newContext.childOverlay(initialConfiguration = null, persistent = true)
        val restoredState = newOverlay.requireOverlay().instance.stateKeeper.consume<Config>("key")

        assertEquals(Config(10), restoredState)
    }

    @Test
    fun GIVEN_not_persistent_WHEN_recreated_THEN_overlay_not_active() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper)
        oldContext.childOverlay(initialConfiguration = Config(1), persistent = false)

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper)
        val newOverlay by newContext.childOverlay(initialConfiguration = null, persistent = false)

        newOverlay.assertOverlay(null)
    }

    @Test
    fun WHEN_created_persistent_THEN_registered_in_parent_StateKeeper() {
        context.childOverlay(initialConfiguration = Config(1), persistent = true)

        stateKeeperDispatcher.assertSupplierRegistered(key = "key")
    }

    @Test
    fun GIVEN_persistent_WHEN_recreated_THEN_overlay_instance_retained() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val instanceKeeper = InstanceKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper, instanceKeeper = instanceKeeper)
        val oldOverlay by oldContext.childOverlay(initialConfiguration = Config(1), persistent = true)
        val oldInstance = oldOverlay.requireOverlay().instance.instanceKeeper.getOrCreate(::TestInstance)

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper, instanceKeeper = instanceKeeper)
        val newOverlay by newContext.childOverlay(initialConfiguration = null, persistent = true)
        val retainedInstance = newOverlay.requireOverlay().instance.instanceKeeper.getOrCreate(::TestInstance)

        assertSame(oldInstance, retainedInstance)
    }

    @Test
    fun GIVEN_persistent_WHEN_recreated_THEN_overlay_instance_not_destroyed() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val instanceKeeper = InstanceKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper, instanceKeeper = instanceKeeper)
        val oldOverlay by oldContext.childOverlay(initialConfiguration = Config(1), persistent = true)
        val instance = oldOverlay.requireOverlay().instance.instanceKeeper.getOrCreate(::TestInstance)

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper, instanceKeeper = instanceKeeper)
        newContext.childOverlay(initialConfiguration = null, persistent = true)

        assertFalse(instance.isDestroyed)
    }

    @Test
    fun WHEN_created_persistent_THEN_registered_in_parent_InstanceKeeper() {
        context.childOverlay(initialConfiguration = Config(1), persistent = true)

        assertNotNull(instanceKeeperDispatcher.get(key = "key"))
    }

    @Test
    fun GIVEN_not_persistent_WHEN_recreated_THEN_overlay_instance_destroyed() {
        val oldStateKeeper = TestStateKeeperDispatcher()
        val instanceKeeper = InstanceKeeperDispatcher()
        val oldContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = oldStateKeeper, instanceKeeper = instanceKeeper)
        val oldOverlay by oldContext.childOverlay(initialConfiguration = Config(1), persistent = false)
        val instance = oldOverlay.requireOverlay().instance.instanceKeeper.getOrCreate(::TestInstance)

        val savedState = oldStateKeeper.save()
        val newStateKeeper = TestStateKeeperDispatcher(savedState)
        val newContext = DefaultComponentContext(lifecycle = lifecycle, stateKeeper = newStateKeeper, instanceKeeper = instanceKeeper)
        newContext.childOverlay(initialConfiguration = null, persistent = false)

        assertTrue(instance.isDestroyed)
    }

    private fun ComponentContext.childOverlay(
        initialConfiguration: Config?,
        persistent: Boolean = true,
    ): Value<ChildOverlay<Config, Component>> =
        childOverlay(
            source = navigation,
            key = "key",
            initialConfiguration = { initialConfiguration },
            handleBackButton = true,
            persistent = persistent,
            childFactory = ::Component,
        )

    private fun ChildOverlay<Config, Component>.requireOverlay(): Child.Created<Config, Component> =
        requireNotNull(overlay)

    private fun ChildOverlay<Config, Component>.assertOverlay(id: Int?) {
        assertEquals(id, overlay?.configuration?.id)
        assertEquals(id, overlay?.instance?.id)
    }

    @Parcelize
    private data class Config(
        val id: Int,
    ) : Parcelable

    private class Component(
        config: Config,
        componentContext: ComponentContext,
    ) : ComponentContext by componentContext {
        val id: Int = config.id
    }
}
