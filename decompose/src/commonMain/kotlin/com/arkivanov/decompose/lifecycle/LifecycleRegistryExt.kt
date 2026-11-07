package com.arkivanov.decompose.lifecycle

import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleEventObserver
import androidx.lifecycle.LifecycleRegistry
import com.arkivanov.decompose.mainthread.checkMainThread

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
 * Creates a [LifecycleRegistry] with the provided initial [state].
 * The returned [LifecycleRegistry] honors the
 * [DecomposeSettings.mainThreadCheckEnabled][com.arkivanov.decompose.DecomposeSettings.mainThreadCheckEnabled]
 * settings parameter for main thread checks and reports violations via
 * [DecomposeSettings.onDecomposeError][com.arkivanov.decompose.DecomposeSettings.onDecomposeError].
 */
fun LifecycleRegistry(state: Lifecycle.State = Lifecycle.State.INITIALIZED): LifecycleRegistry {
    val owner =
        // The damn LifecycleRegistry requires a LifecycleOwner pointing to the LifecycleRegistry itself (╯°□°)╯︵ ┻━┻
        object : LifecycleRegistryOwner {
            override val lifecycle: LifecycleRegistry = LifecycleRegistry.createUnsafe(this).moveTo(state)
        }

    var isObserverEnabled = false

    owner.lifecycle.addObserver(
        LifecycleEventObserver { _, _ ->
            if (isObserverEnabled) {
                checkMainThread()
            }

            owner.lifecycle // The damn LifecycleRegistry holds a WeakReference to the LifecycleOwner, we need a strong one (╯°□°)╯︵ ┻━┻
        },
    )

    isObserverEnabled = true

    return owner.lifecycle
}
