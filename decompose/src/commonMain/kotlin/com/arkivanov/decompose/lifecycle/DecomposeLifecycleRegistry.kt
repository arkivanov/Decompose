package com.arkivanov.decompose.lifecycle

import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleObserver
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.LifecycleRegistry
import kotlinx.coroutines.flow.StateFlow

internal class DecomposeLifecycleRegistryOwner(
    initialState: Lifecycle.State = Lifecycle.State.INITIALIZED,
) : LifecycleOwner {
    override val lifecycle: DecomposeLifecycleRegistry = DecomposeLifecycleRegistry(owner = this, initialState = initialState)
}

internal class DecomposeLifecycleRegistry(
    owner: LifecycleOwner,
    initialState: State = State.INITIALIZED,
) : Lifecycle() {
    @Suppress("VisibleForTests") // Decompose synchronizes access and has its own checks for main thread, don't want to throw
    private val registry: LifecycleRegistry = LifecycleRegistry.createUnsafe(owner).moveTo(initialState)

    override var currentState: State by registry::currentState

    // TODO: Just use LifecycleRegistry directly when https://issuetracker.google.com/issues/579057749 is fixed
    override val currentStateFlow: StateFlow<State> = registry.currentStateFlow

    override fun addObserver(observer: LifecycleObserver) {
        registry.addObserver(observer)
    }

    override fun removeObserver(observer: LifecycleObserver) {
        registry.removeObserver(observer)
    }

    fun moveTo(state: State) {
        registry.moveTo(state)
    }

    fun moveToCreated() {
        registry.moveToCreated()
    }

    fun moveToStarted() {
        registry.moveToStarted()
    }

    fun moveToResumed() {
        registry.moveToResumed()
    }

    fun moveToDestroyed() {
        registry.moveToDestroyed()
    }
}
