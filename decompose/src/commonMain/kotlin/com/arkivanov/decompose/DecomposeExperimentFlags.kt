package com.arkivanov.decompose

@ExperimentalDecomposeApi
object DecomposeExperimentFlags {

    @Deprecated(
        message = "The feature has been promoted to stable. Please use DecomposeParameters.duplicateConfigurationsEnabled instead.",
        replaceWith = ReplaceWith(
            "DecomposeParameters.duplicateConfigurationsEnabled",
            "com.arkivanov.decompose.DecomposeParameters",
        ),
    )
    var duplicateConfigurationsEnabled: Boolean by DecomposeParameters::duplicateConfigurationsEnabled
}
