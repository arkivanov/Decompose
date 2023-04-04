package com.arkivanov.decompose.extensions.compose.jetbrains.mainthread

import com.arkivanov.decompose.mainthread.MainThreadChecker
import javax.swing.SwingUtilities

internal class SwingMainThreadChecker : MainThreadChecker {

    override fun isMainThread(): Boolean =
        SwingUtilities.isEventDispatchThread()
}
