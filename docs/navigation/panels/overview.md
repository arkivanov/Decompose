# Child Panels overview

## The Child Panels

`Child Panels` is a navigation model for managing a set of up to three child components (panels): Main (required), Details (optional) and Extra (optional). This navigation model can be compared with Compose [List-Details Layout](https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail).

!!!warning
    This navigation model is experimental since version `3.2.0-beta01`, the API is subject to change.

Similarly to `Child Stack`, each component has its own `Lifecycle` automatically controlled by the navigation model depending on the current `ChildPanelsMode`.

It is possible to have more than one `Child Panels` navigation model in a component, nested navigation is also supported.

The `Child Panels` navigation model consists of the following main entities:

- [Panels](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/panels/Panels.kt) - represents a state of the `Child Panels` navigation model. The navigation is performed by creating a new navigation state from the previous one.
    - `Panels#main` - a configuration of the Main panel.
    - `Panels#details` - an optional configuration of the Details panel, default value is `null`.
    - `Panels#extra` - an optional configuration of the Extra panel, default value is `null`.
    - `Panels#mode` - the current `ChildPanelsMode`, determines how lifecycles of the panels within the Child Panels navigation model are changing, default value is `ChildPanelsMode.SINGLE`.
- [ChildPanels](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/panels/ChildPanels.kt) - a simple data class that stores all child components (panels) and their configurations, as well as the current mode.
    - `ChildPanels#main` - a Main child component.
    - `ChildPanels#details` - an optional Details child component.
    - `ChildPanels#extra` - an optional Extra child component.
    - `ChildPanels#mode` - the current `ChildPanelsMode`.
- [ChildPanelsMode](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/panels/ChildPanelsMode.kt) - determines how lifecycles of the child components (panels) within the `Child Panels` navigation model are changing.
  - `SINGLE` - there is only one `RESUMED` panel at a time. If the Extra panel exists, then it is `RESUMED` and all other panels are `CREATED`. Otherwise, if the Details panel exists, then it is `RESUMED` and the Main panel is `CREATED`. Otherwise, the Main panel is `RESUMED`.
  - `DUAL` - there are at most two panels `RESUMED` at a time. The Main panel is always `RESUMED`. If the Extra panel exists, then it is `RESUMED` and the Details panel (if exists) is `CREATED`. Otherwise, if the Details panel exists, then it is `RESUMED`.
  - `TRIPLE` - any existing panel is always `RESUMED`.
- [PanelsNavigation](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/panels/PanelsNavigation.kt) - an interface that accepts navigation commands and forwards them to all subscribed observers.

### Component Configurations

Similarly to `Child Stack`, each component created and managed by the `Child Panels` has a configuration, please read the documentation about [child configurations](../overview.md#component-configurations-and-child-factories).

### Initializing Child Panels

There are three steps to initialize `Child Panels`:

- Create a new instance of `PanelsNavigation` and assign it to a variable or a property.
- Initialize the `Child Panels` navigation model using the `ComponentContext#childPanels` extension function and pass `PanelsNavigation` into it along with other arguments.
- The `childPanels` function returns `Value<ChildPanels>` that can be observed in the UI. Assign the returned `Value` to another property or a variable.

### Displaying panels with Compose

`Child Panels` state can be observed and displayed in Compose by using the `ChildPanels` `Composable` function from the experimental Compose extensions module provided by Decompose. Please see the [related documentation](../../extensions/compose.md#child-panels-navigation-with-compose) for more information.

## Example

Here is a very basic example of a list-details navigation:

```kotlin title="Child components"
import com.arkivanov.decompose.ComponentContext

interface MainComponent

class DefaultMainComponent(
    componentContext: ComponentContext,
    onItemSelected: (id: Long) -> Unit,
) : MainComponent, ComponentContext by componentContext

interface DetailsComponent

class DefaultDetailsComponent(
    componentContext: ComponentContext,
    itemId: Long,
    onFinished: () -> Unit,
) : DetailsComponent, ComponentContext by componentContext
```

```kotlin title="PanelsComponent"
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.panels.ChildPanels
import com.arkivanov.decompose.router.panels.ChildPanelsMode
import com.arkivanov.decompose.router.panels.Panels
import com.arkivanov.decompose.router.panels.PanelsNavigation
import com.arkivanov.decompose.router.panels.activateDetails
import com.arkivanov.decompose.router.panels.childPanels
import com.arkivanov.decompose.router.panels.dismissDetails
import com.arkivanov.decompose.router.panels.setMode
import com.arkivanov.decompose.value.Value
import kotlinx.serialization.Serializable
import kotlinx.serialization.builtins.serializer

interface PanelsComponent {

    val panels: Value<ChildPanels<*, MainComponent, *, DetailsComponent, *, Nothing>>

    fun setMode(mode: ChildPanelsMode)
}

class DefaultPanelsComponent(
  componentContext: ComponentContext,
) : PanelsComponent, ComponentContext by componentContext {

    private val nav = PanelsNavigation<Unit, DetailsConfig, Nothing>()

    override val panels: Value<ChildPanels<*, MainComponent, *, DetailsComponent, *, Nothing>> =
        childPanels(
            source = nav,
            serializers = Unit.serializer() to DetailsConfig.serializer(),
            initialPanels = { Panels(main = Unit) },
            handleBackButton = true,
            mainFactory = { _, ctx ->
                DefaultMainComponent(
                    componentContext = ctx,
                    onItemSelected = { nav.activateDetails(details = DetailsConfig(itemId = it)) },
                )
            },
            detailsFactory = { cfg, ctx ->
                DefaultDetailsComponent(
                    componentContext = ctx,
                    itemId = cfg.itemId,
                    onFinished = nav::dismissDetails,
                )
            },
        )

    override fun setMode(mode: ChildPanelsMode) {
         nav.setMode(mode)
    }
  
    @Serializable
    private data class DetailsConfig(val itemId: Long)
}
```

## Screen recreation and process death on (not only) Android

`Child Panels` automatically preserves the state when a configuration change or process death occurs. To disable state preservation completely, pass `serializers = null` argument. When navigation state saving is disabled, the state is reset to the initial value when recreated.

Components are created in their order. I.e. the Main component is created first, then the Details component is created (if exists), and lastly the Extra component is created (if exists). Components are destroyed in reverse order.

## Multiple Child Panels in a component

When multiple `Child Panels` are used in one component, each such `Child Panels` must have a unique `key` argument associated. The keys are required to be unique only within the hosting component, so it is ok for different components to have `Child Panels` with same keys. An exception will be thrown if multiple `Child Panels` with the same key are detected in a component.
