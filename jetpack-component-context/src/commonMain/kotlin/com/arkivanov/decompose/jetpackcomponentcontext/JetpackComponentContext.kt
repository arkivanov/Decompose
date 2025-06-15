package com.arkivanov.decompose.jetpackcomponentcontext

import androidx.lifecycle.HasDefaultViewModelProviderFactory
import androidx.lifecycle.ViewModelStoreOwner
import androidx.lifecycle.viewmodel.MutableCreationExtras
import androidx.savedstate.SavedStateRegistryOwner
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.GenericComponentContext
import androidx.lifecycle.Lifecycle as JetpackLifecycle
import com.arkivanov.essenty.lifecycle.Lifecycle as EssentyLifecycle


/**
 * A component context that integrates with Jetpack libraries.
 *
 * This interface bridges Decompose's component system with Jetpack architecture components,
 * providing access to Jetpack's lifecycle, saved state, and ViewModel functionality.
 * It extends [GenericComponentContext] and implements various Jetpack interfaces to enable
 * seamless integration with Jetpack libraries.
 *
 * For `ViewModel` creation, see [viewModel] extension functions.
 *
 * The `OnBackPressedDispatcherOwner` and the new `NavigationEventDispatcherOwner` interfaces
 * are not yet supported. Most likely the [GenericComponentContext] interface will be extending
 * `NavigationEventDispatcherOwner` in the next major release of Decompose 4.0.
 * See [b/425223277](https://issuetracker.google.com/issues/425223277) for more information.
 *
 * Please note that the persistent state saving via [SavedStateRegistryOwner] is only supported
 * on Android. On all other platforms, the state cannot be serialized at the moment.
 * You can still use [StateKeeperOwner][com.arkivanov.essenty.statekeeper.StateKeeperOwner]
 * that supports serialization on all platforms.
 * See [b/425919375](https://issuetracker.google.com/issues/425919375) for more information.
 */
@ExperimentalDecomposeApi
interface JetpackComponentContext :
    GenericComponentContext<JetpackComponentContext>,
    androidx.lifecycle.LifecycleOwner,
    SavedStateRegistryOwner,
    ViewModelStoreOwner,
    HasDefaultViewModelProviderFactory {

    /**
     * The lifecycle of this component. See [Lifecycle].
     */
    override val lifecycle: Lifecycle

    override val defaultViewModelCreationExtras: MutableCreationExtras

    /**
     * An abstract class that implements both Jetpack's Lifecycle and Essenty's Lifecycle.
     *
     * This class serves as a bridge between the two lifecycle systems, allowing components
     * to respond to lifecycle events from either system.
     */
    abstract class Lifecycle : JetpackLifecycle(), EssentyLifecycle
}

/**
 * Converts a [GenericComponentContext] to a [JetpackComponentContext].
 */
@ExperimentalDecomposeApi
fun <T : GenericComponentContext<T>> T.asJetpackComponentContext(): JetpackComponentContext =
    DefaultJetpackComponentContext(this)
