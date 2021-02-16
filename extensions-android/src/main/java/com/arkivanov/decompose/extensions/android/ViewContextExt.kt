package com.arkivanov.decompose.extensions.android

import android.view.View
import android.view.ViewGroup
import com.arkivanov.decompose.ExperimentalDecomposeApi

@ExperimentalDecomposeApi
fun ViewContext.child(container: ViewGroup, factory: ViewContext.() -> View) {
    val childContext =
        DefaultViewContext(
            parent = container,
            lifecycle = lifecycle
        )

    container.addView(childContext.factory())
}
