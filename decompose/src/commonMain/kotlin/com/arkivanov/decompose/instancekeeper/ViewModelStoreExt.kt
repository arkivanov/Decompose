package com.arkivanov.decompose.instancekeeper

import androidx.lifecycle.Lifecycle
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.ViewModelStore
import androidx.lifecycle.ViewModelStoreOwner
import androidx.lifecycle.get
import androidx.lifecycle.viewmodel.CreationExtras
import com.arkivanov.decompose.lifecycle.doOnDestroy
import kotlin.reflect.KClass

/**
 * Returns a previously stored [ViewModel] of type [T] with the given [key],
 * or creates and stores a new one if it doesn't exist.
 * The returned [ViewModel] is cleared when this [ViewModelStore] is cleared.
 *
 * @param key a key to store and retrieve the [ViewModel].
 * @param factory a function creating a new instance of type [T].
 */
inline fun <reified T : ViewModel> ViewModelStore.getOrCreate(
    key: String,
    crossinline factory: () -> T,
): T =
    ViewModelProvider.create(
        store = this,
        factory = object : ViewModelProvider.Factory {
            @Suppress("UNCHECKED_CAST") // Only creating ViewModel of type T, the type should always be the same
            override fun <VM : ViewModel> create(modelClass: KClass<VM>, extras: CreationExtras): VM =
                factory() as VM
        }
    ).get<T>(key = key)

/**
 * Returns a previously stored [AutoCloseable] instance of type [T] with the given [key],
 * or creates and stores a new one if it doesn't exist.
 * [AutoCloseable.close] is called when this [ViewModelStore] is cleared.
 *
 * @param key a key to store and retrieve the instance.
 * @param factory a function creating a new instance of type [T].
 */
inline fun <T : AutoCloseable> ViewModelStore.getOrCreateCloseable(
    key: String,
    crossinline factory: () -> T,
): T =
    getOrCreate(key = key) {
        object : ViewModel() {
            val instance: T = factory()

            override fun onCleared() {
                instance.close()
            }
        }
    }.instance

/**
 * A convenience function for [ViewModelStore.getOrCreate].
 *
 * @param key a key to store and retrieve the [ViewModel].
 * @param factory a function creating a new instance of type [T].
 */
inline fun <reified T : ViewModel> ViewModelStoreOwner.viewModel(
    key: String,
    crossinline factory: () -> T,
): T =
    viewModelStore.getOrCreate(key = key, factory = factory)

/**
 * A convenience function for [ViewModelStore.getOrCreateCloseable].
 *
 * @param key a key to store and retrieve the instance.
 * @param factory a function creating a new instance of type [T].
 */
inline fun <T : AutoCloseable> ViewModelStoreOwner.retainedCloseable(
    key: String,
    crossinline factory: () -> T,
): T =
    viewModelStore.getOrCreateCloseable(key, factory)

internal fun ViewModelStore.attachTo(lifecycle: Lifecycle): ViewModelStore {
    lifecycle.doOnDestroy(::clear)

    return this
}
