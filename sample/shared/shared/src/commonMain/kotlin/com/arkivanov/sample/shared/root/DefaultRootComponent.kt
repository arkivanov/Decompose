package com.arkivanov.sample.shared.root

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.router.stack.StackNavigation
import com.arkivanov.decompose.router.stack.childStack
import com.arkivanov.decompose.router.stack.childStackWebNavigation
import com.arkivanov.decompose.router.stack.pop
import com.arkivanov.decompose.router.stack.popTo
import com.arkivanov.decompose.router.stack.pushNew
import com.arkivanov.decompose.router.webhistory.WebNavigation
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.Url
import com.arkivanov.sample.shared.consumePathSegment
import com.arkivanov.sample.shared.customnavigation.DefaultCustomNavigationComponent
import com.arkivanov.sample.shared.dynamicfeatures.DefaultDynamicFeaturesComponent
import com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.FeatureInstaller
import com.arkivanov.sample.shared.pages.DefaultPagesComponent
import com.arkivanov.sample.shared.path
import com.arkivanov.sample.shared.pathSegmentOf
import com.arkivanov.sample.shared.root.RootComponent.Child
import com.arkivanov.sample.shared.root.RootComponent.Child.CustomNavigationChild
import com.arkivanov.sample.shared.root.RootComponent.Child.DynamicFeaturesChild
import com.arkivanov.sample.shared.root.RootComponent.Child.PagesChild
import com.arkivanov.sample.shared.root.RootComponent.Child.SharedTransitionsChild
import com.arkivanov.sample.shared.root.RootComponent.Child.TabsChild
import com.arkivanov.sample.shared.sharedtransitions.DefaultSharedTransitionsComponent
import com.arkivanov.sample.shared.tabs.DefaultTabsComponent
import kotlinx.serialization.Serializable

class DefaultRootComponent(
    componentContext: ComponentContext,
    private val featureInstaller: FeatureInstaller,
    deepLinkUrl: Url? = null,
) : RootComponent, ComponentContext by componentContext {

    private val nav = StackNavigation<Config>()

    private val _stack =
        childStack(
            source = nav,
            serializer = Config.serializer(),
            initialStack = { getInitialStack(deepLinkUrl) },
            childFactory = ::child,
        )

    override val stack: Value<ChildStack<*, Child>> = _stack

    @OptIn(ExperimentalDecomposeApi::class)
    override val webNavigation: WebNavigation<*> =
        childStackWebNavigation(
            navigator = nav,
            stack = _stack,
            serializer = Config.serializer(),
            pathMapper = { it.configuration.path() },
            childSelector = {
                when (val child = it.instance) {
                    is CustomNavigationChild -> null
                    is TabsChild -> child.component
                    is DynamicFeaturesChild -> null
                    is PagesChild -> child.component
                    is SharedTransitionsChild -> child.component
                }
            },
        )

    private fun child(config: Config, componentContext: ComponentContext): Child =
        when (config) {
            is Config.Tabs ->
                TabsChild(
                    DefaultTabsComponent(
                        componentContext = componentContext,
                        deepLinkUrl = config.deepLinkUrl,
                        onDynamicFeaturesItemSelected = { nav.pushNew(Config.DynamicFeatures) },
                        onCustomNavigationItemSelected = { nav.pushNew(Config.CustomNavigation) },
                        onPagesItemSelected = { nav.pushNew(Config.Pages()) },
                        onSharedTransitionsItemSelected = { nav.pushNew(Config.SharedTransitions()) },
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
                        deepLinkUrl = config.deepLinkUrl,
                        onFinished = nav::pop,
                    )
                )

            is Config.SharedTransitions ->
                SharedTransitionsChild(
                    DefaultSharedTransitionsComponent(
                        componentContext = componentContext,
                        deepLinkUrl = config.deepLinkUrl,
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

    private fun getInitialStack(deepLinkUrl: Url?): List<Config> {
        val (path, childUrl) = deepLinkUrl?.consumePathSegment() ?: return listOf(Config.Tabs())

        return when (path) {
            pathSegmentOf<Config.DynamicFeatures>() -> listOf(Config.Tabs(), Config.DynamicFeatures)
            pathSegmentOf<Config.CustomNavigation>() -> listOf(Config.Tabs(), Config.CustomNavigation)
            pathSegmentOf<Config.Pages>() -> listOf(Config.Tabs(), Config.Pages(deepLinkUrl = childUrl))
            pathSegmentOf<Config.SharedTransitions>() -> listOf(Config.Tabs(), Config.SharedTransitions(deepLinkUrl = childUrl))
            else -> listOf(Config.Tabs(deepLinkUrl = childUrl))
        }
    }

    @Serializable
    private sealed interface Config {
        @Serializable
        data class Tabs(val deepLinkUrl: Url? = null) : Config

        @Serializable
        data object DynamicFeatures : Config

        @Serializable
        data object CustomNavigation : Config

        @Serializable
        data class Pages(val deepLinkUrl: Url? = null) : Config

        @Serializable
        data class SharedTransitions(val deepLinkUrl: Url? = null) : Config
    }
}
