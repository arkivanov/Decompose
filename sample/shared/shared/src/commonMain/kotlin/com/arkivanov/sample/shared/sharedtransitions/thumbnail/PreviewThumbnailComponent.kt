package com.arkivanov.sample.shared.sharedtransitions.thumbnail

import com.arkivanov.sample.shared.ImageResourceId
import com.arkivanov.sample.shared.sharedtransitions.Image

class PreviewThumbnailComponent(
    override val image: Image = Image(id = 1, resourceId = ImageResourceId.CAT_1),
) : ThumbnailComponent {

    override fun onClicked() {}
}
