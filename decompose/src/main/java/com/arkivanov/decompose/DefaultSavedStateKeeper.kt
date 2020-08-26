package com.arkivanov.decompose

import android.os.Bundle

internal class DefaultSavedStateKeeper(
    private val savedState: Bundle?
) : SavedStateKeeper {

    private val suppliers = HashMap<String, () -> Bundle>()
    private var onFirstSupplierAdded: (() -> Unit)? = null
    private var onLastSupplierRemoved: (() -> Unit)? = null

    fun setCallbacks(onFirstSupplierAdded: (() -> Unit)? = null, onLastSupplierRemoved: (() -> Unit)? = null) {
        this.onFirstSupplierAdded = onFirstSupplierAdded
        this.onLastSupplierRemoved = onLastSupplierRemoved
    }

    override fun consume(key: String): Bundle? {
        val bundle = savedState?.getBundle(key) ?: return null
        savedState.remove(key)

        return bundle
    }

    override fun register(key: String, supplier: () -> Bundle) {
        check(!suppliers.containsKey(key)) { "Another supplier is already registered for the key: $key" }

        val isFirst = suppliers.isEmpty()
        suppliers[key] = supplier

        if (isFirst) {
            onFirstSupplierAdded?.invoke()
        }
    }

    override fun unregister(key: String) {
        check(key in suppliers) { "No supplier is registered for the key: $key" }

        suppliers -= key

        if (suppliers.isEmpty()) {
            onLastSupplierRemoved?.invoke()
        }
    }

    fun save(): Bundle =
        Bundle().apply {
            suppliers.forEach { (key, supplier) ->
                putBundle(key, supplier())
            }
        }
}
