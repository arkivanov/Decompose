package com.arkivanov.decompose.testutils

import androidx.navigationevent.NavigationEventDispatcher
import androidx.navigationevent.NavigationEventInput

class TestNavigationEventInput : NavigationEventInput() {

    var hasEnabledHandlers: Boolean = false

    override fun onHasEnabledHandlersChanged(hasEnabledHandlers: Boolean) {
        this.hasEnabledHandlers = hasEnabledHandlers
    }

    fun backCompleted() {
        dispatchOnBackCompleted()
    }
}

fun NavigationEventDispatcher.addTestInput(): TestNavigationEventInput =
    TestNavigationEventInput().also {
        addInput(input = it)
    }
