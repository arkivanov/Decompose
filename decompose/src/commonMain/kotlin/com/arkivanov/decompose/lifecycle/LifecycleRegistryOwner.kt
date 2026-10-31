package com.arkivanov.decompose.lifecycle

import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.LifecycleRegistry

/**
 * Represents a holder of [LifecycleRegistry].
 */
interface LifecycleRegistryOwner : LifecycleOwner {

    override val lifecycle: LifecycleRegistry
}

/**
 * Moves this [LifecycleRegistryOwner] to [Lifecycle.State.CREATED] state.
 *
 * @return this same instance of [LifecycleRegistryOwner].
 * @see com.arkivanov.decompose.lifecycle.moveToCreated
 */
fun <T : LifecycleRegistryOwner> T.created(): T {
    lifecycle.moveToCreated()
    return this
}

/**
 * Moves this [LifecycleRegistryOwner] to [Lifecycle.State.STARTED] state.
 *
 * @return this same instance of [LifecycleRegistryOwner].
 * @see com.arkivanov.decompose.lifecycle.moveToStarted
 */
fun <T : LifecycleRegistryOwner> T.started(): T {
    lifecycle.moveToStarted()
    return this
}

/**
 * Moves this [LifecycleRegistryOwner] to [Lifecycle.State.RESUMED] state.
 *
 * @return this same instance of [LifecycleRegistryOwner].
 * @see com.arkivanov.decompose.lifecycle.moveToResumed
 */
fun <T : LifecycleRegistryOwner> T.resumed(): T {
    lifecycle.moveToResumed()
    return this
}
