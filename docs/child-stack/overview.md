# Child Stack Overview

## The Child Stack

A key unit is `Child Stack`. It is a feature responsible for managing a stack of components, just like `FragmentManager`.

Each component has its own `Lifecycle`. Each time a new component is pushed to the stack, the currently active component is stopped. When a component is popped from the stack, the previous component is resumed. This allows business logic to run while the component is in the back stack.

The `Child Stack` feature consists of the two main interfaces:

- [ChildStack](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/stack/ChildStack.kt) - a simple data class that stores a stack of components and their configurations.
    - ChildStack#active - contains the currently active component.
    - ChildStack#backStack - contains the back stack of inactive components.
- [StackNavigation](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/stack/StackNavigation.kt) - an interface that accepts navigation commands and forwards them to all subscribed observers.

Child components can also have their own `Child Stacks` (nested navigation), and each component can have more than one `Child Stack`.

### Component Configurations

Each component created and managed by the `Child Stack` has its `Configuration`. It is just a class with all the data required for the component instantiation.

`Configurations` must meet the following requirements:

1. Be immutable
2. [Correctly](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--) implement `equals()` and `hashCode()` methods
3. Be unique (by equality) in the `Child Stack`
4. Implement `Parcelable` interface

#### Configurations are the keys

Each `Configuration` is a unique key of a component. The `Child Stack` uses `Configurations` to check what components should be alive and what should be destroyed. On the client side, `Configurations` allow you to instantiate components with proper input parameters. For convenience and safety, you may define your `Configurations` as `data class`, and use only `val` properties and immutable data structures.

#### Configurations are Parcelable

`Configurations` can be persisted via Android's [saved state](https://developer.android.com/guide/components/activities/activity-lifecycle#save-simple,-lightweight-ui-state-using-onsaveinstancestate), thus allowing back stack restoration after configurations change or process death. When the back stack is restored, only currently active components are recreated. All others in the back stack remain destroyed, and recreated on demand when navigating back.

