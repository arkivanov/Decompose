package com.arkivanov.decompose.router.panels

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.pages.PagesNavigator
import com.arkivanov.decompose.router.webhistory.WebNavigation
import com.arkivanov.decompose.router.webhistory.WebNavigation.HistoryItem
import com.arkivanov.decompose.router.webhistory.WebNavigationOwner
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.operator.map
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.KSerializer
import kotlinx.serialization.Serializable
import kotlinx.serialization.builtins.NothingSerializer

/**
 * Creates and returns an implementation of [WebNavigation] attached
 * to the provided [navigator] and [panels]. The navigation observes panel
 * changes and manipulates the browser history to match the state. It also
 * observes the browser history changes and navigates the panels as needed.
 *
 * This function overload is for Child Panels with just two panels: Main and
 * Details. For Child Panels with all three panels, use the other overload.
 *
 * The navigation replaces the current entry of the browser history when the
 * [ChildPanels] state changes. Multiple entries can still be pushed/popped
 * to/from the browser history at the same time if required to follow the nested
 * navigation.
 *
 * @param navigator a [PagesNavigator] that should be used for navigation when
 * the user presses the browser back and forward buttons.
 * @param panels an observable [ChildPanels] that should be bound to the browser
 * navigation history.
 * @param serializers a [Pair] of [KSerializer] (Main [MC] and Details [DC]) to be
 * used for serializing and deserializing configurations.
 * @param pathMapper an optional function that returns a part of the URL path for
 * the provided [ChildPanels], or `null` (or empty string) if the path shouldn't be
 * affected. The resulting URL path is constructed by concatenating all URL parts
 * from every parent and child navigation, top to bottom. Default return value is `null`.
 * @param parametersMapper an optional function that returns a [Map] containing all
 * required URL parameters for the provided [ChildPanels], or `null` (or empty Map)
 * if parameters are not required The resulting URL parameters string is constructed
 * by merging all URL parameters from every parent and child navigation. Default
 * return value is `null`.
 * @param onBeforeNavigate an optional callback that can be used to allow (by
 * returning `true`) or deny (by returning `false`) the browser-initiated navigation.
 * Can be used e.g. to display an alert dialog before closing a screen. Returns `true`
 * by default.
 * @param childSelector an optional function that selects and returns a child
 * [WebNavigationOwner] for the provided [ChildPanels].
 */
@ExperimentalSerializationApi
@ExperimentalDecomposeApi
fun <MC : Any, MT : Any, DC : Any, DT : Any> childPanelsWebNavigation(
    navigator: PanelsNavigator<MC, DC, Nothing>,
    panels: Value<ChildPanels<MC, MT, DC, DT, Nothing, Nothing>>,
    serializers: Pair<KSerializer<MC>, KSerializer<DC>>,
    pathMapper: (ChildPanels<MC, MT, DC, DT, Nothing, Nothing>) -> String? = { null },
    parametersMapper: (ChildPanels<MC, MT, DC, DT, Nothing, Nothing>) -> Map<String, String>? = { null },
    onBeforeNavigate: () -> Boolean = { true },
    childSelector: (ChildPanels<MC, MT, DC, DT, Nothing, Nothing>) -> WebNavigationOwner? = { null },
): WebNavigation<*> =
    childPanelsWebNavigation(
        navigator = navigator,
        panels = panels,
        serializers = Triple(serializers.first, serializers.second, NothingSerializer()),
        pathMapper = pathMapper,
        parametersMapper = parametersMapper,
        onBeforeNavigate = onBeforeNavigate,
        childSelector = childSelector,
    )

