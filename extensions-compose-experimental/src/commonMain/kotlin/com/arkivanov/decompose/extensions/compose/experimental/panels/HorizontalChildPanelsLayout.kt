package com.arkivanov.decompose.extensions.compose.experimental.panels

import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.Layout
import androidx.compose.ui.layout.Measurable
import androidx.compose.ui.layout.MeasurePolicy
import androidx.compose.ui.layout.MeasureResult
import androidx.compose.ui.layout.MeasureScope
import androidx.compose.ui.unit.Constraints
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.panels.ChildPanelsMode

/**
 * An implementation of [ChildPanelsLayout] for laying out panels in the following ways.
 *
 * - If the `mode` is `SINGLE`, all panels are displayed in a stack. The Main panel, then
 * the Details panel on top (if any), and finally the Extra panel (if any).
 * - If the `mode` is `DUAL`, the Main panel is always displayed on the left side, and then
 * the Details and the Extra panels are displayed in a stack on the right side (next to the Main panel).
 * - If the `mode` is `TRIPLE`, all panels are displayed horizontally side by side.
 *
 * ```
 * SINGLE mode
 * +-----------------------------+
 * |            Main             |
 * |           Details           |
 * |            Extra            |
 * +-----------------------------+
 *
 * DUAL mode
 * +-----------------------------+
 * |              |    Details   |
 * |     Main     |     Extra    |
 * |              |              |
 * +-----------------------------+
 *
 * TRIPLE mode
 * +-----------------------------+
 * |         |         |         |
 * |  Main   | Details |  Extra  |
 * |         |         |         |
 * +-----------------------------+
 * ```
 *
 * @param dualWeights a [Pair] of weights for two panels to be used in
 * [DUAL][com.arkivanov.decompose.router.panels.ChildPanelsMode.DUAL] mode.
 * Default values are `1F`, meaning that all panels have equal width.
 * @param tripleWeights A [Triple] of weights for three panels to be used in
 * [TRIPLE][com.arkivanov.decompose.router.panels.ChildPanelsMode.TRIPLE] mode.
 * Default values are `1F`, meaning that all panel slots have equal width.
 */
@ExperimentalDecomposeApi
class HorizontalChildPanelsLayout(
    private val dualWeights: Pair<Float, Float> = Pair(1F, 1F),
    private val tripleWeights: Triple<Float, Float, Float> = Triple(1F, 1F, 1F),
) : ChildPanelsLayout {

    private val singleMeasurePolicy = SingleMeasurePolicy()
    private val dualMeasurePolicy = DualMeasurePolicy(weights = dualWeights)
    private val tripleMeasurePolicy = TripleMeasurePolicy(weights = tripleWeights)

    @Composable
    override fun Layout(
        mode: ChildPanelsMode,
        main: @Composable () -> Unit,
        details: @Composable () -> Unit,
        extra: @Composable () -> Unit,
    ) {
        Layout(
            content = {
                main()
                details()
                extra()
            },
            modifier = Modifier.fillMaxSize(),
            measurePolicy = when (mode) {
                ChildPanelsMode.SINGLE -> singleMeasurePolicy
                ChildPanelsMode.DUAL -> dualMeasurePolicy
                ChildPanelsMode.TRIPLE -> tripleMeasurePolicy
            },
        )
    }

    private class SingleMeasurePolicy : MeasurePolicy {
        override fun MeasureScope.measure(measurables: List<Measurable>, constraints: Constraints): MeasureResult {
            val placeables = measurables.map { it.measure(constraints) }

            return layout(constraints.maxWidth, constraints.maxHeight) {
                placeables.forEach {
                    it.placeRelative(x = 0, y = 0)
                }
            }
        }
    }

    private class DualMeasurePolicy(weights: Pair<Float, Float>) : MeasurePolicy {
        private val primaryWeight = weights.first / (weights.first + weights.second)

        override fun MeasureScope.measure(measurables: List<Measurable>, constraints: Constraints): MeasureResult {
            val w1 = (constraints.maxWidth.toFloat() * primaryWeight).toInt()
            val w2 = constraints.maxWidth - w1
            val placeable1 = measurables[0].measure(constraints.copy(maxWidth = w1, minWidth = w1))
            val placeable2 = measurables[1].measure(constraints.copy(maxWidth = w2, minWidth = w2))
            val placeable3 = measurables[2].measure(constraints.copy(maxWidth = w2, minWidth = w2))

            return layout(constraints.maxWidth, constraints.maxHeight) {
                placeable1.placeRelative(x = 0, y = 0)
                placeable2.placeRelative(x = w1, y = 0)
                placeable3.placeRelative(x = w1, y = 0)
            }
        }
    }

    private class TripleMeasurePolicy(weights: Triple<Float, Float, Float>) : MeasurePolicy {
        private val primaryWeight = weights.first / (weights.first + weights.second + weights.third)
        private val secondaryWeight = weights.second / (weights.first + weights.second + weights.third)

        override fun MeasureScope.measure(measurables: List<Measurable>, constraints: Constraints): MeasureResult {
            val w1 = (constraints.maxWidth.toFloat() * primaryWeight).toInt()
            val w2 = (constraints.maxWidth.toFloat() * secondaryWeight).toInt()
            val w3 = (constraints.maxWidth - w1 - w2)
            val placeable1 = measurables[0].measure(constraints.copy(maxWidth = w1, minWidth = w1))
            val placeable2 = measurables[1].measure(constraints.copy(maxWidth = w2, minWidth = w2))
            val placeable3 = measurables[2].measure(constraints.copy(maxWidth = w3, minWidth = w3))

            return layout(constraints.maxWidth, constraints.maxHeight) {
                placeable1.placeRelative(x = 0, y = 0)
                placeable2.placeRelative(x = w1, y = 0)
                placeable3.placeRelative(x = w1 + w2, y = 0)
            }
        }
    }
}
