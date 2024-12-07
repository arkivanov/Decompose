package com.arkivanov.sample.shared.root

import com.arkivanov.sample.shared.Url
import com.arkivanov.sample.shared.assertActiveInstance
import com.arkivanov.sample.shared.createComponent
import com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.TestFeatureInstaller
import com.arkivanov.sample.shared.root.RootComponent.Child.CustomNavigationChild
import com.arkivanov.sample.shared.root.RootComponent.Child.DynamicFeaturesChild
import com.arkivanov.sample.shared.root.RootComponent.Child.PagesChild
import com.arkivanov.sample.shared.root.RootComponent.Child.TabsChild
import kotlin.test.Test

@Suppress("TestFunctionName")
class RootComponentIntegrationTest {

    @Test
    fun WHEN_created_with_deeplink_empty_THEN_TabsChild_active() {
        val component = createComponent(deepLink = Url(url = "https://example.com"))

        component.stack.assertActiveInstance<TabsChild>()
    }

    @Test
    fun WHEN_created_with_deeplink_unrecognized_THEN_TabsChild_active() {
        val component = createComponent(deepLink = Url(url = "https://example.com/xyz"))

        component.stack.assertActiveInstance<TabsChild>()
    }

    @Test
    fun WHEN_created_with_deeplink_DynamicFeatures_THEN_DynamicFeaturesChild_active() {
        val component = createComponent(deepLink = Url(url = "https://example.com/dynamic_features"))

        component.stack.assertActiveInstance<DynamicFeaturesChild>()
    }

    @Test
    fun WHEN_created_with_deeplink_CustomNavigationChild_THEN_CustomNavigationChild_active() {
        val component = createComponent(deepLink = Url(url = "https://example.com/custom_navigation"))

        component.stack.assertActiveInstance<CustomNavigationChild>()
    }

    @Test
    fun WHEN_created_with_deeplink_PagesChild_THEN_PagesChild_active() {
        val component = createComponent(deepLink = Url(url = "https://example.com/pages"))

        component.stack.assertActiveInstance<PagesChild>()
    }

    private fun createComponent(
        deepLink: Url? = null,
    ): RootComponent =
        createComponent { componentContext ->
            DefaultRootComponent(
                componentContext = componentContext,
                featureInstaller = TestFeatureInstaller(),
                deepLinkUrl = deepLink,
            )
        }
}
