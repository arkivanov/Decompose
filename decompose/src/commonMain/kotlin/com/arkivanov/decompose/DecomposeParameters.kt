package com.arkivanov.decompose

@ExperimentalDecomposeApi
object DecomposeParameters {

    /**
     * Controls whether duplicate configurations are enabled or not. Default value is `true`.
     * Excludes the `Child Items` navigation model, which doesn't support duplicate configurations.
     */
    var duplicateConfigurationsEnabled: Boolean = true
}
