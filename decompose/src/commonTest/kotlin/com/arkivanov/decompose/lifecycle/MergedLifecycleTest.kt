package com.arkivanov.decompose.lifecycle

import com.arkivanov.decompose.lifecycle.MergedLifecycleTest.TestLifecycleCallbacks.Event
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.create
import com.arkivanov.essenty.lifecycle.destroy
import com.arkivanov.essenty.lifecycle.pause
import com.arkivanov.essenty.lifecycle.resume
import com.arkivanov.essenty.lifecycle.start
import com.arkivanov.essenty.lifecycle.stop
import kotlin.test.Test
import kotlin.test.assertEquals

@Suppress("TestFunctionName")
class MergedLifecycleTest {

    private val lifecycle1 = TestLifecycleRegistry()
    private val lifecycle2 = TestLifecycleRegistry()
    private val merged = MergedLifecycle(lifecycle1, lifecycle2)
    private val callbacks = TestLifecycleCallbacks()

    init {
        merged.subscribe(callbacks)
    }

    @Test
    fun GIVEN_lifecycle1_initialized_WHEN_lifecycle2_created_THEN_no_events() {
        lifecycle2.create()

        callbacks.assertNoEvents()
    }

    @Test
    fun GIVEN_lifecycle2_initialized_WHEN_lifecycle1_created_THEN_no_events() {
        lifecycle1.create()

        callbacks.assertNoEvents()
    }

    @Test
    fun GIVEN_lifecycle1_initialized_WHEN_lifecycle2_started_THEN_no_events() {
        lifecycle2.start()

        callbacks.assertNoEvents()
    }

    @Test
    fun GIVEN_lifecycle2_initialized_WHEN_lifecycle1_started_THEN_no_events() {
        lifecycle1.start()

        callbacks.assertNoEvents()
    }

    @Test
    fun GIVEN_lifecycle1_initialized_WHEN_lifecycle2_resumed_THEN_no_events() {
        lifecycle2.resume()

        callbacks.assertNoEvents()
    }

    @Test
    fun GIVEN_lifecycle2_initialized_WHEN_lifecycle1_resumed_THEN_no_events() {
        lifecycle1.resume()

        callbacks.assertNoEvents()
    }

    @Test
    fun GIVEN_lifecycle1_created_WHEN_lifecycle2_created_THEN_onCreate_called() {
        lifecycle1.create()

        lifecycle2.create()

        callbacks.assertEvents(Event.ON_CREATE)
    }

    @Test
    fun GIVEN_lifecycle2_created_WHEN_lifecycle1_created_THEN_onCreate_called() {
        lifecycle2.create()

        lifecycle1.create()

        callbacks.assertEvents(Event.ON_CREATE)
    }

    @Test
    fun GIVEN_lifecycle1_created_WHEN_lifecycle2_started_THEN_onCreate_called() {
        lifecycle1.create()

        lifecycle2.start()

        callbacks.assertEvents(Event.ON_CREATE)
    }

    @Test
    fun GIVEN_lifecycle2_created_WHEN_lifecycle1_started_THEN_onCreate_called() {
        lifecycle2.create()

        lifecycle1.start()

        callbacks.assertEvents(Event.ON_CREATE)
    }

    @Test
    fun GIVEN_lifecycle1_created_WHEN_lifecycle2_resumed_THEN_onCreate_called() {
        lifecycle1.create()

        lifecycle2.resume()

        callbacks.assertEvents(Event.ON_CREATE)
    }

    @Test
    fun GIVEN_lifecycle2_created_WHEN_lifecycle1_resumed_THEN_onCreate_called() {
        lifecycle2.create()

        lifecycle1.resume()

        callbacks.assertEvents(Event.ON_CREATE)
    }

    @Test
    fun GIVEN_lifecycle1_started_WHEN_lifecycle2_created_THEN_onCreate_called() {
        lifecycle1.start()

        lifecycle2.create()

        callbacks.assertEvents(Event.ON_CREATE)
    }

    @Test
    fun GIVEN_lifecycle2_started_WHEN_lifecycle1_created_THEN_onCreate_called() {
        lifecycle2.start()

        lifecycle1.create()

        callbacks.assertEvents(Event.ON_CREATE)
    }

    @Test
    fun GIVEN_lifecycle1_started_WHEN_lifecycle2_started_THEN_onCreate_onStart_called() {
        lifecycle1.start()

        lifecycle2.start()

        callbacks.assertEvents(Event.ON_CREATE, Event.ON_START)
    }

    @Test
    fun GIVEN_lifecycle2_started_WHEN_lifecycle1_started_THEN_onCreate_onStart_called() {
        lifecycle2.start()

        lifecycle1.start()

        callbacks.assertEvents(Event.ON_CREATE, Event.ON_START)
    }

    @Test
    fun GIVEN_lifecycle1_started_WHEN_lifecycle2_resumed_THEN_onCreate_onStart_called() {
        lifecycle1.start()

        lifecycle2.resume()

        callbacks.assertEvents(Event.ON_CREATE, Event.ON_START)
    }

