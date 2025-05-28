package com.arkivanov.sample.shared.sharedtransitions.gallery

import com.arkivanov.decompose.router.items.LazyChildItems
import com.arkivanov.sample.shared.ImageResourceId
import com.arkivanov.sample.shared.SimpleLazyChildItems
import com.arkivanov.sample.shared.sharedtransitions.Image
import com.arkivanov.sample.shared.sharedtransitions.thumbnail.PreviewThumbnailComponent
import com.arkivanov.sample.shared.sharedtransitions.thumbnail.ThumbnailComponent

class PreviewGalleryComponent : GalleryComponent {

    override val items: LazyChildItems<Image, ThumbnailComponent> =
        SimpleLazyChildItems(
            List(10) { index ->
                PreviewThumbnailComponent(
                    image = Image(
                        id = index,
                        resourceId = ImageResourceId.entries[index % ImageResourceId.entries.size],
                    ),
                )
            }.associateBy { it.image },
        )

    override fun onCloseClicked() {}
}
