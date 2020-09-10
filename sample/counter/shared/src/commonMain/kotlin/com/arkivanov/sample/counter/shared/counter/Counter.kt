package com.arkivanov.sample.counter.shared.counter

import com.arkivanov.decompose.Component
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.counter.shared.counter.Counter.Model

interface Counter : Component<Model> {

    interface Model {
        val data: Value<Data>
    }

    class Data(
        val text: String
    )
}
