package com.arkivanov.decompose.lifecycle

class MergedLifecycle private constructor(
    private val registry: LifecycleRegistry,
    lifecycle1: Lifecycle,
    lifecycle2: Lifecycle
) : Lifecycle by registry {

    constructor(lifecycle1: Lifecycle, lifecycle2: Lifecycle) : this(LifecycleRegistry(), lifecycle1, lifecycle2)

    private var state1: Lifecycle.State = Lifecycle.State.INITIALIZED
    private var state2: Lifecycle.State = Lifecycle.State.INITIALIZED

    init {
        lifecycle1.subscribe(LifecycleObserverImpl(otherState = ::state2, onStateChanged = { state1 = it }))
        lifecycle2.subscribe(LifecycleObserverImpl(otherState = ::state1, onStateChanged = { state2 = it }))
    }

    private inner class LifecycleObserverImpl(
        private val otherState: () -> Lifecycle.State,
        private val onStateChanged: (Lifecycle.State) -> Unit
    ) : DefaultLifecycleCallbacks {
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
            onStateChanged(state)
            if (state <= otherState()) {
                call()
            }
        }

        private fun onDown(state: Lifecycle.State, call: () -> Unit) {
            if (state < otherState()) {
                call()
            }
            onStateChanged(state)
        }
    }
}
