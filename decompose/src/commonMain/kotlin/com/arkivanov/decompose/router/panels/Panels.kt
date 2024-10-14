package com.arkivanov.decompose.router.panels

import com.arkivanov.decompose.ExperimentalDecomposeApi
import kotlinx.serialization.Serializable

/**
 * Represents a state of Child Panels navigation model.
 *
 * @param main a configuration of the Main panel.
 * @param details an optional configuration of the Details panel, default value is `null`.
 * @param extra an optional configuration of the Extra panel, default value is `null`.
 * @param mode determines how lifecycles of the panels within the Child Panels navigation model are changing,
 * default value is [ChildPanelsMode.SINGLE], see [ChildPanelsMode].
 */
@ExperimentalDecomposeApi
@Serializable
data class Panels<out MC : Any, out DC : Any, out EC : Any>(
    val main: MC,
    val details: DC? = null,
    val extra: EC? = null,
    val mode: ChildPanelsMode = ChildPanelsMode.SINGLE,
)