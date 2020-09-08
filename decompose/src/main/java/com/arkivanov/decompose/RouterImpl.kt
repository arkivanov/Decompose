package com.arkivanov.decompose

import android.os.Bundle
import android.os.Parcelable
import androidx.activity.OnBackPressedCallback
import androidx.activity.OnBackPressedDispatcher
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelStore

internal class RouterImpl<C : Parcelable>(
    initialConfiguration: C,
    private val configurationClassLoader: ClassLoader?,
    private val lifecycle: Lifecycle,
    private val savedStateKeeper: SavedStateKeeper,
    private val key: String,
    onBackPressedDispatcher: OnBackPressedDispatcher?,
    viewModelStore: ViewModelStore,
    private val componentFactory: (C, Lifecycle, SavedStateKeeper, ViewModelStore) -> Component
) : Router<C>, LifecycleOwner {

    private val onBackPressedCallback = OnBackPressedCallbackImpl()

    init {
        onBackPressedDispatcher?.addCallback(this, onBackPressedCallback)
    }

    private val viewModel = viewModelStore.viewModel(key) { ViewModelImpl<C>() }
    private var stack = restoreStack() ?: Stack(active = createComponent(initialConfiguration))
    override val state: MutableState<RouterState<C>> = mutableStateOf(stack.toState())

    init {
        savedStateKeeper.register(key, ::saveStack)

        updateOnBackPressedCallback()

        viewModel.activeEntry = stack.active
        stack.active.lifecycleHolder.registry.resume()

        lifecycle.doOnDestroy(::destroy)
    }

    private fun destroy() {
        savedStateKeeper.unregister(key)

        val stack = stack

        stack.active.lifecycleHolder.registry.destroy()

        stack.backStack.reversed().forEach { entry ->
            when (entry) {
                is Stack.Entry.Created -> {
                    entry.viewModelStore.clear()
                    entry.lifecycleHolder.registry.destroy()
                }

                is Stack.Entry.Destroyed -> Unit
            }.let {}
        }
    }

    override fun getLifecycle(): Lifecycle = lifecycle

    private fun restoreStack(): Stack<C>? {
        val savedState = savedStateKeeper.consume(key) ?: return null

        val configurations =
            savedState
                .apply { classLoader = configurationClassLoader }
                .getParcelableArrayList<C>("CONFIGS")
                ?: return null

        val last = configurations.last()
        val lastBundle: Bundle? = savedState.getBundle(last.toString())
        val lastViewModelStore = viewModel.activeEntry?.viewModelStore
        val lastEntry: Stack.Entry.Created<C> = createComponent(last, lastBundle, lastViewModelStore)

        val backStack =
            configurations.dropLast(1).map {
                Stack.Entry.Destroyed(configuration = it, savedState = savedState.getBundle(it.toString()))
            }

        return Stack(active = lastEntry, backStack = backStack)
    }

    private fun saveStack(): Bundle =
        Bundle().apply {
            val stack = stack

            putParcelableArrayList("CONFIGS", ArrayList(stack.backStack.map { it.configuration } + stack.active.configuration))

            putBundle(stack.active.configuration.toString(), stack.active.savedStateKeeper.save())

            stack.backStack.forEach { entry ->
                putBundle(entry.configuration.toString(), entry.savedState)
            }
        }

    override fun push(configuration: C) {
        val oldStack = stack

        val newEntry: Stack.Entry.Created<C> = createComponent(configuration)

        val savedEntry: Stack.Entry.Created<C> = oldStack.active.let { it.copy(savedState = it.savedStateKeeper.save()) }

        savedEntry.lifecycleHolder.registry.pause()
        newEntry.lifecycleHolder.registry.resume()
        savedEntry.lifecycleHolder.registry.stop()

        viewModel.activeEntry = newEntry
        setStack(oldStack.copy(active = newEntry, backStack = oldStack.backStack + savedEntry))

        updateOnBackPressedCallback()
    }

    private fun createComponent(
        configuration: C,
        savedState: Bundle? = null,
        savedViewModelStore: ViewModelStore? = null
    ): Stack.Entry.Created<C> {
        val componentLifecycleHolder = LifecycleHolder()
        val mergedLifecycle = MergedLifecycle(lifecycle, componentLifecycleHolder.registry)
        val savedStateKeeper = DefaultSavedStateKeeper(savedState)
        val viewModelStore = savedViewModelStore ?: ViewModelStore()
        val component = componentFactory(configuration, mergedLifecycle.lifecycle, savedStateKeeper, viewModelStore)

        return Stack.Entry.Created(
            configuration = configuration,
            component = component,
            lifecycleHolder = componentLifecycleHolder,
            savedStateKeeper = savedStateKeeper,
            viewModelStore = viewModelStore
        )
    }

    override fun pop() {
        val oldStack = stack

        val nextEntry: Stack.Entry<C>? = oldStack.backStack.lastOrNull()
        check(nextEntry != null) { "Can't pop the only Component" }

        val nextActiveEntry: Stack.Entry.Created<C> =
            when (nextEntry) {
                is Stack.Entry.Created -> nextEntry.copy(savedState = null)
                is Stack.Entry.Destroyed -> createComponent(nextEntry.configuration, savedState = nextEntry.savedState)
            }

        val topEntry: Stack.Entry.Created<C> = oldStack.active

        topEntry.lifecycleHolder.registry.handleLifecycleEvent(Lifecycle.Event.ON_PAUSE)
        nextActiveEntry.lifecycleHolder.registry.resume()
        topEntry.viewModelStore.clear()
        topEntry.lifecycleHolder.registry.destroy()

        viewModel.activeEntry = nextActiveEntry
        setStack(oldStack.copy(active = nextActiveEntry, backStack = oldStack.backStack.dropLast(1)))

        updateOnBackPressedCallback()
    }

    private fun updateOnBackPressedCallback() {
        onBackPressedCallback.isEnabled = stack.backStack.isNotEmpty()
    }

    private fun setStack(stack: Stack<C>) {
        this.stack = stack
        state.value = stack.toState()
    }

    private fun Stack<C>.toState(): RouterState<C> =
        RouterState(
            stack = backStack.map { it.configuration } + active.configuration,
            activeComponent = active.component
        )

    internal data class Stack<out C : Parcelable>(
        val active: Entry.Created<C>,
        val backStack: List<Entry<C>> = emptyList()
    ) {
        sealed class Entry<out C : Parcelable> {
            abstract val configuration: C
            abstract val savedState: Bundle?

            data class Created<out C : Parcelable>(
                override val configuration: C,
                override val savedState: Bundle? = null,
                val component: Component,
                val lifecycleHolder: LifecycleHolder,
                val savedStateKeeper: DefaultSavedStateKeeper,
                val viewModelStore: ViewModelStore
            ) : Entry<C>()

            data class Destroyed<out C : Parcelable>(
                override val configuration: C,
                override val savedState: Bundle?
            ) : Entry<C>()
        }
    }

    private inner class OnBackPressedCallbackImpl : OnBackPressedCallback(false) {
        override fun handleOnBackPressed() {
            pop()
        }
    }

    private class ViewModelImpl<C : Parcelable> : ViewModel() {
        var activeEntry: Stack.Entry.Created<C>? = null

        override fun onCleared() {
            activeEntry?.viewModelStore?.clear()

            super.onCleared()
        }
    }
}
