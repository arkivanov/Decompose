package com.arkivanov.decompose.extensions.compose.pages

import androidx.compose.foundation.pager.HorizontalPager
import androidx.compose.foundation.pager.PagerScope
import androidx.compose.foundation.pager.PagerState
import androidx.compose.foundation.pager.VerticalPager
import androidx.compose.foundation.pager.rememberPagerState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.Ref
import com.arkivanov.decompose.extensions.compose.subscribeAsState
import com.arkivanov.decompose.keyHashString
import com.arkivanov.decompose.router.pages.ChildPages
import com.arkivanov.decompose.value.Value

/**
 * Displays a list of pages represented by [ChildPages].
 */
@Composable
fun <C : Any, T : Any> ChildPages(
    pages: Value<ChildPages<C, T>>,
    onPageSelected: (index: Int) -> Unit,
    modifier: Modifier = Modifier,
    scrollAnimation: PagesScrollAnimation = PagesScrollAnimation.Disabled,
    pager: ChildPagesPager = defaultHorizontalPager(),
    key: (Child<C, T>) -> Any = Child<*, *>::keyHashString,
    pageContent: @Composable PagerScope.(index: Int, page: T) -> Unit,
) {
    val state by pages.subscribeAsState()

    ChildPages(
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
@Composable
fun <C : Any, T : Any> ChildPages(
    pages: ChildPages<C, T>,
    onPageSelected: (index: Int) -> Unit,
    modifier: Modifier = Modifier,
    scrollAnimation: PagesScrollAnimation = PagesScrollAnimation.Disabled,
    pager: ChildPagesPager = defaultHorizontalPager(),
    key: (Child<C, T>) -> Any = Child<*, *>::keyHashString,
    pageContent: @Composable PagerScope.(index: Int, page: T) -> Unit,
) {
    val selectedIndex = pages.selectedIndex.coerceAtLeast(0)
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

    DisposableEffect(state.currentPage, state.targetPage) {
        if (state.currentPage == state.targetPage) {
            onPageSelected(state.currentPage)
        }

        onDispose {}
    }

    pager(
        modifier,
        state,
        { key(pages.items[it]) },
    ) { pageIndex ->
        val item = pages.items[pageIndex]

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

fun defaultHorizontalPager(): ChildPagesPager =
    { modifier, state, key, pageContent ->
        HorizontalPager(
            modifier = modifier,
            state = state,
            key = key,
            pageContent = pageContent,
        )
    }

fun defaultVerticalPager(): ChildPagesPager =
    { modifier, state, key, pageContent ->
        VerticalPager(
            modifier = modifier,
            state = state,
            key = key,
            pageContent = pageContent,
        )
    }

typealias ChildPagesPager =
    @Composable (
        Modifier,
        PagerState,
        key: (index: Int) -> Any,
        pageContent: @Composable PagerScope.(index: Int) -> Unit,
    ) -> Unit
