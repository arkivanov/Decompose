package com.arkivanov.sample.shared.tabs

import com.arkivanov.decompose.router.stack.active
import com.arkivanov.sample.shared.activeInstance
import com.arkivanov.sample.shared.assertActiveInstance
import com.arkivanov.sample.shared.createComponent
import com.arkivanov.sample.shared.tabs.TabsComponent.Child.CardsChild
import com.arkivanov.sample.shared.tabs.TabsComponent.Child.CountersChild
import com.arkivanov.sample.shared.tabs.TabsComponent.Child.MenuChild
import com.arkivanov.sample.shared.tabs.TabsComponent.Child.MultiPaneChild
import kotlin.test.Test
import kotlin.test.assertSame
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class TabsComponentIntegrationTest {

    @Test
    fun WHEN_create_THEN_MenuChild_active() {
        val component = createComponent()

        component.stack.assertActiveInstance<MenuChild>()
    }

    @Test
    fun WHEN_Dynamic_Features_menu_item_clicked_THEN_onDynamicFeaturesItemSelected_called() {
        var isCalled = false
        val component = createComponent(onDynamicFeaturesItemSelected = { isCalled = true })

        component.stack.activeInstance<MenuChild>().component.onDynamicFeaturesItemSelected()

        assertTrue(isCalled)
    }

    @Test
    fun WHEN_Custom_Navigation_menu_item_clicked_THEN_onCustomNavigationItemSelected_called() {
        var isCalled = false
        val component = createComponent(onCustomNavigationItemSelected = { isCalled = true })

        component.stack.activeInstance<MenuChild>().component.onCustomNavigationItemSelected()

        assertTrue(isCalled)
    }

    @Test
    fun WHEN_Pages_menu_item_clicked_THEN_onPagesItemSelected_called() {
        var isCalled = false
        val component = createComponent(onPagesItemSelected = { isCalled = true })

        component.stack.activeInstance<MenuChild>().component.onPagesItemSelected()

        assertTrue(isCalled)
    }

    @Test
    fun WHEN_SharedTransitions_menu_item_clicked_THEN_onSharedTransitionsItemSelected_called() {
        var isCalled = false
        val component = createComponent(onSharedTransitionsItemSelected = { isCalled = true })

        component.stack.activeInstance<MenuChild>().component.onSharedTransitionsItemSelected()

        assertTrue(isCalled)
    }

    @Test
    fun WHEN_onCountersTabClicked_THEN_CountersTab_active() {
        val component = createComponent()

        component.onCountersTabClicked()

        component.stack.assertActiveInstance<CountersChild>()
    }

    @Test
    fun WHEN_onCardsTabClicked_THEN_CardsTab_active() {
        val component = createComponent()

        component.onCardsTabClicked()

        component.stack.assertActiveInstance<CardsChild>()
    }

    @Test
    fun WHEN_onMultiPaneTabClicked_THEN_MultiPaneChild_active() {
        val component = createComponent()

        component.onMultiPaneTabClicked()

        component.stack.assertActiveInstance<MultiPaneChild>()
    }

    @Test
    fun WHEN_tab_reopened_THEN_same_instance_active() {
        val component = createComponent()
        val instance = component.stack.active.instance
        component.onCountersTabClicked()

        component.onMenuTabClicked()

        assertSame(instance, component.stack.active.instance)
    }

    private fun createComponent(
        onDynamicFeaturesItemSelected: () -> Unit = {},
        onCustomNavigationItemSelected: () -> Unit = {},
        onPagesItemSelected: () -> Unit = {},
        onSharedTransitionsItemSelected: () -> Unit = {},
    ): DefaultTabsComponent =
        createComponent { componentContext ->
            DefaultTabsComponent(
                componentContext = componentContext,
                deepLinkUrl = null,
                onDynamicFeaturesItemSelected = onDynamicFeaturesItemSelected,
                onCustomNavigationItemSelected = onCustomNavigationItemSelected,
                onPagesItemSelected = onPagesItemSelected,
                onSharedTransitionsItemSelected = onSharedTransitionsItemSelected,
            )
        }
}
