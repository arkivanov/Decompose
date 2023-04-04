package com.arkivanov.decompose.mainthread

internal class NotOnMainThreadException(currentThreadName: String?) : Exception(
    "Expected to be called on the main thread, but was ${currentThreadName ?: "unknown"}"
)
