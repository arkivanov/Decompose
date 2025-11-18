package com.arkivanov.decompose.router.panels

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.GenericComponentContext
import com.arkivanov.decompose.router.children.ChildNavState
import com.arkivanov.decompose.router.children.ChildNavState.Status
import com.arkivanov.decompose.router.children.NavState
import com.arkivanov.decompose.router.children.NavigationSource
import com.arkivanov.decompose.router.children.SimpleChildNavState
import com.arkivanov.decompose.router.children.children
import com.arkivanov.decompose.router.panels.PanelsNavigation.Event
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.statekeeper.SerializableContainer
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.KSerializer
import kotlinx.serialization.builtins.NothingSerializer

/**
 * Initializes and manages a set of up to two child components (panels): Main (required) and
 * Details (optional). The Extra component is unused. See [ChildPanelsMode] for documentation about
 * how child components lifecycles are controlled.
 *
 * **It is strongly recommended to call this method on the Main thread.**
 *
 * @param source a source of navigation events.
 * @param serializers an optional [Pair] of [KSerializer] (Main and Details) to be used for
 * serializing and deserializing configurations. If `null` then the navigation state will not be preserved.
 * @param initialPanels an initial state of Child Panels that should be set if there is no saved state.
 * See [Panels] for more information.
 * @param key a key of the navigation, must be unique if there are multiple Child Panels
 * used in the same component.
 * @param onStateChanged called every time the navigation state changes, `oldState` is `null` when
 * called first time during initialisation.
 * @param handleBackButton determines whether the previous component should be automatically
 * selected on back button press or not, default is `false`.
 * Only works if [Panels.mode] is [ChildPanelsMode.SINGLE].
 * @param mainFactory a factory function that creates new instances of the Main component.
 * @param detailsFactory a factory function that creates new instances of the Details component.
 * @return an observable [Value] of [ChildPanels].
 */
@ExperimentalSerializationApi
@ExperimentalDecomposeApi
fun <Ctx : GenericComponentContext<Ctx>, MC : Any, MT : Any, DC : Any, DT : Any> Ctx.childPanels(
    source: NavigationSource<Event<MC, DC, Nothing>>,
    serializers: Pair<KSerializer<MC>, KSerializer<DC>>?,
    initialPanels: () -> Panels<MC, DC, Nothing>,
    key: String = "DefaultChildPanels",
    onStateChanged: (newState: Panels<MC, DC, Nothing>, oldState: Panels<MC, DC, Nothing>?) -> Unit = { _, _ -> },
    handleBackButton: Boolean = false,
    mainFactory: (configuration: MC, Ctx) -> MT,
    detailsFactory: (configuration: DC, Ctx) -> DT,
): Value<ChildPanels<MC, MT, DC, DT, Nothing, Nothing>> =
    childPanels(
        source = source,
        initialPanels = initialPanels,
        serializers = serializers?.let { Triple(it.first, it.second, NothingSerializer()) },
        key = key,
        onStateChanged = onStateChanged,
        handleBackButton = handleBackButton,
        mainFactory = mainFactory,
        detailsFactory = detailsFactory,
        extraFactory = { _, _ -> error("Can't instantiate Nothing") },
    )

/**
 * Initializes and manages a set of up to two child components (panels): Main (required) and
 * Details (optional). The Extra component is unused. See [ChildPanelsMode] for documentation about
 * how child components lifecycles are controlled.
 *
 * **It is strongly recommended to call this method on the Main thread.**
 *
 * @param source a source of navigation events.
 * @param initialPanels an initial state of Child Panels that should be set if there is no saved state.
 * See [Panels] for more information.
 * @param savePanels a function that saves the provided [Panels] state into [SerializableContainer].
 * The navigation state is not saved if `null` is returned.
 * @param restorePanels a function that restores the [Panels] state from the provided [SerializableContainer].
 * If `null` is returned then [initialPanels] is used instead.
 * The restored [Panels] state must have exactly the same configurations.
 * @param key a key of the navigation, must be unique if there are multiple Child Panels
 * used in the same component.
 * @param onStateChanged called every time the navigation state changes, `oldState` is `null` when
 * called first time during initialisation.
 * @param handleBackButton determines whether the previous component should be automatically
 * selected on back button press or not, default is `false`.
 * Only works if [Panels.mode] is [ChildPanelsMode.SINGLE].
 * @param mainFactory a factory function that creates new instances of the Main component.
 * @param detailsFactory a factory function that creates new instances of the Details component.
 * @return an observable [Value] of [ChildPanels].
 */
