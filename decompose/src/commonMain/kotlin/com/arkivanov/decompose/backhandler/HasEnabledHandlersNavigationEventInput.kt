package com.arkivanov.decompose.backhandler

import androidx.navigationevent.NavigationEventInput

internal class HasEnabledHandlersNavigationEventInput(
    private val onHasEnabledHandlersChanged: (hasEnabledHandlers: Boolean) -> Unit,
) : NavigationEventInput() {

    override fun onHasEnabledHandlersChanged(hasEnabledHandlers: Boolean) {
        onHasEnabledHandlersChanged.invoke(hasEnabledHandlers)
    }
}
