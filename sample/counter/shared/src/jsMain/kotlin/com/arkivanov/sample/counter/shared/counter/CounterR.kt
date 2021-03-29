package com.arkivanov.sample.counter.shared.counter

import com.arkivanov.sample.counter.shared.RenderableComponent
import com.ccfraser.muirwik.components.MPaperVariant
import com.ccfraser.muirwik.components.MTypographyAlign
import com.ccfraser.muirwik.components.mPaper
import com.ccfraser.muirwik.components.mTypography
import react.RBuilder
import react.RState

class CounterR(props: Props<Counter>) : RenderableComponent<Counter, CounterR.State>(
    props = props,
    initialState = State(model = props.component.model.value)
) {

    init {
        component.model.bindToState { model = it }
    }

    override fun RBuilder.render() {
        mPaper(variant = MPaperVariant.outlined) {
            mTypography(state.model.text, align = MTypographyAlign.center)
        }
    }

    class State(
        var model: Counter.Model
    ) : RState
}
