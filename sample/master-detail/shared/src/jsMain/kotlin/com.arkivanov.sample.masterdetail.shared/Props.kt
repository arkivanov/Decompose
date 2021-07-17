package com.arkivanov.sample.masterdetail.shared

import react.RProps

external interface Props<T : Any> : RProps {
    var component: T
}
