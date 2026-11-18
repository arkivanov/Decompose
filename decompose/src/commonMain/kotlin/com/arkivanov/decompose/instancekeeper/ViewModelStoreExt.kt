package com.arkivanov.decompose.instancekeeper

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.ViewModelStore
import androidx.lifecycle.ViewModelStoreOwner
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

inline fun <reified VM : ViewModel> ViewModelStoreOwner.viewModel(
    key: String? = null,
    noinline initializer: CreationExtras.() -> VM
): VM =
    viewModel<VM>(
        key = key,
        factory = viewModelFactory { initializer(initializer) },
    )

/**
 * Returns an existing [ViewModel] or creates a new one in this [ViewModelStoreOwner].
 *
 * The created [ViewModel] is associated with this [ViewModelStoreOwner] and will be retained
 * as long as the owner is alive (e.g., if it is a component, until it is destroyed or the
 * process is killed).
 *
 * If default arguments are provided via [extras], they will be available to the
 * appropriate factory when the [ViewModel] is created.
 *
 * @param key the key to use to identify the [ViewModel].
 * @param factory the [ViewModelProvider.Factory] that should be used to create the [ViewModel] or
 * `null` if you would like to use the default factory from the [ViewModelStoreOwner]
 * @param extras the default extras used to create the [ViewModel].
 * @return a [ViewModel] that is an instance of the given [VM] type.
 */
inline fun <reified VM : ViewModel> ViewModelStoreOwner.viewModel(
    key: String? = null,
    factory: ViewModelProvider.Factory? = null,
    extras: CreationExtras? = null,
): VM =
    viewModel(
        modelClass = VM::class,
        key = key,
        factory = factory,
        extras = extras,
    )

/**
 * Returns an existing [ViewModel] or creates a new one in this [ViewModelStoreOwner].
 *
 * The created [ViewModel] is associated with this [ViewModelStoreOwner] and will be retained
 * as long as the owner is alive (e.g., if it is a component, until it is destroyed or the
 * process is killed).
 *
 * If default arguments are provided via [extras], they will be available to the
 * appropriate factory when the [ViewModel] is created.
 *
 * @param modelClass the class of the [ViewModel] to create an instance of it if it is not present.
 * @param key the key to use to identify the [ViewModel].
 * @param factory the [ViewModelProvider.Factory] that should be used to create the [ViewModel] or
 * `null` if you would like to use the default factory from the [ViewModelStoreOwner]
 * @param extras the default extras used to create the [ViewModel].
 * @return a [ViewModel] that is an instance of the given [VM] type.
 */
fun <VM : ViewModel> ViewModelStoreOwner.viewModel(
    modelClass: KClass<VM>,
    key: String? = null,
    factory: ViewModelProvider.Factory? = null,
    extras: CreationExtras? = null,
): VM {
    val provider = viewModelProvider(factory = factory, extras = extras)
    return if (key != null) provider[key, modelClass] else provider[modelClass]
}

private fun ViewModelStoreOwner.viewModelProvider(
    factory: ViewModelProvider.Factory?,
    extras: CreationExtras?,
): ViewModelProvider =
    if (factory != null) {
        if (extras != null) {
            ViewModelProvider.create(owner = this, factory = factory, extras = extras)
        } else {
            ViewModelProvider.create(owner = this, factory = factory)
        }
    } else {
        if (extras != null) {
            ViewModelProvider.create(owner = this, extras = extras)
        } else {
            ViewModelProvider.create(owner = this)
        }
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
