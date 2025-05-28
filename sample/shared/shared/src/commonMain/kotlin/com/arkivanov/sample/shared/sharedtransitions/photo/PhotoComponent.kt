package com.arkivanov.sample.shared.sharedtransitions.photo

import com.arkivanov.sample.shared.sharedtransitions.Image

interface PhotoComponent {

    val image: Image

    fun onCloseClicked()
}
