# Router Overview 

## The Router

A key unit is the [Router](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/Router.kt). It is responsible for managing components, just like `FragmentManager`.

The `Router` supports back stack and so each component has its own `Lifecycle`. Each time a new component is pushed, the currently active component is stopped. When a component is popped from the back stack, the previous component is resumed. This allows business logic to run while the component is in the back stack.

Each component is created based on an associated `Configuration`. `Configurations` can be persisted via Android's `saved state`, thus allowing back stack restoration after configurations change or process death. When the back stack is restored, only currently active components are recreated. All others in the back stack remain destroyed, and recreated on demand when navigating back. Decompose defines both `Parcelable` interface and `@Parcelize` annotation in common code using expect/actual, which works well with Kotlin Multiplatform. You can read more about it [here](https://kotlinlang.org/docs/reference/compiler-plugins.html#parcelable-implementations-generator).

The `Router` has a state consisting of a currently active component and a back stack, so it can be rendered as any other state.

`Routers` can be nested, and each component can have more than one `Router`.

## Routing example

Here is a very basic example of navigation between two children components:

```kotlin
class Child1(componentContext: ComponentContext) : ComponentContext by componentContext {
    // omitted code
}

class Child2(componentContext: ComponentContext, data: String) : ComponentContext by componentContext {
    // omitted code
}

class Parent(componentContext: ComponentContext) : ComponentContext by componentContext {
    private val router =
        router<Config, Any>(
            initialConfiguration = Config.Child1,
            componentFactory = ::createChild
        )
    
    val children: Value<RouterState<Config, Any>> get() = router.state

    private fun createChild(config: Config, componentContext: ComponentContext): Any =
        when (config) {
            is Config.Child1 -> Child1(componentContext)
            is Config.Child2 -> Child2(componentContext, data = config.data)
        }
        
    fun showChild2(data: String) {
        router.push(Config.Child2(data = data))
    }

    fun popChild() {
        router.pop()
    }

    sealed class Config : Parcelable {
        @Parcelize
        object Child1 : Config()

        @Parcelize
        class Child2(val data: String) : Config()
    }
}
```