package com.arkivanov.sample.shared.multipane.utils

import com.arkivanov.essenty.lifecycle.LifecycleOwner
import com.arkivanov.essenty.lifecycle.doOnDestroy
import com.badoo.reaktive.disposable.scope.DisposableScope

internal fun LifecycleOwner.disposableScope(block: DisposableScope.() -> Unit = {}): DisposableScope {
    val scope = DisposableScope()
    scope.block()
    lifecycle.doOnDestroy(scope::dispose)

    return scope
}
