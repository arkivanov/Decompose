package com.arkivanov.decompose.extensions.compose.jetbrains.pages

import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.pager.HorizontalPager
import androidx.compose.foundation.pager.PagerScope
import androidx.compose.foundation.pager.PagerState
import androidx.compose.foundation.pager.VerticalPager
import androidx.compose.foundation.pager.rememberPagerState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.State
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.Ref
import com.arkivanov.decompose.extensions.compose.jetbrains.subscribeAsState
import com.arkivanov.decompose.hashString
import com.arkivanov.decompose.router.pages.ChildPages
import com.arkivanov.decompose.value.Value

/**
 * Displays a list of pages represented by [ChildPages].
 */
@ExperimentalFoundationApi
@ExperimentalDecomposeApi
@Composable
fun <C : Any, T : Any> Pages(
    pages: Value<ChildPages<C, T>>,
    onPageSelected: (index: Int) -> Unit,
    modifier: Modifier = Modifier,
    scrollAnimation: PagesScrollAnimation = PagesScrollAnimation.Disabled,
    pager: Pager = defaultHorizontalPager(),
    key: (Child<C, T>) -> Any = { it.configuration.hashString() },
    pageContent: @Composable PagerScope.(index: Int, page: T) -> Unit,
) {
    val state = pages.subscribeAsState()

    Pages(
        pages = state,
        onPageSelected = onPageSelected,
        modifier = modifier,
        scrollAnimation = scrollAnimation,
        pager = pager,
        key = key,
        pageContent = pageContent,
    )
}

/**
 * Displays a list of pages represented by [ChildPages].
 */
@ExperimentalFoundationApi
@ExperimentalDecomposeApi
@Composable
fun <C : Any, T : Any> Pages(
    pages: State<ChildPages<C, T>>,
    onPageSelected: (index: Int) -> Unit,
    modifier: Modifier = Modifier,
    scrollAnimation: PagesScrollAnimation = PagesScrollAnimation.Disabled,
    pager: Pager = defaultHorizontalPager(),
    key: (Child<C, T>) -> Any = { it.configuration.hashString() },
    pageContent: @Composable PagerScope.(index: Int, page: T) -> Unit,
) {
    val childPages by pages
    val selectedIndex = childPages.selectedIndex
    val state = rememberPagerState(
        initialPage = selectedIndex,
        pageCount = { childPages.items.size },
    )

    LaunchedEffect(selectedIndex) {
        if (state.currentPage != selectedIndex) {
            when (scrollAnimation) {
                is PagesScrollAnimation.Disabled -> state.scrollToPage(selectedIndex)
                is PagesScrollAnimation.Default -> state.animateScrollToPage(page = selectedIndex)
                is PagesScrollAnimation.Custom -> state.animateScrollToPage(page = selectedIndex, animationSpec = scrollAnimation.spec)
            }
        }
    }

    DisposableEffect(state.currentPage, state.targetPage) {
        if (state.currentPage == state.targetPage) {
            onPageSelected(state.currentPage)
        }

        onDispose {}
    }

    pager(
        modifier,
        state,
        { key(childPages.items[it]) },
    ) { pageIndex ->
        val item = childPages.items[pageIndex]

        val pageRef = remember(item.configuration) { Ref(item.instance) }
        if (item.instance != null) {
            pageRef.value = item.instance
        }

        val page = pageRef.value
        if (page != null) {
            pageContent(pageIndex, page)
        }
    }
}

@ExperimentalFoundationApi
@ExperimentalDecomposeApi
fun defaultHorizontalPager(): Pager =
    { modifier, state, key, pageContent ->
        HorizontalPager(
            modifier = modifier,
            state = state,
            key = key,
            pageContent = pageContent,
        )
    }

@ExperimentalFoundationApi
@ExperimentalDecomposeApi
fun defaultVerticalPager(): Pager =
    { modifier, state, key, pageContent ->
        VerticalPager(
            modifier = modifier,
            state = state,
            key = key,
            pageContent = pageContent,
        )
    }

@OptIn(ExperimentalFoundationApi::class)
internal typealias Pager =
    @Composable (
        Modifier,
        PagerState,
        key: (index: Int) -> Any,
        pageContent: @Composable PagerScope.(index: Int) -> Unit,
    ) -> Unit
