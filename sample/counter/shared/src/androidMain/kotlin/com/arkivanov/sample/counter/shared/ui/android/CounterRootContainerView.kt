package com.arkivanov.sample.counter.shared.ui.android

import android.view.View
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.android.RouterView
import com.arkivanov.decompose.extensions.android.ViewContext
import com.arkivanov.decompose.extensions.android.child
import com.arkivanov.decompose.extensions.android.layoutInflater
import com.arkivanov.sample.counter.shared.R
import com.arkivanov.sample.counter.shared.root.CounterRoot

@ExperimentalDecomposeApi
@Suppress("FunctionName") // Factory function
fun ViewContext.CounterRootView(counterRoot: CounterRoot): View {
    val layout = layoutInflater.inflate(R.layout.counter_root, parent, false)
    val nextButton: View = layout.findViewById(R.id.button_next)
    val router: RouterView = layout.findViewById(R.id.router)

    nextButton.setOnClickListener { counterRoot.onNextChild() }

    child(layout.findViewById(R.id.container_counter)) {
        CounterView(counterRoot.counter)
    }

    router.children(counterRoot.routerState, lifecycle) { parent, child, _ ->
        parent.removeAllViews()
        parent.addView(CounterInnerView(child.inner))
    }

    return layout
}
