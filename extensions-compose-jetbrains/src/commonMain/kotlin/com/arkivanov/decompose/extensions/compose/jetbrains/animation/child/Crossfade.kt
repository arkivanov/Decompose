package com.arkivanov.decompose.extensions.compose.jetbrains.animation.child

import androidx.compose.animation.Crossfade
import androidx.compose.animation.core.FiniteAnimationSpec
import com.arkivanov.decompose.ExperimentalDecomposeApi

/**
 * A simple crossfade animation between children. See [Crossfade] for details.
 */
@ExperimentalDecomposeApi
fun <C : Any, T : Any> crossfade(
    animationSpec: FiniteAnimationSpec<Float> = defaultChildAnimationSpec
): ChildAnimation<C, T> =
    { routerState, modifier, content ->
        Crossfade(
            targetState = ChildWrapper(routerState.activeChild, routerState.activeChild.configuration),
            modifier = modifier,
            animationSpec = animationSpec
        ) {
            content(it.child)
        }
    }

private class ChildWrapper<out T, out C : Any>(val child: T, val key: C) {
    override fun equals(other: Any?): Boolean = key == (other as? ChildWrapper<*, *>)?.key
    override fun hashCode(): Int = key.hashCode()
}
