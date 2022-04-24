package com.arkivanov.sample.masterdetail.app

import mui.system.PropsWithSx

external interface RProps<T : Any> : PropsWithSx {
    var component: T
}
