package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.router.stack.StackSaver.RestoredStack

internal class TestStackSaver<C : Any>(
    private val copyConfiguration: (C) -> C,
    savedState: SavedState<C>? = null
) : StackSaver<C> {

    private val map: MutableMap<String, RestoredStack<C>> = savedState?.map ?: HashMap()
    private val suppliers = HashMap<String, () -> RouterStack<C, *>>()

    override fun register(key: String, supplier: () -> RouterStack<C, *>) {
        check(key !in suppliers)
        suppliers[key] = supplier
    }

    override fun unregister(key: String) {
        check(key in suppliers)
        suppliers -= key
    }

    override fun restore(key: String): RestoredStack<C>? =
        map.remove(key)

    fun save(): SavedState<C> =
        SavedState(
            suppliers.mapValuesTo(HashMap()) { (_, suppliers) ->
                suppliers().save()
            }
        )

    private fun RouterStack<C, *>.save(): RestoredStack<C> =
        RestoredStack(
            active = RouterEntry.Destroyed(
                configuration = copyConfiguration(active.configuration),
                savedState = active.stateKeeperDispatcher.save()
            ),
            backStack = backStack.map {
                RouterEntry.Destroyed(
                    configuration = copyConfiguration(it.configuration),
                    savedState = it.savedState
                )
            }
        )

    class SavedState<C : Any>(
        val map: MutableMap<String, RestoredStack<C>>
    )
}
