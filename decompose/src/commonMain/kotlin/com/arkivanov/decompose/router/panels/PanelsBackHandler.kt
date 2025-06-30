package com.arkivanov.decompose.router.panels

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.children.BackStrategy

/**
 * A function that checks the provided navigation state and either returns another function
 * transforming the navigation state to a new one, or `null` if back button handling should
 * be disabled. Called during initialization and after each navigation event.
 *
 * @see popInSingleMode
 */
@ExperimentalDecomposeApi
fun interface PanelsBackStrategy<MC : Any, DC : Any, EC : Any> : BackStrategy<Panels<MC, DC, EC>> {

    companion object
}

/**
 * An implementation of [PanelsBackStrategy] that simply pops the currently active Details or Extra
 * component. Only works if [Panels.mode] is [ChildPanelsMode.SINGLE].
 */
@ExperimentalDecomposeApi
fun <MC : Any, DC : Any, EC : Any> PanelsBackStrategy.Companion.popInSingleMode(): PanelsBackStrategy<MC, DC, EC> =
    PanelsBackStrategy { panels ->
        when {
            (panels.mode == ChildPanelsMode.SINGLE) && (panels.extra != null) -> {
                { panels.copy(extra = null) }
            }

            (panels.mode == ChildPanelsMode.SINGLE) && (panels.details != null) -> {
                { panels.copy(details = null) }
            }

            else -> null
        }
    }
