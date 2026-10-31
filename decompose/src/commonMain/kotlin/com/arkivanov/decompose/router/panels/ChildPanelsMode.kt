package com.arkivanov.decompose.router.panels

import androidx.lifecycle.Lifecycle
import com.arkivanov.decompose.ExperimentalDecomposeApi

/**
 * Determines how lifecycles of the child components within the Child Panels navigation model are changing.
 *
 * @see Lifecycle.State
 */
@ExperimentalDecomposeApi
enum class ChildPanelsMode {

    /**
     * There is only one [Lifecycle.State.RESUMED] panel at a time.
     * If the Extra panel exists, then it is [Lifecycle.State.RESUMED] and all other panels are [Lifecycle.State.CREATED].
     * Otherwise, if the Details panel exists, then it is [Lifecycle.State.RESUMED] and the Main panel is [Lifecycle.State.CREATED].
     * Otherwise, the Main panel is [Lifecycle.State.RESUMED].
     */
    SINGLE,

    /**
     * There are at most two panels [Lifecycle.State.RESUMED] at a time. The Main panel is always [Lifecycle.State.RESUMED].
     * If the Extra panel exists, then it is [Lifecycle.State.RESUMED] and the Details panel (if exists) is [Lifecycle.State.CREATED].
     * Otherwise, if the Details panel exists, then it is [Lifecycle.State.RESUMED].
     */
    DUAL,

    /**
     * Any existing panel is always [Lifecycle.State.RESUMED].
     */
    TRIPLE,
}

val ChildPanelsMode.isSingle: Boolean get() = this == ChildPanelsMode.SINGLE

val ChildPanelsMode.isDual: Boolean get() = this == ChildPanelsMode.DUAL

val ChildPanelsMode.isTriple: Boolean get() = this == ChildPanelsMode.TRIPLE
