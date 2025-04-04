package com.arkivanov.sample.shared.sharedtransitions.thumbnail

import com.arkivanov.sample.shared.sharedtransitions.Image

interface ThumbnailComponent {

    val image: Image

    fun onClicked()
}
