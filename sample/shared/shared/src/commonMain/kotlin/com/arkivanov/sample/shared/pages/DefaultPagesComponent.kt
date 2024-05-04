package com.arkivanov.sample.shared.pages

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.pages.ChildPages
import com.arkivanov.decompose.router.pages.Pages
import com.arkivanov.decompose.router.pages.PagesNavigation
import com.arkivanov.decompose.router.pages.childPages
import com.arkivanov.decompose.router.pages.select
import com.arkivanov.decompose.router.pages.selectNext
import com.arkivanov.decompose.router.pages.selectPrev
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.ImageResourceId
import com.arkivanov.sample.shared.customnavigation.DefaultKittenComponent
import com.arkivanov.sample.shared.customnavigation.KittenComponent
import kotlinx.serialization.serializer

@OptIn(ExperimentalDecomposeApi::class)
class DefaultPagesComponent(
    componentContext: ComponentContext,
    private val onFinished: () -> Unit,
) : PagesComponent, ComponentContext by componentContext {

    private val nav = PagesNavigation<ImageResourceId>()

    override val pages: Value<ChildPages<*, KittenComponent>> =
        childPages(
            source = nav,
            serializer = serializer<ImageResourceId>(),
            initialPages = { Pages(items = ImageResourceId.entries, selectedIndex = 0) },
            childFactory = { imageType, ctx -> DefaultKittenComponent(ctx, imageType) },
        )

    override fun selectPage(index: Int) {
        nav.select(index = index)
    }

    override fun selectNext() {
        nav.selectNext()
    }

    override fun selectPrev() {
        nav.selectPrev()
    }

    override fun onCloseClicked() {
        onFinished()
    }
}
