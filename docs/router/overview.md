# Router Overview

## The Router

A key unit is [Router](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/Router.kt). It is responsible for managing components, just like `FragmentManager`.

The `Router` supports back stack and so each component has its own `Lifecycle`. Each time a new component is pushed, the currently active component is stopped. When a component is popped from the back stack, the previous component is resumed. This allows business logic to run while the component is in the back stack.

The `Router` has a state consisting of a currently active component and a back stack, so it can be rendered as any other state.

Child components can also have `Routers` (nested navigation), and each component can have more than one `Router`.

### Component Configurations

Each component created and managed by the `Router` has its `Configuration`. It is just a class with all the data required for the component instantiation.

`Configurations` must meet the following requirements:

1. Be immutable
2. [Correctly](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--) implement `equals()` and `hashCode()` methods
3. Be unique (by equality) in the `Router` stack
4. Implement `Parcelable` interface

#### Configurations are the keys

Each `Configuration` is a unique key of a component. The `Router` uses `Configurations` to check what components should be alive and what should be destroyed. On the client side, `Configurations` allow you to instantiate components with proper input parameters. For convenience and safety, you may define your `Configurations` as `data class`, and use only `val` properties and immutable data structures.

#### Configurations are Parcelable

`Configurations` can be persisted via Android's [saved state](https://developer.android.com/guide/components/activities/activity-lifecycle#save-simple,-lightweight-ui-state-using-onsaveinstancestate), thus allowing back stack restoration after configurations change or process death. When the back stack is restored, only currently active components are recreated. All others in the back stack remain destroyed, and recreated on demand when navigating back.

Decompose uses [Essenty](https://github.com/arkivanov/Essenty) library, which provides both `Parcelable` interface and `@Parcelize` annotation in common code using expect/actual, which works well with Kotlin Multiplatform. Please familiarise yourself with Essenty library.

> ⚠️ On Android the amount of data that can be preserved is [limited](https://developer.android.com/guide/components/activities/parcelables-and-bundles). Please take care of the `Configuration` sizes.

## Routing example

Here is a very basic example of navigation between two child components:

```kotlin
// ItemList component

interface ItemList {

    // Omitted code

    fun onItemClicked(id: Long)
}

class ItemListComponent(
    componentContext: ComponentContext,
    private val onItemSelected: (id: Long) -> Unit
) : ItemList, ComponentContext by componentContext {

    // Omitted code

    override fun onItemClicked(id: Long) {
        onItemSelected(id)
    }
}
```

```kotlin
// ItemDetails component

interface ItemDetails {

    // Omitted code

    fun onCloseClicked()
}

class ItemDetailsComponent(
    componentContext: ComponentContext,
    itemId: Long,
    private val onFinished: () -> Unit
) : ItemDetails, ComponentContext by componentContext {

    // Omitted code

    override fun onCloseClicked() {
        onFinished()
    }
}
```

```kotlin
// Root component

interface Root {

    val routerState: Value<RouterState<*, Child>>

    sealed class Child {
        class List(val component: ItemList) : Child()
        class Details(val component: ItemDetails) : Child()
    }
}

class RootComponent(
    componentContext: ComponentContext
) : Root, ComponentContext by componentContext {

    private val router =
        router<Config, Root.Child>(
            initialConfiguration = Config.List,
            handleBackButton = true, // Pop the back stack on back button press
            childFactory = ::createChild
        )

    override val routerState: Value<RouterState<*, Root.Child>> = router.state

    private fun createChild(config: Config, componentContext: ComponentContext): Root.Child =
        when (config) {
            is Config.List -> Root.Child.List(itemList(componentContext))
            is Config.Details -> Root.Child.Details(itemDetails(componentContext, config))
        }

    private fun itemList(componentContext: ComponentContext): ItemList =
        ItemListComponent(
            componentContext = componentContext,
            onItemSelected = { router.push(Config.Details(itemId = it)) }
        )

    private fun itemDetails(componentContext: ComponentContext, config: Config.Details): ItemDetails =
        ItemDetailsComponent(
            componentContext = componentContext,
            itemId = config.itemId,
            onFinished = router::pop
        )

    private sealed class Config : Parcelable {
        @Parcelize
        object List : Config()

        @Parcelize
        data class Details(val itemId: Long) : Config()
    }
}
```

## Multiple routers in a component

When multiple `Routers` are required in one component, each such a `Router` must have a unique key associated. The keys are required to be
unique only within the component, so it is ok for different components to have `Routers` with same keys. An exception will be thrown if
multiple `Routers` with same key are detected in a component.

```kotlin
class Root(
    componentContext: ComponentContext
) : ComponentContext by componentContext {

    private val topRouter =
        router<TopConfig, TopChild>(
            key = "TopRouter",
            // Omitted code
        )

    private val bottomRouter =
        router<BottomConfig, BottomChild>(
            key = "BottomRouter",
            // Omitted code
        )
}
```
