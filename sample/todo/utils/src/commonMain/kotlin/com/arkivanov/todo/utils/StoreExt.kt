package com.arkivanov.todo.utils

import com.arkivanov.decompose.lifecycle.Lifecycle
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.ValueObserver
import com.arkivanov.mvikotlin.core.binder.BinderLifecycleMode
import com.arkivanov.mvikotlin.core.store.Store
import com.arkivanov.mvikotlin.extensions.reaktive.states
import com.badoo.reaktive.disposable.Disposable
import com.badoo.reaktive.observable.subscribe
import com.badoo.reaktive.subject.publish.PublishSubject
import com.badoo.reaktive.utils.atomic.AtomicReference
import com.badoo.reaktive.utils.atomic.getAndUpdate
import com.badoo.reaktive.utils.atomic.update

fun <T : Any> Store<*, T, *>.asValue(lifecycle: Lifecycle, mode: BinderLifecycleMode = BinderLifecycleMode.START_STOP): Value<T> =
    object : Value<T>() {
        private val subject = PublishSubject<T>()
        private val disposables = AtomicReference<Map<ValueObserver<*>, Disposable>>(emptyMap())
        override val value: T get() = state

        init {
            bind(lifecycle, mode) {
                this@asValue.states bindTo subject
            }
        }

        override fun subscribe(observer: ValueObserver<T>) {
            val disposable = subject.subscribe(onNext = observer)
            this.disposables.update { it + (observer to disposable) }
        }

        override fun unsubscribe(observer: ValueObserver<T>) {
            disposables
                .getAndUpdate { it - observer }[observer]
                ?.dispose()
        }
    }
