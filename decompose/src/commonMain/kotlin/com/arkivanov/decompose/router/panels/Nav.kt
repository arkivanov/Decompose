package com.arkivanov.decompose.router.panels

import com.arkivanov.decompose.Cancellation
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.GenericComponentContext
import com.arkivanov.decompose.Relay
import com.arkivanov.decompose.router.children.ChildNavState
import com.arkivanov.decompose.router.children.ChildNavState.Status
import com.arkivanov.decompose.router.children.NavState
import com.arkivanov.decompose.router.children.NavigationSource
import com.arkivanov.decompose.router.children.SimpleChildNavState
import com.arkivanov.decompose.router.children.children
import com.arkivanov.decompose.router.panels.PanelsNavigation.Event
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.statekeeper.SerializableContainer
import kotlinx.serialization.KSerializer
import kotlinx.serialization.Serializable

data class ChildPanels<out MC : Any, out MT : Any, out DC : Any, out DT : Any>(
    val main: Child.Created<MC, MT>,
    val details: Child.Created<DC, DT>? = null,
    val isMultiPane: Boolean = false,
)

interface PanelsNavigator<MC : Any, DC : Any> {

    fun navigate(
        transformer: (Panels<MC, DC>) -> Panels<MC, DC>,
        onComplete: (newState: Panels<MC, DC>, oldState: Panels<MC, DC>) -> Unit = { _, _ -> },
    )
}

interface PanelsNavigation<MC : Any, DC : Any> : PanelsNavigator<MC, DC>, NavigationSource<Event<MC, DC>> {

    data class Event<MC : Any, DC : Any>(
        val transformer: (Panels<MC, DC>) -> Panels<MC, DC>,
        val onComplete: (newState: Panels<MC, DC>, oldState: Panels<MC, DC>) -> Unit = { _, _ -> },
    )
}

fun <MC : Any, DC : Any> PanelsNavigation(): PanelsNavigation<MC, DC> =
    DefaultPanelsNavigation()

internal class DefaultPanelsNavigation<MC : Any, DC : Any> : PanelsNavigation<MC, DC> {

    private val relay = Relay<Event<MC, DC>>()

    override fun subscribe(observer: (Event<MC, DC>) -> Unit): Cancellation =
        relay.subscribe(observer)

    override fun navigate(
        transformer: (Panels<MC, DC>) -> Panels<MC, DC>,
        onComplete: (newState: Panels<MC, DC>, oldState: Panels<MC, DC>) -> Unit,
    ) {
        relay.accept(Event(transformer, onComplete))
    }
}

@Serializable
data class Panels<MC : Any, DC : Any>(
    val mainConfig: MC,
    val detailsConfig: DC? = null,
    val isMultiPane: Boolean = false,
)

fun <Ctx : GenericComponentContext<Ctx>, MC : Any, MT : Any, DC : Any, DT : Any> Ctx.childPanels(
    source: NavigationSource<Event<MC, DC>>,
    initialPanels: () -> Panels<MC, DC>,
    serializers: Pair<KSerializer<MC>, KSerializer<DC>>? = null,
    key: String = "DefaultChildPanels",
    onStateChanged: (newState: Panels<MC, DC>, oldState: Panels<MC, DC>?) -> Unit = { _, _ -> },
    handleBackButton: Boolean = false,
    mainFactory: (configuration: MC, Ctx) -> MT,
    detailsFactory: (configuration: DC, Ctx) -> DT,
): Value<ChildPanels<MC, MT, DC, DT>> =
    childPanels(
        source = source,
        initialPanels = initialPanels,
        savePanels = savePanels@{ panels ->
            val (mainSerializer, detailsSerializer) = serializers ?: return@savePanels null
            SerializableContainer(
                value = panels,
                strategy = Panels.serializer(mainSerializer, detailsSerializer),
            )
        },
        restorePanels = restorePanels@{ container ->
            val (mainSerializer, detailsSerializer) = serializers ?: return@restorePanels null
            container.consume(Panels.serializer(mainSerializer, detailsSerializer))
        },
        key = key,
        onStateChanged = onStateChanged,
        handleBackButton = handleBackButton,
        mainFactory = mainFactory,
        detailsFactory = detailsFactory,
    )

fun <Ctx : GenericComponentContext<Ctx>, MC : Any, MT : Any, DC : Any, DT : Any> Ctx.childPanels(
    source: NavigationSource<Event<MC, DC>>,
    initialPanels: () -> Panels<MC, DC>,
    savePanels: (Panels<MC, DC>) -> SerializableContainer?,
    restorePanels: (SerializableContainer) -> Panels<MC, DC>?,
    key: String = "DefaultChildPanels",
    onStateChanged: (newState: Panels<MC, DC>, oldState: Panels<MC, DC>?) -> Unit = { _, _ -> },
    handleBackButton: Boolean = false,
    mainFactory: (configuration: MC, Ctx) -> MT,
    detailsFactory: (configuration: DC, Ctx) -> DT,
): Value<ChildPanels<MC, MT, DC, DT>> =
    children(
        source = source,
        key = key,
        initialState = { PanelsNavState(initialPanels()) },
        saveState = { savePanels(it.panels) },
        restoreState = { restorePanels(it)?.let(::PanelsNavState) },
        navTransformer = { state, event -> PanelsNavState(event.transformer(state.panels)) },
        stateMapper = { state, children ->
            @Suppress("UNCHECKED_CAST")
            val mainChild = children[0] as Child.Created<Config.Main<MC>, MT>

            @Suppress("UNCHECKED_CAST")
            val detailsChild = children.getOrNull(1) as Child.Created<Config.Details<DC>, DT>?

            ChildPanels(
                main = Child.Created(configuration = mainChild.configuration.config, instance = mainChild.instance),
                details = detailsChild?.let {
                    Child.Created(configuration = it.configuration.config, instance = it.instance)
                },
                isMultiPane = state.panels.isMultiPane,
            )
        },
        onStateChanged = { newState, oldState -> onStateChanged(newState.panels, oldState?.panels) },
        onEventComplete = { event, newState, oldState ->
            event.onComplete(newState.panels, oldState.panels)
        },
        backTransformer = { state ->
            val panels = state.panels
            if (handleBackButton && !panels.isMultiPane && (panels.detailsConfig != null)) {
                { state.copy(panels = state.panels.copy(detailsConfig = null)) }
            } else {
                null
            }
        },
        childFactory = { config, ctx ->
            when (config) {
                is Config.Main -> mainFactory(config.config, ctx)
                is Config.Details -> detailsFactory(config.config, ctx)
            }
        },
    )

sealed interface Config<out MC : Any, out DC : Any> {
    data class Main<out MC : Any>(val config: MC) : Config<MC, Nothing>
    data class Details<out DC : Any>(val config: DC) : Config<Nothing, DC>
}

private data class PanelsNavState<MC : Any, DC : Any>(
    val panels: Panels<MC, DC>,
) : NavState<Config<MC, DC>> {
    override val children: List<ChildNavState<Config<MC, DC>>> =
        listOfNotNull(
            SimpleChildNavState(
                configuration = Config.Main(panels.mainConfig),
                status = if (panels.isMultiPane || (panels.detailsConfig == null)) Status.RESUMED else Status.STARTED,
            ),
            panels.detailsConfig?.let {
                SimpleChildNavState(
                    configuration = Config.Details(it),
                    status = Status.RESUMED,
                )
            },
        )
}
