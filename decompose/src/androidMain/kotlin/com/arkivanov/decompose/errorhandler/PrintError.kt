package com.arkivanov.decompose.errorhandler

import android.util.Log

private const val LOG_TAG = "Decompose"
private var isLogCatEnabled = true

internal actual fun printError(exception: Exception) {
    if (isLogCatEnabled) {
        try {
            Log.e(LOG_TAG, exception.message ?: "An occurred in Decompose", exception)
        } catch (e: Exception) {
            isLogCatEnabled = false
        }
    }
}
