package com.arkivanov.sample.counter.shared.counter

import com.arkivanov.sample.counter.shared.Props
import com.arkivanov.sample.counter.shared.RenderableComponent
import com.ccfraser.muirwik.components.MPaperVariant
import com.ccfraser.muirwik.components.MTypographyAlign
import com.ccfraser.muirwik.components.mPaper
import com.ccfraser.muirwik.components.mTypography
import react.RBuilder
import react.RState

external interface CounterState : RState {
    var model: Counter.Model
}

class CounterR(props: Props<Counter>) : RenderableComponent<Counter, CounterState>(
    props = props,
    initialState = (js("{}") as CounterState).apply { model = props.component.model.value }
) {

    init {
        component.model.bindToState { model = it }
    }

    override fun RBuilder.render() {
        mPaper(variant = MPaperVariant.outlined) {
            mTypography(state.model.text, align = MTypographyAlign.center)
        }
    }
}
