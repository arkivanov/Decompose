package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.Child
import com.arkivanov.essenty.statekeeper.SerializableContainer

internal class ChildrenNavigator<out C : Any, out T : Any, N : NavState<C>>(
    private val controller: ChildController<C, T, *>,
    navState: N,
    savedChildState: List<SerializableContainer?>?,
) {
    var navState: N = navState
        private set

    val children: List<Child<C, T>>
        get() = getChildrenDefault()

    private fun getChildrenDefault(): List<Child<C, T>> =
        navState.children.map {
            val child = controller[it.configuration]
            if (child != null) {
                Child.Created(
                    configuration = it.configuration,
                    instance = child,
                )
            } else {
                Child.Destroyed(configuration = it.configuration)
            }
        }

    init {
        if (savedChildState == null) {
            controller.init(
                state = navState.children.associateBy(
                    keySelector = { it.configuration },
                    valueTransform = { it.status },
                ),
            )
        } else {
            controller.restore(
                savedState = navState.children
                    .zip(savedChildState)
                    .associateBy(
                        keySelector = { (childNavState) -> childNavState.configuration },
                        valueTransform = { (childNavState, childSavedState) -> childNavState.status to childSavedState },
                    ),
            )
        }
    }

    fun saveChildState(): List<SerializableContainer?> =
        navState.children.map { controller.saveState(it.configuration) }

    fun navigate(navState: N) {
        val oldStates = this.navState.children
        val newStates = navState.children
        this.navState = navState

        val newConfigurations = newStates.mapTo(HashSet(), ChildNavState<C>::configuration)
        check(newConfigurations.size == newStates.size) {
            "Configurations must be unique: ${newStates.map(ChildNavState<C>::configuration)}."
        }

        newStates.forEach {
            controller.update(configuration = it.configuration, status = it.status)
        }

        oldStates.forEach {
            if (it.configuration !in newConfigurations) {
                controller.update(configuration = it.configuration, status = null)
            }
        }
    }
}
