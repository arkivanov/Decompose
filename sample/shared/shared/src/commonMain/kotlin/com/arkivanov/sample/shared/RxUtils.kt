package com.arkivanov.sample.shared

import androidx.lifecycle.LifecycleOwner
import com.arkivanov.decompose.lifecycle.doOnDestroy
import com.badoo.reaktive.disposable.scope.DisposableScope

fun LifecycleOwner.disposableScope(): DisposableScope =
    DisposableScope().also { scope ->
        doOnDestroy(scope::dispose)
    }
