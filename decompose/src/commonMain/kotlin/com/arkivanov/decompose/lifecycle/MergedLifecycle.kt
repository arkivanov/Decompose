package com.arkivanov.decompose.lifecycle

import com.arkivanov.decompose.InternalDecomposeApi
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.doOnDestroy

@InternalDecomposeApi
class MergedLifecycle private constructor(
    private val registry: LifecycleRegistry,
    lifecycle1: Lifecycle,
    lifecycle2: Lifecycle
) : Lifecycle by registry {

    constructor(lifecycle1: Lifecycle, lifecycle2: Lifecycle) : this(LifecycleRegistry(), lifecycle1, lifecycle2)

    init {
        if ((lifecycle1.state == Lifecycle.State.DESTROYED) || (lifecycle2.state == Lifecycle.State.DESTROYED)) {
            registry.onCreate()
            registry.onDestroy()
        } else {
            var state1: Lifecycle.State = Lifecycle.State.INITIALIZED
            var state2: Lifecycle.State = Lifecycle.State.INITIALIZED
            val observer1 = CallbacksImpl(registry = registry, setState = { state1 = it }, getOtherState = { state2 })
            val observer2 = CallbacksImpl(registry = registry, setState = { state2 = it }, getOtherState = { state1 })

            lifecycle1.subscribe(observer1)
            lifecycle2.subscribe(observer2)

            registry.doOnDestroy {
                lifecycle1.unsubscribe(observer1)
                lifecycle2.unsubscribe(observer2)
            }
        }
    }

    private class CallbacksImpl(
        private val registry: Lifecycle.Callbacks,
        private val setState: (Lifecycle.State) -> Unit,
        private val getOtherState: () -> Lifecycle.State,
    ) : Lifecycle.Callbacks {
        override fun onCreate() {
            onUp(Lifecycle.State.CREATED, registry::onCreate)
        }

        override fun onStart() {
            onUp(Lifecycle.State.STARTED, registry::onStart)
        }

        override fun onResume() {
            onUp(Lifecycle.State.RESUMED, registry::onResume)
        }

        override fun onPause() {
            onDown(Lifecycle.State.STARTED, registry::onPause)
        }

        override fun onStop() {
            onDown(Lifecycle.State.CREATED, registry::onStop)
        }

        override fun onDestroy() {
            onDown(Lifecycle.State.INITIALIZED, registry::onDestroy)
        }

        private fun onUp(state: Lifecycle.State, call: () -> Unit) {
            setState(state)
            if (state <= getOtherState()) {
                call()
            }
        }

        private fun onDown(state: Lifecycle.State, call: () -> Unit) {
            if (state < getOtherState()) {
                call()
            }
            setState(state)
        }
    }
}

