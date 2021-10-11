package com.arkivanov.sample.dynamicfeatures.shared.root

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.RouterState
import com.arkivanov.decompose.router.pop
import com.arkivanov.decompose.router.push
import com.arkivanov.decompose.router.router
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.Parcelize
import com.arkivanov.sample.dynamicfeatures.shared.feature1.Feature1
import com.arkivanov.sample.dynamicfeatures.shared.feature2.Feature2
import com.arkivanov.sample.dynamicfeatures.shared.main.Main
import com.arkivanov.sample.dynamicfeatures.shared.main.MainComponent
import com.arkivanov.sample.dynamicfeatures.shared.root.Root.Child
import com.arkivanov.sample.dynamicfeatures.shared.root.dynamicfeature.DynamicFeature
import com.arkivanov.sample.dynamicfeatures.shared.root.dynamicfeature.DynamicFeatureComponent
import com.arkivanov.sample.dynamicfeatures.shared.root.featureinstaller.FeatureInstaller
import kotlin.random.Random

class RootComponent(
    componentContext: ComponentContext,
    private val featureInstaller: FeatureInstaller,
) : Root, ComponentContext by componentContext {

    private val router =
        router<Config, Child>(
            initialConfiguration = Config.Main,
            handleBackButton = true,
            childFactory = ::child
        )

    override val routerState: Value<RouterState<*, Child>> = router.state

    private fun child(config: Config, componentContext: ComponentContext): Child =
        when (config) {
            is Config.Main -> Child.MainChild(main(componentContext))
            is Config.Feature1 -> Child.Feature1Child(feature1(config, componentContext))
            is Config.Feature2 -> Child.Feature2Child(feature2(componentContext))
        }

    private fun main(componentContext: ComponentContext): Main =
        MainComponent(
            componentContext = componentContext,
            onFeature1 = { router.push(Config.Feature1(magicNumber = Random.nextInt())) }
        )

    private fun feature1(config: Config.Feature1, componentContext: ComponentContext): DynamicFeature<Feature1> =
        DynamicFeatureComponent(
            componentContext = componentContext,
            name = "feature1Impl",
            featureInstaller = featureInstaller,
            onCancelled = router::pop,
            factory = { featureComponentContext ->
                Feature1(
                    componentContext = featureComponentContext,
                    magicNumber = config.magicNumber,
                    onFeature2 = { router.push(Config.Feature2) },
                    onFinished = { router.pop() },
                )
            }
        )

    private fun feature2(componentContext: ComponentContext): DynamicFeature<Feature2> =
        DynamicFeatureComponent(
            componentContext = componentContext,
            name = "feature2Impl",
            featureInstaller = featureInstaller,
            onCancelled = router::pop,
            factory = { featureComponentContext ->
                Feature2(
                    componentContext = featureComponentContext,
                    onFinished = { router.pop() },
                )
            }
        )

    private sealed interface Config : Parcelable {
        @Parcelize
        object Main : Config

        @Parcelize
        data class Feature1(val magicNumber: Int) : Config

        @Parcelize
        object Feature2 : Config
    }
}
