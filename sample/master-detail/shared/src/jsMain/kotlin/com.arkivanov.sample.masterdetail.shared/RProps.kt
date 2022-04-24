package com.arkivanov.sample.masterdetail.shared

import mui.system.PropsWithSx

external interface RProps<T : Any> : PropsWithSx {
    var component: T
}
