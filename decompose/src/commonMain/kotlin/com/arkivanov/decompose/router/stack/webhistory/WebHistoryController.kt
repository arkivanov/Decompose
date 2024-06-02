package com.arkivanov.decompose.router.stack.webhistory

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.router.stack.StackNavigator
import com.arkivanov.decompose.value.Value
import kotlinx.serialization.KSerializer

/**
 * Connects the child stack and the Web [History](https://developer.mozilla.org/en-US/docs/Web/API/History) API together.
 */
@ExperimentalDecomposeApi
interface WebHistoryController {

    /**
     * Returns the current path history, including the current page's path but excluding any forward paths.
     * Ordered from tail to head. Empty if no history is present yet (e.g. when the app is loaded first time
     * and [Child Stack][com.arkivanov.decompose.router.stack.childStack] has not been attached yet).
     * Can be used as initial stack for `Child Stack`, which is useful for cases when the page is reloaded (refreshed).
     */
    val historyPaths: List<String>

    /**
     * Listens for the [ChildStack] changes and updates the Web [History](https://developer.mozilla.org/en-US/docs/Web/API/History)
     * accordingly. Also listens for the `History` changes and manipulates the [StackNavigator].
     *
     * @param navigator a [StackNavigator] that should be manipulated.
     * @param stack an observable [ChildStack].
     * @param serializer a [KSerializer] of configurations [C].
     * @param getPath a mapper from the configuration to a corresponding Web page path (starting from '/').
     * @param getConfiguration a mapper from the Web page path (starting from '/') to a corresponding configuration.
     * @param onWebNavigation an optional callback that can be used to allow, by returning true, or deny, by returning false,
     * browser-initiated navigation to a new target stack of configurations. The configurations parameter is the target stack if
     * the navigation is allowed to proceed.
     */
    fun <C : Any> attach(
        navigator: StackNavigator<C>,
        stack: Value<ChildStack<C, *>>,
        serializer: KSerializer<C>,
        getPath: (configuration: C) -> String,
        getConfiguration: (path: String) -> C,
        onWebNavigation: (configurations: List<C>) -> Boolean = { true }
    )
}
