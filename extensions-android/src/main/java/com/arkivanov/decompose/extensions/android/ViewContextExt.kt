package com.arkivanov.decompose.extensions.android

import android.view.View
import android.view.ViewGroup

fun ViewContext.child(container: ViewGroup, factory: ViewContext.() -> View) {
    val childContext =
        DefaultViewContext(
            parent = container,
            lifecycle = lifecycle
        )

    container.addView(childContext.factory())
}
