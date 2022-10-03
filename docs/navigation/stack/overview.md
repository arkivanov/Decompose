# Child Stack overview

## The Child Stack

`Child Stack` is a navigation model for managing a stack of components, just like `FragmentManager`.

Each component has its own `Lifecycle`. Each time a new component is pushed to the stack, the currently active component is stopped. When a component is popped from the stack, the previous component is resumed. This allows business logic to run while the component is in the back stack. It is possible to have more than one `Child Stack` in a component, nested stacks are also supported.

The `Child Stack` navigation consists of two main entities:

- [ChildStack](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/stack/ChildStack.kt) - a simple data class that stores a stack of components and their configurations.
    - ChildStack#active - contains the currently active component.
    - ChildStack#backStack - contains the back stack of inactive components.
- [StackNavigation](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/stack/StackNavigation.kt) - an interface that accepts navigation commands and forwards them to all subscribed observers.

### Component Configurations

Each component created and managed by the `Child Stack` has a configuration, please read the documentation about [child configurations](/Decompose/navigation/overview/#component-configurations-and-child-factories).

`Child Stack` adds one additional requirement for child configurations:

- Configurations must be unique (by equality) within the `Child Stack`.

### Initializing the Child Stack

There are three steps to initialize the `Child Stack`:

- Create a new instance of `StackNavigation` and assign it to a variable or a property.
- Initialize the `Child Stack` using the `ComponentContext#childStack` extension function and pass `StackNavigation` into it along with other arguments.
- The `childStack` function returns `Value<ChildStack>` that can be observed in the UI. Assign the returned `Value` to another property or a variable.

## Example

Here is a very basic example of navigation between two child components:

```kotlin title="ItemList component"
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

```kotlin title="ItemDetails component"
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

```kotlin title="Root component"
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

    private val _childStack =
        childStack(
            source = navigation,
            initialConfiguration = Config.List,
            handleBackButton = true, // Pop the back stack on back button press
            childFactory = ::createChild,
        )

    override val childStack: Value<ChildStack<*, Root.Child>> = _childStack

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

When multiple `Child Stacks` are used in one component, each such `Child Stack` must have a unique key associated. The keys are required to be unique only within the parent (hosting) component, so it is ok for different components to have `Child Stacks` with same keys. An exception will be thrown if multiple `Child Stacks` with the same key are detected in a component.

```kotlin title="Two Child Stacks in one component"
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
