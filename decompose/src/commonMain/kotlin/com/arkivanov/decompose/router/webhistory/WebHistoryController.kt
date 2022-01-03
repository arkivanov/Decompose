package com.arkivanov.decompose.router.webhistory

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.Router

/**
 * Connects the [Router] and the Web [History](https://developer.mozilla.org/en-US/docs/Web/API/History) API together.
 */
@ExperimentalDecomposeApi
interface WebHistoryController {


    /**
     * Listens for the [Router] state changes and updates the Web [History](https://developer.mozilla.org/en-US/docs/Web/API/History)
     * accordingly. Also listens for the `History` changes and navigates the [Router].
     *
     * @param router a [Router] that should be observed and manipulated
     * @param getPath a mapper from the [Router] configuration to a corresponding Web page path (starting from '/')
     * @param getConfiguration a mapper from the Web page path (starting from '/') to a corresponding [Router] configuration
     */
    fun <C : Any> attach(
        router: Router<C, *>,
        getPath: (configuration: C) -> String,
        getConfiguration: (path: String) -> C
    )
}
