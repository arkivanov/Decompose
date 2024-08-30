# Calling Composable functions with ViewModels

This section may be useful when migrating from the official [navigation-compose](https://developer.android.com/jetpack/compose/navigation) library to Decompose.

By default, Decompose doesn't manage AndroidX [ViewModel](https://developer.android.com/topic/libraries/architecture/viewmodel). When Decompose is used as root in an Activity or Fragment then by default all `ViewModels` are scoped to that Activity/Fragment. In other words, by default Decompose doesn't create separate `ViewModelStoreOwner` for every child screen.

If there is a requirement to call a `Composable` function that uses a `ViewModel` (e.g. there is a `Composable` screen that can't be migrated to Decompose), then we need to create a separate `ViewModelStoreOwner` for every child screen manually.

Consider there is a stack of Main and Details screens. The Main screen is a normal Decompose component.

```kotlin title="Main component"
import com.arkivanov.decompose.ComponentContext

interface MainComponent {
    fun onShowDetailsClicked()
}

class DefaultMainComponent(
    componentContext: ComponentContext,
    private val onShowDetails: () -> Unit
) : MainComponent, ComponentContext by componentContext {
    // Omitted code
}
```

The Details screen is a `Composable` function with a `ViewModel`, e.g. an existing screen that is difficult to migrate to Decompose.

```kotlin title="Details screen"
import androidx.compose.runtime.Composable
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewmodel.compose.viewModel

@Composable
fun DetailsContent(viewModel: DetailsViewModel = viewModel()) {
    // Omitted code
}

class DetailsViewModel : ViewModel() { 
    // Omitted code
}
```

## Injecting a ViewModel into a Composable function

Decompose destroys components as soon as they are removed from the hierarchy (e.g. when a screen is popped from the stack). This may cause issues when injecting `ViewModels` into `Composable` functions. If the removed screen is still animating but its `ViewModel` has already been cleared, a new instance of the `ViewModel` may be created on next re-composition, causing a memory leak.

To prevent the issue described above, `ViewModel` injecting should be done in a special way.

```kotlin title="ViewModel injecting function"
import androidx.compose.runtime.Composable
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewmodel.compose.viewModel

@Composable
inline fun <reified T : ViewModel> rememberViewModel(): T {
    var vm by remember { mutableStateOf<T?>(null) }
    if (vm == null) {
        vm = viewModel<T>()
    }

    return requireNotNull(vm)
}
```

Then just replace all usages of the `viewModel()` injecting function with the new `rememberViewModel()` function.

```kotlin title="Details screen"
import androidx.compose.runtime.Composable
import androidx.lifecycle.ViewModel

@Composable
fun DetailsContent(viewModel: DetailsViewModel = rememberViewModel()) {
    // Omitted code
}

class DetailsViewModel : ViewModel() { 
    // Omitted code
}
```

## Composable functions with ViewModels WITHOUT SavedStateHandle

The fix is very simple when `SavedStateHandle` is not required.

First, we need an extension function to attach `ViewModelStore` to `InstanceKeeper` of a child component.

```kotlin title="Attaching ViewModelStore to InstanceKeeper"
import androidx.lifecycle.ViewModelStore
import androidx.lifecycle.ViewModelStoreOwner
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.instancekeeper.InstanceKeeperOwner
import com.arkivanov.essenty.instancekeeper.getOrCreate

internal fun InstanceKeeperOwner.viewModelStoreOwner(): ViewModelStoreOwner =
    instanceKeeper.getOrCreate(::ViewModelStoreOwnerInstance)

private class ViewModelStoreOwnerInstance : ViewModelStoreOwner, InstanceKeeper.Instance {
    override val viewModelStore: ViewModelStore = ViewModelStore()

    override fun onDestroy() {
        viewModelStore.clear()
    }
}
```

Now we need to expose a `ViewModelStoreOwner` instead of the child component.

```kotlin title="Root component"
import androidx.lifecycle.ViewModelStoreOwner
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.router.stack.StackNavigation
import com.arkivanov.decompose.router.stack.childStack
import com.arkivanov.decompose.router.stack.pushNew
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.app.RootComponent.Child
import com.arkivanov.sample.app.RootComponent.Child.ListChild
import com.arkivanov.sample.app.RootComponent.Child.MainChild
import kotlinx.serialization.Serializable

interface RootComponent {

    val childStack: Value<ChildStack<*, Child>>

    sealed class Child {
        class ListChild(val component: MainComponent) : Child()
        class MainChild(val component: ViewModelStoreOwner) : Child() // ViewModelStoreOwner instead of component
    }
}

class DefaultRootComponent(
    componentContext: ComponentContext,
) : RootComponent, ComponentContext by componentContext {

    private val nav = StackNavigation<Config>()

    override val childStack: Value<ChildStack<*, Child>> =
        childStack(
            source = nav,
            serializer = Config.serializer(),
            initialConfiguration = Config.Main,
        ) { config, ctx ->
            when (config) {
                is Config.Main ->
                    ListChild(
                        component = DefaultMainComponent(
                            componentContext = ctx,
                            onShowDetails = { nav.pushNew(Config.Details) },
                        ),
                    )

                is Config.Details ->
                    MainChild(
                        component = ctx.viewModelStoreOwner(), // Attach a ViewModelStore to the child InstanceKeeper
                    )
            }
        }

    @Serializable
    private sealed interface Config {
        @Serializable
        data object Main : Config

        @Serializable
        data object Details : Config
    }
}
```

Not we just have to provide the child `ViewModelStoreOwner` via `LocalViewModelStoreOwner` provider.

```kotlin
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.lifecycle.viewmodel.compose.LocalViewModelStoreOwner
import com.arkivanov.decompose.extensions.compose.stack.Children
import com.arkivanov.sample.app.RootComponent.Child.MainChild
import com.arkivanov.sample.app.RootComponent.Child.ListChild

@Composable
fun RootContent(component: RootComponent) {
    Children(stack = component.childStack) { (_, child) ->
        when (child) {
            is ListChild -> MainContent(child.component)

            is MainChild ->
                CompositionLocalProvider(LocalViewModelStoreOwner provides child.component) {
                    DetailsContent() // The Details screen now has its own ViewModelStore
                }
        }
    }
}
```

## Composable functions with ViewModels WITH SavedStateHandle

Things are a bit more complicated when injecting `SavedStateHandle` is required.

Since on Android the state saving works via `Bundle`, we'll need to create a serializer for it.

```kotlin title="BundleSerializer"
import android.os.Bundle
import android.os.Parcel
import kotlinx.serialization.KSerializer
import kotlinx.serialization.builtins.ByteArraySerializer
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder

internal object BundleSerializer : KSerializer<Bundle> {
    private val byteArraySerializer = ByteArraySerializer()
    override val descriptor: SerialDescriptor = byteArraySerializer.descriptor

    override fun serialize(encoder: Encoder, value: Bundle) {
        encoder.encodeSerializableValue(byteArraySerializer, value.toByteArray())
    }

    private fun Bundle.toByteArray(): ByteArray {
        val parcel = Parcel.obtain()
        try {
            parcel.writeBundle(this)
            return parcel.marshall()
        } finally {
            parcel.recycle()
        }
    }

    override fun deserialize(decoder: Decoder): Bundle =
        decoder.decodeSerializableValue(byteArraySerializer).toBundle()

    private fun ByteArray.toBundle(): Bundle {
        val parcel = Parcel.obtain()
        try {
            parcel.unmarshall(this, 0, size)
            parcel.setDataPosition(0)
            return requireNotNull(parcel.readBundle())
        } finally {
            parcel.recycle()
        }
    }
}
```

Now we need a special reusable `ViewModelStoreComponent` that will implement `ViewModelStoreOwner` interface, and also manage argument passing and state saving for `ViewModels`.

```kotlin title="ViewModelStoreComponent"
import android.os.Bundle
import androidx.lifecycle.HasDefaultViewModelProviderFactory
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleRegistry
import androidx.lifecycle.SavedStateViewModelFactory
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.ViewModelStoreOwner
import androidx.savedstate.SavedStateRegistry
import androidx.savedstate.SavedStateRegistryController
import androidx.savedstate.SavedStateRegistryOwner
import com.arkivanov.decompose.ComponentContext

class ViewModelStoreComponent(
    ctx: ComponentContext,
    args: Bundle = Bundle(),
) : ViewModelStoreOwner by ctx.viewModelStoreOwner(),
    SavedStateRegistryOwner,
    HasDefaultViewModelProviderFactory {

    private val savedStateRegistryController = SavedStateRegistryController.create(this)
    override val savedStateRegistry: SavedStateRegistry get() = savedStateRegistryController.savedStateRegistry
    override val lifecycle: Lifecycle = LifecycleRegistry(provider = this)

    override val defaultViewModelProviderFactory: ViewModelProvider.Factory =
        SavedStateViewModelFactory(application = null, owner = this, defaultArgs = args)

    init {
        savedStateRegistryController.performRestore(ctx.stateKeeper.consume(KEY_SAVED_STATE, BundleSerializer))

        ctx.stateKeeper.register(KEY_SAVED_STATE, BundleSerializer) {
            Bundle().also(savedStateRegistryController::performSave)
        }
    }

    private companion object {
        private const val KEY_SAVED_STATE = "saved_state"
    }
}
```

Finally, we can use `ViewModelStoreComponent` in the Root component as follows.

```kotlin title="Using ViewModelStoreComponent"
import androidx.core.os.bundleOf
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.router.stack.StackNavigation
import com.arkivanov.decompose.router.stack.childStack
import com.arkivanov.decompose.router.stack.pushNew
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.app.RootComponent.Child
import com.arkivanov.sample.app.RootComponent.Child.ListChild
import com.arkivanov.sample.app.RootComponent.Child.MainChild
import kotlinx.serialization.Serializable

class DefaultRootComponent(
    componentContext: ComponentContext,
) : RootComponent, ComponentContext by componentContext {

    private val nav = StackNavigation<Config>()

    override val childStack: Value<ChildStack<*, Child>> =
        childStack(
            source = nav,
            serializer = Config.serializer(),
            initialConfiguration = Config.Main,
        ) { config, ctx ->
            when (config) {
                is Config.Main ->
                    ListChild(
                        component = DefaultMainComponent(
                            componentContext = ctx,
                            onShowDetails = { text ->
                                nav.pushNew(Config.Details(text = text)) // Pass text to the Details screen
                            },
                        ),
                    )

                is Config.Details ->
                    MainChild(
                        component = ViewModelStoreComponent( // Pass ViewModelStoreComponent as ViewModelStoreOwner
                            ctx = ctx,
                            args = bundleOf(
                                "text" to config.text, // Pass arguments to DetailsViewModel
                            )
                        ),
                    )
            }
        }

    @Serializable
    private sealed interface Config {
        @Serializable
        data object Main : Config

        @Serializable
        data class Details(val text: String) : Config
    }
}
```

Now we are able to inject `SavedStateHandle` into `DetailsViewModel`.

```kotlin title="Using SavedStateHandle"
import androidx.lifecycle.SavedStateHandle
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewmodel.compose.viewModel

class ItemDetailsViewModel(savedStateHandle: SavedStateHandle) : ViewModel() {
    val text: String = checkNotNull(savedStateHandle["text"])
}
```
