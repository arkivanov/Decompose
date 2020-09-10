package com.arkivanov.sample.counter.shared.inner

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
        leftChild = props.model.leftChild.value,
        rightChild = props.model.rightChild.value
    )
) {

    init {
        model.leftChild.bindToState { leftChild = it }
        model.rightChild.bindToState { rightChild = it }
    }

    override fun RBuilder.render() {
        mPaper(variant = MPaperVariant.outlined) {
            renderableChild(CounterR::class, this@InnerR.model.counter)

            br {}

            mGridContainer(justify = MGridJustify.spaceAround, spacing = MGridSpacing.spacing3) {
                mGridItem {}
                childWithButtons(state.leftChild, onNext = model::onNextLeftChild, onPrev = model::onPrevLeftChild)
                childWithButtons(state.rightChild, onNext = model::onNextRightChild, onPrev = model::onPrevRightChild)
                mGridItem {}
            }

            br {}
        }
    }

    private fun RBuilder.childWithButtons(
        childModel: CounterInnerContainer.Model.Child,
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
                    disabled = !childModel.isBackEnabled,
                    onClick = { onPrev() }
                )
            }

            br {}

            renderableChild(CounterR::class, childModel.counter)
        }
    }

    class State(
        var leftChild: CounterInnerContainer.Model.Child,
        var rightChild: CounterInnerContainer.Model.Child
    ) : RState
}
