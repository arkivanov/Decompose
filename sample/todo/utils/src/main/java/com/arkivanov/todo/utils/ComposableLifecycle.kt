package com.arkivanov.todo.utils

import androidx.compose.runtime.Composable
import androidx.compose.runtime.onActive
import androidx.compose.runtime.remember
import com.arkivanov.mvikotlin.core.lifecycle.Lifecycle
import com.arkivanov.mvikotlin.core.lifecycle.LifecycleRegistry

@Composable
fun lifecycle(): Lifecycle {
    val registry = remember(::LifecycleRegistry)

    onActive {
        registry.onCreate()
        registry.onStart()
        registry.onResume()

        onDispose {
            registry.onPause()
            registry.onStop()
            registry.onDestroy()
        }
    }

    return registry
}
