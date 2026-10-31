package com.arkivanov.decompose.testutils

import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.LifecycleRegistry
import com.arkivanov.decompose.lifecycle.moveTo

fun testLifecycleRegistry(state: Lifecycle.State = Lifecycle.State.INITIALIZED): LifecycleRegistry {
    val owner = LateInitLifecycleOwner()
    LifecycleOwners += owner
    val registry = LifecycleRegistry.createUnsafe(owner)
    owner.lifecycle = registry

    return registry.moveTo(state)
}

// The damn LifecycleRegistry requires a LifecycleOwner pointing to the LifecycleRegistry itself (╯°□°)╯︵ ┻━┻
private class LateInitLifecycleOwner : LifecycleOwner {
    override lateinit var lifecycle: Lifecycle
}

// The damn LifecycleRegistry holds a WeakReference to the LifecycleOwner, so we need a strong reference, ok for tests
private val LifecycleOwners = HashSet<LifecycleOwner>()
