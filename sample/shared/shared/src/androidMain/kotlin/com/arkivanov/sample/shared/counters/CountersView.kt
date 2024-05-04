package com.arkivanov.sample.shared.counters

import android.view.View
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.android.ViewContext
import com.arkivanov.decompose.extensions.android.layoutInflater
import com.arkivanov.decompose.extensions.android.stack.StackRouterView
import com.arkivanov.sample.shared.R
import com.arkivanov.sample.shared.counters.counter.CounterView
import com.arkivanov.sample.shared.viewSwitcher

@ExperimentalDecomposeApi
@Suppress("FunctionName") // Factory function
internal fun ViewContext.CountersView(component: CountersComponent): View {
    val layout = layoutInflater.inflate(R.layout.counters, parent, false)
    val router: StackRouterView = layout.findViewById(R.id.router)

    router.children(component.stack, lifecycle, viewSwitcher(viewFactory = ::CounterView))

    return layout
}
