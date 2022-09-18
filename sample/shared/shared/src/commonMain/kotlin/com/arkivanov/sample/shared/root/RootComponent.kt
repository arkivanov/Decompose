package com.arkivanov.sample.shared.root

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.router.stack.StackNavigation
import com.arkivanov.decompose.router.stack.bringToFront
import com.arkivanov.decompose.router.stack.childStack
import com.arkivanov.decompose.router.stack.webhistory.WebHistoryController
import com.arkivanov.decompose.value.ReqValue
import com.arkivanov.decompose.value.asRequired
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.Parcelize
import com.arkivanov.sample.shared.counters.CountersComponent
import com.arkivanov.sample.shared.dynamicfeatures.DynamicFeaturesComponent
import com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.FeatureInstaller
import com.arkivanov.sample.shared.multipane.MultiPaneComponent
import com.arkivanov.sample.shared.root.Root.Child
import com.arkivanov.sample.shared.root.Root.Child.CountersChild
import com.arkivanov.sample.shared.root.Root.Child.DynamicFeaturesChild
import com.arkivanov.sample.shared.root.Root.Child.MultiPaneChild

@OptIn(ExperimentalDecomposeApi::class)
class RootComponent constructor(
    componentContext: ComponentContext,
    private val featureInstaller: FeatureInstaller,
    deepLink: DeepLink = DeepLink.None,
    webHistoryController: WebHistoryController? = null,
) : Root, ComponentContext by componentContext {

    private val navigation = StackNavigation<Config>()

    private val stack =
        childStack(
            source = navigation,
            initialStack = { getInitialStack(deepLink) },
            childFactory = ::child,
        )

    override val childStack: ReqValue<ChildStack<*, Child>> = stack.asRequired()

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
            is Config.Counters -> CountersChild(CountersComponent(componentContext))
            is Config.MultiPane -> MultiPaneChild(MultiPaneComponent(componentContext))
            is Config.DynamicFeatures -> DynamicFeaturesChild(DynamicFeaturesComponent(componentContext, featureInstaller))
        }

    override fun onCountersTabClicked() {
        navigation.bringToFront(Config.Counters)
    }

    override fun onMultiPaneTabClicked() {
        navigation.bringToFront(Config.MultiPane)
    }

    override fun onDynamicFeaturesTabClicked() {
        navigation.bringToFront(Config.DynamicFeatures)
    }

    private companion object {
        private const val WEB_PATH_COUNTERS = "counters"
        private const val WEB_PATH_MULTI_PANE = "multi-pane"
        private const val WEB_PATH_DYNAMIC_FEATURES = "dynamic-features"

        private fun getInitialStack(deepLink: DeepLink): List<Config> =
            when (deepLink) {
                is DeepLink.None -> listOf(Config.Counters)
                is DeepLink.Web -> listOf(getConfigForPath(deepLink.path))
            }

        private fun getPathForConfig(config: Config): String =
            when (config) {
                Config.Counters -> "/$WEB_PATH_COUNTERS"
                Config.MultiPane -> "/$WEB_PATH_MULTI_PANE"
                Config.DynamicFeatures -> "/$WEB_PATH_DYNAMIC_FEATURES"
            }

        private fun getConfigForPath(path: String): Config =
            when (path.removePrefix("/")) {
                WEB_PATH_COUNTERS -> Config.Counters
                WEB_PATH_MULTI_PANE -> Config.MultiPane
                WEB_PATH_DYNAMIC_FEATURES -> Config.DynamicFeatures
                else -> Config.Counters
            }
    }

    private sealed interface Config : Parcelable {
        @Parcelize
        object Counters : Config

        @Parcelize
        object MultiPane : Config

        @Parcelize
        object DynamicFeatures : Config
    }

    sealed interface DeepLink {
        object None : DeepLink
        class Web(val path: String) : DeepLink
    }
}
