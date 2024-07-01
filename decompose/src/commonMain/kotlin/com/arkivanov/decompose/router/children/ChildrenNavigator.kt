package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.DecomposeExperimentFlags
import com.arkivanov.decompose.keyed
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

internal class ChildrenNavigator<out C : Any, out T : Any, N : NavState<C>>(
    lifecycle: Lifecycle,
    retainedInstanceSupplier: (factory: () -> InstanceKeeper.Instance) -> InstanceKeeper.Instance,
    private val childItemFactory: ChildItemFactory<C, T>,
    navState: N,
    savedChildState: List<SerializableContainer?>?,
) {
    var navState: N = navState
        private set

    private val items = ArrayList<ChildItem<C, T>>()

    val children: List<Child<C, T>>
        get() =
            if (DecomposeExperimentFlags.duplicateConfigurationsEnabled) {
                getChildrenExperimental()
            } else {
                getChildrenDefault()
            }

    private fun getChildrenDefault(): List<Child<C, T>> =
        items.map { item ->
            val instance = item.instance
            if (instance != null) {
                Child.Created(configuration = item.configuration, instance = instance)
            } else {
                Child.Destroyed(configuration = item.configuration)
            }
        }

    private fun getChildrenExperimental(): List<Child<C, T>> =
        items.keyed { it.configuration }.map { (key, item) ->
            val instance = item.instance
            if (instance != null) {
                Child.Created(key = key, configuration = item.configuration, instance = instance)
            } else {
                Child.Destroyed(key = key, configuration = item.configuration)
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

    private fun restore(navState: N, savedStates: List<SerializableContainer?>) {
        if (DecomposeExperimentFlags.duplicateConfigurationsEnabled) {
            restoreExperimental(navState, savedStates)
        } else {
            restoreDefault(navState, savedStates)
        }
    }

    private fun restoreDefault(navState: N, savedStates: List<SerializableContainer?>) {
        val retainedChildren = retainedInstance.items.associateByTo(HashMap(), Created<C, *>::configuration)
        retainedInstance.items.clear()

        navState.children.zip(savedStates).forEach { (childNavState, savedState) ->
            items +=
                restoreItem(
                    status = childNavState.status,
                    getDestroyedItem = { Destroyed(configuration = childNavState.configuration, savedState = savedState) },
                    getCreatedItem = {
                        childItemFactory(
                            configuration = childNavState.configuration,
                            savedState = savedState,
                            instanceKeeperDispatcher = retainedChildren.remove(childNavState.configuration)?.instanceKeeperDispatcher,
                        ).also {
                            retainedInstance.items += it
                        }
                    }
                )
        }

        retainedChildren.values.forEach { it.instanceKeeperDispatcher.destroy() }
    }

    private fun restoreExperimental(navState: N, savedStates: List<SerializableContainer?>) {
        val retainedChildren = HashMap<Int, Created<C, T>>()
        retainedInstance.items.forEachIndexed(retainedChildren::put)
        val restoreRetainedChildren = navState.children.mapped { it.configuration } == retainedInstance.items.mapped { it.configuration }
        retainedInstance.items.clear()

        navState.children.zip(savedStates).forEachIndexed { index, (childNavState, savedState) ->
            items +=
                restoreItem(
                    status = childNavState.status,
                    getDestroyedItem = { Destroyed(configuration = childNavState.configuration, savedState = savedState) },
                    getCreatedItem = {
                        childItemFactory(
                            configuration = childNavState.configuration,
                            savedState = savedState,
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

    fun saveChildState(): List<SerializableContainer?> =
        items.map { item ->
            when (item) {
                is Created -> item.stateKeeperDispatcher.save()
                is Destroyed -> item.savedState
            }
        }

    fun navigate(navState: N) {
        switch(newStates = navState.children)
        this.navState = navState
    }

    private fun switch(newStates: List<ChildNavState<C>>) {
        if (DecomposeExperimentFlags.duplicateConfigurationsEnabled) {
            switchExperimental(newStates)
        } else {
            switchDefault(newStates)
        }
    }

    private fun switchDefault(newStates: List<ChildNavState<C>>) {
        val newConfigurations = newStates.mapTo(HashSet(), ChildNavState<C>::configuration)
        check(newConfigurations.size == newStates.size) {
            "Configurations must be unique: ${newStates.map(ChildNavState<C>::configuration)}."
        }

        val oldItems = items.associateBy(ChildItem<C, *>::configuration)
        val newItems = prepareNewItemsDefault(newStates = newStates, oldItems = oldItems)
        destroyOldItemsDefault(newConfigurations = newConfigurations, oldItems = oldItems.values)
        processNewItems(newItems = newItems)
    }

    private fun prepareNewItemsDefault(
        newStates: List<ChildNavState<C>>,
        oldItems: Map<C, ChildItem<C, T>>,
    ): List<Pair<ChildItem<C, T>, Status>> {
        val newItems = ArrayList<Pair<ChildItem<C, T>, Status>>(newStates.size)

        newStates.forEach { state ->
            newItems +=
                when (val child = oldItems[state.configuration]) {
                    is Created -> child to state.status

                    is Destroyed ->
                        when (state.status) {
                            Status.DESTROYED -> child to state.status

                            Status.CREATED,
                            Status.STARTED,
                            Status.RESUMED ->
                                Pair(
                                    first = childItemFactory(configuration = state.configuration, savedState = child.savedState)
                                        .apply { lifecycleRegistry.create() },
                                    second = state.status,
                                )
                        }

                    null ->
                        when (state.status) {
                            Status.DESTROYED -> Destroyed(configuration = state.configuration) to state.status

                            Status.CREATED,
                            Status.STARTED,
                            Status.RESUMED ->
                                Pair(
                                    first = childItemFactory(configuration = state.configuration)
                                        .apply { lifecycleRegistry.create() },
                                    second = state.status,
                                )
                        }
                }
        }

        return newItems
    }

    private fun destroyOldItemsDefault(
        newConfigurations: Set<C>,
        oldItems: Collection<ChildItem<C, T>>,
    ) {
        for (item in oldItems) {
            val child = item as? Created ?: continue
            if (item.configuration !in newConfigurations) {
                child.destroy()
            }
        }
    }

    private fun switchExperimental(newStates: List<ChildNavState<C>>) {
        val newKeyedStates = newStates.keyed(ChildNavState<C>::configuration)
        val oldKeyedItems = items.keyed(ChildItem<C, *>::configuration)
        val newItems = prepareNewItemsExperimental(newStates = newKeyedStates, oldItems = oldKeyedItems)
        destroyOldItemsExperimental(newKeys = newKeyedStates.keys, oldItems = oldKeyedItems)
        processNewItems(newItems = newItems)
    }

    private fun prepareNewItemsExperimental(
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
                                    first = childItemFactory(configuration = state.configuration, savedState = child.savedState)
                                        .apply { lifecycleRegistry.create() },
                                    second = state.status,
                                )
                        }

                    null ->
                        when (state.status) {
                            Status.DESTROYED -> Destroyed(configuration = state.configuration) to state.status

                            Status.CREATED,
                            Status.STARTED,
                            Status.RESUMED ->
                                Pair(
                                    first = childItemFactory(configuration = state.configuration)
                                        .apply { lifecycleRegistry.create() },
                                    second = state.status,
                                )
                        }
                }
        }

        return newItems
    }

    private fun destroyOldItemsExperimental(
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
                Destroyed(configuration = item.configuration, savedState = savedState)
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

    private class RetainedInstance<C : Any, T : Any> : InstanceKeeper.Instance {
        val items: MutableList<Created<C, T>> = ArrayList()

        override fun onDestroy() {
            items.forEach { it.instanceKeeperDispatcher.destroy() }
            items.clear()
        }
    }
}
