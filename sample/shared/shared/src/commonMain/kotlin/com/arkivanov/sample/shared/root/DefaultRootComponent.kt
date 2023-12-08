package com.arkivanov.sample.shared.root

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.router.stack.StackNavigation
import com.arkivanov.decompose.router.stack.bringToFront
import com.arkivanov.decompose.router.stack.childStack
import com.arkivanov.decompose.router.stack.webhistory.WebHistoryController
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.cards.DefaultCardsComponent
import com.arkivanov.sample.shared.counters.DefaultCountersComponent
import com.arkivanov.sample.shared.customnavigation.DefaultCustomNavigationComponent
import com.arkivanov.sample.shared.dynamicfeatures.DefaultDynamicFeaturesComponent
import com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.FeatureInstaller
import com.arkivanov.sample.shared.multipane.DefaultMultiPaneComponent
import com.arkivanov.sample.shared.root.RootComponent.Child
import com.arkivanov.sample.shared.root.RootComponent.Child.CountersChild
import com.arkivanov.sample.shared.root.RootComponent.Child.CustomNavigationChild
import com.arkivanov.sample.shared.root.RootComponent.Child.DynamicFeaturesChild
import com.arkivanov.sample.shared.root.RootComponent.Child.MultiPaneChild
import kotlinx.serialization.Serializable

@OptIn(ExperimentalDecomposeApi::class)
class DefaultRootComponent(
    componentContext: ComponentContext,
    private val featureInstaller: FeatureInstaller,
    deepLink: DeepLink = DeepLink.None,
    webHistoryController: WebHistoryController? = null,
) : RootComponent, ComponentContext by componentContext {

    private val navigation = StackNavigation<Config>()

    private val stack =
        childStack(
            source = navigation,
            serializer = Config.serializer(),
            initialStack = { getInitialStack(webHistoryPaths = webHistoryController?.historyPaths, deepLink = deepLink) },
            childFactory = ::child,
        )

    override val childStack: Value<ChildStack<*, Child>> = stack

    init {
        webHistoryController?.attach(
            navigator = navigation,
            stack = stack,
            getPath = ::getPathForConfig,
            getConfiguration = ::getConfigForPath,
        )
    }

    private fun child(config: Config, componentContext: ComponentContext): Child =
        when (config) {
            Config.COUNTERS -> CountersChild(DefaultCountersComponent(componentContext))
            Config.CARDS -> Child.CardsChild(DefaultCardsComponent(componentContext))
            Config.MULTI_PANE -> MultiPaneChild(DefaultMultiPaneComponent(componentContext))
            Config.DYNAMIC_FEATURES -> DynamicFeaturesChild(DefaultDynamicFeaturesComponent(componentContext, featureInstaller))
            Config.CUSTOM_NAVIGATION -> CustomNavigationChild(DefaultCustomNavigationComponent(componentContext))
        }

    override fun onCountersTabClicked() {
        navigation.bringToFront(Config.COUNTERS)
    }

    override fun onCardsTabClicked() {
        navigation.bringToFront(Config.CARDS)
    }

    override fun onMultiPaneTabClicked() {
        navigation.bringToFront(Config.MULTI_PANE)
    }

    override fun onDynamicFeaturesTabClicked() {
        navigation.bringToFront(Config.DYNAMIC_FEATURES)
    }

    override fun onCustomNavigationTabClicked() {
        navigation.bringToFront(Config.CUSTOM_NAVIGATION)
    }

    private companion object {
        private const val WEB_PATH_COUNTERS = "counters"
        private const val WEB_PATH_CARDS = "cards"
        private const val WEB_PATH_MULTI_PANE = "multi-pane"
        private const val WEB_PATH_DYNAMIC_FEATURES = "dynamic-features"
        private const val WEB_PATH_CUSTOM_NAVIGATION = "custom-navigation"

        private fun getInitialStack(webHistoryPaths: List<String>?, deepLink: DeepLink): List<Config> =
            webHistoryPaths
                ?.takeUnless(List<*>::isEmpty)
                ?.map(::getConfigForPath)
                ?: getInitialStack(deepLink)

        private fun getInitialStack(deepLink: DeepLink): List<Config> =
            when (deepLink) {
                is DeepLink.None -> listOf(Config.COUNTERS)
                is DeepLink.Web -> listOf(getConfigForPath(deepLink.path))
            }

        private fun getPathForConfig(config: Config): String =
            when (config) {
                Config.COUNTERS -> "/$WEB_PATH_COUNTERS"
                Config.CARDS -> "/$WEB_PATH_CARDS"
                Config.MULTI_PANE -> "/$WEB_PATH_MULTI_PANE"
                Config.DYNAMIC_FEATURES -> "/$WEB_PATH_DYNAMIC_FEATURES"
                Config.CUSTOM_NAVIGATION -> "/$WEB_PATH_CUSTOM_NAVIGATION"
            }

        private fun getConfigForPath(path: String): Config =
            when (path.removePrefix("/")) {
                WEB_PATH_COUNTERS -> Config.COUNTERS
                WEB_PATH_CARDS -> Config.CARDS
                WEB_PATH_MULTI_PANE -> Config.MULTI_PANE
                WEB_PATH_DYNAMIC_FEATURES -> Config.DYNAMIC_FEATURES
                WEB_PATH_CUSTOM_NAVIGATION -> Config.CUSTOM_NAVIGATION
                else -> Config.COUNTERS
            }
    }

    @Serializable
    private enum class Config {
        COUNTERS,
        CARDS,
        MULTI_PANE,
        DYNAMIC_FEATURES,
        CUSTOM_NAVIGATION,
    }

    sealed interface DeepLink {
        data object None : DeepLink
        class Web(val path: String) : DeepLink
    }
}
