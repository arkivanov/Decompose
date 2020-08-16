package com.arkivanov.todo.router

import androidx.lifecycle.LifecycleRegistry

internal class StackEntry(
    val component: ComposableComponent,
    @Suppress("CanBeParameter") // Must be val
    private val lifecycleHolder: LifecycleHolder
) {

    val lifecycle: LifecycleRegistry = lifecycleHolder.registry
}
