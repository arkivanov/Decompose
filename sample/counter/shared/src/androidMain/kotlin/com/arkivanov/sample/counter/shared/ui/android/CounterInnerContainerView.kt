package com.arkivanov.sample.counter.shared.ui.android

import android.view.View
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.android.RouterView
import com.arkivanov.decompose.extensions.android.ViewContext
import com.arkivanov.decompose.extensions.android.child
import com.arkivanov.decompose.extensions.android.layoutInflater
import com.arkivanov.sample.counter.shared.R
import com.arkivanov.sample.counter.shared.inner.CounterInner

@ExperimentalDecomposeApi
@Suppress("FunctionName") // Factory function
fun ViewContext.CounterInnerView(counterInner: CounterInner): View {
    val root = layoutInflater.inflate(R.layout.counter_inner, parent, false)
    val leftNextButton: View = root.findViewById(R.id.button_left_next)
    val leftPrevButton: View = root.findViewById(R.id.button_left_prev)
    val leftRouter: RouterView = root.findViewById(R.id.router_left)
    val rightNextButton: View = root.findViewById(R.id.button_right_next)
    val rightPrevButton: View = root.findViewById(R.id.button_right_prev)
    val rightRouter: RouterView = root.findViewById(R.id.router_right)

    leftNextButton.setOnClickListener { counterInner.onNextLeftChild() }
    leftPrevButton.setOnClickListener { counterInner.onPrevLeftChild() }
    rightNextButton.setOnClickListener { counterInner.onNextRightChild() }
    rightPrevButton.setOnClickListener { counterInner.onPrevRightChild() }

    child(root.findViewById(R.id.container_counter)) {
        CounterView(counterInner.counter)
    }

    leftRouter.children(counterInner.leftRouterState, lifecycle) { parent, child, _ ->
        parent.removeAllViews()
        parent.addView(CounterView(child.counter))
        leftPrevButton.isEnabled = child.isBackEnabled
    }

    rightRouter.children(counterInner.rightRouterState, lifecycle) { parent, child, _ ->
        parent.removeAllViews()
        parent.addView(CounterView(child.counter))
        rightPrevButton.isEnabled = child.isBackEnabled
    }

    return root
}
