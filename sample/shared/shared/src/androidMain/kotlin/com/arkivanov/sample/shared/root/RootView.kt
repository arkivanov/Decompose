package com.arkivanov.sample.shared.root

import android.view.View
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.android.ViewContext
import com.arkivanov.decompose.extensions.android.layoutInflater
import com.arkivanov.decompose.extensions.android.stack.StackRouterView
import com.arkivanov.decompose.value.observe
import com.arkivanov.sample.shared.R
import com.arkivanov.sample.shared.counters.CountersView
import com.arkivanov.sample.shared.root.RootComponent.Child.*
import com.google.android.material.bottomnavigation.BottomNavigationView

@ExperimentalDecomposeApi
@Suppress("FunctionName") // Factory function
fun ViewContext.RootView(component: RootComponent): View {
    val layout = layoutInflater.inflate(R.layout.root, parent, false)
    val router: StackRouterView = layout.findViewById(R.id.router)

    router.children(component.childStack, lifecycle) { parent, child, _ ->
        parent.removeAllViews()

        parent.addView(
            when (child) {
                is CountersChild -> CountersView(child.component)
                is MultiPaneChild,
                is DynamicFeaturesChild,
                is CustomNavigationChild -> NotImplementedView()
            }
        )
    }

    val navigationView: BottomNavigationView = layout.findViewById(R.id.navigation_view)

    val listener =
        BottomNavigationView.OnNavigationItemSelectedListener { item ->
            when (val id = item.itemId) {
                R.id.tab_counters -> component.onCountersTabClicked()
                R.id.tab_multipane -> component.onMultiPaneTabClicked()
                R.id.tab_dynamic_features -> component.onDynamicFeaturesTabClicked()
                R.id.tab_custom_navigation -> component.onCustomNavigationTabClicked()
                else -> error("Unrecognized item id: $id")
            }

            true
        }

    navigationView.setOnNavigationItemSelectedListener(listener)

    component.childStack.observe(lifecycle) { state ->
        navigationView.setOnNavigationItemSelectedListener(null)

        navigationView.selectedItemId =
            when (state.active.instance) {
                is CountersChild -> R.id.tab_counters
                is MultiPaneChild -> R.id.tab_multipane
                is DynamicFeaturesChild -> R.id.tab_dynamic_features
                is CustomNavigationChild -> R.id.tab_custom_navigation
            }

        navigationView.setOnNavigationItemSelectedListener(listener)
    }

    return layout
}
