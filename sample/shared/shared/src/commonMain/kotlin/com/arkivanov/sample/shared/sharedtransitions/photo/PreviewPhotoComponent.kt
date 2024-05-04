package com.arkivanov.sample.shared.sharedtransitions.photo

import com.arkivanov.sample.shared.ImageResourceId

class PreviewPhotoComponent : PhotoComponent {

    override val image: Image = Image(id = 1, resourceId = ImageResourceId.CAT_1)

    override fun onCloseClicked() {}
}
