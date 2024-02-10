package com.arkivanov.decompose.backhandler

import com.arkivanov.essenty.backhandler.BackCallback
import com.arkivanov.essenty.backhandler.BackDispatcher
import com.arkivanov.essenty.backhandler.BackHandler
import kotlin.properties.Delegates.observable

internal class DefaultChildBackHandler(
    private val parent: BackHandler,
    isEnabled: Boolean,
    priority: Int,
    private val delegate: BackDispatcher = BackDispatcher(),
) : ChildBackHandler, BackHandler by delegate {

    private val parentCallback: BackCallback =
        BackCallback(
            isEnabled = false,
            priority = priority,
            onBackStarted = delegate::startPredictiveBack,
            onBackProgressed = delegate::progressPredictiveBack,
            onBackCancelled = delegate::cancelPredictiveBack,
            onBack = delegate::back,
        )

    override var isEnabled: Boolean by observable(isEnabled) { _, _, _ -> updateParentCallbackEnabledState() }

    init {
        delegate.addEnabledChangedListener { updateParentCallbackEnabledState() }
    }

    override fun start() {
        if (!parent.isRegistered(parentCallback)) {
            parent.register(parentCallback)
        }
    }

    override fun stop() {
        if (parent.isRegistered(parentCallback)) {
            parent.unregister(parentCallback)
        }
    }

    private fun updateParentCallbackEnabledState() {
        parentCallback.isEnabled = isEnabled && delegate.isEnabled
    }
}
