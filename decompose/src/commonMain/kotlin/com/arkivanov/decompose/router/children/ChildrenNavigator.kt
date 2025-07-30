package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.mapped
import com.arkivanov.decompose.router.children.ChildItem.Created
import com.arkivanov.decompose.router.children.ChildItem.Destroyed
import com.arkivanov.decompose.router.children.ChildNavState.Status
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.create
import com.arkivanov.essenty.lifecycle.destroy
import com.arkivanov.essenty.lifecycle.doOnDestroy
import com.arkivanov.essenty.lifecycle.pause
import com.arkivanov.essenty.lifecycle.resume
import com.arkivanov.essenty.lifecycle.start
import com.arkivanov.essenty.lifecycle.stop
import com.arkivanov.essenty.statekeeper.SerializableContainer
import kotlinx.serialization.Serializable

internal class ChildrenNavigator<out C : Any, out T : Any, N : NavState<C>>(
    lifecycle: Lifecycle,
    retainedInstanceSupplier: (factory: () -> InstanceKeeper.Instance) -> InstanceKeeper.Instance,
    private val childItemFactory: ChildItemFactory<C, T>,
    navState: N,
    savedChildState: List<SavedChildState>?,
) {
    var navState: N = navState
        private set

    private val items = ArrayList<ChildItem<C, T>>()

    val children: List<Child<C, T>>
        get() =
            items.map { item ->
                val instance = item.instance
                if (instance != null) {
                    Child.Created(configuration = item.configuration, instance = instance, key = item.key)
                } else {
                    Child.Destroyed(configuration = item.configuration, key = item.key)
                }
            }

    @Suppress("UNCHECKED_CAST")
    private val retainedInstance = retainedInstanceSupplier { RetainedInstance<C, T>() } as RetainedInstance<C, T>

    init {
        if (savedChildState == null) {
            retainedInstance.onDestroy()
            switch(newStates = navState.children)
        } else {
            restore(navState = navState, savedStates = savedChildState)
        }

        lifecycle.doOnDestroy {
            items.asReversed().forEach { item ->
                when (item) {
                    is Created -> {
                        item.backHandler.stop()
                        item.lifecycleRegistry.destroy()
                    }

                    is Destroyed -> Unit
                }
            }
        }
    }

    private fun restore(navState: N, savedStates: List<SavedChildState>) {
        val retainedChildren = HashMap<Int, Created<C, T>>()
        retainedInstance.items.forEachIndexed(retainedChildren::put)
        val restoreRetainedChildren = navState.children.mapped { it.configuration } == retainedInstance.items.mapped { it.configuration }
        retainedInstance.items.clear()

        navState.children.zip(savedStates).forEachIndexed { index, (childNavState, savedState) ->
            items +=
                restoreItem(
                    status = childNavState.status,
                    getDestroyedItem = {
                        Destroyed(
                            configuration = childNavState.configuration,
                            key = savedState.key,
                            savedState = savedState.savedState,
                        )
                    },
                    getCreatedItem = {
                        childItemFactory(
                            configuration = childNavState.configuration,
                            key = savedState.key,
                            savedState = savedState.savedState,
                            instanceKeeperDispatcher = retainedChildren
                                .takeIf { restoreRetainedChildren }
                                ?.remove(index)
                                ?.instanceKeeperDispatcher,
                        ).also {
                            retainedInstance.items += it
                        }
                    }
                )
        }

        retainedChildren.values.forEach { it.instanceKeeperDispatcher.destroy() }
    }

    private inline fun restoreItem(
        status: Status,
        getDestroyedItem: () -> Destroyed<C>,
        getCreatedItem: () -> Created<C, T>,
    ): ChildItem<C, T> =
        when (status) {
            Status.DESTROYED -> getDestroyedItem()

            Status.CREATED ->
                getCreatedItem().apply {
                    lifecycleRegistry.create()
                }

            Status.STARTED ->
                getCreatedItem().apply {
                    backHandler.start()
                    lifecycleRegistry.start()
                }

            Status.RESUMED ->
                getCreatedItem().apply {
                    backHandler.start()
                    lifecycleRegistry.resume()
                }
        }

    fun saveChildState(): List<SavedChildState> =
        items.map { item ->
            SavedChildState(
                key = item.key,
                savedState = item.saveState(),
            )
        }

    private fun ChildItem<C, T>.saveState(): SerializableContainer? =
        when (this) {
            is Created -> stateKeeperDispatcher.save()
            is Destroyed -> savedState
        }

    fun navigate(navState: N) {
        switch(newStates = navState.children)
        this.navState = navState
    }

    private fun switch(newStates: List<ChildNavState<C>>) {
        val newKeyedStates = newStates.keyed { it.configuration }
        val oldKeyedItems = items.keyed { it.configuration }
        val newItems = prepareNewItems(newStates = newKeyedStates, oldItems = oldKeyedItems)
        destroyOldItems(newKeys = newKeyedStates.keys, oldItems = oldKeyedItems)
        processNewItems(newItems = newItems)
    }

    private fun prepareNewItems(
        newStates: Map<Any, ChildNavState<C>>,
        oldItems: Map<Any, ChildItem<C, T>>,
    ): List<Pair<ChildItem<C, T>, Status>> {
        val newItems = ArrayList<Pair<ChildItem<C, T>, Status>>(newStates.size)

        newStates.forEach { (key, state) ->
            newItems +=
                when (val child = oldItems[key]) {
                    is Created -> child to state.status

                    is Destroyed ->
                        when (state.status) {
                            Status.DESTROYED -> child to state.status

                            Status.CREATED,
                            Status.STARTED,
                            Status.RESUMED ->
                                Pair(
                                    first = childItemFactory(
                                        configuration = state.configuration,
                                        key = child.key,
                                        savedState = child.savedState
                                    ).apply { lifecycleRegistry.create() },
                                    second = state.status,
                                )
                        }

                    null ->
                        when (state.status) {
                            Status.DESTROYED -> Destroyed(configuration = state.configuration, key = randomKey()) to state.status

                            Status.CREATED,
                            Status.STARTED,
                            Status.RESUMED ->
                                Pair(
                                    first = childItemFactory(configuration = state.configuration, key = randomKey())
                                        .apply { lifecycleRegistry.create() },
                                    second = state.status,
                                )
                        }
                }
        }

        return newItems
    }

    private fun destroyOldItems(
        newKeys: Set<Any>,
        oldItems: Map<Any, ChildItem<C, T>>,
    ) {
        for ((key, item) in oldItems) {
            val child = item as? Created ?: continue
            if (key !in newKeys) {
                child.destroy()
            }
        }
    }

    private fun processNewItems(newItems: List<Pair<ChildItem<C, T>, Status>>) {
        items.clear()
        retainedInstance.items.clear()

        newItems.forEach { (item, status) ->
            items +=
                when (item) {
                    is Created -> processNewItem(item, status)
                    is Destroyed -> item
                }
        }
    }

    private fun processNewItem(item: Created<C, T>, status: Status): ChildItem<C, T> =
        when (status) {
            Status.DESTROYED -> {
                val savedState = item.stateKeeperDispatcher.save()
                item.destroy()
                item.toDestroyed(savedState = savedState)
            }

            Status.CREATED -> {
                retainedInstance.items += item

                if (item.lifecycleRegistry.state != Lifecycle.State.CREATED) {
                    item.backHandler.stop()
                    item.lifecycleRegistry.stop()
                }

                item
            }

            Status.STARTED -> {
                retainedInstance.items += item

                when {
                    item.lifecycleRegistry.state < Lifecycle.State.STARTED -> {
                        item.backHandler.start()
                        item.lifecycleRegistry.start()
                    }

                    item.lifecycleRegistry.state > Lifecycle.State.STARTED -> {
                        item.lifecycleRegistry.pause()
                    }
                }

                item
            }

            Status.RESUMED -> {
                retainedInstance.items += item

                if (item.lifecycleRegistry.state != Lifecycle.State.RESUMED) {
                    item.backHandler.start()
                    item.lifecycleRegistry.resume()
                }

                item
            }
        }

    private fun Created<*, *>.destroy() {
        backHandler.stop()
        lifecycleRegistry.destroy()
        instanceKeeperDispatcher.destroy()
    }

    @Serializable
    data class SavedChildState(
        val key: String,
        val savedState: SerializableContainer?,
    )

    private class RetainedInstance<C : Any, T : Any> : InstanceKeeper.Instance {
        val items: MutableList<Created<C, T>> = ArrayList()

        override fun onDestroy() {
            items.forEach { it.instanceKeeperDispatcher.destroy() }
            items.clear()
        }
    }
}

private fun <T : Any, C : Any> List<T>.keyed(configuration: (T) -> C): Map<Any, T> {
    val numbers = HashMap<C, Int>()

    return associateBy { item ->
        val config = configuration(item)
        val number = (numbers[config] ?: 0) + 1
        numbers[config] = number
        config to number
    }
}
