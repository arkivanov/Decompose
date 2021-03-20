package com.arkivanov.decompose.router

import com.arkivanov.decompose.instancekeeper.InstanceKeeper
import com.arkivanov.decompose.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.decompose.instancekeeper.getOrCreate
import com.arkivanov.decompose.lifecycle.Lifecycle
import com.arkivanov.decompose.lifecycle.destroy
import com.arkivanov.decompose.lifecycle.doOnDestroy
import com.arkivanov.decompose.lifecycle.resume
import com.arkivanov.decompose.statekeeper.Parcelable
import com.arkivanov.decompose.statekeeper.ParcelableContainer
import com.arkivanov.decompose.statekeeper.Parcelize
import com.arkivanov.decompose.statekeeper.StateKeeper
import com.arkivanov.decompose.statekeeper.consume
import com.arkivanov.decompose.statekeeper.consumeRequired
import kotlin.properties.Delegates.observable
import kotlin.reflect.KClass

internal class StackHolderImpl<C : Parcelable, T : Any>(
    initialConfiguration: () -> C,
    initialBackStack: () -> List<C>,
    private val configurationClass: KClass<out C>,
    lifecycle: Lifecycle,
    private val key: String,
    private val stateKeeper: StateKeeper,
    instanceKeeper: InstanceKeeper,
    private val routerEntryFactory: RouterEntryFactory<C, T>,
    private val parcelableContainerFactory: (Parcelable?) -> ParcelableContainer
) : StackHolder<C, T> {

    private val retainedInstance: RetainedInstance<C, T> = instanceKeeper.getOrCreate(key, ::RetainedInstance)

    override var stack: RouterStack<C, T>
        by observable(restoreStack() ?: initialStack(initialConfiguration(), initialBackStack())) { _, _, newValue ->
            retainedInstance.activeEntry = newValue.active
        }

    init {
        stateKeeper.register(key) { stack.save() }
        retainedInstance.activeEntry = stack.active
        stack.active.lifecycleRegistry.resume()

        lifecycle.doOnDestroy(::destroy)
    }

    private fun destroy() {
        stateKeeper.unregister(key)

        val stack = stack
        stack.active.lifecycleRegistry.destroy()
        stack.backStack.destroy()
    }

    private fun initialStack(initialConfiguration: C, initialBackStack: List<C>): RouterStack<C, T> =
        RouterStack(
            active = routerEntryFactory(initialConfiguration),
            backStack = initialBackStack.map { RouterEntry.Destroyed(configuration = it) }
        )

    private fun restoreStack(): RouterStack<C, T>? {
        val savedState = stateKeeper.consume<SavedState>(key) ?: return null

        val activeSavedEntry = savedState.active
        val activeConfiguration = activeSavedEntry.configuration.consumeRequired(configurationClass)
        val activeSavedState = activeSavedEntry.state
        val activeInstanceKeeperDispatcher: InstanceKeeperDispatcher? = retainedInstance.activeEntry?.instanceKeeperDispatcher
        val activeEntry: RouterEntry.Created<C, T> =
            routerEntryFactory(activeConfiguration, activeSavedState, activeInstanceKeeperDispatcher)

        val backStack =
            savedState.backStack.map {
                RouterEntry.Destroyed(configuration = it.configuration.consumeRequired(configurationClass), savedState = it.state)
            }

        return RouterStack(active = activeEntry, backStack = backStack)
    }

    private fun RouterStack<C, *>.save(): SavedState =
        SavedState(
            active = SavedState.Entry(parcelableContainerFactory(active.configuration), active.stateKeeperDispatcher.save()),
            backStack = backStack.map { SavedState.Entry(parcelableContainerFactory(it.configuration), it.savedState) }
        )

    @Parcelize
    private class SavedState(
        val active: Entry,
        val backStack: List<Entry>
    ) : Parcelable {
        @Parcelize
        class Entry(
            val configuration: ParcelableContainer,
            val state: ParcelableContainer?
        ) : Parcelable
    }

    private class RetainedInstance<C : Any, T : Any> : InstanceKeeper.Instance {
        var activeEntry: RouterEntry.Created<C, T>? = null

        override fun onDestroy() {
            activeEntry?.instanceKeeperDispatcher?.destroy()
        }
    }
}
