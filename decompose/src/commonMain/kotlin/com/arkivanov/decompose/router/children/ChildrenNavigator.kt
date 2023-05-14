package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.router.children.ChildItem.Created
import com.arkivanov.decompose.router.children.ChildNavState.Status
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.create
import com.arkivanov.essenty.lifecycle.destroy
import com.arkivanov.essenty.lifecycle.doOnDestroy
import com.arkivanov.essenty.lifecycle.resume
import com.arkivanov.essenty.lifecycle.stop
import com.arkivanov.essenty.parcelable.ParcelableContainer

internal class ChildrenNavigator<out C : Any, out T : Any, N : NavState<C>>(
    lifecycle: Lifecycle,
    retainedInstanceSupplier: (factory: () -> InstanceKeeper.Instance) -> InstanceKeeper.Instance,
    private val childItemFactory: ChildItemFactory<C, T>,
    navState: N,
    savedChildState: List<ParcelableContainer?>?,
) {
    var navState: N = navState
        private set

    private val items = ArrayList<ChildItem<C, T>>()

    val children: List<Child<C, T>>
        get() =
            items.map { item ->
                val instance = item.instance
                if (instance != null) {
                    Child.Created(configuration = item.configuration, instance = instance)
                } else {
                    Child.Destroyed(configuration = item.configuration)
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

                    is ChildItem.Destroyed -> Unit
                }
            }
        }
    }

    private fun restore(navState: N, savedStates: List<ParcelableContainer?>) {
        val retainedChildren = retainedInstance.items.associateByTo(HashMap(), Created<C, *>::configuration)
        retainedInstance.items.clear()

        navState.children.zip(savedStates).forEach { (childNavState, savedState) ->
            items +=
                when (childNavState.status) {
                    Status.DESTROYED -> ChildItem.Destroyed(configuration = childNavState.configuration, savedState = savedState)

                    Status.INACTIVE -> {
                        childItemFactory(
                            configuration = childNavState.configuration,
                            savedState = savedState,
                            instanceKeeperDispatcher = retainedChildren.remove(childNavState.configuration)?.instanceKeeperDispatcher,
                        ).also {
                            retainedInstance.items += it
                            it.lifecycleRegistry.create()
                        }
                    }

                    Status.ACTIVE ->
                        childItemFactory(
                            configuration = childNavState.configuration,
                            savedState = savedState,
                            instanceKeeperDispatcher = retainedChildren.remove(childNavState.configuration)?.instanceKeeperDispatcher,
                        ).also {
                            it.backHandler.start()
                            retainedInstance.items += it
                            it.lifecycleRegistry.resume()
                        }
                }
        }

        retainedChildren.values.forEach { it.instanceKeeperDispatcher.destroy() }
    }

    fun saveChildState(): List<ParcelableContainer?> =
        items.map { item ->
            when (item) {
                is Created -> item.stateKeeperDispatcher.save()
                is ChildItem.Destroyed -> item.savedState
            }
        }

    fun navigate(navState: N) {
        switch(newStates = navState.children)
        this.navState = navState
    }

    private fun switch(newStates: List<ChildNavState<C>>) {
        val newConfigurations = newStates.mapTo(HashSet(), ChildNavState<C>::configuration)
        check(newConfigurations.size == newStates.size) { "Configurations must be unique" }

        val oldItems = items.associateBy(ChildItem<C, *>::configuration)
        val newItems = prepareNewItems(newStates = newStates, oldItems = oldItems)
        destroyOldItems(newConfigurations = newConfigurations, oldItems = oldItems.values)
        processNewItems(newItems = newItems)
    }

    private fun prepareNewItems(
        newStates: List<ChildNavState<C>>,
        oldItems: Map<C, ChildItem<C, T>>,
    ): List<Pair<ChildItem<C, T>, Status>> {
        val newItems = ArrayList<Pair<ChildItem<C, T>, Status>>(newStates.size)

        newStates.forEach { state ->
            newItems +=
                when (val child = oldItems[state.configuration]) {
                    is Created -> child to state.status

                    is ChildItem.Destroyed ->
                        when (state.status) {
                            Status.DESTROYED -> child to state.status

                            Status.INACTIVE ->
                                Pair(
                                    first = childItemFactory(
                                        configuration = state.configuration,
                                        savedState = child.savedState
                                    ).apply { lifecycleRegistry.create() },
                                    second = state.status,
                                )

                            Status.ACTIVE ->
                                Pair(
                                    first = childItemFactory(
                                        configuration = state.configuration,
                                        savedState = child.savedState,
                                    ).apply { lifecycleRegistry.create() },
                                    second = state.status,
                                )
                        }

                    null ->
                        when (state.status) {
                            Status.DESTROYED -> ChildItem.Destroyed(configuration = state.configuration) to state.status

                            Status.INACTIVE ->
                                Pair(
                                    first = childItemFactory(configuration = state.configuration)
                                        .apply { lifecycleRegistry.create() },
                                    second = state.status,
                                )

                            Status.ACTIVE ->
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

    private fun destroyOldItems(
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

    private fun processNewItems(newItems: List<Pair<ChildItem<C, T>, Status>>) {
        items.clear()
        retainedInstance.items.clear()

        newItems.forEach { (item, status) ->
            items +=
                when (item) {
                    is Created -> {
                        when (status) {
                            Status.DESTROYED -> {
                                val savedState = item.stateKeeperDispatcher.save()
                                item.destroy()
                                ChildItem.Destroyed(configuration = item.configuration, savedState = savedState)
                            }

                            Status.INACTIVE -> {
                                retainedInstance.items += item

                                item
                                    .takeIf { it.lifecycleRegistry.state != Lifecycle.State.CREATED }
                                    ?.apply {
                                        backHandler.stop()
                                        lifecycleRegistry.stop()
                                    }
                                    ?: item
                            }

                            Status.ACTIVE -> {
                                retainedInstance.items += item

                                item
                                    .takeIf { it.lifecycleRegistry.state != Lifecycle.State.RESUMED }
                                    ?.apply {
                                        backHandler.start()
                                        lifecycleRegistry.resume()
                                    }
                                    ?: item
                            }
                        }
                    }

                    is ChildItem.Destroyed -> item
                }
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
