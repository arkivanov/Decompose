package com.arkivanov.decompose.extensions.compose.jetpack.stack.animation

import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.layout

sealed interface SlideDirection {

    fun offset(factor: Float): Modifier

    object TopToBottom : SlideDirection {
        override fun offset(factor: Float): Modifier = Modifier.layout { measurable, constraints ->
            val placeable = measurable.measure(constraints)

            layout(placeable.width, placeable.height) {
                placeable.placeRelative(x = 0, y = (placeable.height.toFloat() * factor).toInt().unaryMinus())
            }
        }
    }

    object BottomToTop : SlideDirection {
        override fun offset(factor: Float): Modifier = Modifier.layout { measurable, constraints ->
            val placeable = measurable.measure(constraints)

            layout(placeable.width, placeable.height) {
                placeable.placeRelative(x = 0, y = (placeable.height.toFloat() * factor).toInt())
            }
        }
    }

    object StartToEnd : SlideDirection {
        override fun offset(factor: Float): Modifier = Modifier.layout { measurable, constraints ->
            val placeable = measurable.measure(constraints)

            layout(placeable.width, placeable.height) {
                placeable.placeRelative(x = (placeable.width.toFloat() * factor).toInt().unaryMinus(), y = 0)
            }
        }
    }

    object EndToStart : SlideDirection {
        override fun offset(factor: Float): Modifier = Modifier.layout { measurable, constraints ->
            val placeable = measurable.measure(constraints)

            layout(placeable.width, placeable.height) {
                placeable.placeRelative(x = (placeable.width.toFloat() * factor).toInt(), y = 0)
            }
        }
    }
}
