package com.arkivanov.todo.utils

import com.badoo.reaktive.base.Consumer

@Suppress("FunctionName")
inline fun <T> Consumer(crossinline onNext: (T) -> Unit): Consumer<T> =
    object : Consumer<T> {
        override fun onNext(value: T) {
            onNext.invoke(value)
        }
    }