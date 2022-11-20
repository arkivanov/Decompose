package com.arkivanov.sample.shared.counters

import com.arkivanov.sample.shared.RProps
import com.arkivanov.sample.shared.componentContent
import com.arkivanov.sample.shared.counters.counter.CounterContent
import com.arkivanov.sample.shared.useAsState
import react.FC

val CountersContent: FC<RProps<CountersComponent>> = FC { props ->
    val childStack by props.component.childStack.useAsState()

    componentContent(component = childStack.active.instance, content = CounterContent)
}
