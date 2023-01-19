package com.arkivanov.sample.shared.counters.counter

import com.arkivanov.decompose.router.overlay.ChildOverlay
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.dialog.DialogComponent

interface CounterComponent {

    val model: Value<Model>
    val dialogOverlay: Value<ChildOverlay<*, DialogComponent>>

    fun onInfoClicked()

    fun onNextClicked()

    fun onPrevClicked()

    data class Model(
        val title: String = "",
        val text: String = "",
        val isBackEnabled: Boolean = false,
    )
}