@ExperimentalDecomposeApi
fun <Ctx : GenericComponentContext<Ctx>, MC : Any, MT : Any, DC : Any, DT : Any, EC : Any, ET : Any> Ctx.childPanels(
    source: NavigationSource<Event<MC, DC, EC>>,
    initialPanels: () -> Panels<MC, DC, EC>,
    savePanels: (Panels<MC, DC, EC>) -> SerializableContainer?,
    restorePanels: (SerializableContainer) -> Panels<MC, DC, EC>?,
    key: String = "DefaultChildPanels",
    onStateChanged: (newState: Panels<MC, DC, EC>, oldState: Panels<MC, DC, EC>?) -> Unit = { _, _ -> },
    handleBackButton: Boolean = false,
    mainFactory: (configuration: MC, Ctx) -> MT,
    detailsFactory: (configuration: DC, Ctx) -> DT,
): Value<ChildPanels<MC, MT, DC, DT, EC, ET>> =
    childPanels(
        source = source,
        initialPanels = initialPanels,
        savePanels = savePanels,
        restorePanels = restorePanels,
        key = key,
        onStateChanged = onStateChanged,
        handleBackButton = handleBackButton,
        mainFactory = mainFactory,
        detailsFactory = detailsFactory,
        extraFactory = { _, _ -> error("Can't instantiate Nothing") },
    )

/**
 * Initializes and manages a set of up to three child components (panels): Main (required),
 * Details (optional) and Extra (optional). See [ChildPanelsMode] for documentation about
 * how child components lifecycles are controlled.
 *
 * **It is strongly recommended to call this method on the Main thread.**
 *
 * @param source a source of navigation events.
 * @param serializers an optional [Triple] of [KSerializer] (Main, Details and Extra) to be used for
 * serializing and deserializing configurations. If `null` then the navigation state will not be preserved.
 * @param initialPanels an initial state of Child Panels that should be set if there is no saved state.
 * See [Panels] for more information.
 * @param key a key of the navigation, must be unique if there are multiple Child Panels
 * used in the same component.
 * @param onStateChanged called every time the navigation state changes, `oldState` is `null` when
 * called first time during initialisation.
 * @param handleBackButton determines whether the previous component should be automatically
 * selected on back button press or not, default is `false`.
 * Only works if [Panels.mode] is [ChildPanelsMode.SINGLE].
 * @param mainFactory a factory function that creates new instances of the Main component.
 * @param detailsFactory a factory function that creates new instances of the Details component.
 * @param extraFactory a factory function that creates new instances of the Extra component.
 * @return an observable [Value] of [ChildPanels].
 */
