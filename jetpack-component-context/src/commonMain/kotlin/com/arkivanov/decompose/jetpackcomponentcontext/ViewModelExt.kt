package com.arkivanov.decompose.jetpackcomponentcontext

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.ViewModelStoreOwner
import androidx.lifecycle.viewmodel.CreationExtras
import androidx.lifecycle.viewmodel.initializer
import androidx.lifecycle.viewmodel.viewModelFactory
import com.arkivanov.decompose.ExperimentalDecomposeApi
import kotlin.reflect.KClass

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
@ExperimentalDecomposeApi
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
@ExperimentalDecomposeApi
fun <VM : ViewModel> ViewModelStoreOwner.viewModel(
    modelClass: KClass<VM>,
    key: String? = null,
    factory: ViewModelProvider.Factory? = null,
    extras: CreationExtras? = null,
): VM =
    get(
        modelClass = modelClass,
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
 * @param key the key to use to identify the [ViewModel].
 * @param initializer a factory function that creates a new instance of [VM].
 * @return a [ViewModel] that is an instance of the given [VM] type.
 */
@ExperimentalDecomposeApi
inline fun <reified VM : ViewModel> ViewModelStoreOwner.viewModel(
    key: String? = null,
    noinline initializer: CreationExtras.() -> VM
): VM =
    viewModel(
        modelClass = VM::class,
        key = key,
        factory = viewModelFactory { initializer(initializer) },
    )

private fun <VM : ViewModel> ViewModelStoreOwner.get(
    modelClass: KClass<VM>,
    key: String?,
    factory: ViewModelProvider.Factory?,
    extras: CreationExtras?,
): VM {
    val provider =
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

    return if (key != null) provider[key, modelClass] else provider[modelClass]
}
