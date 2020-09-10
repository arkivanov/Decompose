package com.arkivanov.sample.counter.shared.root

import com.arkivanov.decompose.ComponentContext

@Suppress("FunctionName")
fun CounterRootContainer(componentContext: ComponentContext): CounterRootContainer =
    CounterRootContainerImpl(componentContext)
