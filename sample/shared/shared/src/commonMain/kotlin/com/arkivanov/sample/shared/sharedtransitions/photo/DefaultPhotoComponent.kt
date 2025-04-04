package com.arkivanov.sample.shared.sharedtransitions.photo

import com.arkivanov.sample.shared.sharedtransitions.Image

class DefaultPhotoComponent(
    override val image: Image,
    private val onFinished: () -> Unit,
) : PhotoComponent {

    override fun onCloseClicked() {
        onFinished()
    }
}
