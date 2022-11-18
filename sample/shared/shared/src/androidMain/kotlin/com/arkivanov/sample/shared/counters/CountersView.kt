package com.arkivanov.sample.shared.counters

import android.content.res.Configuration
import android.view.View
import android.view.ViewGroup
import android.widget.LinearLayout
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.android.ViewContext
import com.arkivanov.decompose.extensions.android.layoutInflater
import com.arkivanov.decompose.extensions.android.resources
import com.arkivanov.decompose.extensions.android.stack.StackRouterView
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.sample.shared.R
import com.arkivanov.sample.shared.beginDelayedSlideTransition
import com.arkivanov.sample.shared.counters.counter.CounterComponent
import com.arkivanov.sample.shared.counters.counter.CounterView

@ExperimentalDecomposeApi
@Suppress("FunctionName") // Factory function
internal fun ViewContext.CountersView(component: CountersComponent): View {
    val layout = layoutInflater.inflate(R.layout.counters, parent, false) as LinearLayout
    val firstRouter: StackRouterView = layout.findViewById(R.id.router_first)
    val secondRouter: StackRouterView = layout.findViewById(R.id.router_second)

    layout.orientation =
        if (resources.configuration.orientation == Configuration.ORIENTATION_LANDSCAPE) {
            LinearLayout.HORIZONTAL
        } else {
            LinearLayout.VERTICAL
        }

    firstRouter.children(component.firstChildStack, lifecycle, ViewContext::switchViews)
    secondRouter.children(component.secondChildStack, lifecycle, ViewContext::switchViews)

    return layout
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
        parent.beginDelayedSlideTransition(
            newView = newView,
            oldView = oldView,
            isForward = newStack.items.size > oldStack.items.size,
        )
    }

    parent.removeAllViews()
    parent.addView(newView)
}
