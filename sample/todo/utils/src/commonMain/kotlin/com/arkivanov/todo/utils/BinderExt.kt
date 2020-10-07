package com.arkivanov.todo.utils

import com.arkivanov.decompose.lifecycle.Lifecycle
import com.arkivanov.mvikotlin.core.binder.Binder
import com.arkivanov.mvikotlin.core.binder.BinderLifecycleMode
import com.arkivanov.mvikotlin.core.binder.attachTo
import com.arkivanov.mvikotlin.extensions.reaktive.BindingsBuilder
import com.arkivanov.mvikotlin.extensions.reaktive.bind

fun bind(lifecycle: Lifecycle, mode: BinderLifecycleMode, builder: BindingsBuilder.() -> Unit): Binder =
    bind(builder)
        .attachTo(lifecycle.asMviLifecycle(), mode)
