package com.arkivanov.decompose.extensions.compose.experimental.panels

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.experimental.BroadcastBackHandler
import com.arkivanov.decompose.extensions.compose.experimental.rememberLazy
import com.arkivanov.decompose.extensions.compose.experimental.stack.ChildStack
import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.PredictiveBackParams
import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.stackAnimation
import com.arkivanov.decompose.extensions.compose.subscribeAsState
import com.arkivanov.decompose.router.panels.ChildPanels
import com.arkivanov.decompose.router.panels.ChildPanelsMode
import com.arkivanov.decompose.router.panels.ChildPanelsMode.DUAL
import com.arkivanov.decompose.router.panels.ChildPanelsMode.SINGLE
import com.arkivanov.decompose.router.panels.ChildPanelsMode.TRIPLE
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.value.Value

/**
 * Displays the provided [ChildPanels], taking care of saving and restoring the UI state. This variant
 * supports up to two child components: Main (required) and Details (optional).
 *
 * Child Panels layout is comparable with Compose
 * [List-Details Layout](https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail).
 *
 * @param panels an observable [ChildPanels] to be displayed.
 * @param mainChild a `Composable` function that displays the provided Main component.
 * @param detailsChild a `Composable` function that displays the provided Details component.
 * @param modifier a [Modifier] to applied to a wrapping container.
 * @param layout an implementation of [ChildPanelsLayout] responsible for laying out panels.
 * @param animators a [ChildPanelsAnimators] containing panel animators for different
 * kinds of layouts.
 * @param predictiveBackParams a function that returns [PredictiveBackParams] for the specified [ChildPanels],
 * or `null`. The predictive back gesture is enabled if the value returned for the specified [ChildStack]
 * is not `null`, and disabled if the returned value is `null`.
 * Only works if [ChildPanels.mode] is [ChildPanelsMode.SINGLE].
 */
@ExperimentalDecomposeApi
@Composable
fun <MC : Any, MT : Any, DC : Any, DT : Any> ChildPanels(
    panels: Value<ChildPanels<MC, MT, DC, DT, *, *>>,
    mainChild: @Composable (Child.Created<MC, MT>) -> Unit,
    detailsChild: @Composable (Child.Created<DC, DT>) -> Unit,
    modifier: Modifier = Modifier,
    layout: ChildPanelsLayout = remember { HorizontalChildPanelsLayout() },
    animators: ChildPanelsAnimators = remember { ChildPanelsAnimators() },
    predictiveBackParams: (ChildPanels<MC, MT, DC, DT, *, *>) -> PredictiveBackParams? = { null },
) {
    ChildPanels(
        panels = panels,
        mainChild = mainChild,
        detailsChild = detailsChild,
        extraChild = {},
        modifier = modifier,
        layout = layout,
        animators = animators,
        predictiveBackParams = predictiveBackParams,
    )
}

/**
 * Displays the provided [ChildPanels], taking care of saving and restoring the UI state. This variant
 * supports up to two child components: Main (required) and Details (optional).
 *
 * Child Panels layout is comparable with Compose
 * [List-Details Layout](https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail).
 *
 * @param panels a [ChildPanels] to be displayed.
 * @param mainChild a `Composable` function that displays the provided Main component.
 * @param detailsChild a `Composable` function that displays the provided Details component.
 * @param modifier a [Modifier] to applied to a wrapping container.
 * @param layout an implementation of [ChildPanelsLayout] responsible for laying out panels.
 * @param animators a [ChildPanelsAnimators] containing panel animators for different
 * kinds of layouts.
 * @param predictiveBackParams a function that returns [PredictiveBackParams] for the specified [ChildPanels],
 * or `null`. The predictive back gesture is enabled if the value returned for the specified [ChildStack]
 * is not `null`, and disabled if the returned value is `null`.
 * Only works if [ChildPanels.mode] is [ChildPanelsMode.SINGLE].
 */
