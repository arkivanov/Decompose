package com.arkivanov.sample.shared.counters

import com.arkivanov.decompose.router.RouterState
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.counters.counter.Counter

interface Counters {

    val firstRouterState: Value<RouterState<*, Counter>>
    val secondRouterState: Value<RouterState<*, Counter>>
}
