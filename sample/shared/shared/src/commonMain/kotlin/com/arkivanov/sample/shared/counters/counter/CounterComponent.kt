package com.arkivanov.sample.shared.counters.counter

import com.arkivanov.decompose.value.Value

interface CounterComponent {

    val model: Value<Model>

    fun onNextClicked()

    fun onPrevClicked()

    data class Model(
        val title: String,
        val text: String,
        val isBackEnabled: Boolean,
    )
}
