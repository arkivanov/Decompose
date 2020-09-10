package com.arkivanov.sample.counter.shared.inner

import com.arkivanov.decompose.Component
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.counter.shared.counter.Counter
import com.arkivanov.sample.counter.shared.inner.CounterInnerContainer.Model

interface CounterInnerContainer : Component<Model> {

    interface Model : Events {
        val counter: Counter.Model
        val leftChild: Value<Child>
        val rightChild: Value<Child>

        class Child(
            val counter: Counter.Model,
            val isBackEnabled: Boolean
        )
    }

    interface Events {
        fun onNextLeftChild()
        fun onPrevLeftChild()
        fun onNextRightChild()
        fun onPrevRightChild()
    }
}
