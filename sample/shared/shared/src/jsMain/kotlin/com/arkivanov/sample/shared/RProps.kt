package com.arkivanov.sample.shared

import react.Props

external interface RProps<T : Any> : Props {
    var component: T
}
