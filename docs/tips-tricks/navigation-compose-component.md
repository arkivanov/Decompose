# Hosting a component in navigation-compose

This section may be useful when migrating from the official [navigation-compose](https://developer.android.com/jetpack/compose/navigation) library to Decompose. We can convert screens to Decompose gradually (one by one), keeping the navigation untouched until every screen is converted. This section describes how we can host a Decompose component (or a tree of components) in a `Composable` screen managed by `navigation-compose` library.

!!!note

    This section implies minimum Decompose version `3.0.0-alpha06`.

!!!warning

    The `navigation-compose` library provides only two scopes for a screen: the `Composable` function of the scren and the `ViewModel` scope. There is no such a scope that is also destroyed on configuration change. So the only scope where we can host Decompose components is the `ViewModel` scope. This means we should take extra care to not leak any objects (e.g. don't pass `NavController` into component).

Here is a function that allows hosting a Decompose component in a `navigation-compose` screen.

```kotlin
import android.os.Bundle
import androidx.activity.OnBackPressedCallback
import androidx.activity.compose.LocalOnBackPressedDispatcherOwner
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.ui.platform.LocalLifecycleOwner
import androidx.lifecycle.DefaultLifecycleObserver
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.ViewModel
import androidx.lifecycle.createSavedStateHandle
import androidx.lifecycle.viewmodel.compose.viewModel
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.essenty.backhandler.BackDispatcher
import com.arkivanov.essenty.backhandler.connectOnBackPressedCallback
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.create
import com.arkivanov.essenty.lifecycle.destroy
import com.arkivanov.essenty.lifecycle.pause
import com.arkivanov.essenty.lifecycle.resume
import com.arkivanov.essenty.lifecycle.start
import com.arkivanov.essenty.lifecycle.stop
import com.arkivanov.essenty.statekeeper.SerializableContainer
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher
import com.arkivanov.essenty.statekeeper.getSerializableContainer
import com.arkivanov.essenty.statekeeper.putSerializableContainer

@Composable
fun <T> rememberRetainedComponent(key: String = "ComposableComponent", factory: (ComponentContext) -> T): T {
    val lifecycleOwner = LocalLifecycleOwner.current
    val lifecycle = lifecycleOwner.lifecycle
    val onBackPressedDispatcher = LocalOnBackPressedDispatcherOwner.current?.onBackPressedDispatcher

    val holder =
        viewModel {
            val handle = createSavedStateHandle()
            val ctx = RetainedComponentContext(handle.get<Bundle>(key)?.getSerializableContainer(key))
            handle.setSavedStateProvider(key) { Bundle().apply { putSerializableContainer(key, ctx.stateKeeper.save()) } }
            Holder(factory(ctx), ctx)
        }

    DisposableEffect(lifecycle) {
        val observer = LifecycleAdapter(holder.componentContext.lifecycle)
        lifecycle.addObserver(observer)
        onDispose { lifecycle.removeObserver(observer) }
    }

    if (onBackPressedDispatcher != null) {
        DisposableEffect(lifecycleOwner, onBackPressedDispatcher) {
            val onBackPressedCallback = holder.componentContext.onBackPressedCallback
            onBackPressedDispatcher.addCallback(lifecycleOwner, onBackPressedCallback)
            onDispose(onBackPressedCallback::remove)
        }
    }

    return holder.instance
}

private class LifecycleAdapter(
    private val lifecycle: LifecycleRegistry
) : DefaultLifecycleObserver {
    override fun onCreate(owner: LifecycleOwner) {
        lifecycle.create()
    }

    override fun onStart(owner: LifecycleOwner) {
        lifecycle.start()
    }

    override fun onResume(owner: LifecycleOwner) {
        lifecycle.resume()
    }

    override fun onPause(owner: LifecycleOwner) {
        lifecycle.pause()
    }

    override fun onStop(owner: LifecycleOwner) {
        lifecycle.stop()
    }
}

private class RetainedComponentContext(savedState: SerializableContainer?) : ComponentContext {
    override val lifecycle: LifecycleRegistry = LifecycleRegistry()
    override val stateKeeper: StateKeeperDispatcher = StateKeeperDispatcher(savedState)
    override val instanceKeeper: InstanceKeeperDispatcher = InstanceKeeperDispatcher()
    override val backHandler: BackDispatcher = BackDispatcher()
    val onBackPressedCallback: OnBackPressedCallback = backHandler.connectOnBackPressedCallback()
}

private class Holder<out T>(
    val instance: T,
    val componentContext: RetainedComponentContext,
) : ViewModel(componentContext.lifecycle::destroy, componentContext.instanceKeeper::destroy)
```

Here is the usage example.

```kotlin
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.Button
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.arkivanov.decompose.ComponentContext

@Composable
fun App() {
    val nav = rememberNavController()

    NavHost(navController = nav, startDestination = "home") {
        composable("home") {
            HomeScreen(onShowDetails = { nav.navigate("details") })
        }

        composable("details") {
            val detailsComponent = rememberRetainedComponent(factory = ::DetailsComponent)
            DetailsComponent(component = detailsComponent, onBack = nav::popBackStack)
        }
    }
}

@Composable
fun HomeScreen(onShowDetails: () -> Unit) {
    Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
        Button(onClick = onShowDetails) {
            Text("Go to details")
        }
    }
}

class DetailsComponent(
    componentContext: ComponentContext,
) : ComponentContext by componentContext {
    // Some code here
}

@Composable
fun DetailsComponent(component: DetailsComponent, onBack: () -> Unit) {
    Column(
        modifier = Modifier.fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center,
    ) {
        Button(onClick = onBack) {
            Text("Go back")
        }
    }
}
```
