package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.ExperimentalDecomposeApi

/**
 * Represents an entire navigation state.
 */
@ExperimentalDecomposeApi
interface NavState<out C : Any> {

    /**
     * A list of child navigation states. Every [ChildNavState.configuration] must be unique by equality.
     */
    val children: List<ChildNavState<C>>
}
