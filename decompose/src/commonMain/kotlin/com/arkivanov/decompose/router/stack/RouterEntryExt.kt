package com.arkivanov.decompose.router.stack

import com.arkivanov.essenty.lifecycle.destroy

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
