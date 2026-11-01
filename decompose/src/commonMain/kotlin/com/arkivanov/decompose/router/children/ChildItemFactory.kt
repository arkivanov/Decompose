package com.arkivanov.decompose.router.children

import androidx.lifecycle.ViewModelStore
import com.arkivanov.essenty.statekeeper.SerializableContainer

internal interface ChildItemFactory<C : Any, out T : Any> {

    operator fun invoke(
        configuration: C,
        key: String,
        savedState: SerializableContainer? = null,
        viewModelStore: ViewModelStore? = null,
    ): ChildItem.Created<C, T>
}
