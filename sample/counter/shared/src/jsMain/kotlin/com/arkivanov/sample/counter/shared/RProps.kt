package com.arkivanov.sample.counter.shared

import mui.system.PropsWithSx

external interface RProps<T : Any> : PropsWithSx {
    var component: T
}
