package com.arkivanov.decompose

import com.arkivanov.decompose.backpressed.BackPressedRegistry
import com.arkivanov.decompose.instancekeeper.InstanceKeeper
import com.arkivanov.decompose.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.decompose.instancekeeper.getOrCreate
import com.arkivanov.decompose.lifecycle.Lifecycle
import com.arkivanov.decompose.lifecycle.LifecycleOwner
import com.arkivanov.decompose.lifecycle.LifecycleRegistry
import com.arkivanov.decompose.lifecycle.MergedLifecycle
import com.arkivanov.decompose.lifecycle.destroy
import com.arkivanov.decompose.lifecycle.doOnDestroy
import com.arkivanov.decompose.lifecycle.pause
import com.arkivanov.decompose.lifecycle.resume
import com.arkivanov.decompose.lifecycle.stop
import com.arkivanov.decompose.statekeeper.Parcelable
import com.arkivanov.decompose.statekeeper.ParcelableContainer
import com.arkivanov.decompose.statekeeper.Parcelize
import com.arkivanov.decompose.statekeeper.StateKeeper
import com.arkivanov.decompose.statekeeper.StateKeeperDispatcher
import com.arkivanov.decompose.statekeeper.consume
import com.arkivanov.decompose.statekeeper.consumeRequired
import com.arkivanov.decompose.value.MutableValue
import kotlin.reflect.KClass

