package com.arkivanov.decompose

private val firstThreadInfo: ThreadInfo by lazy(::ThreadInfo)

internal actual fun assertMainThread() {
    val threadInfo = firstThreadInfo
    val thread = Thread.currentThread()
    check(thread.id == threadInfo.id) {
        "Access from different threads is detected, must be on the main thread only." +
            "Current thread: ${thread.name}. First thread: ${threadInfo.name}."
    }
}

private class ThreadInfo {
    val id: Long = Thread.currentThread().id
    val name: String = Thread.currentThread().name
}
