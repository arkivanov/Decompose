package com.arkivanov.sample.dynamicfeatures.shared.root

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.sample.dynamicfeatures.shared.feature1.Feature1
import com.arkivanov.sample.dynamicfeatures.shared.feature1.Feature1Content
import com.arkivanov.sample.dynamicfeatures.shared.feature2.Feature2
import com.arkivanov.sample.dynamicfeatures.shared.feature2.Feature2Content

internal actual fun Feature1(
    componentContext: ComponentContext,
    magicNumber: Int,
    onFeature2: () -> Unit,
    onFinished: () -> Unit,
): Feature1 =
    feature(componentContext, magicNumber, onFeature2, onFinished)

internal actual fun Feature1Content(): Feature1Content = featureContent()

internal actual fun Feature2(
    componentContext: ComponentContext,
    onFinished: () -> Unit
): Feature2 =
    feature(componentContext, onFinished)

internal actual fun Feature2Content(): Feature2Content = featureContent()

private inline fun <reified T : Any> feature(vararg args: Any?): T =
    Class.forName("${T::class.java.name}Component")
        .declaredConstructors
        .first()
        .newInstance(*args) as T

private inline fun <reified T : Any> featureContent(): T =
    Class.forName("${T::class.java.name}Impl").newInstance() as T
