package com.arkivanov.decompose.router.panels

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi

/**
 * A state holder for Child Panels.
 *
 * @param main a Main child component.
 * @param details an optional Details child component.
 * @param extra an optional Extra child component.
 * @param mode determines how lifecycles of the panels within the Child Panels navigation model are changing,
 * default value is [ChildPanelsMode.SINGLE], see [ChildPanelsMode].
 * @param MC a type of the `Main` panel configuration.
 * @param MT a type of the `Main` panel component.
 * @param DC a type of the `Details` panel configuration.
 * @param DT a type of the `Details` panel component.
 * @param EC a type of the `Extra` panel configuration. Use `Nothing` if the panel is not required.
 * @param ET a type of the `Extra` panel component. Use `Nothing` if the panel is not required.
 */
@ExperimentalDecomposeApi
data class ChildPanels<out MC : Any, out MT : Any, out DC : Any, out DT : Any, out EC : Any, out ET : Any>(
    val main: Child.Created<MC, MT>,
    val details: Child.Created<DC, DT>? = null,
    val extra: Child.Created<EC, ET>? = null,
    val mode: ChildPanelsMode = ChildPanelsMode.SINGLE,
)
