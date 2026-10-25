package com.arkivanov.decompose.lifecycle

import androidx.lifecycle.Lifecycle
import androidx.lifecycle.Lifecycle.Event
import androidx.lifecycle.LifecycleRegistry
import com.arkivanov.decompose.testutils.testLifecycleRegistry
import kotlin.test.Test
import kotlin.test.assertEquals

@Suppress("TestFunctionName")
class MergedLifecycleTest {

    private val lifecycle1 = testLifecycleRegistry()
    private val lifecycle2 = testLifecycleRegistry()
    private val merged = mergedLifecycle(lifecycle1, lifecycle2)
    private val callbacks = TestLifecycleObserver()

    init {
        merged.addObserver(callbacks)
    }

    @Test
    fun GIVEN_lifecycle1_initialized_WHEN_lifecycle2_created_THEN_no_events() {
        lifecycle2.moveToCreated()

        callbacks.assertNoEvents()
    }

    @Test
    fun GIVEN_lifecycle2_initialized_WHEN_lifecycle1_created_THEN_no_events() {
        lifecycle1.moveToCreated()

        callbacks.assertNoEvents()
    }

    @Test
    fun GIVEN_lifecycle1_initialized_WHEN_lifecycle2_started_THEN_no_events() {
        lifecycle2.moveToStarted()

        callbacks.assertNoEvents()
    }

    @Test
    fun GIVEN_lifecycle2_initialized_WHEN_lifecycle1_started_THEN_no_events() {
        lifecycle1.moveToStarted()

        callbacks.assertNoEvents()
    }

    @Test
    fun GIVEN_lifecycle1_initialized_WHEN_lifecycle2_resumed_THEN_no_events() {
        lifecycle2.moveToResumed()

        callbacks.assertNoEvents()
    }

    @Test
    fun GIVEN_lifecycle2_initialized_WHEN_lifecycle1_resumed_THEN_no_events() {
        lifecycle1.moveToResumed()

        callbacks.assertNoEvents()
    }

    @Test
    fun GIVEN_lifecycle1_created_WHEN_lifecycle2_created_THEN_onCreate_called() {
        lifecycle1.moveToCreated()

        lifecycle2.moveToCreated()

        callbacks.assertEvents(Event.ON_CREATE)
    }

    @Test
    fun GIVEN_lifecycle2_created_WHEN_lifecycle1_created_THEN_onCreate_called() {
        lifecycle2.moveToCreated()

        lifecycle1.moveToCreated()

        callbacks.assertEvents(Event.ON_CREATE)
    }

    @Test
    fun GIVEN_lifecycle1_created_WHEN_lifecycle2_started_THEN_onCreate_called() {
        lifecycle1.moveToCreated()

        lifecycle2.moveToStarted()

        callbacks.assertEvents(Event.ON_CREATE)
    }

    @Test
    fun GIVEN_lifecycle2_created_WHEN_lifecycle1_started_THEN_onCreate_called() {
        lifecycle2.moveToCreated()

        lifecycle1.moveToStarted()

        callbacks.assertEvents(Event.ON_CREATE)
    }

    @Test
    fun GIVEN_lifecycle1_created_WHEN_lifecycle2_resumed_THEN_onCreate_called() {
        lifecycle1.moveToCreated()

        lifecycle2.moveToResumed()

        callbacks.assertEvents(Event.ON_CREATE)
    }

    @Test
    fun GIVEN_lifecycle2_created_WHEN_lifecycle1_resumed_THEN_onCreate_called() {
        lifecycle2.moveToCreated()

        lifecycle1.moveToResumed()

        callbacks.assertEvents(Event.ON_CREATE)
    }

    @Test
    fun GIVEN_lifecycle1_started_WHEN_lifecycle2_created_THEN_onCreate_called() {
        lifecycle1.moveToStarted()

        lifecycle2.moveToCreated()

        callbacks.assertEvents(Event.ON_CREATE)
    }

    @Test
    fun GIVEN_lifecycle2_started_WHEN_lifecycle1_created_THEN_onCreate_called() {
        lifecycle2.moveToStarted()

        lifecycle1.moveToCreated()

        callbacks.assertEvents(Event.ON_CREATE)
    }

