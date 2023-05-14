package com.arkivanov.decompose.router

import com.arkivanov.essenty.instancekeeper.InstanceKeeper

class TestInstance(
    var onDestroyed: () -> Unit = {},
) : InstanceKeeper.Instance {

    var isDestroyed: Boolean = false

    override fun onDestroy() {
        isDestroyed = true
        onDestroyed()
    }
}
