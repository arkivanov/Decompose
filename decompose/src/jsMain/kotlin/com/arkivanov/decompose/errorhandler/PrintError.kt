package com.arkivanov.decompose.errorhandler

internal actual fun printError(exception: Exception) {
    exception.printStackTrace()
}
