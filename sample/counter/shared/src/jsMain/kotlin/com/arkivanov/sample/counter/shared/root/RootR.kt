package com.arkivanov.sample.counter.shared.root

import com.arkivanov.decompose.RouterState
import com.arkivanov.sample.counter.shared.Props
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

external interface RootState : RState {
    var routerState: RouterState<*, CounterRoot.Child>
}

class RootR(props: Props<CounterRoot>) : RenderableComponent<CounterRoot, RootState>(
    props = props,
    initialState = (js("{}") as RootState).apply { routerState = props.component.routerState.value }
) {

    init {
        component.routerState.bindToState { routerState = it }
    }

    override fun RBuilder.render() {
        mPaper(variant = MPaperVariant.outlined) {
            renderableChild(CounterR::class, this@RootR.component.counter)

            br {}

            childWithButtons(state.routerState.activeChild.instance)

            br {}
        }
    }

    private fun RBuilder.childWithButtons(child: CounterRoot.Child) {
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
                        onClick = { component.onNextChild() }
                    )
                }

                br {}

                styledDiv {
                    mButton(
                        "Prev Child",
                        variant = MButtonVariant.contained,
                        disabled = !child.isBackEnabled,
                        onClick = { component.onPrevChild() }
                    )
                }
            }

            mGridItem {
                renderableChild(InnerR::class, child.inner)
            }
        }
    }
}
