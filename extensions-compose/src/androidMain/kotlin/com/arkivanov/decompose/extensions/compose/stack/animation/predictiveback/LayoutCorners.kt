package com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback

import android.content.Context
import android.os.Build
import android.view.RoundedCorner
import android.view.View
import android.view.WindowManager
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.composed
import androidx.compose.ui.geometry.Rect
import androidx.compose.ui.layout.boundsInRoot
import androidx.compose.ui.layout.onGloballyPositioned
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.platform.LocalLayoutDirection
import androidx.compose.ui.platform.LocalView
import androidx.compose.ui.unit.Density
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.LayoutDirection
import androidx.core.content.ContextCompat.getSystemService

internal actual fun Modifier.withLayoutCorners(block: Modifier.(LayoutCorners) -> Modifier): Modifier =
    composed {
        val context = LocalContext.current
        val density = LocalDensity.current
        val screenInfo = remember(context) { context.getScreenInfo(density) }

        if (screenInfo != null) {
            val rootView = LocalView.current
            val layoutDirection = LocalLayoutDirection.current
            var positionOnScreen by remember { mutableStateOf<Rect?>(null) }
            val corners = getLayoutCorners(screenInfo, positionOnScreen, layoutDirection)

            onGloballyPositioned { coords ->
                positionOnScreen = getBoundsOnScreen(rootView = rootView, boundsInRoot = coords.boundsInRoot())
            }.block(corners)
        } else {
            block(LayoutCorners())
        }
    }

private fun Context.getScreenInfo(density: Density): ScreenInfo? {
    if (Build.VERSION.SDK_INT < Build.VERSION_CODES.S) {
        return null
    }

    val windowMetrics = requireNotNull(getSystemService(this, WindowManager::class.java)).maximumWindowMetrics
    val insets = windowMetrics.windowInsets

    return with(density) {
        ScreenInfo(
            cornerRadii = CornerRadii(
                topLeft = insets.getRoundedCorner(RoundedCorner.POSITION_TOP_LEFT)?.radius?.toDp(),
                topRight = insets.getRoundedCorner(RoundedCorner.POSITION_TOP_RIGHT)?.radius?.toDp(),
                bottomRight = insets.getRoundedCorner(RoundedCorner.POSITION_BOTTOM_RIGHT)?.radius?.toDp(),
                bottomLeft = insets.getRoundedCorner(RoundedCorner.POSITION_BOTTOM_LEFT)?.radius?.toDp(),
            ),
            width = windowMetrics.bounds.width(),
            height = windowMetrics.bounds.height(),
        )
    }
}

private fun getLayoutCorners(
    screenInfo: ScreenInfo,
    positionOnScreen: Rect?,
    layoutDirection: LayoutDirection,
): LayoutCorners {
    if (positionOnScreen == null) {
        return LayoutCorners()
    }

    val (cornerRadii, screenWidth, screenHeight) = screenInfo
    val (left, top, right, bottom) = positionOnScreen

    val topLeft = getLayoutCorner(radius = cornerRadii.topLeft, isFixed = (left <= 0) && (top <= 0))
    val topRight = getLayoutCorner(radius = cornerRadii.topRight, isFixed = (right >= screenWidth) && (top <= 0))
    val bottomRight = getLayoutCorner(radius = cornerRadii.bottomRight, isFixed = (right >= screenWidth) && (bottom >= screenHeight))
    val bottomLeft = getLayoutCorner(radius = cornerRadii.bottomLeft, isFixed = (left <= 0) && (bottom >= screenHeight))

    return when (layoutDirection) {
        LayoutDirection.Ltr -> LayoutCorners(topStart = topLeft, topEnd = topRight, bottomEnd = bottomRight, bottomStart = bottomLeft)
        LayoutDirection.Rtl -> LayoutCorners(topStart = topRight, topEnd = topLeft, bottomEnd = bottomLeft, bottomStart = bottomRight)
    }
}

private fun getLayoutCorner(radius: Dp?, isFixed: Boolean): LayoutCorner =
    if (radius == null) {
        LayoutCorner()
    } else {
        LayoutCorner(radius = radius, isFixed = isFixed)
    }

private fun getBoundsOnScreen(rootView: View, boundsInRoot: Rect): Rect {
    val rootViewLeftTopOnScreen = IntArray(2)
    rootView.getLocationOnScreen(rootViewLeftTopOnScreen)
    val (rootViewLeftOnScreen, rootViewTopOnScreen) = rootViewLeftTopOnScreen

    return Rect(
        left = rootViewLeftOnScreen + boundsInRoot.left,
        top = rootViewTopOnScreen + boundsInRoot.top,
        right = rootViewLeftOnScreen + boundsInRoot.right,
        bottom = rootViewTopOnScreen + boundsInRoot.bottom,
    )
}

private data class ScreenInfo(
    val cornerRadii: CornerRadii,
    val width: Int,
    val height: Int,
)

private data class CornerRadii(
    val topLeft: Dp? = null,
    val topRight: Dp? = null,
    val bottomRight: Dp? = null,
    val bottomLeft: Dp? = null,
)