@ExperimentalDecomposeApi
fun <Ctx : GenericComponentContext<Ctx>, MC : Any, MT : Any, DC : Any, DT : Any, EC : Any, ET : Any> Ctx.childPanels(
    source: NavigationSource<Event<MC, DC, EC>>,
    serializers: Triple<KSerializer<MC>, KSerializer<DC>, KSerializer<EC>>?,
    initialPanels: () -> Panels<MC, DC, EC>,
    key: String = "DefaultChildPanels",
    onStateChanged: (newState: Panels<MC, DC, EC>, oldState: Panels<MC, DC, EC>?) -> Unit = { _, _ -> },
    handleBackButton: Boolean = false,
    mainFactory: (configuration: MC, Ctx) -> MT,
    detailsFactory: (configuration: DC, Ctx) -> DT,
    extraFactory: (configuration: EC, Ctx) -> ET,
): Value<ChildPanels<MC, MT, DC, DT, EC, ET>> =
    childPanels(
        source = source,
        initialPanels = initialPanels,
        savePanels = savePanels@{ panels ->
            val (mainSerializer, detailsSerializer, extraSerializer) = serializers ?: return@savePanels null
            SerializableContainer(
                value = panels,
                strategy = Panels.serializer(mainSerializer, detailsSerializer, extraSerializer),
            )
        },
        restorePanels = restorePanels@{ container ->
            val (mainSerializer, detailsSerializer, extraSerializer) = serializers ?: return@restorePanels null
            container.consume(Panels.serializer(mainSerializer, detailsSerializer, extraSerializer))
        },
        key = key,
        onStateChanged = onStateChanged,
        handleBackButton = handleBackButton,
        mainFactory = mainFactory,
        detailsFactory = detailsFactory,
        extraFactory = extraFactory,
    )

/**
 * Initializes and manages a set of up to three child components (panels): Main (required),
 * Details (optional) and Extra (optional). See [ChildPanelsMode] for documentation about
 * how child components lifecycles are controlled.
 *
 * **It is strongly recommended to call this method on the Main thread.**
 *
 * @param source a source of navigation events.
 * @param initialPanels an initial state of Child Panels that should be set if there is no saved state.
 * See [Panels] for more information.
 * @param savePanels a function that saves the provided [Panels] state into [SerializableContainer].
 * The navigation state is not saved if `null` is returned.
 * @param restorePanels a function that restores the [Panels] state from the provided [SerializableContainer].
 * If `null` is returned then [initialPanels] is used instead.
 * The restored [Panels] state must have exactly the same configurations.
 * @param key a key of the navigation, must be unique if there are multiple Child Panels
 * used in the same component.
 * @param onStateChanged called every time the navigation state changes, `oldState` is `null` when
 * called first time during initialisation.
 * @param handleBackButton determines whether the previous component should be automatically
 * selected on back button press or not, default is `false`.
 * Only works if [Panels.mode] is [ChildPanelsMode.SINGLE].
 * @param mainFactory a factory function that creates new instances of the Main component.
 * @param detailsFactory a factory function that creates new instances of the Details component.
 * @param extraFactory a factory function that creates new instances of the Extra component.
 * @return an observable [Value] of [ChildPanels].
 */
