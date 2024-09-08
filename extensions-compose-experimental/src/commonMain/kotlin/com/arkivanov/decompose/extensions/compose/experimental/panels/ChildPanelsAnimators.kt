package com.arkivanov.decompose.extensions.compose.experimental.panels

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.StackAnimator
import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.fade

/**
 * Contains panel animators for all layout kinds.
 *
 * @param single a [StackAnimator] to be used in
 * [SINGLE][com.arkivanov.decompose.router.panels.ChildPanelsMode.SINGLE] mode.
 * @param dual a [Pair] of [StackAnimator] to be used in
 * [DUAL][com.arkivanov.decompose.router.panels.ChildPanelsMode.DUAL] mode. The [first][Pair.first] animator
 * is used for the primary (first) panel, and the [second][Pair.second] animator is used for the secondary
 * (second) panel. Default value is `Pair(single, single)`.
 * @param triple a [Triple] of [StackAnimator] to be used in
 * [TRIPLE][com.arkivanov.decompose.router.panels.ChildPanelsMode.TRIPLE] mode. The [first][Triple.first] animator
 * is used for the primary (first) panel, the [second][Triple.second] animator is used for the secondary (second)
 * panel, and the [third][Triple.third] animator is used for the tertiary (third) panel.
 * Default values is `Triple(dual.first, dual.second, dual.second)`.
 */
@ExperimentalDecomposeApi
class ChildPanelsAnimators(
    val single: StackAnimator? = fade(),
    val dual: Pair<StackAnimator?, StackAnimator?> = single to single,
    val triple: Triple<StackAnimator?, StackAnimator?, StackAnimator?> = Triple(dual.first, dual.second, dual.second),
)
