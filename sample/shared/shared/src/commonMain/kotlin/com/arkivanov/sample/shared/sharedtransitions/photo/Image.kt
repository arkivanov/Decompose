package com.arkivanov.sample.shared.sharedtransitions.photo

import com.arkivanov.sample.shared.ImageResourceId
import kotlinx.serialization.Serializable

@Serializable
data class Image(
    val id: Int,
    val resourceId: ImageResourceId,
)
