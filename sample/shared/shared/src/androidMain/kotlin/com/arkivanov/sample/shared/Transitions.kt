package com.arkivanov.sample.shared

import android.view.Gravity
import android.view.View
import android.view.ViewGroup
import androidx.interpolator.view.animation.FastOutSlowInInterpolator
import androidx.transition.Fade
import androidx.transition.Slide
import androidx.transition.TransitionManager
import androidx.transition.TransitionSet
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.android.ViewContext
import com.arkivanov.decompose.router.stack.ChildStack

@ExperimentalDecomposeApi
internal fun <C : Any, T : Any> viewSwitcher(
    transition: DelayedTransition = SlideFadeDelayedTransition,
    viewFactory: (T) -> View,
): ViewContext.(parent: ViewGroup, newStack: ChildStack<C, T>, oldStack: ChildStack<C, T>?) -> Unit =
    { parent, newStack, oldStack ->
        val oldView: View? = parent.getChildAt(0)
        val newView = viewFactory(newStack.active.instance)

        if ((oldView != null) && (oldStack != null)) {
            transition.begin(
                parent = parent,
                newView = newView,
                oldView = oldView,
                isForward = newStack.items.size > oldStack.items.size,
            )
        }

        parent.removeAllViews()
        parent.addView(newView)
        parent.requestApplyInsets()
    }

internal interface DelayedTransition {
    fun begin(parent: ViewGroup, newView: View, oldView: View, isForward: Boolean)
}

internal object SlideFadeDelayedTransition : DelayedTransition {
    override fun begin(parent: ViewGroup, newView: View, oldView: View, isForward: Boolean) {
        TransitionManager.beginDelayedTransition(
            parent,
            TransitionSet()
                .addTransition(Slide(Gravity.END).addTarget(if (isForward) newView else oldView))
                .addTransition(Fade(Fade.MODE_IN).addTarget(newView))
                .addTransition(Fade(Fade.MODE_OUT).addTarget(oldView))
                .setInterpolator(FastOutSlowInInterpolator()),
        )
    }
}

internal object FadeTransition : DelayedTransition {
    override fun begin(parent: ViewGroup, newView: View, oldView: View, isForward: Boolean) {
        TransitionManager.beginDelayedTransition(
            parent,
            TransitionSet()
                .addTransition(Fade(Fade.MODE_IN).addTarget(newView))
                .addTransition(Fade(Fade.MODE_OUT).addTarget(oldView))
                .setInterpolator(FastOutSlowInInterpolator()),
        )
    }
}
