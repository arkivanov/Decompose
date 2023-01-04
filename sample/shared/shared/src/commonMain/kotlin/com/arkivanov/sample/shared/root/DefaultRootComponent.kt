package com.arkivanov.sample.shared.root

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.router.stack.StackNavigation
import com.arkivanov.decompose.router.stack.bringToFront
import com.arkivanov.decompose.router.stack.childStack
import com.arkivanov.decompose.router.stack.webhistory.WebHistoryController
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.Parcelize
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

@OptIn(ExperimentalDecomposeApi::class)
class DefaultRootComponent constructor(
    componentContext: ComponentContext,
    private val featureInstaller: FeatureInstaller,
    deepLink: DeepLink = DeepLink.None,
    webHistoryController: WebHistoryController? = null,
) : RootComponent, ComponentContext by componentContext {

    private val navigation = StackNavigation<Config>()

    private val stack =
        childStack(
            source = navigation,
            initialStack = { getInitialStack(deepLink) },
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
            is Config.Counters -> CountersChild(DefaultCountersComponent(componentContext))
            is Config.MultiPane -> MultiPaneChild(DefaultMultiPaneComponent(componentContext))
            is Config.DynamicFeatures -> DynamicFeaturesChild(DefaultDynamicFeaturesComponent(componentContext, featureInstaller))
            is Config.CustomNavigation -> CustomNavigationChild(DefaultCustomNavigationComponent(componentContext))
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

    override fun onCustomNavigationTabClicked() {
        navigation.bringToFront(Config.CustomNavigation)
    }

    private companion object {
        private const val WEB_PATH_COUNTERS = "counters"
        private const val WEB_PATH_MULTI_PANE = "multi-pane"
        private const val WEB_PATH_DYNAMIC_FEATURES = "dynamic-features"
        private const val WEB_PATH_CUSTOM_NAVIGATION = "custom-navigation"

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
                Config.CustomNavigation -> "/$WEB_PATH_CUSTOM_NAVIGATION"
            }

        private fun getConfigForPath(path: String): Config =
            when (path.removePrefix("/")) {
                WEB_PATH_COUNTERS -> Config.Counters
                WEB_PATH_MULTI_PANE -> Config.MultiPane
                WEB_PATH_DYNAMIC_FEATURES -> Config.DynamicFeatures
                WEB_PATH_CUSTOM_NAVIGATION -> Config.CustomNavigation
                else -> Config.Counters
            }
    }

    private sealed interface Config : Parcelable {
        @Parcelize
        object Counters : Config {
            /**
             * Only required for state preservation on JVM/desktop via StateKeeper, as it uses Serializable.
             * Temporary workaround for https://youtrack.jetbrains.com/issue/KT-40218.
             */
            @Suppress("unused")
            private fun readResolve(): Any = Counters
        }

        @Parcelize
        object MultiPane : Config {
            /**
             * Only required for state preservation on JVM/desktop via StateKeeper, as it uses Serializable.
             * Temporary workaround for https://youtrack.jetbrains.com/issue/KT-40218.
             */
            @Suppress("unused")
            private fun readResolve(): Any = MultiPane
        }

        @Parcelize
        object DynamicFeatures : Config {
            /**
             * Only required for state preservation on JVM/desktop via StateKeeper, as it uses Serializable.
             * Temporary workaround for https://youtrack.jetbrains.com/issue/KT-40218.
             */
            @Suppress("unused")
            private fun readResolve(): Any = DynamicFeatures
        }

        @Parcelize
        object CustomNavigation : Config {
            /**
             * Only required for state preservation on JVM/desktop via StateKeeper, as it uses Serializable.
             * Temporary workaround for https://youtrack.jetbrains.com/issue/KT-40218.
             */
            @Suppress("unused")
            private fun readResolve(): Any = CustomNavigation
        }
    }

    sealed interface DeepLink {
        object None : DeepLink
        class Web(val path: String) : DeepLink
    }
}
