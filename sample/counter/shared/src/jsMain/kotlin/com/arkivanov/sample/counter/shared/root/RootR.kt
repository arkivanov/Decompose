package com.arkivanov.sample.counter.shared.root

import com.arkivanov.sample.counter.shared.RenderableComponent
import com.arkivanov.sample.counter.shared.counter.CounterR
import com.arkivanov.sample.counter.shared.inner.InnerR
import com.arkivanov.sample.counter.shared.renderableChild
import com.ccfraser.muirwik.components.MColor
import com.ccfraser.muirwik.components.MGridAlignItems
import com.ccfraser.muirwik.components.MGridDirection
import com.ccfraser.muirwik.components.MGridSpacing
import com.ccfraser.muirwik.components.MPaperVariant
import com.ccfraser.muirwik.components.button.MButtonVariant
import com.ccfraser.muirwik.components.button.mButton
import com.ccfraser.muirwik.components.direction
import com.ccfraser.muirwik.components.mGridContainer
import com.ccfraser.muirwik.components.mGridItem
import com.ccfraser.muirwik.components.mPaper
import react.RBuilder
import react.RState
import react.dom.br
import styled.styledDiv

class RootR(props: Props<CounterRootContainer.Model>) : RenderableComponent<CounterRootContainer.Model, RootR.State>(
    props = props,
    initialState = State(child = props.model.child.value)
) {

    init {
        model.child.bindToState { child = it }
    }

    override fun RBuilder.render() {
        mPaper(variant = MPaperVariant.outlined) {
            renderableChild(CounterR::class, this@RootR.model.counter)

            br {}

            childWithButtons(state.child)

            br {}
        }
    }

    private fun RBuilder.childWithButtons(childModel: CounterRootContainer.Model.Child) {
        mGridContainer(alignItems = MGridAlignItems.center, spacing = MGridSpacing.spacing3) {
            attrs {
                direction = MGridDirection.column
            }

            mGridItem {
                styledDiv {
                    mButton(
                        caption = "Next Child",
                        variant = MButtonVariant.contained,
                        color = MColor.primary,
                        onClick = { model.onNextChild() }
                    )
                }

                br {}

                styledDiv {
                    mButton(
                        "Prev Child",
                        variant = MButtonVariant.contained,
                        disabled = !childModel.isBackEnabled,
                        onClick = { model.onPrevChild() }
                    )
                }
            }

            mGridItem {
                renderableChild(InnerR::class, childModel.inner)
            }
        }
    }

    class State(
        var child: CounterRootContainer.Model.Child,
    ) : RState
}