@ExperimentalDecomposeApi
@Composable
fun <MC : Any, MT : Any, DC : Any, DT : Any> ChildPanels(
    panels: ChildPanels<MC, MT, DC, DT, *, *>,
    mainChild: @Composable (Child.Created<MC, MT>) -> Unit,
    detailsChild: @Composable (Child.Created<DC, DT>) -> Unit,
    modifier: Modifier = Modifier,
    layout: ChildPanelsLayout = remember { HorizontalChildPanelsLayout() },
    animators: ChildPanelsAnimators = remember { ChildPanelsAnimators() },
    predictiveBackParams: (ChildPanels<MC, MT, DC, DT, *, *>) -> PredictiveBackParams? = { null },
) {
    ChildPanels(
        panels = panels,
        mainChild = mainChild,
        detailsChild = detailsChild,
        extraChild = {},
        modifier = modifier,
        layout = layout,
        animators = animators,
        predictiveBackParams = predictiveBackParams,
    )
}

/**
 * Displays the provided [ChildPanels], taking care of saving and restoring the UI state. This variant
 * supports up to three child components: Main (required), Details (optional) and Extra (optional).
 *
 * Child Panels layout is comparable with Compose
 * [List-Details Layout](https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail).
 *
 * @param panels an observable [ChildPanels] to be displayed.
 * @param mainChild a `Composable` function that displays the provided Main component.
 * @param detailsChild a `Composable` function that displays the provided Details component.
 * @param extraChild a `Composable` function that displays the provided Extra component.
 * @param modifier a [Modifier] to applied to a wrapping container.
 * @param layout an implementation of [ChildPanelsLayout] responsible for laying out panels.
 * @param animators a [ChildPanelsAnimators] containing panel animators for different
 * kinds of layouts.
 * @param predictiveBackParams a function that returns [PredictiveBackParams] for the specified [ChildPanels],
 * or `null`. The predictive back gesture is enabled if the value returned for the specified [ChildStack]
 * is not `null`, and disabled if the returned value is `null`.
 * Only works if [ChildPanels.mode] is [ChildPanelsMode.SINGLE].
 */
@ExperimentalDecomposeApi
@Composable
fun <MC : Any, MT : Any, DC : Any, DT : Any, EC : Any, ET : Any> ChildPanels(
    panels: Value<ChildPanels<MC, MT, DC, DT, EC, ET>>,
    mainChild: @Composable (Child.Created<MC, MT>) -> Unit,
    detailsChild: @Composable (Child.Created<DC, DT>) -> Unit,
    extraChild: @Composable (Child.Created<EC, ET>) -> Unit,
    modifier: Modifier = Modifier,
    layout: ChildPanelsLayout = remember { HorizontalChildPanelsLayout() },
    animators: ChildPanelsAnimators = remember { ChildPanelsAnimators() },
    predictiveBackParams: (ChildPanels<MC, MT, DC, DT, EC, ET>) -> PredictiveBackParams? = { null },
) {
    val state = panels.subscribeAsState()

    ChildPanels(
        panels = state.value,
        mainChild = mainChild,
        detailsChild = detailsChild,
        extraChild = extraChild,
        modifier = modifier,
        layout = layout,
        animators = animators,
        predictiveBackParams = predictiveBackParams,
    )
}

/**
 * Displays the provided [ChildPanels], taking care of saving and restoring the UI state. This variant
 * supports up to three child components: Main (required), Details (optional) and Extra (optional).
 *
 * Child Panels layout is comparable with Compose
 * [List-Details Layout](https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail).
 *
 * @param panels a [ChildPanels] to be displayed.
 * @param mainChild a `Composable` function that displays the provided Main component.
 * @param detailsChild a `Composable` function that displays the provided Details component.
 * @param extraChild a `Composable` function that displays the provided Extra component.
 * @param modifier a [Modifier] to applied to a wrapping container.
 * @param layout an implementation of [ChildPanelsLayout] responsible for laying out panels.
 * @param animators a [ChildPanelsAnimators] containing panel animators for different
 * kinds of layouts.
 * @param predictiveBackParams a function that returns [PredictiveBackParams] for the specified [ChildPanels],
 * or `null`. The predictive back gesture is enabled if the value returned for the specified [ChildStack]
 * is not `null`, and disabled if the returned value is `null`.
 * Only works if [ChildPanels.mode] is [ChildPanelsMode.SINGLE].
 */
