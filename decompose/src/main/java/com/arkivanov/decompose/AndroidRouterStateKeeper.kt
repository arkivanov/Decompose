package com.arkivanov.decompose

import android.os.Bundle
import androidx.savedstate.SavedStateRegistry

abstract class AndroidRouterStateKeeper<C>(
    private val savedStateRegistry: SavedStateRegistry,
    private val key: String,
    private val configurationClassLoader: ClassLoader?
) : RouterStateKeeper<C> {

    override fun consume(): List<C>? =
        savedStateRegistry
            .consumeRestoredStateForKey(key)
            ?.apply { classLoader = configurationClassLoader }
            ?.getConfigurations(KEY_CONFIGURATIONS)

    protected abstract fun Bundle.getConfigurations(key: String): List<C>?

    override fun register(supplier: () -> List<C>) {
        savedStateRegistry.registerSavedStateProvider(key) {
            Bundle().apply {
                putConfigurations(KEY_CONFIGURATIONS, supplier())
            }
        }
    }

    protected abstract fun Bundle.putConfigurations(key: String, configurations: List<C>)

    override fun unregister() {
        savedStateRegistry.unregisterSavedStateProvider(key)
    }

    private companion object {
        private const val KEY_CONFIGURATIONS = "CONFIGURATIONS"
    }
}
