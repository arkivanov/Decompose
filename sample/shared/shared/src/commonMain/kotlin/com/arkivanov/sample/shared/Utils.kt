package com.arkivanov.sample.shared

import com.arkivanov.decompose.value.Value
import com.badoo.reaktive.base.setCancellable
import com.badoo.reaktive.observable.Observable
import com.badoo.reaktive.observable.observable
import com.badoo.reaktive.subject.behavior.BehaviorObservable

internal fun <T : Any> Value<T>.asObservable(): BehaviorObservable<T> =
    object : BehaviorObservable<T>, Observable<T> by asObservableInternal() {
        override val value: T get() = this@asObservable.value
    }

private fun <T : Any> Value<T>.asObservableInternal(): Observable<T> =
    observable { emitter ->
        val cancellation = subscribe(emitter::onNext)
        emitter.setCancellable(cancellation::cancel)
    }
