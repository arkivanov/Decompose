package com.arkivanov.sample.shared.sharedtransitions.gallery

import com.arkivanov.sample.shared.sharedtransitions.photo.Image

interface GalleryComponent {

    val images: List<Image>

    fun onImageClicked(index: Int)
    fun onCloseClicked()
}
