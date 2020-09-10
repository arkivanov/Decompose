package com.arkivanov.sample.counter.shared.counter

import com.arkivanov.decompose.ComponentContext

@Suppress("FunctionName")
fun Counter(componentContext: ComponentContext, index: Int): Counter =
    CounterImpl(componentContext, index = index)