    @Test
    fun GIVEN_lifecycle1_started_WHEN_lifecycle2_started_THEN_onCreate_onStart_called() {
        lifecycle1.moveToStarted()

        lifecycle2.moveToStarted()

        callbacks.assertEvents(Event.ON_CREATE, Event.ON_START)
    }

    @Test
    fun GIVEN_lifecycle2_started_WHEN_lifecycle1_started_THEN_onCreate_onStart_called() {
        lifecycle2.moveToStarted()

        lifecycle1.moveToStarted()

        callbacks.assertEvents(Event.ON_CREATE, Event.ON_START)
    }

    @Test
    fun GIVEN_lifecycle1_started_WHEN_lifecycle2_resumed_THEN_onCreate_onStart_called() {
        lifecycle1.moveToStarted()

        lifecycle2.moveToResumed()

        callbacks.assertEvents(Event.ON_CREATE, Event.ON_START)
    }

    @Test
    fun GIVEN_lifecycle2_started_WHEN_lifecycle1_resumed_THEN_onCreate_onStart_called() {
        lifecycle2.moveToStarted()

        lifecycle1.moveToResumed()

        callbacks.assertEvents(Event.ON_CREATE, Event.ON_START)
    }


    @Test
    fun GIVEN_lifecycle1_resumed_WHEN_lifecycle2_created_THEN_onCreate_called() {
        lifecycle1.moveToResumed()

        lifecycle2.moveToCreated()

        callbacks.assertEvents(Event.ON_CREATE)
    }

    @Test
    fun GIVEN_lifecycle2_resumed_WHEN_lifecycle1_created_THEN_onCreate_called() {
        lifecycle2.moveToResumed()

        lifecycle1.moveToCreated()

        callbacks.assertEvents(Event.ON_CREATE)
    }

    @Test
    fun GIVEN_lifecycle1_resumed_WHEN_lifecycle2_started_THEN_onCreate_onStart_called() {
        lifecycle1.moveToResumed()

        lifecycle2.moveToStarted()

        callbacks.assertEvents(Event.ON_CREATE, Event.ON_START)
    }

    @Test
    fun GIVEN_lifecycle2_resumed_WHEN_lifecycle1_started_THEN_onCreate_onStart_called() {
        lifecycle2.moveToResumed()

        lifecycle1.moveToStarted()

        callbacks.assertEvents(Event.ON_CREATE, Event.ON_START)
    }

    @Test
    fun GIVEN_lifecycle1_resumed_WHEN_lifecycle2_resumed_THEN_onCreate_onStart_onResume_called() {
        lifecycle1.moveToResumed()

        lifecycle2.moveToResumed()

        callbacks.assertEvents(Event.ON_CREATE, Event.ON_START, Event.ON_RESUME)
    }

    @Test
    fun GIVEN_lifecycle2_resumed_WHEN_lifecycle1_resumed_THEN_onCreate_onStart_called() {
        lifecycle2.moveToResumed()

        lifecycle1.moveToResumed()

        callbacks.assertEvents(Event.ON_CREATE, Event.ON_START, Event.ON_RESUME)
    }

    @Test
    fun GIVEN_lifecycle1_resumed_and_lifecycle2_resumed_WHEN_lifecycle2_paused_THEN_onPause_called() {
        lifecycle1.moveToResumed()
        lifecycle2.moveToResumed()
        callbacks.clear()

        lifecycle2.moveToStarted()

        callbacks.assertEvents(Event.ON_PAUSE)
    }

    @Test
    fun GIVEN_lifecycle1_resumed_and_lifecycle2_resumed_WHEN_lifecycle1_paused_THEN_onPause_called() {
        lifecycle1.moveToResumed()
        lifecycle2.moveToResumed()
        callbacks.clear()

        lifecycle1.moveToStarted()

        callbacks.assertEvents(Event.ON_PAUSE)
    }

    @Test
    fun GIVEN_lifecycle1_resumed_and_lifecycle2_resumed_WHEN_lifecycle2_stopped_THEN_onPause_onStop_called() {
        lifecycle1.moveToResumed()
        lifecycle2.moveToResumed()
        callbacks.clear()

        lifecycle2.moveToCreated()

        callbacks.assertEvents(Event.ON_PAUSE, Event.ON_STOP)
    }

