package com.arkivanov.sample.counter.shared.root

import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.counter.shared.counter.Counter
import com.arkivanov.sample.counter.shared.inner.CounterInnerContainer

interface CounterRootContainer {

    val model: Model

    interface Model : Events {
        val counter: Counter.Model
        val child: Value<Child>

        class Child(
            val inner: CounterInnerContainer.Model,
            val isBackEnabled: Boolean
        )
    }

    interface Events {
        fun onNextChild()
        fun onPrevChild()
    }
}
