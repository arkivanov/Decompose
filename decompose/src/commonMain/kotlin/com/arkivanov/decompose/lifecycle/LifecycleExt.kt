package com.arkivanov.decompose.lifecycle

import androidx.lifecycle.DefaultLifecycleObserver
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleObserver
import androidx.lifecycle.LifecycleOwner

/**
 * Creates a [DefaultLifecycleObserver] with the provided callbacks.
 */
inline fun DefaultLifecycleObserver(
    crossinline onCreate: () -> Unit = {},
    crossinline onStart: () -> Unit = {},
    crossinline onResume: () -> Unit = {},
    crossinline onPause: () -> Unit = {},
    crossinline onStop: () -> Unit = {},
    crossinline onDestroy: () -> Unit = {},
): DefaultLifecycleObserver =
    object : DefaultLifecycleObserver {
        override fun onCreate(owner: LifecycleOwner) {
            onCreate.invoke()
        }

        override fun onStart(owner: LifecycleOwner) {
            onStart.invoke()
        }

        override fun onResume(owner: LifecycleOwner) {
            onResume.invoke()
        }

        override fun onPause(owner: LifecycleOwner) {
            onPause.invoke()
        }

        override fun onStop(owner: LifecycleOwner) {
            onStop.invoke()
        }

        override fun onDestroy(owner: LifecycleOwner) {
            onDestroy.invoke()
        }
    }

/**
 * A convenience method for [Lifecycle.addObserver].
 * The observer is brought to the current state of this [Lifecycle].
 *
 * @return the registered [LifecycleObserver], which can later be passed to [Lifecycle.removeObserver].
 */
inline fun Lifecycle.addObserver(
    crossinline onCreate: () -> Unit = {},
    crossinline onStart: () -> Unit = {},
    crossinline onResume: () -> Unit = {},
    crossinline onPause: () -> Unit = {},
    crossinline onStop: () -> Unit = {},
    crossinline onDestroy: () -> Unit = {},
): LifecycleObserver =
    DefaultLifecycleObserver(
        onCreate = onCreate,
        onStart = onStart,
        onResume = onResume,
        onPause = onPause,
        onStop = onStop,
        onDestroy = onDestroy,
    ).also(this::addObserver)

/**
 * Registers the callback [block] to be called when this [Lifecycle] is created.
 * Calls the [block] immediately if the current state is at least [Lifecycle.State.CREATED].
 */
inline fun Lifecycle.doOnCreate(crossinline block: () -> Unit) {
    addObserver(
        object : DefaultLifecycleObserver {
            override fun onCreate(owner: LifecycleOwner) {
                removeObserver(this)
                block()
            }
        }
    )
}

/**
 * Registers the callback [block] to be called when this [Lifecycle] is started.
 * Calls the [block] immediately if the current state is at least [Lifecycle.State.STARTED].
 *
 * @param isOneTime if `true` then the callback is automatically unregistered right before
 * the first call, default value is `false`.
 */
inline fun Lifecycle.doOnStart(isOneTime: Boolean = false, crossinline block: () -> Unit) {
    addObserver(
        object : DefaultLifecycleObserver {
            override fun onStart(owner: LifecycleOwner) {
                if (isOneTime) {
                    removeObserver(this)
                }

                block()
            }
        }
    )
}

/**
 * Registers the callback [block] to be called when this [Lifecycle] is resumed.
 * Calls the [block] immediately if the current state is [Lifecycle.State.RESUMED].
 *
 * @param isOneTime if `true` then the callback is automatically unregistered right before
 * the first call, default value is `false`.
 */
inline fun Lifecycle.doOnResume(isOneTime: Boolean = false, crossinline block: () -> Unit) {
    addObserver(
        object : DefaultLifecycleObserver {
            override fun onResume(owner: LifecycleOwner) {
                if (isOneTime) {
                    removeObserver(this)
                }

                block()
            }
        }
    )
}

/**
 * Registers the callback [block] to be called when this [Lifecycle] is paused.
 *
 * @param isOneTime if `true` then the callback is automatically unregistered right before
 * the first call, default value is `false`.
 */
inline fun Lifecycle.doOnPause(isOneTime: Boolean = false, crossinline block: () -> Unit) {
    addObserver(
        object : DefaultLifecycleObserver {
            override fun onPause(owner: LifecycleOwner) {
                if (isOneTime) {
                    removeObserver(this)
                }

                block()
            }
        }
    )
}

/**
 * Registers the callback [block] to be called when this [Lifecycle] is stopped.
 *
 * @param isOneTime if `true` then the callback is automatically unregistered right before
 * the first call, default value is `false`.
 */
inline fun Lifecycle.doOnStop(isOneTime: Boolean = false, crossinline block: () -> Unit) {
    addObserver(
        object : DefaultLifecycleObserver {
            override fun onStop(owner: LifecycleOwner) {
                if (isOneTime) {
                    removeObserver(this)
                }

                block()
            }
        }
    )
}

/**
 * Registers the callback [block] to be called when this [Lifecycle] is destroyed.
 * Calls the [block] immediately if the [Lifecycle] is already destroyed.
 */
inline fun Lifecycle.doOnDestroy(crossinline block: () -> Unit) {
    if (currentState == Lifecycle.State.DESTROYED) {
        block()
    } else {
        addObserver(
            object : DefaultLifecycleObserver {
                override fun onDestroy(owner: LifecycleOwner) {
                    block()
                }
            }
        )
    }
}

/**
 * Convenience method for [Lifecycle.doOnCreate].
 */
inline fun LifecycleOwner.doOnCreate(crossinline block: () -> Unit) {
    lifecycle.doOnCreate(block)
}

/**
 * Convenience method for [Lifecycle.doOnStart].
 */
inline fun LifecycleOwner.doOnStart(isOneTime: Boolean = false, crossinline block: () -> Unit) {
    lifecycle.doOnStart(isOneTime = isOneTime, block = block)
}

/**
 * Convenience method for [Lifecycle.doOnResume].
 */
inline fun LifecycleOwner.doOnResume(isOneTime: Boolean = false, crossinline block: () -> Unit) {
    lifecycle.doOnResume(isOneTime = isOneTime, block = block)
}

/**
 * Convenience method for [Lifecycle.doOnPause].
 */
inline fun LifecycleOwner.doOnPause(isOneTime: Boolean = false, crossinline block: () -> Unit) {
    lifecycle.doOnPause(isOneTime = isOneTime, block = block)
}

/**
 * Convenience method for [Lifecycle.doOnStop].
 */
inline fun LifecycleOwner.doOnStop(isOneTime: Boolean = false, crossinline block: () -> Unit) {
    lifecycle.doOnStop(isOneTime = isOneTime, block = block)
}

/**
 * Convenience method for [Lifecycle.doOnDestroy].
 */
inline fun LifecycleOwner.doOnDestroy(crossinline block: () -> Unit) {
    lifecycle.doOnDestroy(block)
}

internal val Lifecycle.isDestroyed: Boolean get() = currentState == Lifecycle.State.DESTROYED