    @Test
    fun GIVEN_lifecycle1_resumed_and_lifecycle2_resumed_WHEN_lifecycle1_stopped_THEN_onPause_called() {
        lifecycle1.moveToResumed()
        lifecycle2.moveToResumed()
        callbacks.clear()

        lifecycle1.moveToCreated()

        callbacks.assertEvents(Event.ON_PAUSE, Event.ON_STOP)
    }

    @Test
    fun GIVEN_lifecycle1_resumed_and_lifecycle2_resumed_WHEN_lifecycle2_destroyed_THEN_onPause_onStop_onDestroy_called() {
        lifecycle1.moveToResumed()
        lifecycle2.moveToResumed()
        callbacks.clear()

        lifecycle2.moveToDestroyed()

        callbacks.assertEvents(Event.ON_PAUSE, Event.ON_STOP, Event.ON_DESTROY)
    }

    @Test
    fun GIVEN_lifecycle1_resumed_and_lifecycle2_resumed_WHEN_lifecycle1_destroyed_THEN_onPause_onStop_onDestroy_called() {
        lifecycle1.moveToResumed()
        lifecycle2.moveToResumed()
        callbacks.clear()

        lifecycle1.moveToDestroyed()

        callbacks.assertEvents(Event.ON_PAUSE, Event.ON_STOP, Event.ON_DESTROY)
    }

    @Test
    fun GIVEN_lifecycle1_paused_and_lifecycle2_resumed_WHEN_lifecycle2_paused_THEN_no_events() {
        lifecycle1.moveToResumed()
        lifecycle2.moveToResumed()
        lifecycle1.moveToStarted()
        callbacks.clear()

        lifecycle2.moveToStarted()

        callbacks.assertNoEvents()
    }

    @Test
    fun GIVEN_lifecycle1_resumed_and_lifecycle2_paused_WHEN_lifecycle1_paused_THEN_no_events() {
        lifecycle1.moveToResumed()
        lifecycle2.moveToResumed()
        lifecycle2.moveToStarted()
        callbacks.clear()

        lifecycle1.moveToStarted()

        callbacks.assertNoEvents()
    }

    @Test
    fun GIVEN_lifecycle1_stopped_and_lifecycle2_resumed_WHEN_lifecycle2_stopped_THEN_no_events() {
        lifecycle1.moveToResumed()
        lifecycle2.moveToResumed()
        lifecycle1.moveToCreated()
        callbacks.clear()

        lifecycle2.moveToCreated()

        callbacks.assertNoEvents()
    }

    @Test
    fun GIVEN_lifecycle1_resumed_and_lifecycle2_stopped_WHEN_lifecycle1_stopped_THEN_no_events() {
        lifecycle1.moveToResumed()
        lifecycle2.moveToResumed()
        lifecycle2.moveToCreated()
        callbacks.clear()

        lifecycle1.moveToCreated()

        callbacks.assertNoEvents()
    }

    @Test
    fun GIVEN_lifecycle1_destroyed_and_lifecycle2_resumed_WHEN_lifecycle2_destroyed_THEN_no_events() {
        lifecycle1.moveToResumed()
        lifecycle2.moveToResumed()
        lifecycle1.moveToDestroyed()
        callbacks.clear()

        lifecycle2.moveToDestroyed()

        callbacks.assertNoEvents()
    }

    @Test
    fun GIVEN_lifecycle1_resumed_and_lifecycle2_destroyed_WHEN_lifecycle1_destroyed_THEN_no_events() {
        lifecycle1.moveToResumed()
        lifecycle2.moveToResumed()
        lifecycle2.moveToDestroyed()
        callbacks.clear()

        lifecycle1.moveToDestroyed()

        callbacks.assertNoEvents()
    }

    @Test
    fun WHEN_lifecycle1_destroyed_and_lifecycle2_destroyed_THEN_onCreate_onDestroy_called() {
        lifecycle1.moveToCreated()
        lifecycle1.moveToDestroyed()
        lifecycle2.moveToCreated()
        lifecycle2.moveToDestroyed()

        callbacks.assertEvents(Event.ON_CREATE, Event.ON_DESTROY)
    }

