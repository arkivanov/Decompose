package com.arkivanov.sample.shared.sharedtransitions.thumbnail

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.sample.shared.sharedtransitions.Image

class DefaultThumbnailComponent(
    componentContext: ComponentContext,
    override val image: Image,
    private val onSelected: () -> Unit,
) : ThumbnailComponent, ComponentContext by componentContext {

    override fun onClicked() {
        onSelected()
    }
}
