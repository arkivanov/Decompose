@file:OptIn(ExperimentalDecomposeApi::class)

package com.arkivanov.decompose.sample.app

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.material.Button
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.pages.ChildPages
import com.arkivanov.decompose.extensions.compose.pages.PagesScrollAnimation
import com.arkivanov.decompose.extensions.compose.stack.Children
import com.arkivanov.decompose.router.pages.ChildPages
import com.arkivanov.decompose.router.pages.Pages
import com.arkivanov.decompose.router.pages.PagesNavigation
import com.arkivanov.decompose.router.pages.childPages
import com.arkivanov.decompose.router.pages.childPagesWebNavigation
import com.arkivanov.decompose.router.pages.select
import com.arkivanov.decompose.router.pages.selectNext
import com.arkivanov.decompose.router.pages.selectPrev
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.router.stack.StackNavigation
import com.arkivanov.decompose.router.stack.childStack
import com.arkivanov.decompose.router.stack.childStackWebNavigation
import com.arkivanov.decompose.router.stack.pop
import com.arkivanov.decompose.router.stack.pushNew
import com.arkivanov.decompose.router.webhistory.WebNavigation
import com.arkivanov.decompose.router.webhistory.WebNavigationOwner
import com.arkivanov.decompose.value.Value
import kotlinx.serialization.Serializable

class ChildComponent(
    componentContext: ComponentContext,
    val number: Int,
    val onNext: () -> Unit,
    val onPrev: () -> Unit,
)

@Composable
fun ChildContent(component: ChildComponent) {
    Column {
        Text(text = "Child ${component.number}")

        Row {
            Button(onClick = component.onPrev) {
                Text("Prev child")
            }

            Button(onClick = component.onNext) {
                Text("Next child")
            }
        }
    }
}

class StackComponent(
    componentContext: ComponentContext,
    val number: Int,
    val onNext: () -> Unit,
    val onPrev: () -> Unit,
) : ComponentContext by componentContext, WebNavigationOwner {

    private val nav = StackNavigation<Cfg>()

    val stack: Value<ChildStack<Cfg, ChildComponent>> =
        childStack(
            source = nav,
            serializer = Cfg.serializer(),
            initialConfiguration = Cfg(0),
        ) { cfg, ctx ->
            ChildComponent(
                componentContext = ctx,
                number = cfg.number,
                onNext = ::next,
                onPrev = ::prev,
            )
        }

    override val webNavigation: WebNavigation<*> =
        childStackWebNavigation(
            navigator = nav,
            stack = stack,
            serializer = Cfg.serializer(),
            pathMapper = { it.instance.number.toString() },
        )

    fun next() {
        nav.pushNew(Cfg(stack.value.active.configuration.number + 1))
    }

    fun prev() {
        nav.pop()
    }

    @Serializable
    data class Cfg(val number: Int)
}

@Composable
fun StackContent(component: StackComponent) {
    Column {
        Text("Page ${component.number}")

        Children(
            stack = component.stack,
        ) {
            ChildContent(it.instance)
        }

        Row {
            Button(onClick = component.onPrev) {
                Text("Prev page")
            }

            Button(onClick = component.onNext) {
                Text("Next page")
            }
        }
    }
}

class PagesComponent(componentContext: ComponentContext) : ComponentContext by componentContext, WebNavigationOwner {

    private val nav = PagesNavigation<Cfg>()

    val pages: Value<ChildPages<Cfg, StackComponent>> =
        childPages(
            source = nav,
            serializer = Cfg.serializer(),
            initialPages = { Pages(items = listOf(Cfg(0), Cfg(1)), selectedIndex = 0) },
        ) { cfg, ctx ->
            StackComponent(
                componentContext = ctx,
                number = cfg.number,
                onNext = nav::selectNext,
                onPrev = nav::selectPrev,
            )
        }

    override val webNavigation: WebNavigation<*> =
        childPagesWebNavigation(
            navigator = nav,
            pages = pages,
            serializer = Cfg.serializer(),
            pathMapper = { it.selectedIndex.toString() },
            childSelector = { it.instance },
        )

    fun selectPage(index: Int) {
        nav.select(index)
    }

    @Serializable
    data class Cfg(val number: Int)
}

@Composable
fun PagesContent(component: PagesComponent) {
    ChildPages(
        pages = component.pages,
        onPageSelected = component::selectPage,
        scrollAnimation = PagesScrollAnimation.Default,
    ) { _, page ->
        StackContent(page)
    }
}
