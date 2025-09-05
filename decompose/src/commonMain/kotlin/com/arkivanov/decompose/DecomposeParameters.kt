package com.arkivanov.decompose

@ExperimentalDecomposeApi
object DecomposeParameters {

    /**
     * Controls whether duplicate configurations are enabled or not. Default value is `false`.
     * Excludes the `Child Items` navigation model, which doesn't support duplicate configurations.
     *
     * Please note that it's just the parameter API is experimental, the feature itself is stable.
     */
    var duplicateConfigurationsEnabled: Boolean = false
}
