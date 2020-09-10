package com.arkivanov.decompose.lifecycle

interface Lifecycle {

    val state: State

    fun subscribe(callbacks: Callbacks)

    fun unsubscribe(callbacks: Callbacks)

    enum class State {
        DESTROYED,
        INITIALIZED,
        CREATED,
        STARTED,
        RESUMED
    }

    interface Callbacks {
        fun onCreate()

        fun onStart()

        fun onResume()

        fun onPause()

        fun onStop()

        fun onDestroy()
    }
}
