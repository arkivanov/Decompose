package com.arkivanov.sample.shared.sharedtransitions.gallery

import com.arkivanov.sample.shared.ImageResourceId
import com.arkivanov.sample.shared.sharedtransitions.photo.Image

class DefaultGalleryComponent(
    private val onImageSelected: (Image) -> Unit,
    private val onFinished: () -> Unit,
) : GalleryComponent {

    override val images: List<Image> =
        List(100) { index ->
            Image(
                id = index,
                resourceId = ImageResourceId.entries[index % ImageResourceId.entries.size],
            )
        }

    override fun onImageClicked(index: Int) {
        onImageSelected(images[index])
    }

    override fun onCloseClicked() {
        onFinished()
    }
}