    @Test
    fun GIVEN_lifecycle2_started_WHEN_lifecycle1_resumed_THEN_onCreate_onStart_called() {
        lifecycle2.start()

        lifecycle1.resume()

        callbacks.assertEvents(Event.ON_CREATE, Event.ON_START)
    }


    @Test
    fun GIVEN_lifecycle1_resumed_WHEN_lifecycle2_created_THEN_onCreate_called() {
        lifecycle1.resume()

        lifecycle2.create()

        callbacks.assertEvents(Event.ON_CREATE)
    }

    @Test
    fun GIVEN_lifecycle2_resumed_WHEN_lifecycle1_created_THEN_onCreate_called() {
        lifecycle2.resume()

        lifecycle1.create()

        callbacks.assertEvents(Event.ON_CREATE)
    }

    @Test
    fun GIVEN_lifecycle1_resumed_WHEN_lifecycle2_started_THEN_onCreate_onStart_called() {
        lifecycle1.resume()

        lifecycle2.start()

        callbacks.assertEvents(Event.ON_CREATE, Event.ON_START)
    }

    @Test
    fun GIVEN_lifecycle2_resumed_WHEN_lifecycle1_started_THEN_onCreate_onStart_called() {
        lifecycle2.resume()

        lifecycle1.start()

        callbacks.assertEvents(Event.ON_CREATE, Event.ON_START)
    }

    @Test
    fun GIVEN_lifecycle1_resumed_WHEN_lifecycle2_resumed_THEN_onCreate_onStart_onResume_called() {
        lifecycle1.resume()

        lifecycle2.resume()

        callbacks.assertEvents(Event.ON_CREATE, Event.ON_START, Event.ON_RESUME)
    }

    @Test
    fun GIVEN_lifecycle2_resumed_WHEN_lifecycle1_resumed_THEN_onCreate_onStart_called() {
        lifecycle2.resume()

        lifecycle1.resume()

        callbacks.assertEvents(Event.ON_CREATE, Event.ON_START, Event.ON_RESUME)
    }

    @Test
    fun GIVEN_lifecycle1_resumed_and_lifecycle2_resumed_WHEN_lifecycle2_paused_THEN_onPause_called() {
        lifecycle1.resume()
        lifecycle2.resume()
        callbacks.clear()

        lifecycle2.pause()

        callbacks.assertEvents(Event.ON_PAUSE)
    }

    @Test
    fun GIVEN_lifecycle1_resumed_and_lifecycle2_resumed_WHEN_lifecycle1_paused_THEN_onPause_called() {
        lifecycle1.resume()
        lifecycle2.resume()
        callbacks.clear()

        lifecycle1.pause()

        callbacks.assertEvents(Event.ON_PAUSE)
    }

    @Test
    fun GIVEN_lifecycle1_resumed_and_lifecycle2_resumed_WHEN_lifecycle2_stopped_THEN_onPause_onStop_called() {
        lifecycle1.resume()
        lifecycle2.resume()
        callbacks.clear()

        lifecycle2.stop()

        callbacks.assertEvents(Event.ON_PAUSE, Event.ON_STOP)
    }

    @Test
    fun GIVEN_lifecycle1_resumed_and_lifecycle2_resumed_WHEN_lifecycle1_stopped_THEN_onPause_called() {
        lifecycle1.resume()
        lifecycle2.resume()
        callbacks.clear()

        lifecycle1.stop()

        callbacks.assertEvents(Event.ON_PAUSE, Event.ON_STOP)
    }

    @Test
    fun GIVEN_lifecycle1_resumed_and_lifecycle2_resumed_WHEN_lifecycle2_destroyed_THEN_onPause_onStop_onDestroy_called() {
        lifecycle1.resume()
        lifecycle2.resume()
        callbacks.clear()

        lifecycle2.destroy()

        callbacks.assertEvents(Event.ON_PAUSE, Event.ON_STOP, Event.ON_DESTROY)
    }

    @Test
    fun GIVEN_lifecycle1_resumed_and_lifecycle2_resumed_WHEN_lifecycle1_destroyed_THEN_onPause_onStop_onDestroy_called() {
        lifecycle1.resume()
        lifecycle2.resume()
        callbacks.clear()

        lifecycle1.destroy()

        callbacks.assertEvents(Event.ON_PAUSE, Event.ON_STOP, Event.ON_DESTROY)
    }

    @Test
    fun GIVEN_lifecycle1_paused_and_lifecycle2_resumed_WHEN_lifecycle2_paused_THEN_no_events() {
        lifecycle1.resume()
        lifecycle2.resume()
        lifecycle1.pause()
        callbacks.clear()

        lifecycle2.pause()

        callbacks.assertNoEvents()
    }

    @Test
    fun GIVEN_lifecycle1_resumed_and_lifecycle2_paused_WHEN_lifecycle1_paused_THEN_no_events() {
        lifecycle1.resume()
        lifecycle2.resume()
        lifecycle2.pause()
        callbacks.clear()

        lifecycle1.pause()

        callbacks.assertNoEvents()
    }

