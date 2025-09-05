package com.arkivanov.decompose

import kotlin.concurrent.Volatile

/**
 * Global Decompose settings. Use [DecomposeSettings.settings] property to change the settings.
 *
 * @param duplicateConfigurationsEnabled controls whether duplicate configurations are enabled or not. Default value is `false`.
 * Excludes the `Child Items` navigation model, which doesn't support duplicate configurations.
 */
data class DecomposeSettings(
    val duplicateConfigurationsEnabled: Boolean = false,
) {

    companion object {
        @Volatile
        var settings: DecomposeSettings = DecomposeSettings()
    }
}
