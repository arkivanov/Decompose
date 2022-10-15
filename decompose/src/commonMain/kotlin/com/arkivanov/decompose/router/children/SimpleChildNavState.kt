package com.arkivanov.decompose.router.children

/**
 * A simple implementation of the [ChildNavState] interface.
 */
internal data class SimpleChildNavState<out C : Any>(
    override val configuration: C,
    override val status: ChildNavState.Status,
) : ChildNavState<C>
