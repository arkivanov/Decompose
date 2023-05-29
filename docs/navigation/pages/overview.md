# Child Pages overview

## The Child Pages (experimental)

`Child Pages` is a navigation model for managing a list of components (pages) with one selected (active) component. The list can be empty.

!!!warning
    This navigation model is experimental, the API is subject to change.

Similarly to `Child Stack`, each component has its own `Lifecycle`. By default, the currently selected page is `ACTIVE`, its two neighbours are `INACTIVE`, and the rest are `DESTROYED`. You can implement your own logic, for example with circular behaviour. 

It is possible to have more than one `Child Pages` navigation model in a component, nested navigation is also supported.

The `Child Pages` navigation model consists of two main entities:

- [Pages](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/pages/Pages.kt) - represents a state of the `Child Pages` navigation model. The navigation is performed by creating a new navigation state from the previous one.
    - `Pages#items` - the list of child configurations, must be unique, can be empty.
    - `Pages#selectedIndex` - index of the selected child configuration.
- [ChildPages](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/pages/ChildPages.kt) - a simple data class that stores a list of components and their configurations, as well as the currently selected index.
    - `ChildPages#items` - the list of child component, can be empty.
    - `ChildStack#selectedIndex` - the index of the currently selected child component. Must be within the range of `items` indices if `items` is not empty, otherwise can be any number.
- [PagesNavigation](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/pages/PagesNavigation.kt) - an interface that accepts navigation commands and forwards them to all subscribed observers.

### Component Configurations

Similarly to `Child Stack`, each component created and managed by the `Child Pages` has a configuration, please read the documentation about [child configurations](/Decompose/navigation/overview/#component-configurations-and-child-factories).

`Child Pages` adds one additional requirement for child configurations:

- Configurations must be unique (by equality) within `Child Pages`.

### Initializing Child Pages

There are three steps to initialize `Child Pages`:

- Create a new instance of `PagesNavigation` and assign it to a variable or a property.
- Initialize the `Child Pages` navigation model using the `ComponentContext#childPages` extension function and pass `PagesNavigation` into it along with other arguments.
- The `childPages` function returns `Value<ChildPages>` that can be observed in the UI. Assign the returned `Value` to another property or a variable.

## Example

Here is a very basic example of a pager-like navigation:

```kotlin title="PageComponent"
interface PageComponent {
    val data: String
}

class DefaultPageComponent(
    componentContext: ComponentContext,
    override val data: String,
) : PageComponent, ComponentContext by componentContext
```

```kotlin title="PagesComponent"
interface PagesComponent {
    val pages: Value<ChildPages<*, PageComponent>>

    fun selectPage(index: Int)
}

class DefaultPagesComponent(
    componentContext: ComponentContext,
) : PagesComponent, ComponentContext by componentContext {

    private val navigation = PagesNavigation<Config>()

    override val pages: Value<ChildPages<*, PageComponent>> =
        childPages(
            source = navigation,
            initialPages = {
                Pages(
                    items = List(10) { index -> Config(data = "Item $index") },
                    selectedIndex = 0,
                )
            },
        ) { config, componentContext ->
            DefaultPageComponent(
                componentContext = componentContext,
                data = config.data,
            )
        }

    override fun selectPage(index: Int) {
        navigation.select(index = index)
    }

    @Parcelize
    private data class Config(val data: String) : Parcelable
}
```

## Screen recreation and process death on (not only) Android

`Child Pages` automatically preserves the state when a configuration change or process death occurs. Use the `persistent` argument to disable state preservation completely. When disabled, the state is reset to the initial state when recreated.

Components are created in their order. E.g. the first component in the list is created first, then the next component in the list is created, and so on. Components are destroyed in reverse order.

## Multiple Child Pages in a component

When multiple `Child Pages` are used in one component, each such `Child Pages` must have a unique `key` argument associated. The keys are required to be unique only within the hosting component, so it is ok for different components to have `Child Pages` with same keys. An exception will be thrown if multiple `Child PAges` with the same key are detected in a component.
