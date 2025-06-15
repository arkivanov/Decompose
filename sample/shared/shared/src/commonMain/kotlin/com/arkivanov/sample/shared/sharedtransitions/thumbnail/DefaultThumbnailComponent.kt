package com.arkivanov.sample.shared.sharedtransitions.thumbnail

import com.arkivanov.decompose.JetpackComponentContext
import com.arkivanov.sample.shared.sharedtransitions.Image

class DefaultThumbnailComponent(
    componentContext: JetpackComponentContext,
    override val image: Image,
    private val onSelected: () -> Unit,
) : ThumbnailComponent, JetpackComponentContext by componentContext {

    override fun onClicked() {
        onSelected()
    }
}
