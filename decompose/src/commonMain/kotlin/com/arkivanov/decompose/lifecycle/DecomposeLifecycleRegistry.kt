package com.arkivanov.decompose.lifecycle

import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleObserver
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.LifecycleRegistry
import kotlinx.coroutines.flow.StateFlow

internal class DecomposeLifecycleRegistry(
    initialState: State = State.INITIALIZED,
) : Lifecycle() {
    private val owner =
        object : LifecycleOwner {
            @Suppress("VisibleForTests") // Decompose synchronizes access and has its own checks for main thread, don't want to throw
            override val lifecycle: LifecycleRegistry = LifecycleRegistry.createUnsafe(this).moveTo(initialState)
        }

    override var currentState: State by owner.lifecycle::currentState
    override val currentStateFlow: StateFlow<State> = owner.lifecycle.currentStateFlow

    override fun addObserver(observer: LifecycleObserver) {
        owner.lifecycle.addObserver(observer)
    }

    override fun removeObserver(observer: LifecycleObserver) {
        owner.lifecycle.removeObserver(observer)
    }

    fun moveTo(state: State) {
        owner.lifecycle.moveTo(state)
    }

    fun moveToCreated() {
        owner.lifecycle.moveToCreated()
    }

    fun moveToStarted() {
        owner.lifecycle.moveToStarted()
    }

    fun moveToResumed() {
        owner.lifecycle.moveToResumed()
    }

    fun moveToDestroyed() {
        owner.lifecycle.moveToDestroyed()
    }
}
