# Deep linking

Users following links on devices have one goal in mind: to get to the content they want to see. Decompose provides ability to override initial destinations and back stack. A typical approach is to parse deep links on the platform side and then pass the initial destination data to the root component and then down the tree to all the required components.

Parsing deep links on the platform side is beyond this documentation. This information should be available in the platform's specific documentation. For example here is the [related documentation](https://developer.android.com/training/app-links/deep-linking) for Android.

## Handling deep links

Given the basic example from the [Child Stack Overview](../overview.md) page, we can easily handle deep links. Let's say we have a link like `http://myitems.com?itemId=3`. When the user clicks on it, we want to open the details screen of the item with the provided `id`. When the user closes the details screen, they should be navigated back to the list screen. The idea is to pass parsed data from the deep link to a component responsible for navigation, in our case it is the `Root` component.

```kotlin
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.stack.StackNavigation
import com.arkivanov.decompose.router.stack.childStack
import kotlinx.serialization.Serializable

class DefaultRootComponent(
    componentContext: ComponentContext,
    initialItemId: Long? = null, // It can be any other type, e.g. a sealed class with all possible destinations
) : RootComponent, ComponentContext by componentContext {

    private val navigation = StackNavigation<Config>()

    private val stack =
        childStack(
            source = navigation,
            initialStack = {
                listOfNotNull(
                    Config.List,
                    if (initialItemId != null) Config.Details(itemId = initialItemId) else null,
                )
            },
            handleBackButton = true,
            childFactory = ::createChild,
        )

    // Omitted code

    @Serializable
    private sealed class Config {
        @Serializable
        data object List : Config()

        @Serializable
        data class Details(val itemId: Long) : Config()
    }
}
```

Now, if the `initialItemId` is supplied, the initial screen will be the `ItemDetails` component. The `ItemList` component will be in the back stack, so the user will be able to go back.

### Handling deep links on Android

The first step is to configure your Android app so that it can handle deep links. Please follow the [official documentation](https://developer.android.com/training/app-links/deep-linking).

!!!warning

    It is strongly recommended to always use the `standard` (default) [launchMode](https://developer.android.com/guide/components/activities/tasks-and-back-stack#TaskLaunchModes) for `Activity` when handling deep links.

Once the app is configured, the deeplink `Intent` will be available to use in `Activity#onCreate` method. The `handleDeepLink` extension function can be used to automatically extract the deep link `Uri` from the `Intent`, it also takes care of restarting the `Activity` task and finishing the current `Activity` if needed (similarly to how it works with the official Jetpack navigation).

```kotlin
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import androidx.activity.compose.setContent
import androidx.appcompat.app.AppCompatActivity
import com.arkivanov.decompose.defaultComponentContext
import com.arkivanov.decompose.handleDeepLink

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val root = 
            handleDeepLink { uri ->
                val initialItemId = uri?.extractInitialItemId()
                DefaultRootComponent(
                    componentContext = defaultComponentContext(
                        discardSavedState = initialItemId != null, // Discard any saved state if there is a deep link
                    ),
                    initialItemId = initialItemId,
                )
            } ?: return

        setContent {
            // Omitted code
        }
    }

    private fun Uri.extractInitialItemId(): Long = TODO("Extract the initial item id from the deep link")
}
```

#### Alternative way

The alternative way can be used if for some reason you don't want to use the `standard` (default) [launchMode](https://developer.android.com/guide/components/activities/tasks-and-back-stack#TaskLaunchModes) for the `Activity`, and instead of restarting the root component you prefer handling the new deep link manually in `Activity#onNewIntent`.

```kotlin
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import androidx.activity.compose.setContent
import androidx.appcompat.app.AppCompatActivity
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.defaultComponentContext

class MainActivity : AppCompatActivity() {

    private lateinit var root: RootComponent

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val initialItemId = intent.data?.extractInitialItemId()

        root =
            DefaultRootComponent(
                componentContext = defaultComponentContext(),
                initialItemId = initialItemId,
            )

        setContent {
            // Omitted code
        }
    }

    override fun onNewIntent(intent: Intent) {
        super.onNewIntent(intent)

        val initialItemId = intent.data?.extractInitialItemId() ?: return
        root.onDeepLink(initialItemId)
    }

    private fun Uri.extractInitialItemId(): Long? =
        TODO("Extract the initial item id from the deep link")
}

class DefaultRootComponent(
    componentContext: ComponentContext,
    initialItemId: Long? = null,
) : RootComponent, ComponentContext by componentContext {

    // Omitted code

    fun onDeepLink(initialItemId: Long) {
        navigation.replaceAll(Config.List, Config.Details(itemId = initialItemId))
    }

    // Omitted code
}
```
