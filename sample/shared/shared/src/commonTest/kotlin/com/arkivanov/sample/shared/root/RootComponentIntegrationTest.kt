package com.arkivanov.sample.shared.root

import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.router.stack.active
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.TestFeatureInstaller
import com.arkivanov.sample.shared.root.DefaultRootComponent.*
import com.arkivanov.sample.shared.root.RootComponent.Child.CountersChild
import com.arkivanov.sample.shared.root.RootComponent.Child.CustomNavigationChild
import com.arkivanov.sample.shared.root.RootComponent.Child.DynamicFeaturesChild
import com.arkivanov.sample.shared.root.RootComponent.Child.MultiPaneChild
import kotlin.test.Test
import kotlin.test.assertSame
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class RootComponentIntegrationTest {

    private lateinit var component: RootComponent
    private val activeChild get() = component.childStack.active.instance

    @Test
    fun WHEN_create_THEN_CountersChild_active() {
        createComponent()

        assertTrue(activeChild is CountersChild)
    }

    @Test
    fun WHEN_onMultiPaneTabClicked_THEN_MultiPaneChild_active() {
        createComponent()

        component.onMultiPaneTabClicked()

        assertTrue(activeChild is MultiPaneChild)
    }

    @Test
    fun WHEN_onDynamicFeaturesTabClicked_THEN_DynamicFeaturesChild_active() {
        createComponent()

        component.onDynamicFeaturesTabClicked()

        assertTrue(activeChild is DynamicFeaturesChild)
    }

    @Test
    fun WHEN_onCustomNavigationTabClicked_THEN_CustomNavigationChild_active() {
        createComponent()

        component.onCustomNavigationTabClicked()

        assertTrue(activeChild is CustomNavigationChild)
    }

    @Test
    fun WHEN_tab_reopened_THEN_same_instance_active() {
        createComponent()
        val instance = activeChild
        component.onCustomNavigationTabClicked()

        component.onCountersTabClicked()

        assertSame(instance, activeChild)
    }

    @Test
    fun WHEN_created_with_deeplink_counters_THEN_CountersChild_active() {
        createComponent(deepLink = DeepLink.Web(path = "/counters"))

        assertTrue(activeChild is CountersChild)
    }

    @Test
    fun WHEN_created_with_deeplink_Web_MultiPane_THEN_MultiPaneChild_active() {
        createComponent(deepLink = DeepLink.Web(path = "/multi-pane"))

        assertTrue(activeChild is MultiPaneChild)
    }

    @Test
    fun WHEN_created_with_deeplink_Web_DynamicFeatures_THEN_DynamicFeaturesChild_active() {
        createComponent(deepLink = DeepLink.Web(path = "/dynamic-features"))

        assertTrue(activeChild is DynamicFeaturesChild)
    }

    @Test
    fun WHEN_created_with_deeplink_Web_CustomNavigationChild_THEN_CustomNavigationChild_active() {
        createComponent(deepLink = DeepLink.Web(path = "/custom-navigation"))

        assertTrue(activeChild is CustomNavigationChild)
    }

    private fun createComponent(
        deepLink: DeepLink = DeepLink.None,
    ) {
        component =
            DefaultRootComponent(
                componentContext = DefaultComponentContext(lifecycle = LifecycleRegistry()),
                featureInstaller = TestFeatureInstaller(),
                deepLink = deepLink,
            )
    }
}
