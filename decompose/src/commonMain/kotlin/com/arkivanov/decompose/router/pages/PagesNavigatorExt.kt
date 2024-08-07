package com.arkivanov.decompose.router.pages

/**
 * A convenience method for [PagesNavigator.navigate].
 */
fun <C : Any> PagesNavigator<C>.navigate(transformer: (Pages<C>) -> Pages<C>) {
    navigate(transformer = transformer, onComplete = { _, _ -> })
}

/**
 * Selects the next component. If the currently selected component is the last one, then depending
 * on the [circular] parameter, either nothing happens or the first component is selected.
 *
 * @param circular if `true`, the first component will be selected if the current one is the last one.
 * Default value is `false`.
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 */
fun <C : Any> PagesNavigator<C>.selectNext(
    circular: Boolean = false,
    onComplete: (newPages: Pages<C>, oldPages: Pages<C>) -> Unit = { _, _ -> },
) {
    navigate(
        transformer = { pages ->
            pages.coerceSelectedIndex(circular = circular) { it + 1 }
        },
        onComplete = onComplete,
    )
}

/**
 * Selects the previous component. If the currently selected component is the first one, then depending
 * on the [circular] parameter, either nothing happens or the last component is selected.
 *
 * @param circular if `true`, the last component will be selected if the current one is the first one.
 * Default value is `false`.
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 */
fun <C : Any> PagesNavigator<C>.selectPrev(
    circular: Boolean = false,
    onComplete: (newPages: Pages<C>, oldPages: Pages<C>) -> Unit = { _, _ -> },
) {
    navigate(
        transformer = { pages ->
            pages.coerceSelectedIndex(circular = circular) { it - 1 }
        },
        onComplete = onComplete,
    )
}

/**
 * Selects the first component.
 *
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 */
fun <C : Any> PagesNavigator<C>.selectFirst(onComplete: (newPages: Pages<C>, oldPages: Pages<C>) -> Unit = { _, _ -> }) {
    navigate(
        transformer = { pages ->
            pages.coerceSelectedIndex { 0 }
        },
        onComplete = onComplete,
    )
}

/**
 * Selects the last component.
 *
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 */
fun <C : Any> PagesNavigator<C>.selectLast(onComplete: (newPages: Pages<C>, oldPages: Pages<C>) -> Unit = { _, _ -> }) {
    navigate(
        transformer = { pages ->
            pages.coerceSelectedIndex { pages.items.lastIndex }
        },
        onComplete = onComplete,
    )
}

/**
 * Selects the component at the specified [index].
 * Throws [IllegalArgumentException] if the index is out of bounds.
 *
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 */
fun <C : Any> PagesNavigator<C>.select(
    index: Int,
    onComplete: (newPages: Pages<C>, oldPages: Pages<C>) -> Unit = { _, _ -> },
) {
    navigate(
        transformer = { it.copy(selectedIndex = index) },
        onComplete = onComplete,
    )
}

/**
 * Clears the current [Pages] state, i.e. removes all components.
 *
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 */
fun <C : Any> PagesNavigator<C>.clear(onComplete: (newPages: Pages<C>, oldPages: Pages<C>) -> Unit = { _, _ -> }) {
    navigate(
        transformer = { Pages() },
        onComplete = onComplete,
    )
}

private inline fun <C : Any> Pages<C>.coerceSelectedIndex(circular: Boolean = false, update: (Int) -> Int): Pages<C> =
    if (items.isNotEmpty()) {
        var newIndex = update(selectedIndex)

        if (circular) {
            if (newIndex < 0) {
                newIndex += items.size
            } else if (newIndex > items.lastIndex) {
                newIndex -= items.size
            }
        }

        copy(selectedIndex = newIndex.coerceIn(items.indices))
    } else {
        this
    }
