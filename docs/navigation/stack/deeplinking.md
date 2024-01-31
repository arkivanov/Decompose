# Deep linking

Users following links on devices have one goal in mind: to get to the content they want to see. Decompose provides ability to override
initial destinations and back stack. A typical approach is to parse deep links on the platform side and then pass the initial data to the
root component and then down the tree to all the required components.

Parsing deep links on the platform side is beyond this documentation. This information should be available in the platform's specific
documentation. For example here is the [related documentation](https://developer.android.com/training/app-links/deep-linking) for Android.

## Handling deep links

Given the basic example from the [Child Stack Overview](../overview.md) page, we can easily handle deep
links. Let's say we have a link like `http://myitems.com?itemId=3`. When the user clicks on it, we want to open the details screen of the
item with the provided `id`. When the user closes the details screen, they should be navigated back to the list screen. The idea is to pass
parsed data from the deep link to a component responsible for navigation, in our case it is the `Root` component.

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

Now, if the `initialItemId` is supplied, the initial screen will be the `ItemDetails` component. The `ItemList` component will be in the
back stack, so the user will be able to go back.

### Handling deep links on Android

The first step is to configure your Android app so that it can handle deep links. Please follow the [official documentation](https://developer.android.com/training/app-links/deep-linking).

Once the app is configured, the deeplink `Intent` can arrive via one of the two methods: `Activity#onCreate` and `Activity#onNewIntent`.

#### Handling deep links since v3.0.0-alpha01

```kotlin
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import androidx.activity.compose.setContent
import androidx.appcompat.app.AppCompatActivity
import com.arkivanov.decompose.defaultComponentContext

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val initialItemId = intent.data?.extractInitialItemId()

        val root = DefaultRootComponent(
            componentContext = defaultComponentContext(
                discardSavedState = initialItemId != null, // Discard any saved state if there is a deep link
            ),
            initialItemId = initialItemId,
        )

        if (initialItemId != null) {
            intent = Intent(intent).setData(null) // The deep link has been handled, clear the Intent data
        }

        setContent {
            // Omitted code
        }
    }

    override fun onNewIntent(intent: Intent) {
        super.onNewIntent(intent)

        if (intent.data?.extractInitialItemId() != null) {
            setIntent(intent)
            recreate()
        }
    }

    private fun Uri.extractInitialItemId(): Long = TODO("Extract the initial item id from the deep link")
}
```

#### Alternative way

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

        if (initialItemId != null) {
            intent = Intent(intent).setData(null) // The deep link has been handled, clear the Intent data
        }

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
