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
interface ItemListComponent {

    // Omitted code

    fun onItemClicked(id: Long)
}

class DefaultItemListComponent(
    componentContext: ComponentContext,
    private val onItemSelected: (id: Long) -> Unit
) : ItemListComponent, ComponentContext by componentContext {

    // Omitted code

    override fun onItemClicked(id: Long) {
        onItemSelected(id)
    }
}
```

```kotlin title="ItemDetails component"
interface ItemDetailsComponent {

    // Omitted code

    fun onCloseClicked()
}

class DefaultItemDetailsComponent(
    componentContext: ComponentContext,
    itemId: Long,
    private val onFinished: () -> Unit
) : ItemDetailsComponent, ComponentContext by componentContext {

    // Omitted code

    override fun onCloseClicked() {
        onFinished()
    }
}
```

```kotlin title="Root component"
interface RootComponent {

    val childStack: Value<ChildStack<*, Child>>

    sealed class Child {
        class ListChild(val component: ItemList) : Child()
        class DetailsChild(val component: ItemDetails) : Child()
    }
}

class DefaultRootComponent(
    componentContext: ComponentContext
) : RootComponent, ComponentContext by componentContext {

    private val navigation = StackNavigation<Config>()

    private val _childStack =
        childStack(
            source = navigation,
            initialConfiguration = Config.List,
            handleBackButton = true, // Pop the back stack on back button press
            childFactory = ::createChild,
        )

    override val childStack: Value<ChildStack<*, RootComponent.Child>> = _childStack

    private fun createChild(config: Config, componentContext: ComponentContext): RootComponent.Child =
        when (config) {
            is Config.List -> ListChild(itemList(componentContext))
            is Config.Details -> DetailsChild(itemDetails(componentContext, config))
        }

    private fun itemList(componentContext: ComponentContext): ItemListComponent =
        DefaultItemListComponent(
            componentContext = componentContext,
            onItemSelected = { navigation.push(Config.Details(itemId = it)) }
        )

    private fun itemDetails(componentContext: ComponentContext, config: Config.Details): ItemDetailsComponent =
        DefaultItemDetailsComponent(
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

## Components in the back stack

`Child Stack` can not be empty, there is always one active (resumed) child component. Components in the back stack are always stopped. When `Child Stack` is first initialized or recreated after e.g. process death, all components are automatically created and the active component is resumed.

## Screen recreation and process death on (not only) Android

`Child Stack` automatically preserves the stack when a configuration change or process death occurs. Use the `persistent` argument to disable stack preservation completely. When disabled, the stack is reset to the initial state when recreated.

Components are created in their order. E.g. the first component in the back stack is created first, then the next component in the back stack is created, and so on. The active component is the latest component created.

Components are destroyed in reverse order, e.g. the active component is destroyed first, then the last component in the back stack is destroyed, and so on.

## Delivering a result when navigating back

To deliver a result from one component to another:

- Pass a callback to the `second` component.
- Call the callback with a `result` from the `second` component.
- In the `parent` component, supply the callback when instantiating the `second` component.
- When the callback is invoked, perform the navigation, e.g. by using `navigation.pop { ... }`.
- After the navigation is performed, call a method on the `first` component with the `result`.

```kotlin
interface ItemListComponent {

    fun onItemClicked(id: Long)

    fun onItemDeleted(id: Long)
}

interface ItemDetailsComponent {

    fun onDeleteClicked()
}

class DefaultItemListComponent(
    componentContext: ComponentContext,
    private val onItemSelected: (id: Long) -> Unit,
) : ItemListComponent, ComponentContext by componentContext {

    override fun onItemClicked(id: Long) {
        onItemSelected(id)
    }

    override fun onItemDeleted(id: Long) {
        // TODO: Handle item deleted
    }
}

class DefaultItemDetailsComponent(
    componentContext: ComponentContext,
    private val itemId: Long,
    private val onDeleted: (itemId: Long) -> Unit
) : ItemDetailsComponent, ComponentContext by componentContext {

    override fun onDeleteClicked() {
        // TODO: Delete the item
        onDeleted(itemId = itemId)
    }
}

class DefaultRootComponent(
    componentContext: ComponentContext
) : RootComponent, ComponentContext by componentContext {

    // Omitted code

    private fun itemList(componentContext: ComponentContext): ItemListComponent =
        DefaultItemListComponent(
            componentContext = componentContext,
            onItemSelected = { navigation.push(Config.Details(itemId = it)) }
        )

    private fun itemDetails(componentContext: ComponentContext, config: Config.Details): ItemDetailsComponent =
        DefaultItemDetailsComponent(
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
interface ItemListComponent {

    fun onItemClicked(id: Long)

    sealed interface Input {
        class ItemDeleted(val id: Long) : Input
    }
}

interface ItemDetailsComponent {

    fun onDeleteClicked()
}

// Helper factory function creating DisposableScope attached to the Lifecycle.
// Creating CoroutineScope is very similar.
fun LifecycleOwner.disposableScope(): DisposableScope {
    val scope = DisposableScope()
    lifecycle.doOnDestroy(scope::dispose)
    return scope
}

class DefaultItemListComponent(
    componentContext: ComponentContext,
    input: Observable<ItemList.Input>,
    private val onItemSelected: (id: Long) -> Unit,
) : ItemListComponent, ComponentContext by componentContext, DisposableScope by componentContext.disposableScope() {

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

class DefaultRootComponent(
    componentContext: ComponentContext
) : RootComponent, ComponentContext by componentContext {

    // Omitted code

    // Or MutableSharedFlow<ItemList.Input>(extraBufferCapacity = Int.MAX_VALUE)
    private val listInput = PublishSubject<ItemList.Input>()

    private fun itemList(componentContext: ComponentContext): DefaultItemListComponent =
        DefaultItemListComponent(
            componentContext = componentContext,
            input = listInput, // Pass listInput to ItemListComponent
            onItemSelected = { navigation.push(Config.Details(itemId = it)) },
        )

    private fun itemDetails(componentContext: ComponentContext, config: Config.Details): ItemDetailsComponent =
        DefaultItemDetailsComponent(
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
class DefaultRootComponent(
    componentContext: ComponentContext
) : RootComponent, ComponentContext by componentContext {

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
