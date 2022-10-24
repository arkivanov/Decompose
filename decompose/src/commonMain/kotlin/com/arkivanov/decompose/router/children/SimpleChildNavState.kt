package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.ExperimentalDecomposeApi

/**
 * A simple implementation of the [ChildNavState] interface.
 */
@OptIn(ExperimentalDecomposeApi::class)
internal data class SimpleChildNavState<out C : Any>(
    override val configuration: C,
    override val status: ChildNavState.Status,
) : ChildNavState<C>
