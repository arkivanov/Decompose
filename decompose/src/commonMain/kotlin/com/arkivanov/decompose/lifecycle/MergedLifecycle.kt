package com.arkivanov.decompose.lifecycle

import androidx.lifecycle.Lifecycle
import androidx.lifecycle.Lifecycle.State
import androidx.lifecycle.LifecycleEventObserver
import com.arkivanov.decompose.InternalDecomposeApi

@InternalDecomposeApi
fun mergedLifecycle(lifecycle1: Lifecycle, lifecycle2: Lifecycle): Lifecycle {
    if (lifecycle1.isDestroyed || lifecycle2.isDestroyed) {
        return DecomposeLifecycleRegistry(initialState = State.DESTROYED)
    }

    val registry = DecomposeLifecycleRegistry()
    var state1 = State.INITIALIZED
    var state2 = State.INITIALIZED

    val observer1 =
        LifecycleEventObserver { _, event ->
            state1 = event.targetState
            registry.moveTo(minOf(event.targetState, state2))
        }

    val observer2 =
        LifecycleEventObserver { _, event ->
            state2 = event.targetState
            registry.moveTo(minOf(event.targetState, state1))
        }

    lifecycle1.addObserver(observer1)
    lifecycle2.addObserver(observer2)

    registry.doOnDestroy {
        lifecycle1.removeObserver(observer1)
        lifecycle2.removeObserver(observer2)
    }

    return registry
}
