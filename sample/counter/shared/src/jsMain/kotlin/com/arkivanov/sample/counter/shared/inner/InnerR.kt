package com.arkivanov.sample.counter.shared.inner

import com.arkivanov.decompose.RouterState
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

class InnerR(props: Props<CounterInnerContainer.Model>) : RenderableComponent<CounterInnerContainer.Model, InnerR.State>(
    props = props,
    initialState = State(
        leftRouterState = props.model.leftChild.value,
        rightRouterState = props.model.rightChild.value
    )
) {

    init {
        model.leftChild.bindToState { leftRouterState = it }
        model.rightChild.bindToState { rightRouterState = it }
    }

    override fun RBuilder.render() {
        mPaper(variant = MPaperVariant.outlined) {
            renderableChild(CounterR::class, this@InnerR.model.counter)

            br {}

            mGridContainer(justify = MGridJustify.spaceAround, spacing = MGridSpacing.spacing3) {
                mGridItem {}
                childWithButtons(
                    child = state.leftRouterState.activeChild.instance,
                    onNext = model::onNextLeftChild,
                    onPrev = model::onPrevLeftChild
                )
                childWithButtons(
                    child = state.rightRouterState.activeChild.instance,
                    onNext = model::onNextRightChild,
                    onPrev = model::onPrevRightChild
                )
                mGridItem {}
            }

            br {}
        }
    }

    private fun RBuilder.childWithButtons(
        child: CounterInnerContainer.Child,
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

    class State(
        var leftRouterState: RouterState<*, CounterInnerContainer.Child>,
        var rightRouterState: RouterState<*, CounterInnerContainer.Child>
    ) : RState
}
