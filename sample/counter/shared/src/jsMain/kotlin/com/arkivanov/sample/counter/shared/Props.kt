package com.arkivanov.sample.counter.shared

import react.RProps

external interface Props<T : Any> : RProps {
    var component: T
}
