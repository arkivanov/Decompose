package com.arkivanov.sample.shared.counters

import com.arkivanov.sample.shared.AppBar
import com.arkivanov.sample.shared.RProps
import com.arkivanov.sample.shared.Scaffold
import com.arkivanov.sample.shared.componentContent
import com.arkivanov.sample.shared.counters.counter.CounterContent
import com.arkivanov.sample.shared.useAsState
import react.FC

val CountersContent: FC<RProps<CountersComponent>> = FC { props ->
    val stack by props.component.stack.useAsState()

    Scaffold {
        appBar = AppBar(title = "Counters")

        componentContent(component = stack.active.instance, content = CounterContent)
    }
}
