package com.arkivanov.sample.counter.shared.root

import com.arkivanov.decompose.router.RouterState
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.counter.shared.counter.Counter
import com.arkivanov.sample.counter.shared.inner.CounterInner

interface CounterRoot {

    val counter: Counter
    val routerState: Value<RouterState<*, Child>>

    fun onNextChild()
    fun onPrevChild()

    class Child(
        val inner: CounterInner,
        val isBackEnabled: Boolean
    )
}
