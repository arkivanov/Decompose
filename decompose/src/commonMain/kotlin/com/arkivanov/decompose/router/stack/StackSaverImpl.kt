package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.router.stack.StackSaver.RestoredStack
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.ParcelableContainer
import com.arkivanov.essenty.parcelable.Parcelize
import com.arkivanov.essenty.parcelable.consumeRequired
import com.arkivanov.essenty.statekeeper.StateKeeper
import com.arkivanov.essenty.statekeeper.consume
import kotlin.reflect.KClass

internal class StackSaverImpl<C : Parcelable>(
    private val configurationClass: KClass<out C>,
    private val stateKeeper: StateKeeper,
    private val parcelableContainerFactory: (Parcelable?) -> ParcelableContainer,
) : StackSaver<C> {

    override fun register(key: String, supplier: () -> RouterStack<C, *>) {
        stateKeeper.register(key) { supplier().save() }
    }

    private fun RouterStack<C, *>.save(): SavedState =
        SavedState(
            active = SavedEntry(
                configuration = parcelableContainerFactory(active.configuration),
                savedState = active.stateKeeperDispatcher.save()
            ),
            backStack = backStack.map {
                SavedEntry(
                    configuration = parcelableContainerFactory(it.configuration),
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
            configuration = configuration.consumeRequired(configurationClass),
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
