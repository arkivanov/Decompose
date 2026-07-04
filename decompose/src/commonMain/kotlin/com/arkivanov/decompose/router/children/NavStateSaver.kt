package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.essenty.statekeeper.SerializableContainer
import kotlinx.serialization.KSerializer


/**
 * A contract for saving and restoring navigation states.
 */
@ExperimentalDecomposeApi
interface NavStateSaver<T> {

    /**
     * Saves the provided navigation state into [SerializableContainer].
     *
     * @param state the navigation state to be saved
     * @return a serializable container that holds the saved state, or `null` if the state should not be saved.
     */
    fun saveState(state: T): SerializableContainer?

    /**
     * Restores the previously saved navigation state from the provided [SerializableContainer].
     *
     * @param container the serializable container holding the previously saved state.
     * @return the restored navigation state, or `null` if the state could not be restored.
     */
    fun restoreState(container: SerializableContainer): T?
}

/**
 * A convenience function for creating an instance of [NavStateSaver][com.arkivanov.decompose.router.children.NavStateSaver]
 * with the provided [save] and [restore] functions.
 */
@ExperimentalDecomposeApi
inline fun <T> NavStateSaver(
    crossinline save: (T) -> SerializableContainer?,
    crossinline restore: (SerializableContainer) -> T?,
): NavStateSaver<T> =
    object : NavStateSaver<T> {
        override fun saveState(state: T): SerializableContainer? = save(state)
        override fun restoreState(container: SerializableContainer): T? = restore(container)
    }

/**
 * A convenience function for creating an instance of [NavStateSaver][com.arkivanov.decompose.router.children.NavStateSaver]
 * that saves and restores the navigation state using the provided [serializer].
 */
@ExperimentalDecomposeApi
fun <T> NavStateSaver(serializer: KSerializer<T & Any>): NavStateSaver<T> =
    NavStateSaver(
        save = {
            SerializableContainer(value = it, strategy = serializer)
        },
        restore = {
            it.consume(strategy = serializer)
        },
    )

internal inline fun <T, R> NavStateSaver<T>.mapNullable(
    crossinline saveMapper: (R) -> T,
    crossinline restoreMapper: (T?) -> R?,
): NavStateSaver<R> =
    NavStateSaver(
        save = { saveState(saveMapper(it)) },
        restore = { restoreMapper(restoreState(it)) }
    )

internal inline fun <T, R> NavStateSaver<T>.map(
    crossinline saveMapper: (R) -> T,
    crossinline restoreMapper: (T) -> R,
): NavStateSaver<R> =
    NavStateSaver(
        save = { saveState(saveMapper(it)) },
        restore = { restoreState(it)?.let(restoreMapper) }
    )
