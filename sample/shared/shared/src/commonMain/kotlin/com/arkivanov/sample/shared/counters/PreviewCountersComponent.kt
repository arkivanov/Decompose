package com.arkivanov.sample.shared.counters

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.counters.counter.CounterComponent
import com.arkivanov.sample.shared.counters.counter.PreviewCounterComponent

class PreviewCountersComponent : CountersComponent, ComponentContext by DefaultComponentContext() {

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
