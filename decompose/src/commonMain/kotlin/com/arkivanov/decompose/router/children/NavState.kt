package com.arkivanov.decompose.router.children

/**
 * Represents an entire navigation state.
 */
interface NavState<out C : Any> {

    /**
     * A list of child navigation states. Every [ChildNavState.configuration] must be unique by equality.
     */
    val children: List<ChildNavState<C>>
}
