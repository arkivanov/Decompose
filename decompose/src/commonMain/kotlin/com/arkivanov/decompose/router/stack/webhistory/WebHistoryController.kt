package com.arkivanov.decompose.router.stack.webhistory

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.router.stack.StackNavigator
import com.arkivanov.decompose.value.Value

/**
 * Connects the child stack and the Web [History](https://developer.mozilla.org/en-US/docs/Web/API/History) API together.
 */
@ExperimentalDecomposeApi
interface WebHistoryController {

    /**
     * Listens for the [ChildStack] changes and updates the Web [History](https://developer.mozilla.org/en-US/docs/Web/API/History)
     * accordingly. Also listens for the `History` changes and manipulates the [StackNavigator].
     *
     * @param navigator a [StackNavigator] that should be manipulated
     * @param stack an observable [ChildStack]
     * @param getPath a mapper from the configuration to a corresponding Web page path (starting from '/')
     * @param getConfiguration a mapper from the Web page path (starting from '/') to a corresponding configuration
     */
    fun <C : Any> attach(
        navigator: StackNavigator<C>,
        stack: Value<ChildStack<C, *>>,
        getPath: (configuration: C) -> String,
        getConfiguration: (path: String) -> C
    )
}
