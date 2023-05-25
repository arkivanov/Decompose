package com.arkivanov.decompose.lifecycle

import com.arkivanov.decompose.InternalDecomposeApi
import com.arkivanov.essenty.lifecycle.Lifecycle
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
        moveTo(minOf(lifecycle1.state, lifecycle2.state))

        if ((lifecycle1.state != Lifecycle.State.DESTROYED) && (lifecycle2.state != Lifecycle.State.DESTROYED)) {
            val observer1 = CallbacksImpl { state -> moveTo(minOf(state, lifecycle2.state)) }
            val observer2 = CallbacksImpl { state -> moveTo(minOf(state, lifecycle1.state)) }

            lifecycle1.subscribe(observer1)
            lifecycle2.subscribe(observer2)

            registry.doOnDestroy {
                lifecycle1.unsubscribe(observer1)
                lifecycle2.unsubscribe(observer2)
            }
        }
    }

    private fun moveTo(state: Lifecycle.State) {
        when (state) {
            Lifecycle.State.DESTROYED -> moveToDestroyed()
            Lifecycle.State.INITIALIZED -> Unit
            Lifecycle.State.CREATED -> moveToCreated()
            Lifecycle.State.STARTED -> moveToStarted()
            Lifecycle.State.RESUMED -> moveToResumed()
        }
    }

    private fun moveToDestroyed() {
        when (registry.state) {
            Lifecycle.State.DESTROYED -> Unit

            Lifecycle.State.INITIALIZED -> {
                registry.create()
                registry.destroy()
            }

            Lifecycle.State.CREATED,
            Lifecycle.State.STARTED,
            Lifecycle.State.RESUMED -> registry.destroy()
        }
    }

    private fun moveToCreated() {
        when (registry.state) {
            Lifecycle.State.DESTROYED -> Unit
            Lifecycle.State.INITIALIZED -> registry.create()

            Lifecycle.State.CREATED -> Unit

            Lifecycle.State.STARTED,
            Lifecycle.State.RESUMED -> registry.stop()
        }
    }

    private fun moveToStarted() {
        when (registry.state) {
            Lifecycle.State.INITIALIZED,
            Lifecycle.State.CREATED -> registry.start()

            Lifecycle.State.RESUMED -> registry.pause()

            Lifecycle.State.DESTROYED,
            Lifecycle.State.STARTED -> Unit
        }
    }

    private fun moveToResumed() {
        when (registry.state) {
            Lifecycle.State.INITIALIZED,
            Lifecycle.State.CREATED,
            Lifecycle.State.STARTED -> registry.resume()

            Lifecycle.State.RESUMED,
            Lifecycle.State.DESTROYED -> Unit
        }
    }

    private class CallbacksImpl(
        private val onStateChanged: (Lifecycle.State) -> Unit,
    ) : Lifecycle.Callbacks {
        override fun onCreate() {
            onStateChanged(Lifecycle.State.CREATED)
        }

        override fun onStart() {
            onStateChanged(Lifecycle.State.STARTED)
        }

        override fun onResume() {
            onStateChanged(Lifecycle.State.RESUMED)
        }

        override fun onPause() {
            onStateChanged(Lifecycle.State.STARTED)
        }

        override fun onStop() {
            onStateChanged(Lifecycle.State.CREATED)
        }

        override fun onDestroy() {
            onStateChanged(Lifecycle.State.DESTROYED)
        }
    }
}

