package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.ExperimentalDecomposeApi

/**
 * A function that checks the provided navigation state and either returns another function
 * transforming the navigation state to a new one, or `null` if back button handling should
 * be disabled. Called during initialization and after each navigation event.
 */
@ExperimentalDecomposeApi
fun interface BackStrategy<T> {

    fun transformBack(state: T): (() -> T)?

    companion object {
        fun <T> disabled(): BackStrategy<T> = BackStrategy { null }
    }
}