internal class RouterImpl<C : Parcelable, T : Any>(
    initialConfiguration: C,
    private val configurationClass: KClass<out C>,
    override val lifecycle: Lifecycle,
    private val key: String,
    private val stateKeeper: StateKeeper,
    instanceKeeper: InstanceKeeper,
    private val backPressedRegistry: BackPressedRegistry?,
    private val componentFactory: (C, Lifecycle, StateKeeper, InstanceKeeper) -> T
) : Router<C, T>, LifecycleOwner {

    private val onBackPressedHandler = ::onBackPressed

    init {
        backPressedRegistry?.register(onBackPressedHandler)
    }

    private val retainedInstance: RetainedInstance<C, T> = instanceKeeper.getOrCreate(key, ::RetainedInstance)

    private var stack = restoreStack() ?: Stack(active = createComponent(initialConfiguration))
    override val state: MutableValue<RouterState<C, T>> = MutableValue(stack.toState())

    init {
        stateKeeper.register(key) { stack.save() }

        retainedInstance.activeEntry = stack.active
        stack.active.lifecycleRegistry.resume()

        lifecycle.doOnDestroy(::destroy)
    }

    private fun destroy() {
        stateKeeper.unregister(key)
        backPressedRegistry?.unregister(onBackPressedHandler)

        val stack = stack

        stack.active.lifecycleRegistry.destroy()

        stack.backStack.reversed().forEach { entry ->
            when (entry) {
                is Stack.Entry.Created -> {
                    entry.instanceKeeperDispatcher.destroy()
                    entry.lifecycleRegistry.destroy()
                }

                is Stack.Entry.Destroyed -> Unit
            }.let {}
        }
    }

    private fun restoreStack(): Stack<C, T>? {
        val savedState = stateKeeper.consume<SavedState>(key) ?: return null

        val activeSavedEntry = savedState.active
        val activeConfiguration = activeSavedEntry.configuration.consumeRequired(configurationClass)
        val activeSavedState = activeSavedEntry.state
        val activeInstanceKeeperDispatcher: InstanceKeeperDispatcher? = retainedInstance.activeEntry?.instanceKeeperDispatcher
        val activeEntry: Stack.Entry.Created<C, T> = createComponent(activeConfiguration, activeSavedState, activeInstanceKeeperDispatcher)

        val backStack =
            savedState.backStack.map {
                Stack.Entry.Destroyed(configuration = it.configuration.consumeRequired(configurationClass), savedState = it.state)
            }

        return Stack(active = activeEntry, backStack = backStack)
    }

    private fun Stack<C, *>.save(): SavedState =
        SavedState(
            active = SavedState.Entry(ParcelableContainer(active.configuration), active.stateKeeperDispatcher.save()),
            backStack = backStack.map { SavedState.Entry(ParcelableContainer(it.configuration), it.savedState) }
        )

    override fun push(configuration: C) {
        val oldStack = stack

        val newEntry: Stack.Entry.Created<C, T> = createComponent(configuration)

        val savedEntry: Stack.Entry.Created<C, T> = oldStack.active.let { it.copy(savedState = it.stateKeeperDispatcher.save()) }

        savedEntry.lifecycleRegistry.pause()
        newEntry.lifecycleRegistry.resume()
        savedEntry.lifecycleRegistry.stop()

        retainedInstance.activeEntry = newEntry
        setStack(oldStack.copy(active = newEntry, backStack = oldStack.backStack + savedEntry))
    }

    private fun createComponent(
        configuration: C,
        savedState: ParcelableContainer? = null,
        savedInstanceKeeperDispatcher: InstanceKeeperDispatcher? = null
    ): Stack.Entry.Created<C, T> {
        val componentLifecycleRegistry = LifecycleRegistry()
        val mergedLifecycle = MergedLifecycle(lifecycle, componentLifecycleRegistry)
        val stateKeeperDispatcher = StateKeeperDispatcher(savedState)
        val instanceKeeperRegistry = savedInstanceKeeperDispatcher ?: InstanceKeeperDispatcher()
        val component = componentFactory(configuration, mergedLifecycle, stateKeeperDispatcher, instanceKeeperRegistry)

        return Stack.Entry.Created(
            configuration = configuration,
            component = component,
            lifecycleRegistry = componentLifecycleRegistry,
            stateKeeperDispatcher = stateKeeperDispatcher,
            instanceKeeperDispatcher = instanceKeeperRegistry
        )
    }

    override fun pop() {
        val oldStack = stack

        val nextEntry: Stack.Entry<C, T>? = oldStack.backStack.lastOrNull()
        check(nextEntry != null) { "Can't pop the only Component" }

        val nextActiveEntry: Stack.Entry.Created<C, T> =
            when (nextEntry) {
                is Stack.Entry.Created -> nextEntry.copy(savedState = null)
                is Stack.Entry.Destroyed -> createComponent(nextEntry.configuration, savedState = nextEntry.savedState)
            }

        val topEntry: Stack.Entry.Created<C, T> = oldStack.active

        topEntry.lifecycleRegistry.pause()
        nextActiveEntry.lifecycleRegistry.resume()
        topEntry.instanceKeeperDispatcher.destroy()
        topEntry.lifecycleRegistry.destroy()

        retainedInstance.activeEntry = nextActiveEntry
        setStack(oldStack.copy(active = nextActiveEntry, backStack = oldStack.backStack.dropLast(1)))
    }

    private fun onBackPressed(): Boolean =
        if ((lifecycle.state >= Lifecycle.State.STARTED) && stack.backStack.isNotEmpty()) {
            pop()
            true
        } else {
            false
        }

    private fun setStack(stack: Stack<C, T>) {
        this.stack = stack
        state.value = stack.toState()
    }

    private fun Stack<C, T>.toState(): RouterState<C, T> =
        RouterState(
            activeChild = RouterState.Entry.Created(configuration = active.configuration, component = active.component),
            backStack = backStack.map { it.toRouterStateEntry() }
        )

    private fun Stack.Entry<C, T>.toRouterStateEntry(): RouterState.Entry<C, T> =
        when (this) {
            is Stack.Entry.Created -> RouterState.Entry.Created(configuration = configuration, component = component)
            is Stack.Entry.Destroyed -> RouterState.Entry.Destroyed(configuration = configuration)
        }

    @Parcelize
    class SavedState(
        val active: Entry,
        val backStack: List<Entry>
    ) : Parcelable {
        @Parcelize
        class Entry(
            val configuration: ParcelableContainer,
            val state: ParcelableContainer?
        ) : Parcelable
    }

    private data class Stack<out C : Parcelable, out T : Any>(
        val active: Entry.Created<C, T>,
        val backStack: List<Entry<C, T>> = emptyList()
    ) {
        sealed class Entry<out C : Parcelable, out T : Any> {
            abstract val configuration: C
            abstract val savedState: ParcelableContainer?

            data class Created<out C : Parcelable, out T : Any>(
                override val configuration: C,
                override val savedState: ParcelableContainer? = null,
                val component: T,
                val lifecycleRegistry: LifecycleRegistry,
                val stateKeeperDispatcher: StateKeeperDispatcher,
                val instanceKeeperDispatcher: InstanceKeeperDispatcher
            ) : Entry<C, T>()

            data class Destroyed<out C : Parcelable>(
                override val configuration: C,
                override val savedState: ParcelableContainer?
            ) : Entry<C, Nothing>()
        }
    }

    private class RetainedInstance<C : Parcelable, T : Any> : InstanceKeeper.Instance {
        var activeEntry: Stack.Entry.Created<C, T>? = null

        override fun onDestroy() {
            activeEntry?.instanceKeeperDispatcher?.destroy()
        }
    }
}
