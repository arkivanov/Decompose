package com.arkivanov.todo.utils

import com.arkivanov.decompose.lifecycle.Lifecycle
import com.arkivanov.mvikotlin.core.lifecycle.Lifecycle as MviLifecycle

fun Lifecycle.asMviLifecycle(): MviLifecycle =
    object : MviLifecycle {
        private val callbacksMap = HashMap<MviLifecycle.Callbacks, Lifecycle.Callbacks>()

        override val state: MviLifecycle.State get() = this@asMviLifecycle.state.toMviLifecycleState()

        override fun subscribe(callbacks: MviLifecycle.Callbacks) {
            check(callbacks !in callbacksMap)

            val cb = callbacks.toLifecycleCallbacks()
            callbacksMap[callbacks] = cb
            this@asMviLifecycle.subscribe(cb)
        }

        override fun unsubscribe(callbacks: MviLifecycle.Callbacks) {
            val cb = callbacksMap.remove(callbacks)
            check(cb != null)

            this@asMviLifecycle.unsubscribe(cb)
        }
    }

private fun Lifecycle.State.toMviLifecycleState(): MviLifecycle.State =
    when (this) {
        Lifecycle.State.DESTROYED -> MviLifecycle.State.DESTROYED
        Lifecycle.State.INITIALIZED -> MviLifecycle.State.INITIALIZED
        Lifecycle.State.CREATED -> MviLifecycle.State.CREATED
        Lifecycle.State.STARTED -> MviLifecycle.State.STARTED
        Lifecycle.State.RESUMED -> MviLifecycle.State.RESUMED
    }

private fun MviLifecycle.Callbacks.toLifecycleCallbacks(): Lifecycle.Callbacks =
    object : Lifecycle.Callbacks {
        override fun onCreate() {
            this@toLifecycleCallbacks.onCreate()
        }

        override fun onStart() {
            this@toLifecycleCallbacks.onStart()
        }

        override fun onResume() {
            this@toLifecycleCallbacks.onResume()
        }

        override fun onPause() {
            this@toLifecycleCallbacks.onPause()
        }

        override fun onStop() {
            this@toLifecycleCallbacks.onStop()
        }

        override fun onDestroy() {
            this@toLifecycleCallbacks.onDestroy()
        }
    }
