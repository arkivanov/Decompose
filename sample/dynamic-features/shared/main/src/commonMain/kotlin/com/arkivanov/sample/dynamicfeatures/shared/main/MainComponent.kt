package com.arkivanov.sample.dynamicfeatures.shared.main

import com.arkivanov.decompose.ComponentContext

class MainComponent(
    componentContext: ComponentContext,
    private val onFeature1: () -> Unit
) : Main, ComponentContext by componentContext {

    override fun onFeature1Clicked() {
        onFeature1()
    }
}
