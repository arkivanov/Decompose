package com.arkivanov.sample.shared.counters

import com.arkivanov.decompose.JetpackComponentContext
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.PreviewComponentContext
import com.arkivanov.sample.shared.counters.counter.CounterComponent
import com.arkivanov.sample.shared.counters.counter.PreviewCounterComponent

class PreviewCountersComponent : CountersComponent, JetpackComponentContext by PreviewComponentContext {

    override val stack: Value<ChildStack<*, CounterComponent>> =
        MutableValue(
            ChildStack(
                configuration = Unit,
                instance = PreviewCounterComponent(),
            )
        )

    override fun onBackClicked() {}
    override fun onBackClicked(toIndex: Int) {}
}
