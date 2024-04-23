package com.arkivanov.decompose.lifecycle

import com.arkivanov.decompose.InternalDecomposeApi
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.Lifecycle.State
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.create
import com.arkivanov.essenty.lifecycle.destroy
import com.arkivanov.essenty.lifecycle.doOnDestroy
import com.arkivanov.essenty.lifecycle.pause
import com.arkivanov.essenty.lifecycle.resume
import com.arkivanov.essenty.lifecycle.start
import com.arkivanov.essenty.lifecycle.stop

@InternalDecomposeApi
class MergedLifecycle private constructor(
    private val registry: LifecycleRegistry,
    lifecycle1: Lifecycle,
    lifecycle2: Lifecycle
) : Lifecycle by registry {

    constructor(lifecycle1: Lifecycle, lifecycle2: Lifecycle) : this(LifecycleRegistry(), lifecycle1, lifecycle2)

    init {
        var state1 = if (lifecycle1.state == State.DESTROYED) State.DESTROYED else State.INITIALIZED
        var state2 = if (lifecycle2.state == State.DESTROYED) State.DESTROYED else State.INITIALIZED

        moveTo(minOf(state1, state2))

        if ((state1 != State.DESTROYED) && (state2 != State.DESTROYED)) {
            val observer1 =
                CallbacksImpl { state ->
                    state1 = state
                    moveTo(minOf(state, state2))
                }

            val observer2 =
                CallbacksImpl { state ->
                    state2 = state
                    moveTo(minOf(state, state1))
                }

            lifecycle1.subscribe(observer1)
            lifecycle2.subscribe(observer2)

            registry.doOnDestroy {
                lifecycle1.unsubscribe(observer1)
                lifecycle2.unsubscribe(observer2)
            }
        }
    }

    private fun moveTo(state: State) {
        when (state) {
            State.DESTROYED -> moveToDestroyed()
            State.INITIALIZED -> Unit
            State.CREATED -> moveToCreated()
            State.STARTED -> moveToStarted()
            State.RESUMED -> moveToResumed()
        }
    }

    private fun moveToDestroyed() {
        when (registry.state) {
            State.DESTROYED -> Unit

            State.INITIALIZED -> {
                registry.create()
                registry.destroy()
            }

            State.CREATED,
            State.STARTED,
            State.RESUMED -> registry.destroy()
        }
    }

    private fun moveToCreated() {
        when (registry.state) {
            State.DESTROYED -> Unit
            State.INITIALIZED -> registry.create()

            State.CREATED -> Unit

            State.STARTED,
            State.RESUMED -> registry.stop()
        }
    }

    private fun moveToStarted() {
        when (registry.state) {
            State.INITIALIZED,
            State.CREATED -> registry.start()

            State.RESUMED -> registry.pause()

            State.DESTROYED,
            State.STARTED -> Unit
        }
    }

    private fun moveToResumed() {
        when (registry.state) {
            State.INITIALIZED,
            State.CREATED,
            State.STARTED -> registry.resume()

            State.RESUMED,
            State.DESTROYED -> Unit
        }
    }

    private class CallbacksImpl(
        private val onStateChanged: (State) -> Unit,
    ) : Lifecycle.Callbacks {
        override fun onCreate() {
            onStateChanged(State.CREATED)
        }

        override fun onStart() {
            onStateChanged(State.STARTED)
        }

        override fun onResume() {
            onStateChanged(State.RESUMED)
        }

        override fun onPause() {
            onStateChanged(State.STARTED)
        }

        override fun onStop() {
            onStateChanged(State.CREATED)
        }

        override fun onDestroy() {
            onStateChanged(State.DESTROYED)
        }
    }
}

