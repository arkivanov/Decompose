package com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.Router
import com.arkivanov.decompose.router.RouterState
import com.arkivanov.decompose.router.replaceCurrent
import com.arkivanov.decompose.router.router
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.lifecycle.subscribe
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.Parcelize
import com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.DynamicFeature.Child
import com.badoo.reaktive.disposable.scope.DisposableScope
import com.badoo.reaktive.disposable.scope.disposableScope

internal class DynamicFeatureComponent<out T : Any>(
    componentContext: ComponentContext,
    private val name: String,
    private val featureInstaller: FeatureInstaller,
    private val factory: (ComponentContext) -> T
) : DynamicFeature<T>, ComponentContext by componentContext {

    private val router: Router<Config, Child<T>> =
        router(
            initialConfiguration = Config.Loading,
            childFactory = ::child
        )

    override val routerState: Value<RouterState<*, Child<T>>> = router.state

    private fun child(config: Config, componentContext: ComponentContext): Child<T> =
        when (config) {
            is Config.Loading -> loading(componentContext)
            is Config.Feature -> Child.Feature(factory(componentContext))
            is Config.Error -> Child.Error(name = name)
        }

    private fun loading(componentContext: ComponentContext): Child.Loading {
        disposableScope {
            componentContext.lifecycle.subscribe(
                onCreate = { loadFeature() },
                onDestroy = ::dispose
            )
        }

        return Child.Loading(name = name)
    }

    private fun DisposableScope.loadFeature() {
        featureInstaller.install(name = name).subscribeScoped {
            when (it) {
                is FeatureInstaller.Result.Installed -> router.replaceCurrent(Config.Feature)
                is FeatureInstaller.Result.Cancelled,
                is FeatureInstaller.Result.Error -> router.replaceCurrent(Config.Error)
            }.let {}
        }
    }

    private sealed interface Config : Parcelable {
        @Parcelize
        object Loading : Config

        @Parcelize
        object Feature : Config

        @Parcelize
        object Error : Config
    }
}
