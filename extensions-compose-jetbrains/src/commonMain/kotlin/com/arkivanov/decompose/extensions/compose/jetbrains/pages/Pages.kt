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
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.compose.jetbrains.subscribeAsState
import com.arkivanov.decompose.router.pages.ChildPages
import com.arkivanov.decompose.value.Value

/**
 * Displays a list of pages represented by [ChildPages].
 */
@ExperimentalFoundationApi
@ExperimentalDecomposeApi
@Composable
fun <T : Any> Pages(
    pages: Value<ChildPages<*, T>>,
    onPageSelected: (index: Int) -> Unit,
    modifier: Modifier = Modifier,
    scrollAnimation: PagesScrollAnimation = PagesScrollAnimation.Disabled,
    pager: Pager = defaultHorizontalPager(),
    pageContent: @Composable PagerScope.(index: Int, page: T) -> Unit,
) {
    val state = pages.subscribeAsState()

    Pages(
        pages = state.value,
        onPageSelected = onPageSelected,
        modifier = modifier,
        scrollAnimation = scrollAnimation,
        pager = pager,
        pageContent = pageContent,
    )
}

/**
 * Displays a list of pages represented by [ChildPages].
 */
@ExperimentalFoundationApi
@ExperimentalDecomposeApi
@Composable
fun <T : Any> Pages(
    pages: ChildPages<*, T>,
    onPageSelected: (index: Int) -> Unit,
    modifier: Modifier = Modifier,
    scrollAnimation: PagesScrollAnimation = PagesScrollAnimation.Disabled,
    pager: Pager = defaultHorizontalPager(),
    pageContent: @Composable PagerScope.(index: Int, page: T) -> Unit,
) {
    val selectedIndex = pages.selectedIndex
    val state = rememberPagerState(
        initialPage = selectedIndex,
        pageCount = { pages.items.size },
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

    DisposableEffect(state.settledPage) {
        onPageSelected(state.settledPage)
        onDispose {}
    }

    val items = pages.items

    pager(
        modifier,
        state,
        { items[it].configuration },
    ) { pageIndex ->
        items[pageIndex].instance?.also { page ->
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
