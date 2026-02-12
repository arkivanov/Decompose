package com.arkivanov.decompose.testutils

import com.arkivanov.essenty.statekeeper.SerializableContainer
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher
import kotlinx.serialization.SerializationStrategy
import kotlin.test.assertTrue

class TestStateKeeperDispatcher(
    private val savedState: SerializableContainer? = null,
    private val delegate: StateKeeperDispatcher = StateKeeperDispatcher(savedState),
) : StateKeeperDispatcher by delegate {

    var lastSavedState: SerializableContainer? = null
    private val registeredKeys = HashSet<String>()

    override fun save(): SerializableContainer =
        delegate.save().also {
            lastSavedState = it
        }

    override fun <T : Any> register(key: String, strategy: SerializationStrategy<T>, supplier: () -> T?) {
        registeredKeys += key
        delegate.register(key = key, strategy = strategy, supplier = supplier)
    }

    override fun unregister(key: String) {
        registeredKeys -= key
        delegate.unregister(key = key)
    }

    fun assertSupplierRegistered(key: String) {
        assertTrue(key in registeredKeys)
    }
}
