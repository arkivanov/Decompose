package com.arkivanov.sample.shared

import com.arkivanov.decompose.router.stack.StackNavigation
import com.arkivanov.decompose.router.stack.navigate
import com.arkivanov.essenty.lifecycle.LifecycleOwner
import com.arkivanov.sample.shared.multipane.utils.disposableScope
import com.badoo.reaktive.observable.notNull
import com.badoo.reaktive.subject.behavior.BehaviorObservable

fun <C : Any> LifecycleOwner.attachDeepLinks(
    navigation: StackNavigation<C>,
    deepLinkPath: BehaviorObservable<String?>,
    getStack: (path: String) -> List<C>,
) {
    disposableScope {
        deepLinkPath.notNull().subscribeScoped { path ->
            navigation.navigate { getStack(path) }
        }
    }
}
