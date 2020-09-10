package com.arkivanov.decompose.lifecycle

import androidx.lifecycle.DefaultLifecycleObserver
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleObserver
import androidx.lifecycle.LifecycleOwner
import com.arkivanov.decompose.lifecycle.Lifecycle as DecomposeLifecycle

fun Lifecycle.asDecomposeLifecycle(): DecomposeLifecycle = DecomposeLifecycleInterop(this)

private class DecomposeLifecycleInterop(
    private val delegate: Lifecycle
) : DecomposeLifecycle {

    private var observerMap = HashMap<DecomposeLifecycle.Callbacks, LifecycleObserver>()

    override val state: DecomposeLifecycle.State get() = delegate.currentState.toDecomposeLifecycleState()

    override fun subscribe(callbacks: DecomposeLifecycle.Callbacks) {
        check(callbacks !in observerMap) { "Already subscribed" }

        val observer = AndroidLifecycleObserver(callbacks)
        this.observerMap[callbacks] = observer
        delegate.addObserver(observer)
    }

    override fun unsubscribe(callbacks: DecomposeLifecycle.Callbacks) {
        val observer = observerMap.remove(callbacks)

        check(observer != null) { "Not subscribed" }

        delegate.removeObserver(observer)
    }
}

private fun Lifecycle.State.toDecomposeLifecycleState(): DecomposeLifecycle.State =
    when (this) {
        Lifecycle.State.DESTROYED -> DecomposeLifecycle.State.DESTROYED
        Lifecycle.State.INITIALIZED -> DecomposeLifecycle.State.INITIALIZED
        Lifecycle.State.CREATED -> DecomposeLifecycle.State.CREATED
        Lifecycle.State.STARTED -> DecomposeLifecycle.State.STARTED
        Lifecycle.State.RESUMED -> DecomposeLifecycle.State.RESUMED
    }

private class AndroidLifecycleObserver(
    private val delegate: DecomposeLifecycle.Callbacks
) : DefaultLifecycleObserver {
    override fun onCreate(owner: LifecycleOwner) {
        delegate.onCreate()
    }

    override fun onStart(owner: LifecycleOwner) {
        delegate.onStart()
    }

    override fun onResume(owner: LifecycleOwner) {
        delegate.onResume()
    }

    override fun onPause(owner: LifecycleOwner) {
        delegate.onPause()
    }

    override fun onStop(owner: LifecycleOwner) {
        delegate.onStop()
    }

    override fun onDestroy(owner: LifecycleOwner) {
        delegate.onDestroy()
    }
}
