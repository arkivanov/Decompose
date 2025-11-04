package com.arkivanov.decompose.extensions.compose.experimental.panels

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.StackAnimator
import com.arkivanov.decompose.extensions.compose.stack.animation.Direction
import com.arkivanov.decompose.router.panels.ChildPanelsMode

/**
 * Provides panel animators for all layout kinds.
 *
 * @param main provides an optional [StackAnimator] for the Main [Child]. Additional arguments include:
 * the current [ChildPanelsMode] and animation [Direction], plus the `isPredictiveBack` flag indicating
 * whether the animation is controlled by a predictive back gesture or not.
 * @param details provides an optional [StackAnimator] for the Details [Child].
 * @param extra provides an optional [StackAnimator] for the Extra [Child].
 */
@ExperimentalDecomposeApi
class ChildPanelsAnimators<in MC : Any, in MT : Any, in DC : Any, in DT : Any, in EC : Any, in ET : Any>(
    val main: (Child.Created<MC, MT>, ChildPanelsMode, Direction, isPredictiveBack: Boolean) -> StackAnimator? = { _, _, _, _ -> null },
    val details: (Child.Created<DC, DT>, ChildPanelsMode, Direction, isPredictiveBack: Boolean) -> StackAnimator? = { _, _, _, _ -> null },
    val extra: (Child.Created<EC, ET>, ChildPanelsMode, Direction, isPredictiveBack: Boolean) -> StackAnimator? = { _, _, _, _ -> null },
) {

    /**
     * A convenience constructor for specifying a [StackAnimator] for each panel and [ChildPanelsMode] individually.
     *
     * @param single an optional [StackAnimator] to be used in [SINGLE][ChildPanelsMode.SINGLE] mode.
     * @param dual a [Pair] of optional [StackAnimator] to be used in [DUAL][ChildPanelsMode.DUAL] mode.
     * The [first][Pair.first] animator is used for the primary (first) panel, and the [second][Pair.second] animator
     * is used for the secondary (second) panel. Default value is `Pair(single, single)`.
     * @param triple a [Triple] of optional [StackAnimator] to be used in [TRIPLE][ChildPanelsMode.TRIPLE] mode.
     * The [first][Triple.first] animator is used for the primary (first) panel, the [second][Triple.second] animator
     * is used for the secondary (second) panel, and the [third][Triple.third] animator is used for the tertiary (third) panel.
     * Default value is `Triple(dual.first, dual.second, dual.second)`.
     */
    constructor(
        single: StackAnimator?,
        dual: Pair<StackAnimator?, StackAnimator?> = Pair(single, single),
        triple: Triple<StackAnimator?, StackAnimator?, StackAnimator?> = Triple(dual.first, dual.second, dual.second),
    ) : this(
        main = { _, mode, _, _ ->
            when (mode) {
                ChildPanelsMode.SINGLE -> single
                ChildPanelsMode.DUAL -> dual.first
                ChildPanelsMode.TRIPLE -> triple.first
            }
        },
        details = { _, mode, _, _ ->
            when (mode) {
                ChildPanelsMode.SINGLE -> single
                ChildPanelsMode.DUAL -> dual.second
                ChildPanelsMode.TRIPLE -> triple.second
            }
        },
        extra = { _, mode, _, _ ->
            when (mode) {
                ChildPanelsMode.SINGLE -> single
                ChildPanelsMode.DUAL -> dual.second
                ChildPanelsMode.TRIPLE -> triple.third
            }
        },
    )
}
