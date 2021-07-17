package com.arkivanov.decompose.value

import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.subscribe
import kotlin.reflect.KProperty

operator fun <T : Any> Value<T>.getValue(thisRef: Any?, property: KProperty<*>): T = value

fun <T : Any> Value<T>.observe(
    lifecycle: Lifecycle,
    mode: ObserveLifecycleMode = ObserveLifecycleMode.START_STOP,
    observer: ValueObserver<T>
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
    }.let {}
}

enum class ObserveLifecycleMode {
    CREATE_DESTROY,
    START_STOP,
    RESUME_PAUSE
}
