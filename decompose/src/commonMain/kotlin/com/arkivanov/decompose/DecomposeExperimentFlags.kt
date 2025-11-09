package com.arkivanov.decompose

@ExperimentalDecomposeApi
object DecomposeExperimentFlags {

    @Deprecated(
        message = "The feature has been promoted to stable. Please use DecomposeSettings.duplicateConfigurationsEnabled instead.",
    )
    var duplicateConfigurationsEnabled: Boolean
        get() = DecomposeSettings.settings.duplicateConfigurationsEnabled
        set(value) {
            DecomposeSettings.settings = DecomposeSettings.settings.copy(duplicateConfigurationsEnabled = value)
        }
}
