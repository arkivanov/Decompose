package com.arkivanov.decompose

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.ViewModelStore

internal inline fun <reified T : ViewModel> ViewModelStore.viewModel(key: String? = null, crossinline factory: () -> T): T =
    ViewModelProvider(this, SimpleViewModelFactory(factory))
        .run { if (key == null) get(T::class.java) else get(key, T::class.java) }

@Suppress("FunctionName")
internal inline fun SimpleViewModelFactory(crossinline factory: () -> ViewModel): ViewModelProvider.Factory =
    object : ViewModelProvider.Factory {
        @Suppress("UNCHECKED_CAST")
        override fun <T : ViewModel?> create(modelClass: Class<T>): T = factory() as T
    }
