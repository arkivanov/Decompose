package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.router.stack.StackSaver.RestoredStack
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.ParcelableContainer
import com.arkivanov.essenty.parcelable.Parcelize
import com.arkivanov.essenty.statekeeper.StateKeeper
import com.arkivanov.essenty.statekeeper.consume

internal class StackSaverImpl<C : Any>(
    private val stateKeeper: StateKeeper,
    private val saveConfiguration: (C) -> ParcelableContainer,
    private val restoreConfiguration: (ParcelableContainer) -> C,
) : StackSaver<C> {

    override fun register(key: String, supplier: () -> RouterStack<C, *>) {
        check(!stateKeeper.isRegistered(key)) {
            "The key \"$key\" is already in use. If there are multiple Child Stacks in one component, " +
                "make sure you supplied different key for each Child Stack. Also make sure there is only instance " +
                "of the root component at a time."
        }

        stateKeeper.register(key) { supplier().save() }
    }

    private fun RouterStack<C, *>.save(): SavedState =
        SavedState(
            active = SavedEntry(
                configuration = saveConfiguration(active.configuration),
                savedState = active.stateKeeperDispatcher.save()
            ),
            backStack = backStack.map {
                SavedEntry(
                    configuration = saveConfiguration(it.configuration),
                    savedState = it.savedState
                )
            }
        )

    override fun unregister(key: String) {
        stateKeeper.unregister(key)
    }

    override fun restore(key: String): RestoredStack<C>? =
        stateKeeper
            .consume<SavedState>(key)
            ?.restore()

    private fun SavedState.restore(): RestoredStack<C> =
        RestoredStack(
            active = active.restore(),
            backStack = backStack.map { it.restore() }
        )

    private fun SavedEntry.restore(): RouterEntry.Destroyed<C> =
        RouterEntry.Destroyed(
            configuration = restoreConfiguration(configuration),
            savedState = savedState
        )

    @Parcelize
    private class SavedState(
        val active: SavedEntry,
        val backStack: List<SavedEntry>
    ) : Parcelable

    @Parcelize
    private class SavedEntry(
        val configuration: ParcelableContainer,
        val savedState: ParcelableContainer?
    ) : Parcelable
}
