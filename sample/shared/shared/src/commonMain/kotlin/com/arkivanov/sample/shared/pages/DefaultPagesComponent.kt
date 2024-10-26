package com.arkivanov.sample.shared.pages

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.pages.ChildPages
import com.arkivanov.decompose.router.pages.Pages
import com.arkivanov.decompose.router.pages.PagesNavigation
import com.arkivanov.decompose.router.pages.childPages
import com.arkivanov.decompose.router.pages.childPagesWebNavigation
import com.arkivanov.decompose.router.pages.select
import com.arkivanov.decompose.router.pages.selectNext
import com.arkivanov.decompose.router.pages.selectPrev
import com.arkivanov.decompose.router.webhistory.WebNavigation
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.ImageResourceId
import com.arkivanov.sample.shared.Url
import com.arkivanov.sample.shared.consumePathSegment
import com.arkivanov.sample.shared.customnavigation.DefaultKittenComponent
import com.arkivanov.sample.shared.customnavigation.KittenComponent

class DefaultPagesComponent(
    componentContext: ComponentContext,
    deepLinkUrl: Url?,
    private val onFinished: () -> Unit,
) : PagesComponent, ComponentContext by componentContext {

    private val nav = PagesNavigation<ImageResourceId>()

    private val _pages: Value<ChildPages<ImageResourceId, KittenComponent>> =
        childPages(
            source = nav,
            serializer = ImageResourceId.serializer(),
            initialPages = { Pages(items = ImageResourceId.entries, selectedIndex = getInitialPageIndex(deepLinkUrl)) },
            childFactory = { imageType, ctx -> DefaultKittenComponent(ctx, imageType) },
        )

    override val pages: Value<ChildPages<*, KittenComponent>> = _pages

    @OptIn(ExperimentalDecomposeApi::class)
    override val webNavigation: WebNavigation<*> =
        childPagesWebNavigation(
            navigator = nav,
            pages = _pages,
            serializer = ImageResourceId.serializer(),
            pathMapper = { it.items.getOrNull(it.selectedIndex)?.configuration?.name },
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

    private fun getInitialPageIndex(deepLinkUrl: Url?): Int {
        val (path) = deepLinkUrl?.consumePathSegment() ?: return 0

        return ImageResourceId.entries.indexOfFirst { it.name == path }.takeIf { it >= 0 } ?: 0
    }
}
