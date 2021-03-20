package com.arkivanov.sample.counter.shared.root

import com.arkivanov.decompose.RouterState
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
    initialState = State(routerState = props.model.child.value)
) {

    init {
        model.child.bindToState { routerState = it }
    }

    override fun RBuilder.render() {
        mPaper(variant = MPaperVariant.outlined) {
            renderableChild(CounterR::class, this@RootR.model.counter)

            br {}

            childWithButtons(state.routerState.activeChild.instance)

            br {}
        }
    }

    private fun RBuilder.childWithButtons(child: CounterRootContainer.Child) {
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
                        disabled = !child.isBackEnabled,
                        onClick = { model.onPrevChild() }
                    )
                }
            }

            mGridItem {
                renderableChild(InnerR::class, child.inner)
            }
        }
    }

    class State(
        var routerState: RouterState<*, CounterRootContainer.Child>,
    ) : RState
}
