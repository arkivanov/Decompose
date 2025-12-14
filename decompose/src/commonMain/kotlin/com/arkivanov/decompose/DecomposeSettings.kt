package com.arkivanov.decompose

import kotlin.concurrent.Volatile

/**
 * Global Decompose settings. Use [DecomposeSettings.settings] property to change the settings.
 *
 * @param duplicateConfigurationsEnabled controls whether duplicate configurations are enabled or not. Default value is `false`.
 * Excludes the `Child Items` navigation model, which doesn't support duplicate configurations.
 * @param mainThreadCheckEnabled controls whether main thread checks are enabled or not.
 * If enabled, Decompose will log an error if it detects access from a background thread when it was expected from the main thread.
 * Default value is `true`.
 */
data class DecomposeSettings(
    val duplicateConfigurationsEnabled: Boolean = false,
    val mainThreadCheckEnabled: Boolean = true,
) {

    companion object {
        private val lock = Lock()

        @Volatile
        var settings: DecomposeSettings = DecomposeSettings()

        /**
         * Atomically updates the global [DecomposeSettings].
         */
        @ExperimentalDecomposeApi
        fun update(function: (DecomposeSettings) -> DecomposeSettings) {
            lock.synchronized {
                settings = function(settings)
            }
        }
    }
}