/**
 * Creates and returns an implementation of [WebNavigation] attached
 * to the provided [navigator] and [panels]. The navigation observes panel
 * changes and manipulates the browser history to match the state. It also
 * observes the browser history changes and navigates the panels as needed.
 *
 * This function overload is for Child Panels with all three panels: Main and
 * Details. For Child Panels with just two panels, use the other overload.
 *
 * The navigation replaces the current entry of the browser history when the
 * [ChildPanels] state changes. Multiple entries can still be pushed/popped
 * to/from the browser history at the same time if required to follow the nested
 * navigation.
 *
 * @param navigator a [PagesNavigator] that should be used for navigation when
 * the user presses the browser back and forward buttons.
 * @param panels an observable [ChildPanels] that should be bound to the browser
 * navigation history.
 * @param serializers a [Triple] of [KSerializer] (Main [MC], Details [DC] and
 * Extra [EC]) to be used for serializing and deserializing configurations.
 * @param pathMapper an optional function that returns a part of the URL path for
 * the provided [ChildPanels], or `null` (or empty string) if the path shouldn't be
 * affected. The resulting URL path is constructed by concatenating all URL parts
 * from every parent and child navigation, top to bottom. Default return value is `null`.
 * @param parametersMapper an optional function that returns a [Map] containing all
 * required URL parameters for the provided [ChildPanels], or `null` (or empty Map)
 * if parameters are not required The resulting URL parameters string is constructed
 * by merging all URL parameters from every parent and child navigation. Default
 * return value is `null`.
 * @param onBeforeNavigate an optional callback that can be used to allow (by
 * returning `true`) or deny (by returning `false`) the browser-initiated navigation.
 * Can be used e.g. to display an alert dialog before closing a screen. Returns `true`
 * by default.
 * @param childSelector an optional function that selects and returns a child
 * [WebNavigationOwner] for the provided [ChildPanels].
 */
@ExperimentalDecomposeApi
fun <MC : Any, MT : Any, DC : Any, DT : Any, EC : Any, ET : Any> childPanelsWebNavigation(
    navigator: PanelsNavigator<MC, DC, EC>,
    panels: Value<ChildPanels<MC, MT, DC, DT, EC, ET>>,
    serializers: Triple<KSerializer<MC>, KSerializer<DC>, KSerializer<EC>>,
    pathMapper: (ChildPanels<MC, MT, DC, DT, EC, ET>) -> String? = { null },
    parametersMapper: (ChildPanels<MC, MT, DC, DT, EC, ET>) -> Map<String, String>? = { null },
    onBeforeNavigate: () -> Boolean = { true },
    childSelector: (ChildPanels<MC, MT, DC, DT, EC, ET>) -> WebNavigationOwner? = { null },
): WebNavigation<*> =
    PanelsWebNavigation(
        navigator = navigator,
        panels = panels,
        mainSerializer = serializers.first,
        detailsSerializer = serializers.second,
        extraSerializer = serializers.third,
        pathMapper = pathMapper,
        parametersMapper = parametersMapper,
        onBeforeNavigate = onBeforeNavigate,
        childSelector = childSelector,
    )

private class PanelsWebNavigation<MC : Any, out MT : Any, DC : Any, out DT : Any, EC : Any, out ET : Any>(
    private val navigator: PanelsNavigator<MC, DC, EC>,
    panels: Value<ChildPanels<MC, MT, DC, DT, EC, ET>>,
    mainSerializer: KSerializer<MC>,
    detailsSerializer: KSerializer<DC>,
    extraSerializer: KSerializer<EC>,
    private val pathMapper: (ChildPanels<MC, MT, DC, DT, EC, ET>) -> String?,
    private val parametersMapper: (ChildPanels<MC, MT, DC, DT, EC, ET>) -> Map<String, String>?,
    private val onBeforeNavigate: () -> Boolean,
    private val childSelector: (ChildPanels<MC, MT, DC, DT, EC, ET>) -> WebNavigationOwner?,
) : WebNavigation<PanelsWebNavigation.HistoryItemKey<MC, DC, EC>> {

    override val serializer: KSerializer<HistoryItemKey<MC, DC, EC>> =
        HistoryItemKey.serializer(mainSerializer, detailsSerializer, extraSerializer)

    override val history: Value<List<HistoryItem<HistoryItemKey<MC, DC, EC>>>> =
        panels.map { panels ->
            listOf(
                HistoryItem(
                    path = pathMapper(panels) ?: "",
                    parameters = parametersMapper(panels) ?: emptyMap(),
                    key = HistoryItemKey(
                        main = panels.main.configuration,
                        extra = panels.extra?.configuration,
                        details = panels.details?.configuration,
                    ),
                    child = childSelector(panels),
                ),
            )
        }

    override fun onBeforeNavigate(): Boolean =
        onBeforeNavigate.invoke()

    override fun navigate(history: List<HistoryItemKey<MC, DC, EC>>) {
        val data = history.single()
        navigator.navigate(main = data.main, details = data.details, extra = data.extra)
    }

    @Serializable
    data class HistoryItemKey<out MC : Any, out DC : Any, out EC : Any>(
        val main: MC,
        val details: DC?,
        val extra: EC?,
    )
}
