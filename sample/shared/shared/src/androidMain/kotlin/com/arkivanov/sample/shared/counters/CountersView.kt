package com.arkivanov.sample.shared.counters

import android.view.View
import android.view.ViewGroup
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.android.ViewContext
import com.arkivanov.decompose.extensions.android.layoutInflater
import com.arkivanov.decompose.extensions.android.stack.StackRouterView
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.sample.shared.R
import com.arkivanov.sample.shared.beginDelayedSlideFadeTransition
import com.arkivanov.sample.shared.counters.counter.CounterComponent
import com.arkivanov.sample.shared.counters.counter.CounterView

@ExperimentalDecomposeApi
@Suppress("FunctionName") // Factory function
internal fun ViewContext.CountersView(component: CountersComponent): View {
    val router = layoutInflater.inflate(R.layout.counters, parent, false) as StackRouterView
    router.children(component.childStack, lifecycle, ViewContext::switchViews)

    return router
}

@ExperimentalDecomposeApi
private fun ViewContext.switchViews(
    parent: ViewGroup,
    newStack: ChildStack<*, CounterComponent>,
    oldStack: ChildStack<*, CounterComponent>?,
) {
    val oldView: View? = parent.getChildAt(0)
    val newView: View = CounterView(newStack.active.instance)

    if ((oldView != null) && (oldStack != null)) {
        parent.beginDelayedSlideFadeTransition(
            newView = newView,
            oldView = oldView,
            isForward = newStack.items.size > oldStack.items.size,
        )
    }

    parent.removeAllViews()
    parent.addView(newView)
}
