package com.arkivanov.sample.shared.counters.counter

import com.arkivanov.decompose.router.overlay.ChildOverlay
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.sample.shared.counters.counter.CounterComponent.Model
import com.arkivanov.sample.shared.dialog.DialogComponent

class TestCounterComponent(model: Model = Model()) : CounterComponent {

    override val model: MutableValue<Model> = MutableValue(model)
    override val dialogOverlay: MutableValue<ChildOverlay<Any, DialogComponent>> = MutableValue(ChildOverlay())

    var isNextClicked: Boolean = false
    var isPrevClicked: Boolean = false

    override fun onInfoClicked() {}

    override fun onNextClicked() {
        isNextClicked = true
    }

    override fun onPrevClicked() {
        isPrevClicked = true
    }
}
