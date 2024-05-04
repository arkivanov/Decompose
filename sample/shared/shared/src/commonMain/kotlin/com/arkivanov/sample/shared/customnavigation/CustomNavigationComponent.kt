package com.arkivanov.sample.shared.customnavigation

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.value.Value

interface CustomNavigationComponent {

    val children: Value<Children<*, KittenComponent>>

    fun onSwitchToPagerClicked()
    fun onSwitchToCarouselClicked()
    fun onForwardClicked()
    fun onBackwardClicked()
    fun onShuffleClicked()
    fun onCloseClicked()

    class Children<out C : Any, out T : Any>(
        val items: List<Child.Created<C, T>>,
        val index: Int,
        val mode: Mode,
    )

    enum class Mode {
        CAROUSEL, PAGER
    }
}
