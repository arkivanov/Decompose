package com.arkivanov.sample.shared.sharedtransitions.gallery

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.items.LazyChildItems
import com.arkivanov.sample.shared.sharedtransitions.Image
import com.arkivanov.sample.shared.sharedtransitions.thumbnail.ThumbnailComponent

interface GalleryComponent {

    @OptIn(ExperimentalDecomposeApi::class)
    val items: LazyChildItems<Image, ThumbnailComponent>

    fun onCloseClicked()
}
