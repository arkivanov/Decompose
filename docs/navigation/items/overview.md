# Child Items overview

## The Child Items

`Child Items` is a navigation model for managing a list of components with flexible lifecycle states. The list can be empty.

!!!warning

    This navigation model is experimental and is available since version `3.4.0-alpha02`, the API is subject to change.

Unlike other navigation models, `Child Items` allows you to have multiple active components with different lifecycle states at the same time. You can decide which components are active and what their lifecycle states are. A typical use case is a lazy list or grid where component lifecycles are automatically updated according to the current viewport.

It is possible to have more than one `Child Items` navigation model in a component, nested navigation is also supported.

The `Child Items` navigation model consists of three main entities:

- [Items](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/items/Items.kt) - represents a state of the `Child Items` navigation model. The navigation is performed by creating a new navigation state from the previous one.
    - `Items#items` - the list of child configurations, can be empty, must be unique.
    - `Items#activeItems` - a map of lifecycle states of the instantiated (active) components. Child components whose configurations are not present in this map are destroyed. Configurations in the map should also be present in the `items` list, otherwise the behavior is undefined.
- [ChildItems](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/items/ChildItems.kt) - a simple data class that stores a list component configurations, as well as a map of active components with their lifecycle states.
    - `ChildItems#items` - the list of child configurations, can be empty.
    - `ChildItems#activeItems` - a map of instantiated child components and their lifecycle states.
- [ItemsNavigation](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/items/ItemsNavigation.kt) - an interface that accepts navigation commands and forwards them to all subscribed observers.

### Component Configurations

Similarly to other navigation models, each component created and managed by the `Child Items` has a configuration, please read the documentation about [child configurations](../overview.md#component-configurations-and-child-factories).

`Child Items` adds one additional requirement for child configurations:

- Configurations must be unique (by equality) within `Child Items`.

### The experimental Duplicate Configurations mode

Unlike other navigation models, the `Child Items` navigation model doesn't support the Duplicate Configurations mode. `IllegalStateException` is thrown if duplicate configurations are detected, regardless of the `DecomposeExperimentFlags.duplicateConfigurationsEnabled` flag.

### Initializing Child Items

There are three steps to initialize `Child Items`:

- Create a new instance of `ItemsNavigation` and assign it to a variable or a property.
- Initialize the `Child Items` navigation model using the `ComponentContext#childItems` extension function and pass `ItemsNavigation` into it along with other arguments.
- The `childItems` function returns `LazyChildItems` that can be observed and manipulated in the UI. Assign the returned `LazyChildItems` to another property or a variable.

## Example

Here is a very basic example of a flexible navigation with multiple active components:

```kotlin title="ItemComponent"
import com.arkivanov.decompose.ComponentContext
import kotlinx.serialization.Serializable

interface ItemComponent {
    val item: Item
}

@Serializable // kotlinx-serialization plugin must be applied
data class Item(val id: Int, val data: String)

class DefaultItemComponent(
    componentContext: ComponentContext,
    override val item: Item,
) : ItemComponent, ComponentContext by componentContext
```

```kotlin title="ItemsComponent"
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.items.Items
import com.arkivanov.decompose.router.items.ItemsNavigation
import com.arkivanov.decompose.router.items.LazyChildItems
import com.arkivanov.decompose.router.items.childItems
import com.arkivanov.decompose.router.items.setItems

interface ItemsComponent {
    val items: LazyChildItems<Item, ItemComponent>
}

class DefaultItemsComponent(
    componentContext: ComponentContext,
) : ItemsComponent, ComponentContext by componentContext {

    private val navigation = ItemsNavigation<Item>()

    override val items: LazyChildItems<Item, ItemComponent> =
        childItems(
            source = navigation,
            serializer = Item.serializer(), // Or null to disable navigation state saving
            initialItems = {
                Items(
                    items = List(100) { index ->
                        Item(id = index, data = "Item $index")
                    },
                )
            },
        ) { item, childComponentContext ->
            DefaultItemComponent(
                componentContext = childComponentContext,
                item = item,
            )
        }

    private fun addMoreItems(newItems: List<Item>) {
        navigation.setItems { items -> items + newItems }
    }
}
```

## Screen recreation and process death on (not only) Android

`Child Items` automatically preserves the state when a configuration change or process death occurs. To disable state preservation completely, pass `serializer = null` argument. When navigation state saving is disabled, the state is reset to the initial value when recreated.

If the list is big, it might be a good idea to avoid saving the state over process death (i.e., serializing it to disk and potentially exceeding the Bundle size on Android). At the same time, it's good to still keep the state over configuration changes on Android. In this case, pass `stateSaver = transientNavStateSaver()` argument instead of the `serializer` argument.

## Multiple Child Items in a component

When multiple `Child Items` are used in one component, each such `Child Items` must have a unique `key` argument associated. The keys are required to be unique only within the hosting component, so it is ok for different components to have `Child Items` with same keys. An exception will be thrown if multiple `Child Items` with the same key are detected in a component.
