package com.arkivanov.todo.utils

import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.ValueObserver
import com.arkivanov.mvikotlin.core.store.Store
import com.arkivanov.mvikotlin.rx.Disposable
import com.badoo.reaktive.utils.atomic.AtomicReference
import com.badoo.reaktive.utils.atomic.getAndUpdate
import com.badoo.reaktive.utils.atomic.update

fun <T : Any> Store<*, T, *>.asValue(): Value<T> =
    object : Value<T>() {
        override val value: T get() = state
        private var disposables = AtomicReference(emptyMap<ValueObserver<T>, Disposable>())

        override fun subscribe(observer: ValueObserver<T>) {
            val disposable = states(com.arkivanov.mvikotlin.rx.observer(onNext = observer))
            this.disposables.update { it + (observer to disposable) }
        }

        override fun unsubscribe(observer: ValueObserver<T>) {
            disposables
                .getAndUpdate { it - observer }[observer]
                ?.dispose()
        }
    }
