package com.arkivanov.sample.counter.app

import mui.system.PropsWithSx

external interface RProps<T : Any> : PropsWithSx {
    var component: T
}
