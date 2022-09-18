package com.arkivanov.decompose.value

import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.subscribe
import kotlin.reflect.KProperty

operator fun <T> Value<T>.getValue(thisRef: Any?, property: KProperty<*>): T = value

fun <T> Value<T>.observe(
    lifecycle: Lifecycle,
    mode: ObserveLifecycleMode = ObserveLifecycleMode.START_STOP,
    observer: (T) -> Unit,
) {
    when (mode) {
        ObserveLifecycleMode.CREATE_DESTROY ->
            lifecycle.subscribe(
                onCreate = { subscribe(observer) },
                onDestroy = { unsubscribe(observer) }
            )

        ObserveLifecycleMode.START_STOP ->
            lifecycle.subscribe(
                onStart = { subscribe(observer) },
                onStop = { unsubscribe(observer) }
            )

        ObserveLifecycleMode.RESUME_PAUSE ->
            lifecycle.subscribe(
                onResume = { subscribe(observer) },
                onPause = { unsubscribe(observer) }
            )
    }
}

enum class ObserveLifecycleMode {
    CREATE_DESTROY,
    START_STOP,
    RESUME_PAUSE,
}
