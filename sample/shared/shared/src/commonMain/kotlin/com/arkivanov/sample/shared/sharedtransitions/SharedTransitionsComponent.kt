package com.arkivanov.sample.shared.sharedtransitions

import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.sharedtransitions.gallery.GalleryComponent
import com.arkivanov.sample.shared.sharedtransitions.photo.PhotoComponent

interface SharedTransitionsComponent {

    val stack: Value<ChildStack<*, Child>>

    sealed class Child {
        class GalleryChild(val component: GalleryComponent) : Child()
        class PhotoChild(val component: PhotoComponent) : Child()
    }
}
