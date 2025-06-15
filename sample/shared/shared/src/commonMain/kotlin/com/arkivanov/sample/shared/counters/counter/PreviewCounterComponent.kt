package com.arkivanov.sample.shared.counters.counter

import com.arkivanov.decompose.router.slot.ChildSlot
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.counters.counter.CounterComponent.Model
import com.arkivanov.sample.shared.dialog.DialogComponent
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow

class PreviewCounterComponent : CounterComponent {

    override val model: StateFlow<Model> =
        MutableStateFlow(
            Model(
                title = "Counter 0",
                text = "123",
                isBackEnabled = false,
            )
        )

    override val dialogSlot: Value<ChildSlot<Unit, DialogComponent>> =
        MutableValue(ChildSlot())

    override fun onNextClicked() {}
    override fun onPrevClicked() {}
    override fun onInfoClicked() {}
}
