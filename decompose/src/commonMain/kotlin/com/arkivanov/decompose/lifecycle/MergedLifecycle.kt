package com.arkivanov.decompose.lifecycle

internal class MergedLifecycle private constructor(
    private val registry: LifecycleRegistry,
    lifecycle1: Lifecycle,
    lifecycle2: Lifecycle
) : Lifecycle by registry {

    constructor(lifecycle1: Lifecycle, lifecycle2: Lifecycle) : this(LifecycleRegistry(), lifecycle1, lifecycle2)

    init {
        lifecycle1.subscribe(LifecycleObserverImpl(lifecycle2))
        lifecycle2.subscribe(LifecycleObserverImpl(lifecycle1))
    }

    private inner class LifecycleObserverImpl(
        private val other: Lifecycle
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
            if (state <= other.state) {
                call()
            }
        }

        private fun onDown(state: Lifecycle.State, call: () -> Unit) {
            if (state < other.state) {
                call()
            }
        }
    }
}
