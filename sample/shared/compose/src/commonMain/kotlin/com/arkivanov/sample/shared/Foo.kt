package com.arkivanov.sample.shared

import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.jetbrains.pages.Pages
import com.arkivanov.decompose.router.pages.ChildPages
import com.arkivanov.decompose.router.pages.Pages
import com.arkivanov.decompose.router.pages.PagesNavigation
import com.arkivanov.decompose.router.pages.childPages
import com.arkivanov.decompose.router.pages.select
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.Parcelize

class PageComponent(val index: Int)

@OptIn(ExperimentalDecomposeApi::class)
class PagesComponent(componentContext: ComponentContext) : ComponentContext by componentContext {

    private val nav = PagesNavigation<Config>()

    val pages: Value<ChildPages<*, PageComponent>> =
        childPages<Config, PageComponent>(
            source = nav,
            initialPages = { Pages(items = List(10) { Config(index = it) }, selectedIndex = 0) },
            childFactory = { config, _ -> PageComponent(index = config.index) },
        )

    fun selectPage(index: Int) {
        nav.select(index = index)
    }

    @Parcelize
    private data class Config(val index: Int) : Parcelable
}

@OptIn(ExperimentalFoundationApi::class, ExperimentalDecomposeApi::class)
@Composable
fun PagesContent(component: PagesComponent) {
    Pages(
        pages = component.pages,
        onPageSelected = component::selectPage,
        modifier = Modifier.fillMaxSize(),
    ) { _, page ->
        PageContent(page)
    }
}

@Composable
fun PageContent(component: PageComponent) {
    val colors = listOf(Color.Gray, Color.Green, Color.Red, Color.Blue)
    val index = component.index

    Text(
        text = "Item $index",
        modifier = Modifier.fillMaxSize().background(colors[index % colors.size]),
    )
}
