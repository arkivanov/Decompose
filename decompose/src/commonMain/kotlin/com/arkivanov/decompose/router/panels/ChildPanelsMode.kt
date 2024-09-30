package com.arkivanov.decompose.router.panels

import com.arkivanov.decompose.ExperimentalDecomposeApi

/**
 * Determines how lifecycles of the panels within the Child Panels navigation model are changing.
 *
 * @see com.arkivanov.essenty.lifecycle.Lifecycle.State
 */
@ExperimentalDecomposeApi
enum class ChildPanelsMode {

    /**
     * There is only one `RESUMED` panel at a time.
     * If the Extra panel exists, then it is `RESUMED` and all other panels are `CREATED`.
     * Otherwise, if the Details panel exists, then it is `RESUMED` and the Main panel is `CREATED`.
     * Otherwise, the Main panel is `RESUMED`.
     */
    SINGLE,

    /**
     * There are at most two panels `RESUMED` at a time. The Main panel is always `RESUMED`.
     * If the Extra panel exists, then it is `RESUMED` and the Details panel (if exists) is `CREATED`.
     * Otherwise, if the Details panel exists, then it is `RESUMED`.
     */
    DUAL,

    /**
     * Any existing panel is always `RESUMED`.
     */
    TRIPLE,
}

val ChildPanelsMode.isSingle: Boolean get() = this == ChildPanelsMode.SINGLE

val ChildPanelsMode.isDual: Boolean get() = this == ChildPanelsMode.DUAL

val ChildPanelsMode.isTriple: Boolean get() = this == ChildPanelsMode.TRIPLE
