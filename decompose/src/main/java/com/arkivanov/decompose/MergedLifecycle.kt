package com.arkivanov.decompose

import androidx.lifecycle.DefaultLifecycleObserver
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.LifecycleRegistry

internal class MergedLifecycle(lifecycle1: Lifecycle, lifecycle2: Lifecycle) {

    private val holder = LifecycleHolder() // Must be stored in a field
    val registry: LifecycleRegistry = holder.registry

    init {
        lifecycle1.addObserver(LifecycleObserverImpl(lifecycle2))
        lifecycle2.addObserver(LifecycleObserverImpl(lifecycle1))
    }

    private inner class LifecycleObserverImpl(
        private val other: Lifecycle,
    ) : DefaultLifecycleObserver {
        override fun onCreate(owner: LifecycleOwner) {
            onUp(Lifecycle.State.CREATED, Lifecycle.Event.ON_CREATE)
        }

        override fun onStart(owner: LifecycleOwner) {
            onUp(Lifecycle.State.STARTED, Lifecycle.Event.ON_START)
        }

        override fun onResume(owner: LifecycleOwner) {
            onUp(Lifecycle.State.RESUMED, Lifecycle.Event.ON_RESUME)
        }

        override fun onPause(owner: LifecycleOwner) {
            onDown(Lifecycle.State.STARTED, Lifecycle.Event.ON_PAUSE)
        }

        override fun onStop(owner: LifecycleOwner) {
            onDown(Lifecycle.State.CREATED, Lifecycle.Event.ON_STOP)
        }

        override fun onDestroy(owner: LifecycleOwner) {
            onDown(Lifecycle.State.INITIALIZED, Lifecycle.Event.ON_DESTROY)
        }

        private fun onUp(state: Lifecycle.State, event: Lifecycle.Event) {
            if (state <= other.currentState) {
                registry.handleLifecycleEvent(event)
            }
        }

        private fun onDown(state: Lifecycle.State, event: Lifecycle.Event) {
            if (state < other.currentState) {
                registry.handleLifecycleEvent(event)
            }
        }
    }
}
