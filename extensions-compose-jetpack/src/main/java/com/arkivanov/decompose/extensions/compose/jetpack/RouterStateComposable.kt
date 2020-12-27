package com.arkivanov.decompose.extensions.compose.jetpack

import android.os.Parcelable
import androidx.compose.runtime.Composable
import androidx.compose.runtime.Providers
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.onCommit
import androidx.compose.runtime.onDispose
import androidx.compose.runtime.remember
import androidx.compose.runtime.savedinstancestate.ExperimentalRestorableStateHolder
import androidx.compose.runtime.savedinstancestate.RestorableStateHolder
import androidx.compose.runtime.savedinstancestate.UiSavedStateRegistry
import androidx.compose.runtime.savedinstancestate.UiSavedStateRegistryAmbient
import androidx.compose.runtime.savedinstancestate.rememberRestorableStateHolder
import com.arkivanov.decompose.RouterState
import com.arkivanov.decompose.value.Value

typealias ChildContent<C, T> = @Composable (child: T, configuration: C) -> Unit

typealias ChildAnimation<C, T> = @Composable (child: T, configuration: C, ChildContent<C, T>) -> Unit

@Composable
fun <C : Parcelable, T : Any> Children(
    routerState: Value<RouterState<C, T>>,
    content: ChildContent<C, T>
) {
    // Workaround https://github.com/arkivanov/Decompose/issues/25
    val animation: ChildAnimation<C, T> = { child, configuration, function -> function(child, configuration) }

    Children(routerState = routerState, animation = animation, content = content)
}

@OptIn(ExperimentalRestorableStateHolder::class)
@Composable
fun <C : Parcelable, T : Any> Children(
    routerState: Value<RouterState<C, T>>,
    animation: ChildAnimation<C, T>,
    content: ChildContent<C, T>
) {
    val holder = key(routerState) { rememberRestorableStateHolder<C>() }
    val state by routerState.asState()
    val activeChild = state.activeChild

    holder.retainStates(state.getConfigurations())

    animation(activeChild.component, activeChild.configuration) { child, configuration ->
        holder.RestorableStateProvider(configuration) {
            content(child, configuration)
        }
    }
}

private fun <C : Parcelable> RouterState<C, *>.getConfigurations(): Set<C> {
    val set = HashSet<C>()
    backStack.forEach { set += it.configuration }
    set += activeChild.configuration

    return set
}

@OptIn(ExperimentalRestorableStateHolder::class)
@Composable
private fun <T : Any> RestorableStateHolder<T>.retainStates(currentKeys: Set<T>) {
    val keys = remember(this) { Keys(currentKeys) }

    onCommit(this, currentKeys) {
        keys.set.forEach {
            if (it !in currentKeys) {
                removeState(it)
            }
        }

        keys.set = currentKeys
    }
}

private class Keys<T : Any>(
    var set: Set<T>
)

//region Deprecated

private typealias SavedState = Map<String, List<Any?>>

@Deprecated("Use Children function", ReplaceWith("Children(this, content = render)"))
@Composable
fun <C : Parcelable, T : Any> Value<RouterState<C, T>>.children(render: @Composable (child: T, configuration: C) -> Unit) {
    val state by asState()

    val parentRegistry: UiSavedStateRegistry? = UiSavedStateRegistryAmbient.current
    val children = remember(this) { Children<C>() }

    if (parentRegistry != null) {
        onDispose {
            children.inactive.entries.forEach { (key, value) ->
                parentRegistry.unregisterProvider(key, value.provider)
            }
            children.active?.also {
                parentRegistry.unregisterProvider(it.key, it.provider)
            }
        }
    }

    val activeChildConfiguration = state.activeChild.configuration

    val currentChild: ActiveChild<C>? = children.active
    if ((currentChild != null) && state.backStack.any { it.configuration === currentChild.configuration }) {
        parentRegistry?.unregisterProvider(currentChild.key, currentChild.provider)
        val inactiveChild = InactiveChild(configuration = currentChild.configuration, savedState = currentChild.provider())
        children.inactive[currentChild.key] = inactiveChild
        parentRegistry?.registerProvider(currentChild.key, inactiveChild.provider)
    }

    val activeChildRegistry: UiSavedStateRegistry

    if (currentChild?.configuration === activeChildConfiguration) {
        activeChildRegistry = currentChild.registry
    } else {
        val key = activeChildConfiguration.toString()

        val savedChild: InactiveChild<C>? = children.inactive.remove(key)
        if (savedChild != null) {
            parentRegistry?.unregisterProvider(key, savedChild.provider)
        }
        @Suppress("UNCHECKED_CAST")
        val savedState: SavedState? = savedChild?.savedState ?: parentRegistry?.consumeRestored(key) as SavedState?

        activeChildRegistry = UiSavedStateRegistry(savedState) { true }

        val newActiveChild = ActiveChild(configuration = activeChildConfiguration, key = key, registry = activeChildRegistry)
        children.active = newActiveChild
        parentRegistry?.registerProvider(key, newActiveChild.provider)
    }

    children.inactive.entries.removeAll { (key, value) ->
        val remove = state.backStack.none { it.configuration === value.configuration }
        if (remove) {
            parentRegistry?.unregisterProvider(key, value.provider)
        }
        remove
    }

    Providers(UiSavedStateRegistryAmbient provides activeChildRegistry) {
        render(state.activeChild.component, activeChildConfiguration)
    }
}

private class Children<C : Parcelable> {
    val inactive: MutableMap<String, InactiveChild<C>> = HashMap()
    var active: ActiveChild<C>? = null
}

private class ActiveChild<out C : Parcelable>(
    val configuration: C,
    val key: String,
    val registry: UiSavedStateRegistry
) {
    val provider: () -> SavedState = registry::performSave
}

private class InactiveChild<out C : Parcelable>(
    val configuration: C,
    val savedState: SavedState
) {
    val provider: () -> SavedState = ::savedState
}

//endregion
