package com.arkivanov.decompose.router.overlay

/**
 * A convenience method for [OverlayNavigator.navigate].
 */
@Deprecated(message = "Please use Child Slot API")
fun <C : Any> OverlayNavigator<C>.navigate(transformer: (configuration: C?) -> C?) {
    navigate(transformer = transformer, onComplete = { _, _ -> })
}

/**
 * Activates an overlay component represented by the provided [configuration],
 * and dismisses (destroys) any currently active component. Does nothing if the provided [configuration]
 * is equal to the currently active one.
 *
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 */
@Deprecated(message = "Please use Child Slot API")
fun <C : Any> OverlayNavigator<C>.activate(configuration: C, onComplete: () -> Unit = {}) {
    navigate(transformer = { configuration }, onComplete = { _, _ -> onComplete() })
}

/**
 * Dismisses (destroys) the currently active overlay component, if any.
 *
 * @param onComplete called when the navigation is finished (either synchronously or asynchronously).
 * The `isSuccess` argument is `true` if there was an active overlay, `false` otherwise.
 */
@Deprecated(message = "Please use Child Slot API")
fun <C : Any> OverlayNavigator<C>.dismiss(onComplete: (isSuccess: Boolean) -> Unit = {}) {
    navigate(transformer = { null }, onComplete = { _, oldConfiguration -> onComplete(oldConfiguration != null) })
}