@ExperimentalDecomposeApi
@Composable
fun <MC : Any, MT : Any, DC : Any, DT : Any, EC : Any, ET : Any> ChildPanels(
    panels: ChildPanels<MC, MT, DC, DT, EC, ET>,
    mainChild: @Composable (Child.Created<MC, MT>) -> Unit,
    detailsChild: @Composable (Child.Created<DC, DT>) -> Unit,
    extraChild: @Composable (Child.Created<EC, ET>) -> Unit,
    modifier: Modifier = Modifier,
    layout: ChildPanelsLayout = remember { HorizontalChildPanelsLayout() },
    animators: ChildPanelsAnimators = remember { ChildPanelsAnimators() },
    predictiveBackParams: (ChildPanels<MC, MT, DC, DT, EC, ET>) -> PredictiveBackParams? = { null },
) {
    val main = remember(panels.main) { panels.main.asPanelChild() }
    val details = remember(panels.details) { panels.details?.asPanelChild() }
    val extra = remember(panels.extra) { panels.extra?.asPanelChild() }
    val mode = panels.mode
    val broadcastPredictiveBackParams = rememberBroadcastPredictiveBackParams(key = panels, count = 2) { predictiveBackParams(panels) }

    Box(modifier = modifier) {
        layout.Layout(
            mode = mode,
            main = {
                MainPanel(
                    main = main,
                    mode = mode,
                    hasDetails = details != null,
                    hasExtra = extra != null,
                    animators = animators,
                    predictiveBackParams = broadcastPredictiveBackParams,
                    content = mainChild,
                )
            },
            details = {
                DetailsPanel(
                    details = details,
                    mode = mode,
                    hasExtra = extra != null,
                    animators = animators,
                    predictiveBackParams = broadcastPredictiveBackParams,
                    content = detailsChild,
                )
            },
            extra = {
                ExtraPanel(
                    extra = extra,
                    mode = mode,
                    animators = animators,
                    predictiveBackParams = broadcastPredictiveBackParams,
                    content = extraChild,
                )
            },
        )
    }
}

@ExperimentalDecomposeApi
@Composable
private fun <MC : Any, MT : Any> MainPanel(
    main: Child.Created<MC, PanelChild.Panel<MC, MT>>,
    mode: ChildPanelsMode,
    hasDetails: Boolean,
    hasExtra: Boolean,
    animators: ChildPanelsAnimators,
    predictiveBackParams: Lazy<PredictiveBackParams?>,
    content: @Composable (Child.Created<MC, MT>) -> Unit,
) {
    ChildStack(
        stack = when (mode) {
            SINGLE -> stackOfNotNull(main, EmptyChild1.takeIf { hasDetails }, EmptyChild2.takeIf { hasExtra })
            DUAL,
            TRIPLE -> stackOfNotNull(main)
        },
        modifier = Modifier.fillMaxSize(),
        animation = stackAnimation(
            animator = when (mode) {
                SINGLE -> animators.single
                DUAL -> animators.dual.first
                TRIPLE -> animators.triple.first
            },
            predictiveBackParams = { if (it.active != main) predictiveBackParams.value else null },
        ),
    ) {
        when (val child = it.instance) {
            is PanelChild.Panel -> content(child.child)
            is PanelChild.Empty -> Unit // no-op
        }
    }
}

