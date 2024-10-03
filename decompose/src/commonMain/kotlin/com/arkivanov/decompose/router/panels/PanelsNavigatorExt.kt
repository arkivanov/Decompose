package com.arkivanov.decompose.router.panels

import com.arkivanov.decompose.ExperimentalDecomposeApi

/**
 * A convenience method for [PanelsNavigator.navigate].
 */
@ExperimentalDecomposeApi
fun <MC : Any, DC : Any, EC : Any> PanelsNavigator<MC, DC, EC>.navigate(
    transformer: (Panels<MC, DC, EC>) -> Panels<MC, DC, EC>,
) {
    navigate(transformer = transformer, onComplete = { _, _ -> })
}

/**
 * Sets the provided [main], [details] and [extra] configurations.
 */
@ExperimentalDecomposeApi
fun <MC : Any, DC : Any, EC : Any> PanelsNavigator<MC, DC, EC>.navigate(
    main: MC,
    details: DC?,
    extra: EC?,
    onComplete: (newState: Panels<MC, DC, EC>, oldState: Panels<MC, DC, EC>) -> Unit = { _, _ -> },
) {
    navigate(
        transformer = { it.copy(main = main, details = details, extra = extra) },
        onComplete = onComplete,
    )
}

/**
 * Sets the provided [details] and [extra] configurations.
 */
@ExperimentalDecomposeApi
fun <MC : Any, DC : Any, EC : Any> PanelsNavigator<MC, DC, EC>.navigate(
    details: DC?,
    extra: EC?,
    onComplete: (newState: Panels<MC, DC, EC>, oldState: Panels<MC, DC, EC>) -> Unit = { _, _ -> },
) {
    navigate(
        transformer = { it.copy(details = details, extra = extra) },
        onComplete = onComplete,
    )
}

/**
 * Sets the provided [extra] configuration.
 */
@ExperimentalDecomposeApi
fun <MC : Any, DC : Any, EC : Any> PanelsNavigator<MC, DC, EC>.navigate(
    extra: EC?,
    onComplete: (newState: Panels<MC, DC, EC>, oldState: Panels<MC, DC, EC>) -> Unit = { _, _ -> },
) {
    navigate(
        transformer = { it.copy(extra = extra) },
        onComplete = onComplete,
    )
}

/**
 * Activates the [Main][ChildPanels.main] component represented by the specified [main] configuration,
 * and dismisses (destroys) any currently active Main component.
 *
 * @param main a configuration of the Main component being activated.
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 */
@ExperimentalDecomposeApi
fun <MC : Any, DC : Any, EC : Any> PanelsNavigator<MC, DC, EC>.activateMain(
    main: MC,
    onComplete: (newState: Panels<MC, DC, EC>, oldState: Panels<MC, DC, EC>) -> Unit = { _, _ -> },
) {
    navigate(
        transformer = { it.copy(main = main) },
        onComplete = onComplete,
    )
}

/**
 * Activates the [Details][ChildPanels.details] component represented by the specified [details] configuration,
 * and dismisses (destroys) any currently active Details component.
 *
 * @param details a configuration of the Details component being activated.
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 */
@ExperimentalDecomposeApi
fun <MC : Any, DC : Any, EC : Any> PanelsNavigator<MC, DC, EC>.activateDetails(
    details: DC,
    onComplete: (newState: Panels<MC, DC, EC>, oldState: Panels<MC, DC, EC>) -> Unit = { _, _ -> },
) {
    navigate(
        transformer = { it.copy(details = details) },
        onComplete = onComplete,
    )
}

/**
 * Dismisses (destroys) the currently active [Details][ChildPanels.details] component, if any.
 *
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 */
@ExperimentalDecomposeApi
fun <MC : Any, DC : Any, EC : Any> PanelsNavigator<MC, DC, EC>.dismissDetails(
    onComplete: (newState: Panels<MC, DC, EC>, oldState: Panels<MC, DC, EC>) -> Unit = { _, _ -> },
) {
    navigate(
        transformer = { it.copy(details = null) },
        onComplete = onComplete,
    )
}

/**
 * Activates the [Extra][ChildPanels.extra] component represented by the specified [extra] configuration,
 * and dismisses (destroys) any currently active Extra component.
 *
 * @param extra a configuration of the Extra component being activated.
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 */
@ExperimentalDecomposeApi
fun <MC : Any, DC : Any, EC : Any> PanelsNavigator<MC, DC, EC>.activateExtra(
    extra: EC,
    onComplete: (newState: Panels<MC, DC, EC>, oldState: Panels<MC, DC, EC>) -> Unit = { _, _ -> },
) {
    navigate(
        transformer = { it.copy(extra = extra) },
        onComplete = onComplete,
    )
}

/**
 * Dismisses (destroys) the currently active [Extra][ChildPanels.extra] component, if any.
 *
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 */
@ExperimentalDecomposeApi
fun <MC : Any, DC : Any, EC : Any> PanelsNavigator<MC, DC, EC>.dismissExtra(
    onComplete: (newState: Panels<MC, DC, EC>, oldState: Panels<MC, DC, EC>) -> Unit = { _, _ -> },
) {
    navigate(
        transformer = { it.copy(extra = null) },
        onComplete = onComplete,
    )
}

/**
 * Dismisses the Extra component (if it exists) or the Details component (if it exists).
 *
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 */
@ExperimentalDecomposeApi
fun <MC : Any, DC : Any, EC : Any> PanelsNavigator<MC, DC, EC>.pop(
    onComplete: (newState: Panels<MC, DC, EC>, oldState: Panels<MC, DC, EC>) -> Unit = { _, _ -> },
) {
    navigate(
        transformer = { state ->
            when {
                state.extra != null -> state.copy(extra = null)
                state.details != null -> state.copy(details = null)
                else -> state
            }
        },
        onComplete = onComplete,
    )
}

/**
 * Sets [Panels.mode] to the specified [mode] value and updates component lifecycles accordingly.
 *
 * @param mode a new [ChildPanelsMode] to be set.
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 */
@ExperimentalDecomposeApi
fun <MC : Any, DC : Any, EC : Any> PanelsNavigator<MC, DC, EC>.setMode(
    mode: ChildPanelsMode,
    onComplete: (newState: Panels<MC, DC, EC>, oldState: Panels<MC, DC, EC>) -> Unit = { _, _ -> },
) {
    navigate(
        transformer = { it.copy(mode = mode) },
        onComplete = onComplete,
    )
}