Decompose uses [Essenty](https://github.com/arkivanov/Essenty) library, which provides both `Parcelable` interface and `@Parcelize` annotation in common code using expect/actual, which works well with Kotlin Multiplatform. Please familiarise yourself with Essenty library.

!!!warning
    On Android the amount of data that can be preserved is [limited](https://developer.android.com/guide/components/activities/parcelables-and-bundles). Please take care of the `Configuration` sizes.

### Initializing the Child Stack

There are three steps to initialize the `Child Stack`:

- Create a new instance of `StackNavigation` and assign it to a variable or a property.
- Initialize the `Child Stack` using the `ComponentContext#childStack` extension function and pass `StackNavigation` into it along with other arguments. 
- The `childStack` function returns `Value<ChildStack>` that can be observed in the UI. Assign the returned `Value` to another property or a variable.

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
interface Root {

    val childStack: Value<ChildStack<*, Child>>

    sealed class Child {
        class List(val component: ItemList) : Child()
        class Details(val component: ItemDetails) : Child()
    }
}

class RootComponent(
    componentContext: ComponentContext
) : Root, ComponentContext by componentContext {

    private val navigation = StackNavigation<Config>()

    private val stack =
        childStack(
            source = navigation,
            initialConfiguration = Config.List,
            handleBackButton = true, // Pop the back stack on back button press
            childFactory = ::createChild,
        )

    override val childStack: Value<ChildStack<*, Root.Child>> get() = stack

    private fun createChild(config: Config, componentContext: ComponentContext): Root.Child =
        when (config) {
            is Config.List -> Root.Child.List(itemList(componentContext))
            is Config.Details -> Root.Child.Details(itemDetails(componentContext, config))
        }

    private fun itemList(componentContext: ComponentContext): ItemList =
        ItemListComponent(
            componentContext = componentContext,
            onItemSelected = { navigation.push(Config.Details(itemId = it)) }
        )

    private fun itemDetails(componentContext: ComponentContext, config: Config.Details): ItemDetails =
        ItemDetailsComponent(
            componentContext = componentContext,
            itemId = config.itemId,
            onFinished = { navigation.pop() }
        )

    private sealed class Config : Parcelable {
        @Parcelize
        object List : Config()

        @Parcelize
        data class Details(val itemId: Long) : Config()
    }
}
```

## Delivering a result when navigating back

To deliver a result from one component to another:

- Pass a callback to the `second` component.
- Call the callback with a `result` from the `second` component.
- In the `parent` component, supply the callback when instantiating the `second` component.
- When the callback is invoked, perform the navigation, e.g. by using `navigation.pop { ... }`.
- After the navigation is performed, call a method on the `first` component with the `result`.

```kotlin
interface ItemList {

    fun onItemClicked(id: Long)

    fun onItemDeleted(id: Long)
}

interface ItemDetails {

    fun onDeleteClicked()
}

class ItemListComponent(
    componentContext: ComponentContext,
    private val onItemSelected: (id: Long) -> Unit,
) : ItemList, ComponentContext by componentContext {

    override fun onItemClicked(id: Long) {
        onItemSelected(id)
    }

    override fun onItemDeleted(id: Long) {
        // TODO: Handle item deleted
    }
}

class ItemDetailsComponent(
    componentContext: ComponentContext,
    private val itemId: Long,
    private val onDeleted: (itemId: Long) -> Unit
) : ItemDetails, ComponentContext by componentContext {

    override fun onDeleteClicked() {
        // TODO: Delete the item
        onDeleted(itemId = itemId)
    }
}

class RootComponent(
    componentContext: ComponentContext
) : Root, ComponentContext by componentContext {

    // Omitted code

    private fun itemList(componentContext: ComponentContext): ItemList =
        ItemListComponent(
            componentContext = componentContext,
            onItemSelected = { navigation.push(Config.Details(itemId = it)) }
        )

    private fun itemDetails(componentContext: ComponentContext, config: Config.Details): ItemDetails =
        ItemDetailsComponent(
            componentContext = componentContext,
            itemId = config.itemId,
            onDeleted = { itemId ->
                navigation.pop { // Pop ItemDetails component
                    // Deliver the result to ItemList component
                    (stack.value.active.instance as? ItemList)?.onItemDeleted(id = itemId)
                }
            }
        )

    // Omitted code
}
```

### Alternative way

It is also possible to deliver results using reactive streams - e.g. coroutines `Flow` or Rx `Observable`.

Here is an example using Reaktive library. Kotlin coroutines `SharedFlow` should be very similar.

```kotlin
interface ItemList {

    fun onItemClicked(id: Long)

    sealed interface Input {
        class ItemDeleted(val id: Long) : Input
    }
}

interface ItemDetails {

    fun onDeleteClicked()
}

// Helper factory function creating DisposableScope attached to the Lifecycle.
// Creating CoroutineScope is very similar.
fun LifecycleOwner.disposableScope(): DisposableScope {
    val scope = DisposableScope()
    lifecycle.doOnDestroy(scope::dispose)
    return scope
}

class ItemListComponent(
    componentContext: ComponentContext,
    input: Observable<ItemList.Input>,
    private val onItemSelected: (id: Long) -> Unit,
) : ItemList, ComponentContext by componentContext, DisposableScope by componentContext.disposableScope() {

    init {
        // Subscribe to input
        input.subscribeScoped {
            when (it) {
                is ItemList.Input.ItemDeleted -> TODO("Handle item deleted")
            }
        }
    }

    override fun onItemClicked(id: Long) {
        onItemSelected(id)
    }
}

class RootComponent(
    componentContext: ComponentContext
) : Root, ComponentContext by componentContext {

    // Omitted code

    // Or MutableSharedFlow<ItemList.Input>(extraBufferCapacity = Int.MAX_VALUE)
    private val listInput = PublishSubject<ItemList.Input>()

    private fun itemList(componentContext: ComponentContext): ItemList =
        ItemListComponent(
            componentContext = componentContext,
            input = listInput, // Pass listInput to ItemListComponent
            onItemSelected = { navigation.push(Config.Details(itemId = it)) },
        )

    private fun itemDetails(componentContext: ComponentContext, config: Config.Details): ItemDetails =
        ItemDetailsComponent(
            componentContext = componentContext,
            itemId = config.itemId,
            onItemDeleted = { id ->
                navigation.pop { // Pop ItemDetails component
                    // Deliver the result to ItemList component
                    listInput.onNext(ItemList.Input.ItemDeleted(id = id))
                }
            },
        )

    // Omitted code
}
```

## Multiple Child Stacks in a component

When multiple `Child Stacks` are required in one component, each such `Child Stack` must have a unique key associated. The keys are required to be unique only within the component, so it is ok for different components to have `Child Stacks` with same keys. An exception will be thrown if multiple `Child Stacks` with the same key are detected in a component.

```kotlin
class Root(
    componentContext: ComponentContext
) : ComponentContext by componentContext {

    private val topNavigation = StackNavigation<TopConfig>()
    
    private val topStack =
        childStack<TopConfig, TopChild>(
            source = topNavigation,
            key = "TopStack",
            // Omitted code
        )

    private val bottomNavigation = StackNavigation<BottomConfig>()
    
    private val bottomStack =
        childStack<BottomConfig, BottomChild>(
            source = bottomNavigation,
            key = "BottomStack",
            // Omitted code
        )
}
```