@ExperimentalDecomposeApi
@Composable
private fun <DC : Any, DT : Any> DetailsPanel(
    details: Child.Created<DC, PanelChild.Panel<DC, DT>>?,
    mode: ChildPanelsMode,
    hasExtra: Boolean,
    animators: ChildPanelsAnimators,
    predictiveBackParams: Lazy<PredictiveBackParams?>,
    content: @Composable (Child.Created<DC, DT>) -> Unit,
) {
    ChildStack(
        stack = when (mode) {
            SINGLE -> stackOfNotNull(EmptyChild1, details, EmptyChild2.takeIf { (details != null) && hasExtra })
            DUAL -> stackOfNotNull(EmptyChild3, details, EmptyChild4.takeIf { (details != null) && hasExtra })
            TRIPLE -> stackOfNotNull(EmptyChild3, details)
        },
        modifier = Modifier.fillMaxSize(),
        animation = stackAnimation(
            animator = when (mode) {
                SINGLE -> animators.single
                DUAL -> animators.dual.second
                TRIPLE -> animators.triple.second
            },
            predictiveBackParams = { stack ->
                when {
                    stack.active == EmptyChild2 -> predictiveBackParams.value
                    (stack.active == details) && (stack.items.first() == EmptyChild1) -> predictiveBackParams.value
                    else -> null
                }
            },
        ),
    ) {
        when (val child = it.instance) {
            is PanelChild.Panel -> content(child.child)
            is PanelChild.Empty -> Unit // no-op
        }
    }
}

@ExperimentalDecomposeApi
@Composable
private fun <EC : Any, ET : Any> ExtraPanel(
    extra: Child.Created<EC, PanelChild.Panel<EC, ET>>?,
    mode: ChildPanelsMode,
    animators: ChildPanelsAnimators,
    predictiveBackParams: Lazy<PredictiveBackParams?>,
    content: @Composable (Child.Created<EC, ET>) -> Unit,
) {
    ChildStack(
        stack = stackOfNotNull(if (mode == SINGLE) EmptyChild1 else EmptyChild2, extra),
        modifier = Modifier.fillMaxSize(),
        animation = stackAnimation(
            animator = when (mode) {
                SINGLE -> animators.single
                DUAL -> animators.dual.second
                TRIPLE -> animators.triple.third
            },
            predictiveBackParams = { if (it.backStack.first() == EmptyChild1) predictiveBackParams.value else null },
        ),
    ) {
        when (val child = it.instance) {
            is PanelChild.Panel -> content(child.child)
            is PanelChild.Empty -> Unit // no-op
        }
    }
}

@Composable
private fun rememberBroadcastPredictiveBackParams(
    key: Any,
    count: Int,
    params: () -> PredictiveBackParams?
): Lazy<PredictiveBackParams?> =
    rememberLazy(key) {
        params()?.run {
            var onBackCallCount = 0

            copy(
                backHandler = BroadcastBackHandler(backHandler),
                onBack = {
                    if (++onBackCallCount == count) {
                        onBackCallCount = 0
                        onBack()
                    }
                },
            )
        }
    }

private fun <C : Any, T : Any> stackOfNotNull(vararg stack: Child.Created<C, T>?): ChildStack<C, T> =
    stack.filterNotNull().let {
        ChildStack(active = it.last(), backStack = it.dropLast(1))
    }

private fun <C : Any, T : Any> Child.Created<C, T>.asPanelChild(): Child.Created<C, PanelChild.Panel<C, T>> =
    Child.Created(configuration = configuration, PanelChild.Panel(child = this))

private val EmptyChild1 = Child.Created(configuration = EmptyConfig(value = 1), instance = PanelChild.Empty)
private val EmptyChild2 = Child.Created(configuration = EmptyConfig(value = 2), instance = PanelChild.Empty)
private val EmptyChild3 = Child.Created(configuration = EmptyConfig(value = 3), instance = PanelChild.Empty)
private val EmptyChild4 = Child.Created(configuration = EmptyConfig(value = 4), instance = PanelChild.Empty)

private data class EmptyConfig(val value: Any)

private sealed interface PanelChild<out C : Any, out T : Any> {
    class Panel<out C : Any, out T : Any>(val child: Child.Created<C, T>) : PanelChild<C, T>
    data object Empty : PanelChild<Nothing, Nothing>
}
