package com.arkivanov.decompose.extensions.android

import android.content.Context
import android.content.res.Resources
import android.view.LayoutInflater
import android.view.ViewGroup
import com.arkivanov.decompose.lifecycle.Lifecycle

interface ViewContext {

    val parent: ViewGroup
    val lifecycle: Lifecycle
}

val ViewContext.context: Context get() = parent.context

val ViewContext.resources: Resources get() = parent.resources

val ViewContext.layoutInflater: LayoutInflater get() = LayoutInflater.from(context)
