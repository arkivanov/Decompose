package com.arkivanov.sample.shared.sharedtransitions.gallery

import com.arkivanov.sample.shared.ImageResourceId
import com.arkivanov.sample.shared.sharedtransitions.photo.Image

class PreviewGalleryComponent : GalleryComponent {

    override val images: List<Image> =
        List(10) { index ->
            Image(
                id = index,
                resourceId = ImageResourceId.entries[index % ImageResourceId.entries.size],
            )
        }

    override fun onImageClicked(index: Int) {}
    override fun onCloseClicked() {}
}
