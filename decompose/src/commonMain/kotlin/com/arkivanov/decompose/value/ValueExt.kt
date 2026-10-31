package com.arkivanov.decompose.value

import androidx.lifecycle.Lifecycle
import com.arkivanov.decompose.Cancellation
import com.arkivanov.decompose.lifecycle.addObserver

/**
 * Subscribes [observer] to this [Value] while [lifecycle] is within the state range defined by [mode].
 * The current value is emitted synchronously when the subscription becomes active.
 *
 * @param lifecycle a [Lifecycle] that controls the subscription.
 * @param mode determines when the subscription is active. Default value is [ObserveLifecycleMode.START_STOP].
 * @param observer a callback that receives the current value when the subscription becomes active,
 * and every new value while it stays active.
 */
fun <T : Any> Value<T>.subscribe(
    lifecycle: Lifecycle,
    mode: ObserveLifecycleMode = ObserveLifecycleMode.START_STOP,
    observer: (T) -> Unit,
) {
    var cancellation: Cancellation? = null

    when (mode) {
        ObserveLifecycleMode.CREATE_DESTROY ->
            lifecycle.addObserver(
                onCreate = { cancellation = subscribe(observer) },
                onDestroy = { cancellation?.cancel() },
            )

        ObserveLifecycleMode.START_STOP ->
            lifecycle.addObserver(
                onStart = { cancellation = subscribe(observer) },
                onStop = { cancellation?.cancel() },
            )

        ObserveLifecycleMode.RESUME_PAUSE ->
            lifecycle.addObserver(
                onResume = { cancellation = subscribe(observer) },
                onPause = { cancellation?.cancel() },
            )
    }.let {}
}

/**
 * Determines the [Lifecycle] state range during which a [Value] subscription is active.
 *
 * @see Value.subscribe
 */
enum class ObserveLifecycleMode {
    /** Active from [Lifecycle.Event.ON_CREATE] until [Lifecycle.Event.ON_DESTROY]. */
    CREATE_DESTROY,

    /** Active from [Lifecycle.Event.ON_START] until [Lifecycle.Event.ON_STOP]. */
    START_STOP,

    /** Active from [Lifecycle.Event.ON_RESUME] until [Lifecycle.Event.ON_PAUSE]. */
    RESUME_PAUSE,
}
