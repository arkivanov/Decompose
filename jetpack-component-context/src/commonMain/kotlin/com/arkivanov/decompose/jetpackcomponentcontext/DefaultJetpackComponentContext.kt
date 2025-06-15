package com.arkivanov.decompose.jetpackcomponentcontext

import androidx.lifecycle.LifecycleObserver
import androidx.lifecycle.SAVED_STATE_REGISTRY_OWNER_KEY
import androidx.lifecycle.SavedStateViewModelFactory
import androidx.lifecycle.VIEW_MODEL_STORE_OWNER_KEY
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.ViewModelStore
import androidx.lifecycle.enableSavedStateHandles
import androidx.lifecycle.viewmodel.MutableCreationExtras
import androidx.savedstate.SavedStateRegistry
import androidx.savedstate.SavedStateRegistryController
import androidx.savedstate.savedState
import com.arkivanov.decompose.ComponentContextFactory
import com.arkivanov.decompose.GenericComponentContext
import com.arkivanov.essenty.backhandler.BackHandlerOwner
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.instancekeeper.InstanceKeeperOwner
import com.arkivanov.essenty.instancekeeper.retainedInstance
import com.arkivanov.essenty.statekeeper.StateKeeperOwner
import androidx.lifecycle.Lifecycle as JetpackLifecycle
import androidx.lifecycle.LifecycleRegistry as JetpackLifecycleRegistry
import com.arkivanov.essenty.lifecycle.Lifecycle as EssentyLifecycle

internal class DefaultJetpackComponentContext<T : GenericComponentContext<T>>(
    delegate: T,
) : JetpackComponentContext,
    StateKeeperOwner by delegate,
    InstanceKeeperOwner by delegate,
    BackHandlerOwner by delegate {

    private val jetpackLifecycleRegistry = JetpackLifecycleRegistry(this)

    override val lifecycle: JetpackComponentContext.Lifecycle = LifecycleImpl(delegate.lifecycle, jetpackLifecycleRegistry)

    override val componentContextFactory: ComponentContextFactory<JetpackComponentContext> =
        ComponentContextFactory { lifecycle, stateKeeper, instanceKeeper, backHandler ->
            DefaultJetpackComponentContext(delegate.componentContextFactory(lifecycle, stateKeeper, instanceKeeper, backHandler))
        }

    private val savedStateRegistryController = SavedStateRegistryController.create(this)
    override val savedStateRegistry: SavedStateRegistry by savedStateRegistryController::savedStateRegistry

    override val viewModelStore: ViewModelStore = retainedInstance(key = KEY, factory = ::ViewModelStoreInstance)

    override val defaultViewModelProviderFactory: ViewModelProvider.Factory by lazy(::SavedStateViewModelFactory)

    override val defaultViewModelCreationExtras: MutableCreationExtras by lazy {
        MutableCreationExtras().also { extras ->
            extras[SAVED_STATE_REGISTRY_OWNER_KEY] = this
            extras[VIEW_MODEL_STORE_OWNER_KEY] = this
        }
    }

    init {
        savedStateRegistryController.performAttach()

        stateKeeper.consume(key = KEY, strategy = SavedStateSerializer).also { savedState ->
            savedStateRegistryController.performRestore(savedState)
        }

        stateKeeper.register(key = KEY, strategy = SavedStateSerializer) {
            savedState().also(savedStateRegistryController::performSave)
        }

        enableSavedStateHandles()

        lifecycle.subscribe(LifecycleCallbacksDelegate(jetpackLifecycleRegistry))
    }
}

private const val KEY = "decompose.JetpackComponentContext"

private class LifecycleImpl(
    private val essentyLifecycle: EssentyLifecycle,
    private val jetpackLifecycle: JetpackLifecycle,
) : JetpackComponentContext.Lifecycle(), EssentyLifecycle by essentyLifecycle {
    override val currentState: State by jetpackLifecycle::currentState

    override fun addObserver(observer: LifecycleObserver) {
        jetpackLifecycle.addObserver(observer)
    }

    override fun removeObserver(observer: LifecycleObserver) {
        jetpackLifecycle.removeObserver(observer)
    }
}

private class LifecycleCallbacksDelegate(
    private val delegate: JetpackLifecycleRegistry,
) : EssentyLifecycle.Callbacks {
    override fun onCreate() {
        delegate.currentState = JetpackLifecycle.State.CREATED
    }

    override fun onStart() {
        delegate.currentState = JetpackLifecycle.State.STARTED
    }

    override fun onResume() {
        delegate.currentState = JetpackLifecycle.State.RESUMED
    }

    override fun onPause() {
        delegate.currentState = JetpackLifecycle.State.STARTED
    }

    override fun onStop() {
        delegate.currentState = JetpackLifecycle.State.CREATED
    }

    override fun onDestroy() {
        delegate.currentState = JetpackLifecycle.State.DESTROYED
    }
}

private class ViewModelStoreInstance : ViewModelStore(), InstanceKeeper.Instance {
    override fun onDestroy() {
        clear()
    }
}
