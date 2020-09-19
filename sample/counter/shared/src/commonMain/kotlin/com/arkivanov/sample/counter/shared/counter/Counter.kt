package com.arkivanov.sample.counter.shared.counter

import com.arkivanov.decompose.value.Value

interface Counter {

    val model: Model

    interface Model {
        val data: Value<Data>
    }

    class Data(
        val text: String
    )
}
