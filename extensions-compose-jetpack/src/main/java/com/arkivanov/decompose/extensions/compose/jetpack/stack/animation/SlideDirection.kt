package com.arkivanov.decompose.extensions.compose.jetpack.stack.animation

import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.layout
import androidx.compose.ui.unit.LayoutDirection

sealed interface SlideDirection {

    fun offset(factor: Float, layoutDirection: LayoutDirection, modifier: Modifier = Modifier): Modifier

    object TopToBottom : SlideDirection {
        override fun offset(
            factor: Float,
            layoutDirection: LayoutDirection,
            modifier: Modifier
        ): Modifier = modifier.layout { measurable, constraints ->
            val placeable = measurable.measure(constraints)

            layout(placeable.width, placeable.height) {
                placeable.placeRelative(x = 0, y = (placeable.height.toFloat() * factor).toInt().unaryMinus())
            }
        }
    }

    object BottomToTop : SlideDirection {
        override fun offset(
            factor: Float,
            layoutDirection: LayoutDirection,
            modifier: Modifier
        ): Modifier = modifier.layout { measurable, constraints ->
            val placeable = measurable.measure(constraints)

            layout(placeable.width, placeable.height) {
                placeable.placeRelative(x = 0, y = (placeable.height.toFloat() * factor).toInt())
            }
        }
    }

    data class StartToEnd(
        private val directionAware: Boolean
    ) : SlideDirection {
        override fun offset(
            factor: Float,
            layoutDirection: LayoutDirection,
            modifier: Modifier
        ): Modifier = modifier.layout { measurable, constraints ->
            val placeable = measurable.measure(constraints)
            val positionX = (placeable.width.toFloat() * factor).toInt()
            val directionAwarePositionX = when {
                directionAware && layoutDirection == LayoutDirection.Rtl -> positionX
                else -> positionX.unaryMinus()
            }

            layout(placeable.width, placeable.height) {
                placeable.placeRelative(x = directionAwarePositionX, y = 0)
            }
        }
    }

    data class EndToStart(
        private val directionAware: Boolean
    ) : SlideDirection {
        override fun offset(
            factor: Float,
            layoutDirection: LayoutDirection,
            modifier: Modifier
        ): Modifier = modifier.layout { measurable, constraints ->
            val placeable = measurable.measure(constraints)
            val positionX = (placeable.width.toFloat() * factor).toInt()
            val directionAwarePositionX = when {
                directionAware && layoutDirection == LayoutDirection.Rtl -> positionX.unaryMinus()
                else -> positionX
            }

            layout(placeable.width, placeable.height) {
                placeable.placeRelative(x = directionAwarePositionX, y = 0)
            }
        }
    }

    companion object {
        val StartToEnd = StartToEnd(directionAware = false)
        val EndToStart = EndToStart(directionAware = false)
    }
}
