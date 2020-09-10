package com.arkivanov.sample.counter.shared.inner

import com.arkivanov.decompose.ComponentContext

@Suppress("FunctionName")
fun CounterInnerContainer(componentContext: ComponentContext, index: Int): CounterInnerContainer =
    CounterInnerContainerImpl(componentContext, index = index)
