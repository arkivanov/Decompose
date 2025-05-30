package com.arkivanov.decompose.value

import com.arkivanov.decompose.Cancellation
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.subscribe
import kotlin.reflect.KProperty

@Deprecated(
    "Using this operator overload is known to be error prone. " +
        "In particular, it can be accidentally used in Compose to observe the value, which will not work as expected. " +
        "Instead, you can write: `val stack by fooComponent::stack`. " +
        "Alternatively, feel free to copy it into your project if you want to continue using it. " +
        "See: https://github.com/arkivanov/Decompose/issues/871",
)
operator fun <T : Any> Value<T>.getValue(thisRef: Any?, property: KProperty<*>): T = value

fun <T : Any> Value<T>.subscribe(
    lifecycle: Lifecycle,
    mode: ObserveLifecycleMode = ObserveLifecycleMode.START_STOP,
    observer: (T) -> Unit,
) {
    var cancellation: Cancellation? = null

    when (mode) {
        ObserveLifecycleMode.CREATE_DESTROY ->
            lifecycle.subscribe(
                onCreate = { cancellation = subscribe(observer) },
                onDestroy = { cancellation?.cancel() },
            )

        ObserveLifecycleMode.START_STOP ->
            lifecycle.subscribe(
                onStart = { cancellation = subscribe(observer) },
                onStop = { cancellation?.cancel() },
            )

        ObserveLifecycleMode.RESUME_PAUSE ->
            lifecycle.subscribe(
                onResume = { cancellation = subscribe(observer) },
                onPause = { cancellation?.cancel() },
            )
    }.let {}
}

enum class ObserveLifecycleMode {
    CREATE_DESTROY,
    START_STOP,
    RESUME_PAUSE
}
