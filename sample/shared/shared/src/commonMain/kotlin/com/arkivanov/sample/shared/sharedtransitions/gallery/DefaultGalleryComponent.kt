package com.arkivanov.sample.shared.sharedtransitions.gallery

import com.arkivanov.sample.shared.sharedtransitions.photo.Image

class DefaultGalleryComponent(
    override val images: List<Image>,
    private val onImageSelected: (id: Int) -> Unit,
    private val onFinished: () -> Unit,
) : GalleryComponent {

    override fun onImageClicked(id: Int) {
        onImageSelected(id)
    }

    override fun onCloseClicked() {
        onFinished()
    }
}
