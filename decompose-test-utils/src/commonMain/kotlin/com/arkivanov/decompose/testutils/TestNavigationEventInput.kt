package com.arkivanov.decompose.testutils

import androidx.navigationevent.NavigationEvent
import androidx.navigationevent.NavigationEventDispatcher
import androidx.navigationevent.NavigationEventInput

class TestNavigationEventInput : NavigationEventInput() {

    var hasEnabledHandlers: Boolean = false

    override fun onHasEnabledHandlersChanged(hasEnabledHandlers: Boolean) {
        this.hasEnabledHandlers = hasEnabledHandlers
    }

    fun backStarted(event: NavigationEvent) {
        dispatchOnBackStarted(event)
    }

    fun backProgressed(event: NavigationEvent) {
        dispatchOnBackProgressed(event)
    }

    fun backCancelled() {
        dispatchOnBackCancelled()
    }

    fun backCompleted() {
        dispatchOnBackCompleted()
    }

    fun forwardStarted(event: NavigationEvent) {
        dispatchOnForwardStarted(event)
    }

    fun forwardProgressed(event: NavigationEvent) {
        dispatchOnForwardProgressed(event)
    }

    fun forwardCancelled() {
        dispatchOnForwardCancelled()
    }

    fun forwardCompleted() {
        dispatchOnForwardCompleted()
    }
}

fun NavigationEventDispatcher.addTestInput(
    priority: Int = NavigationEventDispatcher.PRIORITY_DEFAULT,
): TestNavigationEventInput =
    TestNavigationEventInput().also {
        addInput(input = it, priority = priority)
    }
