package com.arkivanov.decompose.lifecycle

import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.LifecycleOwner
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.create
import com.arkivanov.essenty.lifecycle.pause
import com.arkivanov.essenty.lifecycle.resume
import com.arkivanov.essenty.lifecycle.start
import com.arkivanov.essenty.lifecycle.stop

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
 */
fun <T : LifecycleRegistryOwner> T.created(): T {
    check(lifecycle.state != Lifecycle.State.DESTROYED) { "Can't change a destroyed LifecycleRegistry" }

    if (lifecycle.state < Lifecycle.State.CREATED) {
        lifecycle.create()
    } else {
        lifecycle.stop()
    }

    return this
}

/**
 * Moves this [LifecycleRegistryOwner] to [Lifecycle.State.STARTED] state.
 *
 * @return this same instance of [LifecycleRegistryOwner].
 */
fun <T : LifecycleRegistryOwner> T.started(): T {
    check(lifecycle.state != Lifecycle.State.DESTROYED) { "Can't change a destroyed LifecycleRegistry" }

    if (lifecycle.state < Lifecycle.State.STARTED) {
        lifecycle.start()
    } else {
        lifecycle.pause()
    }

    return this
}

/**
 * Moves this [LifecycleRegistryOwner] to [Lifecycle.State.RESUMED] state.
 *
 * @return this same instance of [LifecycleRegistryOwner].
 */
fun <T : LifecycleRegistryOwner> T.resumed(): T {
    check(lifecycle.state != Lifecycle.State.DESTROYED) { "Can't change a destroyed LifecycleRegistry" }

    lifecycle.resume()

    return this
}
