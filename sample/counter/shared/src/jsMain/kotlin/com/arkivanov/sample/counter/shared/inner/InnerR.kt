package com.arkivanov.sample.counter.shared.inner

import com.arkivanov.decompose.router.RouterState
import com.arkivanov.sample.counter.shared.Props
import com.arkivanov.sample.counter.shared.RenderableComponent
import com.arkivanov.sample.counter.shared.counter.CounterR
import com.arkivanov.sample.counter.shared.renderableChild
import com.ccfraser.muirwik.components.MColor
import com.ccfraser.muirwik.components.MGridJustify
import com.ccfraser.muirwik.components.MGridSpacing
import com.ccfraser.muirwik.components.MPaperVariant
import com.ccfraser.muirwik.components.button.MButtonVariant
import com.ccfraser.muirwik.components.button.mButton
import com.ccfraser.muirwik.components.mGridContainer
import com.ccfraser.muirwik.components.mGridItem
import com.ccfraser.muirwik.components.mPaper
import react.RBuilder
import react.RState
import react.dom.br
import styled.styledDiv

external interface InnerState : RState {
    var leftRouterState: RouterState<*, CounterInner.Child>
    var rightRouterState: RouterState<*, CounterInner.Child>
}

class InnerR(props: Props<CounterInner>) : RenderableComponent<CounterInner, InnerState>(
    props = props,
    initialState = (js("{}") as InnerState).apply {
        leftRouterState = props.component.leftRouterState.value
        rightRouterState = props.component.rightRouterState.value
    }
) {

    init {
        component.leftRouterState.bindToState { leftRouterState = it }
        component.rightRouterState.bindToState { rightRouterState = it }
    }

    override fun RBuilder.render() {
        mPaper(variant = MPaperVariant.outlined) {
            renderableChild(CounterR::class, this@InnerR.component.counter)

            br {}

            mGridContainer(justify = MGridJustify.spaceAround, spacing = MGridSpacing.spacing3) {
                mGridItem {}
                childWithButtons(
                    child = state.leftRouterState.activeChild.instance,
                    onNext = component::onNextLeftChild,
                    onPrev = component::onPrevLeftChild
                )
                childWithButtons(
                    child = state.rightRouterState.activeChild.instance,
                    onNext = component::onNextRightChild,
                    onPrev = component::onPrevRightChild
                )
                mGridItem {}
            }

            br {}
        }
    }

    private fun RBuilder.childWithButtons(
        child: CounterInner.Child,
        onNext: () -> Unit,
        onPrev: () -> Unit
    ) {
        mGridItem {
            styledDiv {
                mButton(
                    caption = "Next counter",
                    variant = MButtonVariant.contained,
                    color = MColor.primary,
                    onClick = { onNext() }
                )
            }

            br {}

            styledDiv {
                mButton(
                    caption = "Prev counter",
                    variant = MButtonVariant.contained,
                    disabled = !child.isBackEnabled,
                    onClick = { onPrev() }
                )
            }

            br {}

            renderableChild(CounterR::class, child.counter)
        }
    }
}
