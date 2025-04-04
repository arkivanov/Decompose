package com.arkivanov.decompose.router.children

import com.arkivanov.essenty.lifecycle.Lifecycle

internal fun <C : Any> ChildController<C, *, *>.isActive(configuration: C): Boolean =
    getLifecycleState(configuration)?.takeIf { it > Lifecycle.State.DESTROYED } != null
