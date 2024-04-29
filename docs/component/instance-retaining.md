# Instance retaining

Sometimes it might be necessary to preserve state or data in a component when it gets destroyed. This commonly used in Android when configuration changes occur. The `ComponentContext` interface extends the `InstanceKeeperOwner` interface, which provides the `InstanceKeeper` - a multiplatform abstraction for instances retaining. It is provided by [Essenty](https://github.com/arkivanov/Essenty) library (from the same author).

The `decompose` module adds Essenty's `instance-keeper` module as `api` dependency, so you don't need to explicitly add it to your project. Please familiarise yourself with Essenty library, especially with the `InstanceKeeper`.

## Usage example

```kotlin
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.instancekeeper.getOrCreate

class SomeComponent(
    componentContext: ComponentContext
) : ComponentContext by componentContext {

    private val someLogic = instanceKeeper.getOrCreate(::SomeLogic)

    /*
     * Instances of this class will be retained.
     * ⚠️ Pay attention to not leak any dependencies.
     */
    private class SomeLogic : InstanceKeeper.Instance {
        override fun onDestroy() {
            // Clean-up
        }
    }
}
```

## Retained components

Although discouraged, it is still possible to have all components retained over configuration changes on Android. On the one hand, this makes `InstanceKeeper` no longer required. But on the other hand, this prevents from supplying dependencies that capture the hosting `Activity` or `Fragment`.

!!!warning
    Pay attention when supplying dependencies to a retained component to avoid leaking the hosting `Activity` or `Fragment`.

!!! warning

    The `retainedComponent` function must only be called once during the lifetime of the host Activity or Fragment, typically in `onCreate`. Calling it a second time will result in a crash.

```kotlin
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.arkivanov.decompose.retainedComponent

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val root =
            retainedComponent { componentContext ->
                DefaultRootComponent(componentContext)
            }
    }
}
```
