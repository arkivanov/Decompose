package com.arkivanov.decompose

import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.LifecycleRegistry

internal class LifecycleHolder : LifecycleOwner {

    val registry = LifecycleRegistry(this)

    override fun getLifecycle(): Lifecycle = registry
}
