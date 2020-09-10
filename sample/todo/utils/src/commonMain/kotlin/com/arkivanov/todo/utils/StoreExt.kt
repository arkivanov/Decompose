package com.arkivanov.todo.utils

import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.ValueObserver
import com.arkivanov.mvikotlin.core.store.Store
import com.arkivanov.mvikotlin.rx.Disposable
import com.arkivanov.mvikotlin.rx.observer

fun <T : Any> Store<*, T, *>.asValue(): Value<T> =
    object : Value<T>() {
        override val value: T get() = state

        private val disposables = HashMap<ValueObserver<*>, Disposable>()

        override fun subscribe(observer: ValueObserver<T>) {
            disposables[observer] = states(observer { observer(it) })
        }

        override fun unsubscribe(observer: ValueObserver<T>) {
            disposables
                .remove(observer)
                ?.dispose()
        }
    }
