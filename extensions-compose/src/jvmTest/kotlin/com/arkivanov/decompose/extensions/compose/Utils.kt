package com.arkivanov.decompose.extensions.compose

internal fun <T> List<T>.takeSorted(comparator: Comparator<T>): List<T> =
    takeWhileIndexed { index, item ->
        (index == 0) || (comparator.compare(item, get(index - 1)) >= 0)
    }

internal fun <T> Iterable<T>.takeWhileIndexed(predicate: (Int, T) -> Boolean): List<T> =
    withIndex()
        .takeWhile { (index, item) -> predicate(index, item) }
        .map { it.value }
