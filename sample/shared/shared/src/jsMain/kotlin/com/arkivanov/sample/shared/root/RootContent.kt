package com.arkivanov.sample.shared.root

import com.arkivanov.sample.shared.RProps
import com.arkivanov.sample.shared.componentContent
import com.arkivanov.sample.shared.root.RootComponent.Child.CustomNavigationChild
import com.arkivanov.sample.shared.root.RootComponent.Child.DynamicFeaturesChild
import com.arkivanov.sample.shared.root.RootComponent.Child.PagesChild
import com.arkivanov.sample.shared.root.RootComponent.Child.SharedTransitionsChild
import com.arkivanov.sample.shared.root.RootComponent.Child.TabsChild
import com.arkivanov.sample.shared.tabs.TabsContent
import com.arkivanov.sample.shared.useAsState
import react.FC

var RootContent: FC<RProps<RootComponent>> = FC { props ->
    val stack by props.component.stack.useAsState()

    when (val child = stack.active.instance) {
        is TabsChild -> componentContent(component = child.component, content = TabsContent)

        is CustomNavigationChild,
        is DynamicFeaturesChild,
        is PagesChild,
        is SharedTransitionsChild -> error("Unsupported child: $child")
    }
}
