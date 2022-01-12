# Deep linking

Users following links on devices have one goal in mind: to get to the content they want to see. Decompose provides ability to override
initial destinations and back stack. A typical approach is to parse deep links on the platform side and then pass the initial data to the
root component and then down the tree to all the required components.

Parsing deep links on the platform side is beyond this documentation. This information should be available in the platform's specific
documentation. For example here is the [related documentation](https://developer.android.com/training/app-links/deep-linking) for Android.

### Handling deep links

Given the basic example from the [Router overview](https://arkivanov.github.io/Decompose/router/overview) page, we can easily handle deep
links. Let's say we have a link like `http://myitems.com?itemId=3`. When the user clicks on it, we want to open the details screen of the
item with the provided `id`. When the user closes the details screen, they should be navigated back to the list screen. The idea is to pass
parsed data from the deep link to a component responsible for navigation, in our case it is the `Root` component.

```kotlin
class RootComponent(
    componentContext: ComponentContext,
    initialItemId: Long? = null
) : Root, ComponentContext by componentContext {

    private val router =
        router<Config, Root.Child>(
            initialStack = {
                listOfNotNull(
                    Config.List,
                    if (initialItemId != null) Config.Details(itemId = initialItemId) else null,
                )
            },
            handleBackButton = true,
            childFactory = ::createChild
        )

    // Omitted code
}
```

Now, if the `initialItemId` is supplied, the initial screen will be the `ItemDetails` component. The `ItemList` component will be in the
back stack, so the user will be able to go back.
