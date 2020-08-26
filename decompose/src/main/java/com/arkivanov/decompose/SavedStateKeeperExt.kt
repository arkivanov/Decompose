package com.arkivanov.decompose

internal fun SavedStateKeeper.child(key: String): SavedStateKeeper =
    DefaultSavedStateKeeper(consume(key)).also { child ->
        child.setCallbacks(
            onFirstSupplierAdded = { register(key, child::save) },
            onLastSupplierRemoved = { unregister(key) }
        )
    }
