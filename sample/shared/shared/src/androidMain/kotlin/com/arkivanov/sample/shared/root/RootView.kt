package com.arkivanov.sample.shared.root

import android.view.View
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.android.RouterView
import com.arkivanov.decompose.extensions.android.ViewContext
import com.arkivanov.decompose.extensions.android.layoutInflater
import com.arkivanov.decompose.value.observe
import com.arkivanov.sample.shared.R
import com.arkivanov.sample.shared.counters.CountersView
import com.arkivanov.sample.shared.root.Root.Child.CountersChild
import com.arkivanov.sample.shared.root.Root.Child.DynamicFeaturesChild
import com.arkivanov.sample.shared.root.Root.Child.MultiPaneChild
import com.google.android.material.bottomnavigation.BottomNavigationView

@ExperimentalDecomposeApi
@Suppress("FunctionName") // Factory function
fun ViewContext.RootView(root: Root): View {
    val layout = layoutInflater.inflate(R.layout.root, parent, false)
    val router: RouterView = layout.findViewById(R.id.router)

    router.children(root.routerState, lifecycle) { parent, child, _ ->
        parent.removeAllViews()

        parent.addView(
            when (child) {
                is CountersChild -> CountersView(child.component)
                is MultiPaneChild,
                is DynamicFeaturesChild -> NotImplementedView()
            }
        )
    }

    val navigationView: BottomNavigationView = layout.findViewById(R.id.navigation_view)

    val listener =
        BottomNavigationView.OnNavigationItemSelectedListener { item ->
            when (val id = item.itemId) {
                R.id.tab_counters -> root.onCountersTabClicked()
                R.id.tab_multipane -> root.onMultiPaneTabClicked()
                R.id.tab_dynamic_features -> root.onDynamicFeaturesTabClicked()
                else -> error("Unrecognized item id: $id")
            }

            true
        }

    navigationView.setOnNavigationItemSelectedListener(listener)

    root.routerState.observe(lifecycle) { state ->
        navigationView.setOnNavigationItemSelectedListener(null)

        navigationView.selectedItemId =
            when (state.activeChild.instance) {
                is CountersChild -> R.id.tab_counters
                is MultiPaneChild -> R.id.tab_multipane
                is DynamicFeaturesChild -> R.id.tab_dynamic_features
            }

        navigationView.setOnNavigationItemSelectedListener(listener)
    }

    return layout
}
