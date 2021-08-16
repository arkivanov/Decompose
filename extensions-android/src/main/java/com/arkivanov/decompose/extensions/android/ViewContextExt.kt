package com.arkivanov.decompose.extensions.android

import android.content.Context
import android.content.res.Resources
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.arkivanov.decompose.ExperimentalDecomposeApi

@ExperimentalDecomposeApi
val ViewContext.context: Context
    get() = parent.context

@ExperimentalDecomposeApi
val ViewContext.resources: Resources
    get() = parent.resources

@ExperimentalDecomposeApi
val ViewContext.layoutInflater: LayoutInflater
    get() = LayoutInflater.from(context)

@ExperimentalDecomposeApi
fun ViewContext.child(container: ViewGroup, inflater: ViewContext.() -> View) {
    val childContext =
        DefaultViewContext(
            parent = container,
            lifecycle = lifecycle
        )

    container.addView(childContext.inflater())
}
