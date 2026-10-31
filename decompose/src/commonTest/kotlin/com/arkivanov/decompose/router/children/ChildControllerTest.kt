package com.arkivanov.decompose.router.children

import androidx.lifecycle.Lifecycle
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.HostComponentContext
import com.arkivanov.decompose.TestBackHandler
import com.arkivanov.decompose.TestBackHandler.Event
import com.arkivanov.decompose.assertEvents
import com.arkivanov.decompose.assertNoEvents
import com.arkivanov.decompose.instancekeeper.getOrCreate
import com.arkivanov.decompose.lifecycle.TestLifecycleObserver
import com.arkivanov.decompose.lifecycle.resumed
import com.arkivanov.decompose.navigationevent.addHandler
import com.arkivanov.decompose.router.Component
import com.arkivanov.decompose.router.TestViewModel
import com.arkivanov.decompose.testutils.recreate
import com.arkivanov.decompose.testutils.serializeAndDeserialize
import kotlinx.serialization.builtins.serializer
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotNull
import kotlin.test.assertNotSame
import kotlin.test.assertNull
import kotlin.test.assertSame
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class ChildControllerTest {

    @Test
    fun WHEN_create_THEN_child_created() {
        val controller = controller().apply { init() }

        controller.create(configuration = 1)

        controller.assertChildCreated(config = 1)
    }

    @Test
    fun WHEN_create_THEN_returns_created_child() {
        val controller = controller().apply { init() }

        val instance = controller.create(configuration = 1)

        assertEquals(Lifecycle.State.CREATED, instance.lifecycle.currentState)
    }

    @Test
    fun WHEN_start_THEN_child_started() {
        val controller = controller().apply { init() }

        controller.start(configuration = 1)

        controller.assertChildStarted(config = 1)
    }

    @Test
    fun WHEN_start_THEN_returns_started_child() {
        val controller = controller().apply { init() }

        val instance = controller.start(configuration = 1)

        assertEquals(Lifecycle.State.STARTED, instance.lifecycle.currentState)
    }

    @Test
    fun WHEN_resume_THEN_child_resumed() {
        val controller = controller().apply { init() }

        controller.resume(configuration = 1)

        controller.assertChildResumed(config = 1)
    }

    @Test
    fun WHEN_resume_THEN_returns_resumed_child() {
        val controller = controller().apply { init() }

        val instance = controller.resume(configuration = 1)

        assertEquals(Lifecycle.State.RESUMED, instance.lifecycle.currentState)
    }

    @Test
    fun GIVEN_child_resumed_WHEN_start_THEN_child_started() {
        val controller = controller().apply { init() }
        controller.resume(configuration = 1)

        controller.start(configuration = 1)

        controller.assertChildStarted(config = 1)
    }

    @Test
    fun GIVEN_child_resumed_WHEN_start_THEN_returns_started_child() {
        val controller = controller().apply { init() }
        controller.resume(configuration = 1)

        val instance = controller.start(configuration = 1)

        assertEquals(Lifecycle.State.STARTED, instance.lifecycle.currentState)
    }

    @Test
    fun GIVEN_child_resumed_WHEN_create_THEN_child_created() {
        val controller = controller().apply { init() }
        controller.resume(configuration = 1)

        controller.create(configuration = 1)

        controller.assertChildCreated(config = 1)
    }

    @Test
    fun GIVEN_child_resumed_WHEN_create_THEN_returns_created_child() {
        val controller = controller().apply { init() }
        controller.resume(configuration = 1)

        val instance = controller.create(configuration = 1)

        assertEquals(Lifecycle.State.CREATED, instance.lifecycle.currentState)
    }

    @Test
    fun GIVEN_child_created_WHEN_destroy_THEN_child_destroyed() {
        val map = HashMap<Int, Component<Int>>()
        val controller = controller(map = map).apply { init() }
        controller.create(configuration = 1)

        controller.destroy(configuration = 1)

        controller.assertChildDestroyed(config = 1)
        assertEquals(Lifecycle.State.DESTROYED, map[1]?.lifecycle?.currentState)
    }

    @Test
    fun GIVEN_child_resumed_WHEN_destroy_THEN_child_destroyed() {
        val map = HashMap<Int, Component<Int>>()
        val controller = controller(map = map).apply { init() }
        controller.resume(configuration = 1)

        controller.destroy(configuration = 1)

        controller.assertChildDestroyed(config = 1)
        assertEquals(Lifecycle.State.DESTROYED, map[1]?.lifecycle?.currentState)
    }

    @Test
    fun GIVEN_child_resumed_WHEN_destroy_THEN_destroy_events_called_in_order() {
        val controller = controller().apply { init() }
        controller.resume(configuration = 1)

        val events = ArrayList<Any>()
        controller.requireChild(1).lifecycle.addObserver(TestLifecycleObserver { events += it })
        controller.requireChild(1).viewModelStore.getOrCreate("key") { TestViewModel { events += "instance_destroyed" } }
        events.clear()

        controller.destroy(configuration = 1)

        assertEquals(
            listOf<Any>(
                Lifecycle.Event.ON_PAUSE,
                Lifecycle.Event.ON_STOP,
                Lifecycle.Event.ON_DESTROY,
                "instance_destroyed",
            ),
            events,
        )
    }

    @Test
    fun GIVEN_child_created_WHEN_recreated_THEN_child_state_restored() {
        var ctx = HostComponentContext().resumed()
        var controller = controller(ctx = ctx).apply { init() }
        controller.create(configuration = 1)
        controller.requireChild(1).stateKeeper.register(key = "key", strategy = Int.serializer()) { 100 }

        val savedState = controller.saveState(configuration = 1)?.serializeAndDeserialize()

        ctx = ctx.recreate()
        controller = controller(ctx = ctx)

        controller.init {
            controller.create(configuration = 1, savedState = savedState)
        }

        val restoredState = controller.requireChild(1).stateKeeper.consume(key = "key", strategy = Int.serializer())

        assertEquals(100, restoredState)
    }

    @Test
    fun GIVEN_child_resumed_WHEN_recreated_THEN_child_state_restored() {
        var ctx = HostComponentContext().resumed()
        var controller = controller(ctx = ctx).apply { init() }
        controller.resume(configuration = 1)
        controller.requireChild(1).stateKeeper.register(key = "key", strategy = Int.serializer()) { 100 }

        val savedState = controller.saveState(configuration = 1)?.serializeAndDeserialize()

        ctx = ctx.recreate()
        controller = controller(ctx = ctx)

        controller.init {
            controller.create(configuration = 1, savedState = savedState)
        }

        val restoredState = controller.requireChild(1).stateKeeper.consume(key = "key", strategy = Int.serializer())

        assertEquals(100, restoredState)
    }

    @Test
    fun GIVEN_child_resumed_and_retained_instance_created_WHEN_destroy_THEN_instance_destroyed() {
        val ctx = HostComponentContext().resumed()
        val controller = controller(ctx = ctx).apply { init() }
        controller.resume(configuration = 1)
        val instance = controller.requireChild(1).viewModelStore.getOrCreate(key = "key") { TestViewModel() }

        controller.destroy(configuration = 1)

        assertTrue(instance.isDestroyed)
    }

    @Test
    fun GIVEN_child_resumed_and_retained_instance_created_WHEN_configuration_changed_THEN_same_instance() {
        var ctx = HostComponentContext().resumed()
        var controller = controller(ctx = ctx).apply { init() }
        controller.resume(configuration = 1)
        val instance1 = controller.requireChild(1).viewModelStore.getOrCreate(key = "key") { TestViewModel() }

        ctx = ctx.recreate(isConfigurationChange = true)
        controller = controller(ctx = ctx)

        controller.init {
            controller.create(configuration = 1)
        }

        val instance2 = controller.requireChild(1).viewModelStore.getOrCreate(key = "key") { TestViewModel() }

        assertSame(instance1, instance2)
    }

    @Test
    fun GIVEN_child_resumed_and_retained_instance_created_WHEN_configuration_changed_and_drop_state_THEN_instance_destroyed() {
        var ctx = HostComponentContext().resumed()
        var controller = controller(ctx = ctx).apply { init() }
        controller.resume(configuration = 1)
        val instance = controller.requireChild(1).viewModelStore.getOrCreate(key = "key") { TestViewModel() }

        ctx = ctx.recreate(isConfigurationChange = true)
        controller = controller(ctx = ctx)

        controller.init(dropState = true) {
            controller.create(configuration = 1)
        }

        assertTrue(instance.isDestroyed)
    }

    @Test
    fun GIVEN_child_resumed_and_retained_instance_created_WHEN_configuration_changed_and_drop_state_THEN_new_instance() {
        var ctx = HostComponentContext().resumed()
        var controller = controller(ctx = ctx).apply { init() }
        controller.resume(configuration = 1)
        val instance1 = controller.requireChild(1).viewModelStore.getOrCreate(key = "key") { TestViewModel() }

        ctx = ctx.recreate(isConfigurationChange = true)
        controller = controller(ctx = ctx)

        controller.init(dropState = true) {
            controller.create(configuration = 1)
        }

        val instance2 = controller.requireChild(1).viewModelStore.getOrCreate(key = "key") { TestViewModel() }

        assertNotSame(instance1, instance2)
    }

    @Test
    fun GIVEN_child_created_WHEN_back_callback_registered_THEN_back_handler_disabled() {
        val ctx = HostComponentContext().resumed()
        val controller = controller(ctx = ctx).apply { init() }
        controller.create(configuration = 1)

        controller.requireChild(1).navigationEventDispatcher.addHandler()

        assertFalse(ctx.navigationEventInput.hasEnabledHandlers)
    }

    @Test
    fun GIVEN_child_created_and_back_callback_registered_WHEN_back_THEN_callback_not_called() {
        val ctx = HostComponentContext().resumed()
        val controller = controller(ctx = ctx).apply { init() }
        controller.create(configuration = 1)
        val callback = TestBackHandler()
        controller.requireChild(1).navigationEventDispatcher.addHandler(callback)

        ctx.navigationEventInput.backCompleted()

        callback.assertNoEvents()
    }

    @Test
    fun GIVEN_child_started_and_back_callback_registered_WHEN_back_THEN_callback_called() {
        val ctx = HostComponentContext().resumed()
        val controller = controller(ctx = ctx).apply { init() }
        controller.start(configuration = 1)
        val callback = TestBackHandler()
        controller.requireChild(1).navigationEventDispatcher.addHandler(callback)

        ctx.navigationEventInput.backCompleted()

        callback.assertEvents(Event.OnBack)
    }

    @Test
    fun GIVEN_child_started_and_back_callback_registered_WHEN_create_THEN_back_handler_disabled() {
        val ctx = HostComponentContext().resumed()
        val controller = controller(ctx = ctx).apply { init() }
        controller.start(configuration = 1)
        val callback = TestBackHandler()
        controller.requireChild(1).navigationEventDispatcher.addHandler(callback)

        controller.create(configuration = 1)

        assertFalse(ctx.navigationEventInput.hasEnabledHandlers)
    }

    @Test
    fun GIVEN_child_started_and_back_callback_registered_and_child_created_WHEN_back_THEN_callback_not_called() {
        val ctx = HostComponentContext().resumed()
        val controller = controller(ctx = ctx).apply { init() }
        controller.start(configuration = 1)
        val callback = TestBackHandler()
        controller.requireChild(1).navigationEventDispatcher.addHandler(callback)
        controller.create(configuration = 1)

        ctx.navigationEventInput.backCompleted()

        callback.assertNoEvents()
    }

    private fun controller(
        ctx: ComponentContext = HostComponentContext().resumed(),
        map: MutableMap<Int, Component<Int>> = HashMap(),
        childFactory: (Int, ComponentContext) -> Component<Int> = { cfg, ctx ->
            Component(cfg, ctx).also {
                map[cfg] = it
            }
        },
    ): ChildController<Int, Component<Int>, ComponentContext> =
        ChildController(
            componentContext = ctx,
            key = "key",
            childFactory = childFactory,
        )

    private fun ChildController<Int, Component<Int>, *>.assertChildCreated(config: Int) {
        assertChildCreated(config = config, lifecycleState = Lifecycle.State.CREATED)
    }

    private fun ChildController<Int, Component<Int>, *>.assertChildStarted(config: Int) {
        assertChildCreated(config = config, lifecycleState = Lifecycle.State.STARTED)
    }

    private fun ChildController<Int, Component<Int>, *>.assertChildResumed(config: Int) {
        assertChildCreated(config = config, lifecycleState = Lifecycle.State.RESUMED)
    }

    private fun ChildController<Int, Component<Int>, *>.assertChildCreated(
        config: Int,
        lifecycleState: Lifecycle.State,
    ) {
        val component = assertNotNull(get(config))
        assertEquals(config, component.config)
        assertEquals(lifecycleState, component.lifecycle.currentState)
        assertEquals(lifecycleState, getLifecycleState(config))
    }

    private fun ChildController<Int, Component<Int>, *>.requireChild(config: Int): Component<Int> =
        assertNotNull(get(config))

    private fun ChildController<Int, Component<Int>, *>.assertChildDestroyed(config: Int) {
        assertNull(get(config))
    }
}
