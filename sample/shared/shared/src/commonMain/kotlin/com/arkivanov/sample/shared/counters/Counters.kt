package com.arkivanov.sample.shared.counters

import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.counters.counter.Counter

interface Counters {

    val firstChildStack: Value<ChildStack<*, Counter>>
    val secondChildStack: Value<ChildStack<*, Counter>>
}
