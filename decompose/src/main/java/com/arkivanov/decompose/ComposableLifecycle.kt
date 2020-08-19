package com.arkivanov.decompose

import androidx.compose.runtime.Composable
import androidx.compose.runtime.onActive
import androidx.compose.runtime.onDispose
import androidx.compose.runtime.remember
import androidx.lifecycle.Lifecycle

@Composable
internal fun lifecycle(): Lifecycle {
    val holder = remember { LifecycleHolder() }

    onActive {
        holder.registry.apply {
            handleLifecycleEvent(Lifecycle.Event.ON_CREATE)
            handleLifecycleEvent(Lifecycle.Event.ON_START)
            handleLifecycleEvent(Lifecycle.Event.ON_RESUME)
        }
    }

    onDispose {
        holder.registry.apply {
            handleLifecycleEvent(Lifecycle.Event.ON_PAUSE)
            handleLifecycleEvent(Lifecycle.Event.ON_STOP)
            handleLifecycleEvent(Lifecycle.Event.ON_DESTROY)
        }
    }

    return holder.registry
}
