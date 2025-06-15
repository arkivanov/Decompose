package com.arkivanov.sample.shared.counters.counter

import com.arkivanov.decompose.router.slot.ChildSlot
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.dialog.DialogComponent
import kotlinx.coroutines.flow.StateFlow

interface CounterComponent {

    val model: StateFlow<Model>
    val dialogSlot: Value<ChildSlot<*, DialogComponent>>

    fun onInfoClicked()

    fun onNextClicked()

    fun onPrevClicked()

    data class Model(
        val title: String = "",
        val text: String = "",
        val isBackEnabled: Boolean = false,
    )
}
