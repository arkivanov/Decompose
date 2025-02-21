package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.router.children.ChildNavState.Status
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
        controller.init(dropState = savedChildState == null) {
            if (savedChildState == null) {
                navState.children.forEach(::activateChild)
            } else {
                navState.children.zip(savedChildState).forEach { (childNavState, childSavedState) ->
                    activateChild(childNavState, childSavedState)
                }
            }
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

        newStates.forEach { state ->
            if ((state.status >= Status.CREATED) && !controller.isActive(state.configuration)) {
                controller.create(configuration = state.configuration)
            }
        }

        oldStates.forEach {
            if (it.configuration !in newConfigurations) {
                controller.remove(it.configuration)
            }
        }

        newStates.forEach { state ->
            activateChild(state)
        }
    }

    private fun activateChild(state: ChildNavState<C>, savedState: SerializableContainer? = null) {
        when (state.status) {
            Status.DESTROYED -> controller.destroy(configuration = state.configuration, savedState = savedState)
            Status.CREATED -> controller.create(configuration = state.configuration, savedState = savedState)
            Status.STARTED -> controller.start(configuration = state.configuration, savedState = savedState)
            Status.RESUMED -> controller.resume(configuration = state.configuration, savedState = savedState)
        }
    }
}
