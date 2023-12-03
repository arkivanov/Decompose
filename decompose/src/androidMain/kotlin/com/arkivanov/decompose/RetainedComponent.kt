package com.arkivanov.decompose

import androidx.activity.BackEventCompat
import androidx.activity.ComponentActivity
import androidx.activity.OnBackPressedCallback
import androidx.activity.OnBackPressedDispatcher
import androidx.fragment.app.Fragment
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.ViewModelStoreOwner
import androidx.savedstate.SavedStateRegistryOwner
import com.arkivanov.essenty.backhandler.BackHandler
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.instancekeeper.getOrCreate
import com.arkivanov.essenty.instancekeeper.instanceKeeper
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.create
import com.arkivanov.essenty.lifecycle.destroy
import com.arkivanov.essenty.lifecycle.essentyLifecycle
import com.arkivanov.essenty.lifecycle.pause
import com.arkivanov.essenty.lifecycle.resume
import com.arkivanov.essenty.lifecycle.start
import com.arkivanov.essenty.lifecycle.stop
import com.arkivanov.essenty.lifecycle.subscribe
import com.arkivanov.essenty.statekeeper.SerializableContainer
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher
import com.arkivanov.essenty.statekeeper.stateKeeper

/**
 * Returns (creating if needed) a component that is retained over configuration changes.
 * This is typically used to create a retained root component.
 *
 * Please pay attention when supplying dependencies to the component to avoid leaking the `Activity`.
 *
 * @param key a key of the component, must be unique within the `Activity`.
 * @param handleBackButton a flag that determines whether back button handling is enabled or not, default is `true`.
 * @param factory a function that returns a new instance of the component.
 */
@ExperimentalDecomposeApi
fun <T> ComponentActivity.retainedComponent(
    key: String = "RootRetainedComponent",
    handleBackButton: Boolean = true,
    factory: (ComponentContext) -> T,
): T =
    retainedComponent(
        key = key,
        onBackPressedDispatcher = if (handleBackButton) onBackPressedDispatcher else null,
        isChangingConfigurations = ::isChangingConfigurations,
        factory = factory,
    )

/**
 * Returns (creating if needed) a component that is retained over configuration changes.
 * This is typically used to create a retained root component.
 *
 * Please pay attention when supplying dependencies to the component to avoid leaking the `Fragment`.
 *
 * @param key a key of the component, must be unique within the `Fragment`.
 * @param handleBackButton a flag that determines whether back button handling is enabled or not, default is `true`.
 * @param factory a function that returns a new instance of the component.
 */
@ExperimentalDecomposeApi
fun <T> Fragment.retainedComponent(
    key: String = "RootRetainedComponent",
    handleBackButton: Boolean = true,
    factory: (ComponentContext) -> T,
): T =
    retainedComponent(
        key = key,
        onBackPressedDispatcher = if (handleBackButton) requireActivity().onBackPressedDispatcher else null,
        isChangingConfigurations = { activity?.isChangingConfigurations ?: false },
        factory = factory,
    )

private fun <T, O> O.retainedComponent(
    key: String,
    onBackPressedDispatcher: OnBackPressedDispatcher?,
    isChangingConfigurations: () -> Boolean,
    factory: (ComponentContext) -> T,
): T where O : LifecycleOwner, O : SavedStateRegistryOwner, O : ViewModelStoreOwner {
    val lifecycle = essentyLifecycle()
    val stateKeeper = stateKeeper()
    val instanceKeeper = instanceKeeper()

    check(!stateKeeper.isRegistered(key = key)) { "Another retained component is already registered with the key: $key" }

    val holder =
        instanceKeeper.getOrCreate(key = key) {
            RetainedComponentHolder(
                savedState = stateKeeper.consume(key = key, strategy = SerializableContainer.serializer()),
                factory = factory,
            )
        }

    lifecycle.subscribe(
        onCreate = { holder.lifecycle.create() },
        onStart = { holder.lifecycle.start() },
        onResume = { holder.lifecycle.resume() },
        onPause = {
            if (!isChangingConfigurations()) {
                holder.lifecycle.pause()
            }
        },
        onStop = {
            if (!isChangingConfigurations()) {
                holder.lifecycle.stop()
            }
        },
        onDestroy = {
            if (!isChangingConfigurations()) {
                holder.lifecycle.destroy()
            }
        },
    )

    stateKeeper.register(key = key, strategy = SerializableContainer.serializer()) { holder.stateKeeper.save() }

    if (onBackPressedDispatcher != null) {
        val onBackPressedCallback = DelegateOnBackPressedCallback(holder.onBackPressedDispatcher)
        holder.onBackEnabledChangedListener = { onBackPressedCallback.isEnabled = it }
        onBackPressedDispatcher.addCallback(this, onBackPressedCallback)
    }

    return holder.component
}

private class DelegateOnBackPressedCallback(
    private val dispatcher: OnBackPressedDispatcher,
) : OnBackPressedCallback(enabled = dispatcher.hasEnabledCallbacks()) {
    override fun handleOnBackPressed() {
        dispatcher.onBackPressed()
    }

    override fun handleOnBackStarted(backEvent: BackEventCompat) {
        dispatcher.dispatchOnBackStarted(backEvent)
    }

    override fun handleOnBackProgressed(backEvent: BackEventCompat) {
        dispatcher.dispatchOnBackProgressed(backEvent)
    }

    override fun handleOnBackCancelled() {
        dispatcher.dispatchOnBackCancelled()
    }
}

private class RetainedComponentHolder<out T>(
    savedState: SerializableContainer?,
    factory: (ComponentContext) -> T,
) : InstanceKeeper.Instance {
    val lifecycle: LifecycleRegistry = LifecycleRegistry()
    val stateKeeper: StateKeeperDispatcher = StateKeeperDispatcher(savedState = savedState)
    private val instanceKeeper: InstanceKeeperDispatcher = InstanceKeeperDispatcher()

    var onBackEnabledChangedListener: ((Boolean) -> Unit)? = null

    val onBackPressedDispatcher: OnBackPressedDispatcher =
        OnBackPressedDispatcher(
            fallbackOnBackPressed = null,
            onHasEnabledCallbacksChanged = { onBackEnabledChangedListener?.invoke(it) },
        )

    val component: T =
        factory(
            DefaultComponentContext(
                lifecycle = lifecycle,
                stateKeeper = stateKeeper,
                instanceKeeper = instanceKeeper,
                backHandler = BackHandler(onBackPressedDispatcher),
            )
        )

    override fun onDestroy() {
        instanceKeeper.destroy()
    }
}
