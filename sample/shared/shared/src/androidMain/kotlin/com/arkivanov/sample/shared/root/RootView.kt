package com.arkivanov.sample.shared.root

import android.view.View
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.android.ViewContext
import com.arkivanov.decompose.extensions.android.layoutInflater
import com.arkivanov.decompose.extensions.android.stack.StackRouterView
import com.arkivanov.sample.shared.R
import com.arkivanov.sample.shared.root.RootComponent.Child.CustomNavigationChild
import com.arkivanov.sample.shared.root.RootComponent.Child.DynamicFeaturesChild
import com.arkivanov.sample.shared.root.RootComponent.Child.PagesChild
import com.arkivanov.sample.shared.root.RootComponent.Child.SharedTransitionsChild
import com.arkivanov.sample.shared.root.RootComponent.Child.TabsChild
import com.arkivanov.sample.shared.tabs.TabsView
import com.arkivanov.sample.shared.viewSwitcher

@ExperimentalDecomposeApi
@Suppress("FunctionName") // Factory function
fun ViewContext.RootView(component: RootComponent): View {
    val layout = layoutInflater.inflate(R.layout.root, parent, false)
    val router: StackRouterView = layout.findViewById(R.id.router)

    router.children(
        stack = component.stack,
        lifecycle = lifecycle,
        replaceChildView = viewSwitcher { child ->
            when (child) {
                is TabsChild -> TabsView(child.component)

                is CustomNavigationChild,
                is DynamicFeaturesChild,
                is PagesChild,
                is SharedTransitionsChild -> error("Unsupported child: $child")
            }
        },
    )

    return layout
}
