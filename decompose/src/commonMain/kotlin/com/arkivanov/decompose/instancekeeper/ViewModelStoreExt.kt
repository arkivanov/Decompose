package com.arkivanov.decompose.instancekeeper

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.ViewModelStore
import androidx.lifecycle.ViewModelStoreOwner
import androidx.lifecycle.defaultViewModelCreationExtras
import androidx.lifecycle.defaultViewModelProviderFactory
import androidx.lifecycle.get
import androidx.lifecycle.viewmodel.CreationExtras
import androidx.lifecycle.viewmodel.initializer
import androidx.lifecycle.viewmodel.viewModelFactory
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
 * Returns an existing [ViewModel] of type [VM] or creates a new one in this [ViewModelStoreOwner].
 *
 * The created [ViewModel] is associated with this [ViewModelStoreOwner] and will be retained
 * as long as the owner is alive (e.g., if it is a component, until it is destroyed or the
 * process is killed).
 *
 * @param key an optional key to identify the [ViewModel]. If `null`, then the `VM::class` is used as a key.
 * @param extras optional additional data to be passed to [ViewModelProvider.Factory] during [ViewModel] creation.
 * Default is [ViewModelStoreOwner.defaultViewModelProviderFactory][androidx.lifecycle.defaultViewModelCreationExtras].
 * @param initializer a factory function responsible for creating new [ViewModel] instances of type [VM].
 * @return a [ViewModel] of type [VM].
 */
inline fun <reified VM : ViewModel> ViewModelStoreOwner.viewModel(
    key: String? = null,
    extras: CreationExtras = defaultViewModelCreationExtras,
    noinline initializer: CreationExtras.() -> VM
): VM =
    viewModel<VM>(
        key = key,
        factory = viewModelFactory { initializer(initializer) },
        extras = extras,
    )

/**
 * Returns an existing [ViewModel] of type [VM] or creates a new one in this [ViewModelStoreOwner].
 *
 * The created [ViewModel] is associated with this [ViewModelStoreOwner] and will be retained
 * as long as the owner is alive (e.g., if it is a component, until it is destroyed or the
 * process is killed).
 *
 * @param key an optional key to identify the [ViewModel]. If `null`, then the `VM::class` is used as a key.
 * @param factory an optional [ViewModelProvider.Factory] responsible for creating new [ViewModel] instances.
 * Default is [ViewModelStoreOwner.defaultViewModelProviderFactory][androidx.lifecycle.defaultViewModelProviderFactory].
 * @param extras optional additional data to be passed to [ViewModelProvider.Factory] during [ViewModel] creation.
 * Default is [ViewModelStoreOwner.defaultViewModelProviderFactory][androidx.lifecycle.defaultViewModelCreationExtras].
 * @return a [ViewModel] of type [VM].
 */
inline fun <reified VM : ViewModel> ViewModelStoreOwner.viewModel(
    key: String? = null,
    factory: ViewModelProvider.Factory = defaultViewModelProviderFactory,
    extras: CreationExtras = defaultViewModelCreationExtras,
): VM =
    viewModel(
        modelClass = VM::class,
        key = key,
        factory = factory,
        extras = extras,
    )

/**
 * Returns an existing [ViewModel] of type [VM] or creates a new one in this [ViewModelStoreOwner].
 *
 * The created [ViewModel] is associated with this [ViewModelStoreOwner] and will be retained
 * as long as the owner is alive (e.g., if it is a component, until it is destroyed or the
 * process is killed).
 *
 * @param modelClass a [KClass] of the [ViewModel] to create an instance of it if it is not present.
 * @param key an optional key to identify the [ViewModel]. If `null`, then the [modelClass] is used as a key.
 * @param factory an optional [ViewModelProvider.Factory] responsible for creating new [ViewModel] instances.
 * Default is [ViewModelStoreOwner.defaultViewModelProviderFactory][androidx.lifecycle.defaultViewModelProviderFactory].
 * @param extras optional additional data to be passed to [ViewModelProvider.Factory] during [ViewModel] creation.
 * Default is [ViewModelStoreOwner.defaultViewModelProviderFactory][androidx.lifecycle.defaultViewModelCreationExtras].
 * @return a [ViewModel] of type [VM].
 */
fun <VM : ViewModel> ViewModelStoreOwner.viewModel(
    modelClass: KClass<VM>,
    key: String? = null,
    factory: ViewModelProvider.Factory = defaultViewModelProviderFactory,
    extras: CreationExtras = defaultViewModelCreationExtras,
): VM {
    val provider = ViewModelProvider.create(owner = this, factory = factory, extras = extras)
    return if (key != null) provider[key, modelClass] else provider[modelClass]
}

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
