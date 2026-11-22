package com.arkivanov.decompose.viewmodel

import androidx.lifecycle.HasDefaultViewModelProviderFactory
import androidx.lifecycle.SavedStateViewModelFactory
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.ViewModelStore
import androidx.lifecycle.ViewModelStoreOwner
import androidx.lifecycle.viewmodel.CreationExtras

/**
 * A simple [ViewModelStore] container with [ViewModelProvider.Factory] and [CreationExtras].
 *
 * @param store a [ViewModelStore] used to retain `ViewModel` instances.
 * @param factory a provider of default [ViewModelProvider.Factory] for creating `ViewModel` instances.
 * Used when a `ViewModel` is being created without passing a specific factory.
 * Default is [SavedStateViewModelFactory].
 * @param extras a provider of default `ViewModel` [CreationExtras]. Default is [CreationExtras.Empty].
 */
class ViewModelStoreHost(
    store: ViewModelStore = ViewModelStore(),
    factory: () -> ViewModelProvider.Factory = ::SavedStateViewModelFactory,
    private val extras: () -> CreationExtras = { CreationExtras.Empty },
) : ViewModelStoreOwner, HasDefaultViewModelProviderFactory {

    override val viewModelStore: ViewModelStore = store
    override val defaultViewModelProviderFactory: ViewModelProvider.Factory by lazy(factory)
    override val defaultViewModelCreationExtras: CreationExtras get() = extras()
}

internal fun HasDefaultViewModelProviderFactory.viewModelStoreHost(store: ViewModelStore): ViewModelStoreHost =
    ViewModelStoreHost(
        store = store,
        factory = this::defaultViewModelProviderFactory,
        extras = this::defaultViewModelCreationExtras,
    )
