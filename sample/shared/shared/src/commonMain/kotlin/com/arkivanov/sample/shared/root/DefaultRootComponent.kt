package com.arkivanov.sample.shared.root

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.router.stack.StackNavigation
import com.arkivanov.decompose.router.stack.childStack
import com.arkivanov.decompose.router.stack.pop
import com.arkivanov.decompose.router.stack.popTo
import com.arkivanov.decompose.router.stack.pushNew
import com.arkivanov.decompose.router.stack.webhistory.WebHistoryController
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.customnavigation.DefaultCustomNavigationComponent
import com.arkivanov.sample.shared.dynamicfeatures.DefaultDynamicFeaturesComponent
import com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.FeatureInstaller
import com.arkivanov.sample.shared.pages.DefaultPagesComponent
import com.arkivanov.sample.shared.root.RootComponent.Child
import com.arkivanov.sample.shared.root.RootComponent.Child.CustomNavigationChild
import com.arkivanov.sample.shared.root.RootComponent.Child.DynamicFeaturesChild
import com.arkivanov.sample.shared.root.RootComponent.Child.PagesChild
import com.arkivanov.sample.shared.root.RootComponent.Child.TabsChild
import com.arkivanov.sample.shared.sharedtransitions.DefaultSharedTransitionsComponent
import com.arkivanov.sample.shared.tabs.DefaultTabsComponent
import kotlinx.serialization.Serializable

@OptIn(ExperimentalDecomposeApi::class)
class DefaultRootComponent(
    componentContext: ComponentContext,
    private val featureInstaller: FeatureInstaller,
    deepLink: DeepLink = DeepLink.None,
    webHistoryController: WebHistoryController? = null,
) : RootComponent, ComponentContext by componentContext {

    private val nav = StackNavigation<Config>()

    private val _stack =
        childStack(
            source = nav,
            serializer = Config.serializer(),
            initialStack = { getInitialStack(webHistoryPaths = webHistoryController?.historyPaths, deepLink = deepLink) },
            childFactory = ::child,
        )

    override val stack: Value<ChildStack<*, Child>> = _stack

    init {
        webHistoryController?.attach(
            navigator = nav,
            serializer = Config.serializer(),
            stack = _stack,
            getPath = ::getPathForConfig,
            getConfiguration = ::getConfigForPath,
        )
    }

    private fun child(config: Config, componentContext: ComponentContext): Child =
        when (config) {
            is Config.Tabs ->
                TabsChild(
                    DefaultTabsComponent(
                        componentContext = componentContext,
                        onDynamicFeaturesItemSelected = { nav.pushNew(Config.DynamicFeatures) },
                        onCustomNavigationItemSelected = { nav.pushNew(Config.CustomNavigation) },
                        onPagesItemSelected = { nav.pushNew(Config.Pages) },
                        onSharedTransitionsItemSelected = { nav.pushNew(Config.SharedTransitions) },
                    )
                )

            is Config.DynamicFeatures ->
                DynamicFeaturesChild(
                    DefaultDynamicFeaturesComponent(
                        componentContext = componentContext,
                        featureInstaller = featureInstaller,
                        onFinished = nav::pop,
                    )
                )

            is Config.CustomNavigation ->
                CustomNavigationChild(
                    DefaultCustomNavigationComponent(
                        componentContext = componentContext,
                        onFinished = nav::pop,
                    )
                )

            is Config.Pages ->
                PagesChild(
                    DefaultPagesComponent(
                        componentContext = componentContext,
                        onFinished = nav::pop,
                    )
                )

            is Config.SharedTransitions ->
                Child.SharedTransitionsChild(
                    DefaultSharedTransitionsComponent(
                        componentContext = componentContext,
                        onFinished = nav::pop,
                    )
                )
        }

    override fun onBackClicked() {
        nav.pop()
    }

    override fun onBackClicked(toIndex: Int) {
        nav.popTo(index = toIndex)
    }

    private companion object {
        private const val WEB_PATH_DYNAMIC_FEATURES = "dynamic-features"
        private const val WEB_PATH_CUSTOM_NAVIGATION = "custom-navigation"
        private const val WEB_PATH_PAGES = "pages"
        private const val WEB_PATH_SHARED_TRANSITIONS = "shared-transitions"

        private fun getInitialStack(webHistoryPaths: List<String>?, deepLink: DeepLink): List<Config> =
            webHistoryPaths
                ?.takeUnless(List<*>::isEmpty)
                ?.map(::getConfigForPath)
                ?: getInitialStack(deepLink)

        private fun getInitialStack(deepLink: DeepLink): List<Config> =
            when (deepLink) {
                is DeepLink.None -> listOf(Config.Tabs)
                is DeepLink.Web -> listOf(Config.Tabs, getConfigForPath(deepLink.path)).distinct()
            }

        private fun getPathForConfig(config: Config): String =
            when (config) {
                Config.Tabs -> ""
                Config.DynamicFeatures -> "/$WEB_PATH_DYNAMIC_FEATURES"
                Config.CustomNavigation -> "/$WEB_PATH_CUSTOM_NAVIGATION"
                Config.Pages -> "/$WEB_PATH_PAGES"
                Config.SharedTransitions -> "/$WEB_PATH_SHARED_TRANSITIONS"
            }

        private fun getConfigForPath(path: String): Config =
            when (path.removePrefix("/")) {
                WEB_PATH_DYNAMIC_FEATURES -> Config.DynamicFeatures
                WEB_PATH_CUSTOM_NAVIGATION -> Config.CustomNavigation
                WEB_PATH_PAGES -> Config.Pages
                WEB_PATH_SHARED_TRANSITIONS -> Config.SharedTransitions
                else -> Config.Tabs
            }
    }

    @Serializable
    private sealed interface Config {
        @Serializable
        data object Tabs : Config

        @Serializable
        data object DynamicFeatures : Config

        @Serializable
        data object CustomNavigation : Config

        @Serializable
        data object Pages : Config

        @Serializable
        data object SharedTransitions : Config
    }

    sealed interface DeepLink {
        data object None : DeepLink
        class Web(val path: String) : DeepLink
    }
}
