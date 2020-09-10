package com.arkivanov.sample.counter.shared.counter

import com.arkivanov.sample.counter.shared.RenderableComponent
import com.ccfraser.muirwik.components.MPaperVariant
import com.ccfraser.muirwik.components.MTypographyAlign
import com.ccfraser.muirwik.components.mPaper
import com.ccfraser.muirwik.components.mTypography
import react.RBuilder
import react.RState

class CounterR(props: Props<Counter.Model>) : RenderableComponent<Counter.Model, CounterR.State>(
    props = props,
    initialState = State(data = props.model.data.value)
) {

    init {
        model.data.bindToState { data = it }
    }

    override fun RBuilder.render() {
        mPaper(variant = MPaperVariant.outlined) {
            mTypography(state.data.text, align = MTypographyAlign.center)
        }
    }

    class State(
        var data: Counter.Data
    ) : RState
}
