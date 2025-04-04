package com.arkivanov.sample.shared.sharedtransitions.gallery

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.children.transientNavStateSaver
import com.arkivanov.decompose.router.items.Items
import com.arkivanov.decompose.router.items.ItemsNavigation
import com.arkivanov.decompose.router.items.LazyChildItems
import com.arkivanov.decompose.router.items.childItems
import com.arkivanov.sample.shared.sharedtransitions.Image
import com.arkivanov.sample.shared.sharedtransitions.thumbnail.DefaultThumbnailComponent
import com.arkivanov.sample.shared.sharedtransitions.thumbnail.ThumbnailComponent

@OptIn(ExperimentalDecomposeApi::class)
class DefaultGalleryComponent(
    componentContext: ComponentContext,
    private val images: List<Image>,
    private val onImageSelected: (id: Int) -> Unit,
    private val onFinished: () -> Unit,
) : GalleryComponent, ComponentContext by componentContext {

    private val nav = ItemsNavigation<Image>()

    override val items: LazyChildItems<Image, ThumbnailComponent> =
        childItems(
            source = nav,
            stateSaver = transientNavStateSaver(),
            initialItems = { Items(items = images) },
            childFactory = ::child,
        )

    private fun child(image: Image, ctx: ComponentContext): ThumbnailComponent =
        DefaultThumbnailComponent(
            componentContext = ctx,
            image = image,
            onSelected = { onImageSelected(image.id) },
        )

    override fun onCloseClicked() {
        onFinished()
    }
}