    @Test
    fun GIVEN_lifecycle1_destroyed_WHEN_MergedLifecycle_created_THEN_not_subscribed() {
        val lifecycle1 = testLifecycleRegistry(Lifecycle.State.DESTROYED)
        val lifecycle2 = testLifecycleRegistry()

        mergedLifecycle(lifecycle1, lifecycle2)

        lifecycle1.assertNoObservers()
        lifecycle2.assertNoObservers()
    }

    @Test
    fun GIVEN_lifecycle2_destroyed_WHEN_MergedLifecycle_created_THEN_not_subscribed() {
        val lifecycle1 = testLifecycleRegistry()
        val lifecycle2 = testLifecycleRegistry(Lifecycle.State.DESTROYED)

        mergedLifecycle(lifecycle1, lifecycle2)

        lifecycle1.assertNoObservers()
        lifecycle2.assertNoObservers()
    }

    @Test
    fun GIVEN_lifecycle1_destroyed_WHEN_MergedLifecycle_created_THEN_state_destroyed() {
        lifecycle1.moveToCreated()
        lifecycle1.moveToDestroyed()

        val merged = mergedLifecycle(lifecycle1, lifecycle2)

        assertEquals(Lifecycle.State.DESTROYED, merged.currentState)
    }

    @Test
    fun GIVEN_lifecycle2_destroyed_WHEN_MergedLifecycle_created_THEN_state_destroyed() {
        lifecycle2.moveToCreated()
        lifecycle2.moveToDestroyed()

        val merged = mergedLifecycle(lifecycle1, lifecycle2)

        assertEquals(Lifecycle.State.DESTROYED, merged.currentState)
    }

    @Test
    fun WHEN_lifecycle1_created_and_destroyed_and_lifecycle2_created_and_destroyed_THEN_state_destroyed() {
        lifecycle1.moveToCreated()
        lifecycle1.moveToDestroyed()
        lifecycle2.moveToCreated()
        lifecycle2.moveToDestroyed()

        assertEquals(Lifecycle.State.DESTROYED, merged.currentState)
    }

    @Test
    fun WHEN_lifecycle1_destroyed_THEN_all_callbacks_unsubscribed() {
        lifecycle1.moveToResumed()
        lifecycle2.moveToResumed()

        lifecycle1.moveToDestroyed()

        lifecycle1.assertNoObservers()
        lifecycle2.assertNoObservers()
    }

    @Test
    fun WHEN_lifecycle2_destroyed_THEN_all_callbacks_unsubscribed() {
        lifecycle1.moveToResumed()
        lifecycle2.moveToResumed()

        lifecycle2.moveToDestroyed()

        lifecycle1.assertNoObservers()
        lifecycle2.assertNoObservers()
    }

    @Test
    fun GIVEN_lifecycle1_resumed_and_not_emitting_on_subscribe_and_lifecycle2_initialized_WHEN_lifecycle2_and_lifecycle1_resumed_THEN_onCreate_onStart_onResume_called() {
        val observer = TestLifecycleObserver()
        val lifecycle1 = testLifecycleRegistry(Lifecycle.State.RESUMED)

        lifecycle1.doOnResume {
            val merged = mergedLifecycle(lifecycle1, lifecycle2)
            merged.addObserver(observer)
            lifecycle2.moveToResumed()
        }

        observer.assertEvents(Event.ON_CREATE, Event.ON_START, Event.ON_RESUME)
    }

    @Test
    fun GIVEN_lifecycle2_resumed_and_not_emitting_on_subscribe_and_lifecycle1_initialized_WHEN_lifecycle1_and_lifecycle2_resumed_THEN_onCreate_onStart_onResume_called() {
        val observer = TestLifecycleObserver()
        val lifecycle2 = testLifecycleRegistry(Lifecycle.State.RESUMED)

        lifecycle2.doOnResume {
            val merged = mergedLifecycle(lifecycle1, lifecycle2)
            merged.addObserver(observer)
            lifecycle1.moveToResumed()
        }

        observer.assertEvents(Event.ON_CREATE, Event.ON_START, Event.ON_RESUME)
    }
}

private fun LifecycleRegistry.assertNoObservers() {
    assertEquals(0, observerCount)
}
