package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.router.items.ChildConfiguration
import com.arkivanov.essenty.lifecycle.Lifecycle

internal fun <C : ChildConfiguration> ChildController<C, *, *>.isActive(configuration: C): Boolean =
    getLifecycleState(configuration)?.takeIf { it > Lifecycle.State.DESTROYED } != null
