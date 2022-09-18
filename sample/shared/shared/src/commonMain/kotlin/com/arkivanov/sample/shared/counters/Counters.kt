package com.arkivanov.sample.shared.counters

import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.value.ReqValue
import com.arkivanov.sample.shared.counters.counter.Counter

interface Counters {

    val firstChildStack: ReqValue<ChildStack<*, Counter>>
    val secondChildStack: ReqValue<ChildStack<*, Counter>>
}
