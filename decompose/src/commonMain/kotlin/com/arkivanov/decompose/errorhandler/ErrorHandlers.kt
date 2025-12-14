package com.arkivanov.decompose.errorhandler

import com.arkivanov.decompose.DecomposeSettings

/**
 * Called when a non-fatal error has occurred in Decompose.
 */
@Deprecated(message = "Please use DecomposeSettings#onDecomposeError")
var onDecomposeError: (Exception) -> Unit
    get() = DecomposeSettings.settings.onDecomposeError
    set(value) {
        DecomposeSettings.update { it.copy(onDecomposeError = value) }
    }