    @Test
    fun GIVEN_lifecycle1_stopped_and_lifecycle2_resumed_WHEN_lifecycle2_stopped_THEN_no_events() {
        lifecycle1.resume()
        lifecycle2.resume()
        lifecycle1.stop()
        callbacks.clear()

        lifecycle2.stop()

        callbacks.assertNoEvents()
    }

    @Test
    fun GIVEN_lifecycle1_resumed_and_lifecycle2_stopped_WHEN_lifecycle1_stopped_THEN_no_events() {
        lifecycle1.resume()
        lifecycle2.resume()
        lifecycle2.stop()
        callbacks.clear()

        lifecycle1.stop()

        callbacks.assertNoEvents()
    }

    @Test
    fun GIVEN_lifecycle1_destroyed_and_lifecycle2_resumed_WHEN_lifecycle2_destroyed_THEN_no_events() {
        lifecycle1.resume()
        lifecycle2.resume()
        lifecycle1.destroy()
        callbacks.clear()

        lifecycle2.destroy()

        callbacks.assertNoEvents()
    }

    @Test
    fun GIVEN_lifecycle1_resumed_and_lifecycle2_destroyed_WHEN_lifecycle1_destroyed_THEN_no_events() {
        lifecycle1.resume()
        lifecycle2.resume()
        lifecycle2.destroy()
        callbacks.clear()

        lifecycle1.destroy()

        callbacks.assertNoEvents()
    }

    @Test
    fun GIVEN_lifecycle1_destroyed_WHEN_MergedLifecycle_created_THEN_not_subscribed() {
        val lifecycle1 = TestLifecycleRegistry()
        val lifecycle2 = TestLifecycleRegistry()
        lifecycle1.create()
        lifecycle1.destroy()

        MergedLifecycle(lifecycle1, lifecycle2)

        lifecycle1.assertNoSubscribers()
        lifecycle2.assertNoSubscribers()
    }

    @Test
    fun GIVEN_lifecycle2_destroyed_WHEN_MergedLifecycle_created_THEN_not_subscribed() {
        val lifecycle1 = TestLifecycleRegistry()
        val lifecycle2 = TestLifecycleRegistry()
        lifecycle2.create()
        lifecycle2.destroy()

        MergedLifecycle(lifecycle1, lifecycle2)

        lifecycle1.assertNoSubscribers()
        lifecycle2.assertNoSubscribers()
    }

    @Test
    fun GIVEN_lifecycle1_destroyed_WHEN_MergedLifecycle_created_THEN_state_destroyed() {
        lifecycle1.create()
        lifecycle1.destroy()

        toString()
        val merged = MergedLifecycle(lifecycle1, lifecycle2)

        assertEquals(Lifecycle.State.DESTROYED, merged.state)
    }

    @Test
    fun GIVEN_lifecycle2_destroyed_WHEN_MergedLifecycle_created_THEN_state_destroyed() {
        lifecycle2.create()
        lifecycle2.destroy()

        val merged = MergedLifecycle(lifecycle1, lifecycle2)

        assertEquals(Lifecycle.State.DESTROYED, merged.state)
    }

    @Test
    fun WHEN_lifecycle1_destroyed_THEN_all_callbacks_unsubscribed() {
        lifecycle1.resume()
        lifecycle2.resume()

        lifecycle1.destroy()

        lifecycle1.assertNoSubscribers()
        lifecycle2.assertNoSubscribers()
    }

    @Test
    fun WHEN_lifecycle2_destroyed_THEN_all_callbacks_unsubscribed() {
        lifecycle1.resume()
        lifecycle2.resume()

        lifecycle2.destroy()

        lifecycle1.assertNoSubscribers()
        lifecycle2.assertNoSubscribers()
    }

    private class TestLifecycleRegistry(
        private val registry: LifecycleRegistry = LifecycleRegistry()
    ) : LifecycleRegistry by registry {
        private val callbacks = HashSet<Lifecycle.Callbacks>()

        override fun subscribe(callbacks: Lifecycle.Callbacks) {
            this.callbacks += callbacks
            registry.subscribe(callbacks)
        }

        override fun unsubscribe(callbacks: Lifecycle.Callbacks) {
            this.callbacks -= callbacks
            registry.unsubscribe(callbacks)
        }

        fun assertNoSubscribers() {
            assertEquals(emptySet(), callbacks)
        }
    }

    private class TestLifecycleCallbacks : Lifecycle.Callbacks {
        private val events = ArrayList<Event>()

        override fun onCreate() {
            events += Event.ON_CREATE
        }

        override fun onStart() {
            events += Event.ON_START
        }

        override fun onResume() {
            events += Event.ON_RESUME
        }

        override fun onPause() {
            events += Event.ON_PAUSE
        }

        override fun onStop() {
            events += Event.ON_STOP
        }

        override fun onDestroy() {
            events += Event.ON_DESTROY
        }

        fun assertEvents(vararg events: Event) {
            assertEquals(events.toList(), this.events)
        }

        fun assertNoEvents() {
            assertEquals(emptyList(), events)
        }

        fun clear() {
            events.clear()
        }

        enum class Event {
            ON_CREATE, ON_START, ON_RESUME, ON_PAUSE, ON_STOP, ON_DESTROY
        }
    }
}
