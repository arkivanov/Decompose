package com.arkivanov.sample.shared.counters

import androidx.navigationevent.NavigationEventDispatcherOwner
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.counters.counter.CounterComponent

interface CountersComponent : NavigationEventDispatcherOwner {

    val stack: Value<ChildStack<*, CounterComponent>>

    fun onBackClicked()
    fun onBackClicked(toIndex: Int)
}
