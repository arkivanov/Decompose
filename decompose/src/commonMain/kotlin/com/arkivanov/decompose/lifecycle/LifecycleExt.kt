package com.arkivanov.decompose.lifecycle

inline fun Lifecycle.subscribe(
    crossinline onCreate: () -> Unit = {},
    crossinline onStart: () -> Unit = {},
    crossinline onResume: () -> Unit = {},
    crossinline onPause: () -> Unit = {},
    crossinline onStop: () -> Unit = {},
    crossinline onDestroy: () -> Unit = {},
) {
    subscribe(
        object : DefaultLifecycleCallbacks {
            override fun onCreate() {
                onCreate.invoke()
            }

            override fun onStart() {
                onStart.invoke()
            }

            override fun onResume() {
                onResume.invoke()
            }

            override fun onPause() {
                onPause.invoke()
            }

            override fun onStop() {
                onStop.invoke()
            }

            override fun onDestroy() {
                onDestroy.invoke()
            }
        }
    )
}

inline fun Lifecycle.doOnCreate(crossinline block: () -> Unit) {
    subscribe(onCreate = block)
}

inline fun Lifecycle.doOnStart(crossinline block: () -> Unit) {
    subscribe(onStart = block)
}

inline fun Lifecycle.doOnResume(crossinline block: () -> Unit) {
    subscribe(onResume = block)
}

inline fun Lifecycle.doOnPause(crossinline block: () -> Unit) {
    subscribe(onPause = block)
}

inline fun Lifecycle.doOnStop(crossinline block: () -> Unit) {
    subscribe(onStop = block)
}

inline fun Lifecycle.doOnDestroy(crossinline block: () -> Unit) {
    subscribe(onDestroy = block)
}
