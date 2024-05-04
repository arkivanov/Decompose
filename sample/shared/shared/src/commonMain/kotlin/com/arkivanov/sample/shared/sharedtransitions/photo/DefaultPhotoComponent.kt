package com.arkivanov.sample.shared.sharedtransitions.photo

class DefaultPhotoComponent(
    override val image: Image,
    private val onFinished: () -> Unit,
) : PhotoComponent {

    override fun onCloseClicked() {
        onFinished()
    }
}
