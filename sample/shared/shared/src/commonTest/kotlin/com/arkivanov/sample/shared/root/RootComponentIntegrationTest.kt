package com.arkivanov.sample.shared.root

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.sample.shared.assertActiveInstance
import com.arkivanov.sample.shared.createComponent
import com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.TestFeatureInstaller
import com.arkivanov.sample.shared.root.DefaultRootComponent.DeepLink
import com.arkivanov.sample.shared.root.RootComponent.Child.CustomNavigationChild
import com.arkivanov.sample.shared.root.RootComponent.Child.DynamicFeaturesChild
import com.arkivanov.sample.shared.root.RootComponent.Child.PagesChild
import com.arkivanov.sample.shared.root.RootComponent.Child.TabsChild
import kotlin.test.Test

@Suppress("TestFunctionName")
class RootComponentIntegrationTest {

    @Test
    fun WHEN_created_with_deeplink_Web_empty_THEN_TabsChild_active() {
        val component = createComponent(deepLink = DeepLink.Web(path = ""))

        component.stack.assertActiveInstance<TabsChild>()
    }

    @Test
    fun WHEN_created_with_deeplink_Web_unrecognized_THEN_TabsChild_active() {
        val component = createComponent(deepLink = DeepLink.Web(path = "/xyz"))

        component.stack.assertActiveInstance<TabsChild>()
    }

    @Test
    fun WHEN_created_with_deeplink_Web_DynamicFeatures_THEN_DynamicFeaturesChild_active() {
        val component = createComponent(deepLink = DeepLink.Web(path = "/dynamic-features"))

        component.stack.assertActiveInstance<DynamicFeaturesChild>()
    }

    @Test
    fun WHEN_created_with_deeplink_Web_CustomNavigationChild_THEN_CustomNavigationChild_active() {
        val component = createComponent(deepLink = DeepLink.Web(path = "/custom-navigation"))

        component.stack.assertActiveInstance<CustomNavigationChild>()
    }

    @Test
    fun WHEN_created_with_deeplink_Web_PagesChild_THEN_PagesChild_active() {
        val component = createComponent(deepLink = DeepLink.Web(path = "/pages"))

        component.stack.assertActiveInstance<PagesChild>()
    }

    @OptIn(ExperimentalDecomposeApi::class)
    private fun createComponent(
        deepLink: DeepLink = DeepLink.None,
    ): RootComponent =
        createComponent { componentContext ->
            DefaultRootComponent(
                componentContext = componentContext,
                featureInstaller = TestFeatureInstaller(),
                deepLink = deepLink,
            )
        }
}
