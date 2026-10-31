package com.arkivanov.decompose.lifecycle

import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.LifecycleRegistry

/**
 * Moves this [LifecycleRegistry] to the provided [state].
 *
 * Equivalent to `currentState = state`, but moves to [Lifecycle.State.CREATED] first
 * if the current state is [Lifecycle.State.INITIALIZED] and the target [state] is [Lifecycle.State.DESTROYED].
 */
fun LifecycleRegistry.moveTo(state: Lifecycle.State): LifecycleRegistry {
    if ((state == Lifecycle.State.DESTROYED) && (currentState == Lifecycle.State.INITIALIZED)) {
        currentState = Lifecycle.State.CREATED
    }

    currentState = state

    return this
}

/**
 * A shortcut for `moveTo(Lifecycle.State.CREATED)`.
 */
fun LifecycleRegistry.moveToCreated(): LifecycleRegistry =
    moveTo(Lifecycle.State.CREATED)

/**
 * A shortcut for `moveTo(Lifecycle.State.STARTED)`.
 */
fun LifecycleRegistry.moveToStarted(): LifecycleRegistry =
    moveTo(Lifecycle.State.STARTED)

/**
 * A shortcut for `moveTo(Lifecycle.State.RESUMED)`.
 */
fun LifecycleRegistry.moveToResumed(): LifecycleRegistry =
    moveTo(Lifecycle.State.RESUMED)

/**
 * A shortcut for `moveTo(Lifecycle.State.DESTROYED)`.
 */
fun LifecycleRegistry.moveToDestroyed(): LifecycleRegistry =
    moveTo(Lifecycle.State.DESTROYED)

/**
 * Creates a [LifecycleRegistry] in [Lifecycle.State.INITIALIZED] state.
 */
fun LifecycleRegistry(): LifecycleRegistry =
    LifecycleRegistryImpl()

@Suppress("CanBeParameter") // The damn LifecycleRegistry holds a WeakReference to the LifecycleOwner, so we need a strong reference
private class LifecycleRegistryImpl(
    private val owner: LateInitLifecycleOwner = LateInitLifecycleOwner(),
) : LifecycleRegistry(owner) {
    init {
        owner.lifecycle = this
    }
}

// The damn LifecycleRegistry requires a LifecycleOwner pointing to the LifecycleRegistry itself (╯°□°)╯︵ ┻━┻
private class LateInitLifecycleOwner : LifecycleOwner {
    override lateinit var lifecycle: Lifecycle
}
