package com.arkivanov.decompose.errorhandler

import com.arkivanov.decompose.ExperimentalDecomposeApi

/**
 * Called when a non-fatal error has occurred in Decompose.
 */
@ExperimentalDecomposeApi
var onDecomposeError: (Exception) -> Unit = ::printError
