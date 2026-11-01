package com.arkivanov.decompose.router.children

import androidx.lifecycle.LifecycleRegistry
import androidx.lifecycle.ViewModelStore
import androidx.savedstate.SavedState
import androidx.savedstate.SavedStateRegistryController
import com.arkivanov.decompose.navigationevent.ChildNavigationEventDispatcher
import kotlin.uuid.ExperimentalUuidApi
import kotlin.uuid.Uuid

internal sealed interface ChildItem<out C : Any, out T : Any> {

    val configuration: C
    val key: String
    val instance: T?
    val lifecycleRegistry: LifecycleRegistry?
    val savedStateRegistryController: SavedStateRegistryController?
    val viewModelStore: ViewModelStore?
    val navigationEventDispatcher: ChildNavigationEventDispatcher?

    data class Created<out C : Any, out T : Any>(
        override val configuration: C,
        override val key: String,
        override val instance: T,
        override val lifecycleRegistry: LifecycleRegistry,
        override val savedStateRegistryController: SavedStateRegistryController,
        override val viewModelStore: ViewModelStore,
        override val navigationEventDispatcher: ChildNavigationEventDispatcher,
    ) : ChildItem<C, T>

    data class Destroyed<out C : Any>(
        override val configuration: C,
        override val key: String,
        val savedState: SavedState? = null
    ) : ChildItem<C, Nothing> {
        override val instance: Nothing? = null
        override val lifecycleRegistry: LifecycleRegistry? = null
        override val savedStateRegistryController: SavedStateRegistryController? = null
        override val viewModelStore: ViewModelStore? = null
        override val navigationEventDispatcher: ChildNavigationEventDispatcher? = null
    }
}

@OptIn(ExperimentalUuidApi::class)
internal fun randomKey(): String = Uuid.random().toString()
