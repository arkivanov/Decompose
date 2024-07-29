package com.arkivanov.sample.shared.dynamicfeatures

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.router.stack.StackNavigation
import com.arkivanov.decompose.router.stack.childStack
import com.arkivanov.decompose.router.stack.pop
import com.arkivanov.decompose.router.stack.pushNew
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.dynamicfeatures.DynamicFeaturesComponent.Child
import com.arkivanov.sample.shared.dynamicfeatures.DynamicFeaturesComponent.Child.Feature1Child
import com.arkivanov.sample.shared.dynamicfeatures.DynamicFeaturesComponent.Child.Feature2Child
import com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.DefaultDynamicFeatureComponent
import com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.DynamicFeatureComponent
import com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.FeatureInstaller
import com.arkivanov.sample.shared.dynamicfeatures.feature1.Feature1
import com.arkivanov.sample.shared.dynamicfeatures.feature2.Feature2
import kotlinx.serialization.Serializable
import kotlin.random.Random

internal class DefaultDynamicFeaturesComponent(
    componentContext: ComponentContext,
    private val featureInstaller: FeatureInstaller,
    private val onFinished: () -> Unit,
) : DynamicFeaturesComponent, ComponentContext by componentContext {

    private val navigation = StackNavigation<Config>()

    private val _stack =
        childStack(
            source = navigation,
            serializer = Config.serializer(),
            initialConfiguration = Config.Feature1,
            handleBackButton = true,
            childFactory = ::child,
        )

    override val stack: Value<ChildStack<*, Child>> = _stack

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
                    onFeature2 = { navigation.pushNew(Config.Feature2(magicNumber = Random.nextInt())) },
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

    override fun onCloseClicked() {
        onFinished()
    }

    @Serializable
    private sealed interface Config {
        @Serializable
        data object Feature1 : Config

        @Serializable
        data class Feature2(val magicNumber: Int) : Config
    }
}
