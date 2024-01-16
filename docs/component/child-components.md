# Child components

Decompose provides ability to organize components as trees, so each parent component is only aware of its immediate children. Hence the name of the library - "Decompose". You decompose your project by multiple independent reusable components. When adding a subtree into another place (reusing), you only need to satisfy its top component's dependencies.

There are two common ways to work with child components:

- Navigation - when you need to dynamically switch child components. Please head to
  the [Navigation](../navigation/overview.md) documentation page for more information.
- Manually - when you need to add a permanent child component, or to manually control its `Lifecycle`.

## Adding a child component manually

A permanent child component should be always instantiated during the initialisation of the parent, and it is automatically destroyed at the end of the parent's lifecycle. It is possible to manually control the lifecycle of a permanent child component, e.g. resume it, pause or stop. But permanent child components must never be destroyed manually.

!!!warning
    Every child component needs its own `ComponentContext`. Never pass parent's `ComponentContext` to children, always use either the navigation or the `childContext(...)` function.

A child `ComponentContext` can be created using the following extension function:

`ComponentContext.childContext(key: String, lifecycle: Lifecycle? = null): ComponentContext`

```kotlin title="Example of a child component without lifecycle control"
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.childContext

class SomeParent(componentContext: ComponentContext) : ComponentContext by componentContext {

    val counter: Counter = Counter(childContext(key = "Counter"))
}
```

```kotlin title="Example of a child component with lifecycle control"
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.childContext
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.resume
import com.arkivanov.essenty.lifecycle.stop

class SomeParent(componentContext: ComponentContext) : ComponentContext by componentContext {

    // Never destroy the lifecycle of a permanent child component! 
    private val counterLifecycle = LifecycleRegistry()

    val counter: Counter = Counter(childContext(key = "Counter", lifecycle = counterLifecycle))

    private fun resumeCounter() {
        counterLifecycle.resume()
    }

    private fun stopCounter() {
        counterLifecycle.stop()
    }
}
```