@ExperimentalDecomposeApi
fun <Ctx : GenericComponentContext<Ctx>, MC : Any, MT : Any, DC : Any, DT : Any, EC : Any, ET : Any> Ctx.childPanels(
    source: NavigationSource<Event<MC, DC, EC>>,
    initialPanels: () -> Panels<MC, DC, EC>,
    savePanels: (Panels<MC, DC, EC>) -> SerializableContainer?,
    restorePanels: (SerializableContainer) -> Panels<MC, DC, EC>?,
    key: String = "DefaultChildPanels",
    onStateChanged: (newState: Panels<MC, DC, EC>, oldState: Panels<MC, DC, EC>?) -> Unit = { _, _ -> },
    handleBackButton: Boolean = false,
    mainFactory: (configuration: MC, Ctx) -> MT,
    detailsFactory: (configuration: DC, Ctx) -> DT,
    extraFactory: (configuration: EC, Ctx) -> ET,
): Value<ChildPanels<MC, MT, DC, DT, EC, ET>> =
    children(
        source = source,
        key = key,
        initialState = { PanelsNavState(initialPanels()) },
        saveState = { savePanels(it.panels) },
        restoreState = { restorePanels(it)?.let(::PanelsNavState) },
        navTransformer = { state, event -> PanelsNavState(event.transformer(state.panels)) },
        stateMapper = { state, children ->
            val createdChildren = children.mapNotNull { it as? Child.Created }
            val main = createdChildren.firstNotNullOf { if (it.instance is Panel.Main) it.instance to it.key else null }
            val details = createdChildren.firstNotNullOfOrNull { if (it.instance is Panel.Details) it.instance to it.key else null }
            val extra = createdChildren.firstNotNullOfOrNull { if (it.instance is Panel.Extra) it.instance to it.key else null }

            ChildPanels(
                main = Child.Created(configuration = main.first.config, instance = main.first.instance, key = main.second),
                details = details?.let { Child.Created(configuration = it.first.config, instance = it.first.instance, key = it.second) },
                extra = extra?.let { Child.Created(configuration = it.first.config, instance = it.first.instance, key = it.second) },
                mode = state.panels.mode,
            )
        },
        onStateChanged = { newState, oldState -> onStateChanged(newState.panels, oldState?.panels) },
        onEventComplete = { event, newState, oldState -> event.onComplete(newState.panels, oldState.panels) },
        backTransformer = { state ->
            val panels = state.panels

            when {
                !handleBackButton -> null

                (panels.mode == ChildPanelsMode.SINGLE) && (panels.extra != null) -> {
                    { state.copy(panels = panels.copy(extra = null)) }
                }

                (panels.mode == ChildPanelsMode.SINGLE) && (panels.details != null) -> {
                    { state.copy(panels = panels.copy(details = null)) }
                }

                else -> null
            }
        },
        childFactory = { config, ctx ->
            when (config) {
                is Config.Main -> Panel.Main(config.config, mainFactory(config.config, ctx))
                is Config.Details -> Panel.Details(config.config, detailsFactory(config.config, ctx))
                is Config.Extra -> Panel.Extra(config.config, extraFactory(config.config, ctx))
            }
        },
    )

private sealed interface Config<out MC : Any, out DC : Any, out EC : Any> {
    data class Main<out MC : Any>(val config: MC) : Config<MC, Nothing, Nothing>
    data class Details<out DC : Any>(val config: DC) : Config<Nothing, DC, Nothing>
    data class Extra<out EC : Any>(val config: EC) : Config<Nothing, Nothing, EC>
}

private sealed interface Panel<out MC : Any, out MT : Any, out DC : Any, out DT : Any, out EC : Any, out ET : Any> {
    data class Main<out MC : Any, out MT : Any>(val config: MC, val instance: MT) : Panel<MC, MT, Nothing, Nothing, Nothing, Nothing>
    data class Details<out DC : Any, out DT : Any>(val config: DC, val instance: DT) : Panel<Nothing, Nothing, DC, DT, Nothing, Nothing>
    data class Extra<out EC : Any, out ET : Any>(val config: EC, val instance: ET) : Panel<Nothing, Nothing, Nothing, Nothing, EC, ET>
}

private data class PanelsNavState<out MC : Any, out DC : Any, out EC : Any>(
    val panels: Panels<MC, DC, EC>,
) : NavState<Config<MC, DC, EC>> {
    override val children: List<ChildNavState<Config<MC, DC, EC>>> =
        listOfNotNull(
            SimpleChildNavState(
                configuration = Config.Main(panels.main),
                status = when {
                    panels.mode != ChildPanelsMode.SINGLE -> Status.RESUMED
                    (panels.details == null) && (panels.extra == null) -> Status.RESUMED
                    else -> Status.CREATED
                },
            ),
            panels.details?.let {
                SimpleChildNavState(
                    configuration = Config.Details(it),
                    status = when {
                        panels.mode == ChildPanelsMode.TRIPLE -> Status.RESUMED
                        panels.extra == null -> Status.RESUMED
                        else -> Status.CREATED
                    },
                )
            },
            panels.extra?.let {
                SimpleChildNavState(
                    configuration = Config.Extra(it),
                    status = Status.RESUMED,
                )
            },
        )
}
