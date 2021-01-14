package com.arkivanov.decompose.router

import com.arkivanov.decompose.lifecycle.destroy

internal fun List<RouterEntry<*, *>>.destroy() {
    asReversed().forEach { entry ->
        when (entry) {
            is RouterEntry.Created -> {
                entry.instanceKeeperDispatcher.destroy()
                entry.lifecycleRegistry.destroy()
            }

            is RouterEntry.Destroyed -> Unit
        }.let {}
    }
}
