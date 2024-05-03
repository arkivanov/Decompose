package com.arkivanov.sample.shared.tabs

import android.view.View
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.android.ViewContext
import com.arkivanov.decompose.extensions.android.layoutInflater
import com.arkivanov.decompose.extensions.android.stack.StackRouterView
import com.arkivanov.decompose.value.subscribe
import com.arkivanov.sample.shared.FadeTransition
import com.arkivanov.sample.shared.R
import com.arkivanov.sample.shared.counters.CountersView
import com.arkivanov.sample.shared.root.NotImplementedView
import com.arkivanov.sample.shared.tabs.TabsComponent.Child
import com.arkivanov.sample.shared.tabs.TabsComponent.Child.CardsChild
import com.arkivanov.sample.shared.tabs.TabsComponent.Child.CountersChild
import com.arkivanov.sample.shared.tabs.TabsComponent.Child.MenuChild
import com.arkivanov.sample.shared.tabs.TabsComponent.Child.MultiPaneChild
import com.arkivanov.sample.shared.viewSwitcher
import com.google.android.material.bottomnavigation.BottomNavigationView

@ExperimentalDecomposeApi
@Suppress("FunctionName") // Factory function
fun ViewContext.TabsView(component: TabsComponent): View {
    val layout = layoutInflater.inflate(R.layout.tabs, parent, false)
    val router: StackRouterView = layout.findViewById(R.id.router)

    router.children(
        stack = component.stack,
        lifecycle = lifecycle,
        replaceChildView = viewSwitcher(transition = FadeTransition) { child ->
            when (child) {
                is MenuChild -> NotImplementedView(title = "Decompose Sample")
                is CountersChild -> CountersView(child.component)

                is CardsChild -> NotImplementedView(title = "Cards")
                is MultiPaneChild -> NotImplementedView(title = "Multi-Pane Layout")
            }
        },
    )

    val navigationView: BottomNavigationView = layout.findViewById(R.id.navigation_view)

    val listener =
        BottomNavigationView.OnNavigationItemSelectedListener { item ->
            when (val id = item.itemId) {
                R.id.tab_menu -> component.onMenuTabClicked()
                R.id.tab_counters -> component.onCountersTabClicked()
                R.id.tab_cards -> component.onCardsTabClicked()
                R.id.tab_multipane -> component.onMultiPaneTabClicked()
                else -> error("Unrecognized item id: $id")
            }

            true
        }

    navigationView.setOnNavigationItemSelectedListener(listener)

    component.stack.subscribe(lifecycle) { state ->
        navigationView.setOnNavigationItemSelectedListener(null)

        navigationView.selectedItemId =
            when (state.active.instance) {
                is MenuChild -> R.id.tab_menu
                is CountersChild -> R.id.tab_counters
                is CardsChild -> R.id.tab_cards
                is MultiPaneChild -> R.id.tab_multipane
            }

        navigationView.setOnNavigationItemSelectedListener(listener)
    }

    return layout
}

private val Child.index: Int
    get() =
        when (this) {
            is MenuChild -> 0
            is CountersChild -> 1
            is CardsChild -> 2
            is MultiPaneChild -> 3
        }
