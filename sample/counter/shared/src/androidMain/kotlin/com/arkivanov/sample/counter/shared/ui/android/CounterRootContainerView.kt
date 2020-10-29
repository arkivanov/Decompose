package com.arkivanov.sample.counter.shared.ui.android

import android.view.View
import com.arkivanov.decompose.extensions.android.RouterView
import com.arkivanov.decompose.extensions.android.ViewContext
import com.arkivanov.decompose.extensions.android.child
import com.arkivanov.decompose.extensions.android.layoutInflater
import com.arkivanov.sample.counter.shared.R
import com.arkivanov.sample.counter.shared.root.CounterRootContainer.Model

@Suppress("FunctionName") // Factory function
fun ViewContext.CounterRootView(model: Model): View {
    val root = layoutInflater.inflate(R.layout.counter_root, parent, false)
    val nextButton: View = root.findViewById(R.id.button_next)
    val router: RouterView = root.findViewById(R.id.router)

    nextButton.setOnClickListener { model.onNextChild() }

    child(root.findViewById(R.id.container_counter)) {
        CounterView(model.counter)
    }

    router.children(model.child, lifecycle) { parent, child, _ ->
        parent.removeAllViews()
        parent.addView(CounterInnerView(child.inner))
    }

    return root
}
