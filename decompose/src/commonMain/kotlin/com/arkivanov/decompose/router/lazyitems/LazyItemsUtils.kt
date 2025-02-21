package com.arkivanov.decompose.router.lazyitems

import com.arkivanov.decompose.router.children.ChildNavState.Status
import com.arkivanov.decompose.router.lazyitems.LazyItems.ActiveLifecycleState

internal fun ActiveLifecycleState.toStatus(): Status =
    when (this) {
        ActiveLifecycleState.CREATED -> Status.CREATED
        ActiveLifecycleState.STARTED -> Status.STARTED
        ActiveLifecycleState.RESUMED -> Status.RESUMED
    }
