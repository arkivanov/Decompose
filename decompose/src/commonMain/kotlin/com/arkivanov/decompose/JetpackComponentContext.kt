package com.arkivanov.decompose

import androidx.lifecycle.HasDefaultViewModelProviderFactory
import androidx.lifecycle.LifecycleObserver
import androidx.lifecycle.SAVED_STATE_REGISTRY_OWNER_KEY
import androidx.lifecycle.SavedStateViewModelFactory
import androidx.lifecycle.VIEW_MODEL_STORE_OWNER_KEY
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.ViewModelStore
import androidx.lifecycle.ViewModelStoreOwner
import androidx.lifecycle.enableSavedStateHandles
import androidx.lifecycle.viewmodel.CreationExtras
import androidx.lifecycle.viewmodel.MutableCreationExtras
import androidx.lifecycle.viewmodel.initializer
import androidx.lifecycle.viewmodel.viewModelFactory
import androidx.navigationevent.NavigationEvent
import androidx.navigationevent.NavigationEventDispatcher
import androidx.navigationevent.NavigationEventDispatcherOwner
import androidx.savedstate.SavedStateRegistry
import androidx.savedstate.SavedStateRegistryController
import androidx.savedstate.SavedStateRegistryOwner
import androidx.savedstate.savedState
import com.arkivanov.essenty.backhandler.BackCallback
import com.arkivanov.essenty.backhandler.BackEvent
import com.arkivanov.essenty.backhandler.BackHandlerOwner
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.instancekeeper.InstanceKeeperOwner
import com.arkivanov.essenty.instancekeeper.retainedInstance
import com.arkivanov.essenty.statekeeper.StateKeeperOwner
import kotlin.reflect.KClass
import androidx.lifecycle.Lifecycle as JetpackLifecycle
import androidx.lifecycle.LifecycleRegistry as JetpackLifecycleRegistry
import com.arkivanov.essenty.lifecycle.Lifecycle as EssentyLifecycle

interface JetpackComponentContext :
    GenericComponentContext<JetpackComponentContext>,
    androidx.lifecycle.LifecycleOwner,
    SavedStateRegistryOwner,
    ViewModelStoreOwner,
    NavigationEventDispatcherOwner,
    HasDefaultViewModelProviderFactory {

    override val lifecycle: Lifecycle

    abstract class Lifecycle : JetpackLifecycle(), EssentyLifecycle
}

inline fun <reified VM : ViewModel> ViewModelStoreOwner.viewModel(
    key: String? = null,
    factory: ViewModelProvider.Factory? = null,
    extras: CreationExtras? = null,
): VM =
    viewModel(
        modelClass = VM::class,
        key = key,
        factory = factory,
        extras = extras,
    )

fun <VM : ViewModel> ViewModelStoreOwner.viewModel(
    modelClass: KClass<VM>,
    key: String? = null,
    factory: ViewModelProvider.Factory? = null,
    extras: CreationExtras? = null,
): VM =
    get(
        modelClass = modelClass,
        key = key,
        factory = factory,
        extras = extras,
    )

inline fun <reified VM : ViewModel> ViewModelStoreOwner.viewModel(
    key: String? = null,
    noinline initializer: CreationExtras.() -> VM
): VM =
    viewModel(
        modelClass = VM::class,
        key = key,
        factory = viewModelFactory { initializer(initializer) },
    )

private fun <VM : ViewModel> ViewModelStoreOwner.get(
    modelClass: KClass<VM>,
    key: String?,
    factory: ViewModelProvider.Factory?,
    extras: CreationExtras?,
): VM {
    val provider =
        if (factory != null) {
            if (extras != null) {
                ViewModelProvider.create(owner = this, factory = factory, extras = extras)
            } else {
                ViewModelProvider.create(owner = this, factory = factory)
            }
        } else {
            if (extras != null) {
                ViewModelProvider.create(owner = this, extras = extras)
            } else {
                ViewModelProvider.create(owner = this)
            }
        }

    @Suppress("INVISIBLE_MEMBER", "INVISIBLE_REFERENCE")
    val x = androidx.lifecycle.viewmodel.internal.ViewModelProviders.getDefaultCreationExtras(this)
    println("[MyTest] $x")

    return if (key != null) provider[key, modelClass] else provider[modelClass]
}

class DefaultJetpackComponentContext<T : GenericComponentContext<T>>(
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

    override val viewModelStore: ViewModelStore = retainedInstance(key = KEY, factory = ::ViewModelStoreImpl)

    override val navigationEventDispatcher: NavigationEventDispatcher =
        BackCallbackDelegate().also(this.backHandler::register).navigationEventDispatcher

    override val defaultViewModelProviderFactory: ViewModelProvider.Factory by lazy(::SavedStateViewModelFactory)

    override val defaultViewModelCreationExtras: CreationExtras by lazy {
        MutableCreationExtras().also { extras ->
            extras[SAVED_STATE_REGISTRY_OWNER_KEY] = this
            extras[VIEW_MODEL_STORE_OWNER_KEY] = this
        }
    }

    init {
        savedStateRegistryController.performAttach()

        this.stateKeeper.consume(key = KEY, strategy = SavedStateHolderSerializer).also { savedStateHolder ->
            savedStateRegistryController.performRestore(savedStateHolder?.savedState)
        }

        this.stateKeeper.register(key = KEY, strategy = SavedStateHolderSerializer) {
            val savedState = savedState()
            savedStateRegistryController.performSave(savedState)
            SavedStateHolder(savedState)
        }

        enableSavedStateHandles()

        lifecycle.subscribe(LifecycleCallbacksDelegate(jetpackLifecycleRegistry))
    }
}

private const val KEY = "com.arkivanov.decompose.JetpackComponentContext"

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

private class ViewModelStoreImpl : ViewModelStore(), InstanceKeeper.Instance {
    override fun onDestroy() {
        clear()
    }
}

private class BackCallbackDelegate : BackCallback(isEnabled = false) {

    val navigationEventDispatcher: NavigationEventDispatcher =
        NavigationEventDispatcher(
            onHasEnabledCallbacksChanged = { isEnabled = it },
        )

    override fun onBackStarted(backEvent: BackEvent) {
        navigationEventDispatcher.dispatchOnStarted(backEvent.toNavigationEvent())
    }

    override fun onBackProgressed(backEvent: BackEvent) {
        navigationEventDispatcher.dispatchOnProgressed(backEvent.toNavigationEvent())
    }

    override fun onBack() {
        navigationEventDispatcher.dispatchOnCompleted()
    }

    override fun onBackCancelled() {
        navigationEventDispatcher.dispatchOnCancelled()
    }
}

private fun BackEvent.toNavigationEvent(): NavigationEvent =
    NavigationEvent(
        touchX = touchX,
        touchY = touchY,
        progress = progress,
        swipeEdge = when (swipeEdge) {
            BackEvent.SwipeEdge.LEFT -> NavigationEvent.EDGE_LEFT
            BackEvent.SwipeEdge.RIGHT -> NavigationEvent.EDGE_RIGHT
            BackEvent.SwipeEdge.UNKNOWN -> NavigationEvent.EDGE_NONE
        },
    )
