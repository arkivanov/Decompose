package com.arkivanov.sample.counter.shared.inner

import com.arkivanov.decompose.RouterState
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.counter.shared.counter.Counter

interface CounterInner {

    val counter: Counter
    val leftRouterState: Value<RouterState<*, Child>>
    val rightRouterState: Value<RouterState<*, Child>>

    fun onNextLeftChild()
    fun onPrevLeftChild()
    fun onNextRightChild()
    fun onPrevRightChild()

    class Child(
        val counter: Counter,
        val isBackEnabled: Boolean
    )
}
