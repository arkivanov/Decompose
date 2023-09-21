package com.arkivanov.sample.shared.dynamicfeatures

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.router.stack.StackNavigation
import com.arkivanov.decompose.router.stack.childStack
import com.arkivanov.decompose.router.stack.pop
import com.arkivanov.decompose.router.stack.push
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.Parcelize
import com.arkivanov.sample.shared.dynamicfeatures.DynamicFeaturesComponent.Child
import com.arkivanov.sample.shared.dynamicfeatures.DynamicFeaturesComponent.Child.Feature1Child
import com.arkivanov.sample.shared.dynamicfeatures.DynamicFeaturesComponent.Child.Feature2Child
import com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.DefaultDynamicFeatureComponent
import com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.DynamicFeatureComponent
import com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.FeatureInstaller
import com.arkivanov.sample.shared.dynamicfeatures.feature1.Feature1
import com.arkivanov.sample.shared.dynamicfeatures.feature2.Feature2
import kotlin.random.Random

internal class DefaultDynamicFeaturesComponent(
    componentContext: ComponentContext,
    private val featureInstaller: FeatureInstaller,
) : DynamicFeaturesComponent, ComponentContext by componentContext {

    private val navigation = StackNavigation<Config>()

    private val stack =
        childStack(
            source = navigation,
            initialConfiguration = Config.Feature1,
            handleBackButton = true,
            childFactory = ::child,
        )

    override val childStack: Value<ChildStack<*, Child>> get() = stack

    private fun child(config: Config, componentContext: ComponentContext): Child =
        when (config) {
            is Config.Feature1 -> Feature1Child(feature1(componentContext))
            is Config.Feature2 -> Feature2Child(feature2(config, componentContext))
        }

    private fun feature1(componentContext: ComponentContext): DynamicFeatureComponent<Feature1> =
        DefaultDynamicFeatureComponent(
            componentContext = componentContext,
            name = "feature1Impl",
            featureInstaller = featureInstaller,
            factory = { featureComponentContext ->
                Feature1(
                    componentContext = featureComponentContext,
                    onFeature2 = { navigation.push(Config.Feature2(magicNumber = Random.nextInt())) },
                )
            }
        )

    private fun feature2(config: Config.Feature2, componentContext: ComponentContext): DynamicFeatureComponent<Feature2> =
        DefaultDynamicFeatureComponent(
            componentContext = componentContext,
            name = "feature2Impl",
            featureInstaller = featureInstaller,
            factory = { featureComponentContext ->
                Feature2(
                    componentContext = featureComponentContext,
                    magicNumber = config.magicNumber,
                    onFinished = navigation::pop,
                )
            }
        )

    private sealed interface Config : Parcelable {
        @Parcelize
        data object Feature1 : Config

        @Parcelize
        data class Feature2(val magicNumber: Int) : Config
    }
}
