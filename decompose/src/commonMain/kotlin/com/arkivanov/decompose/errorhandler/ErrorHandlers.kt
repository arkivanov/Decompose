package com.arkivanov.decompose.errorhandler

/**
 * Called when a non-fatal error has occurred in Decompose.
 */
var onDecomposeError: (Exception) -> Unit = ::printError
