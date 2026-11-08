package com.arkivanov.decompose

import com.arkivanov.decompose.lifecycle.attachToApplication
import com.arkivanov.decompose.lifecycle.doOnDestroy
import kotlin.experimental.ExperimentalObjCName

@OptIn(ExperimentalObjCName::class)
fun attachToApplication(
    @ObjCName(swiftName = "_") componentContext: HostComponentContext,
): HostComponentContext {
    componentContext.lifecycle.attachToApplication()
    componentContext.lifecycle.doOnDestroy(componentContext::destroy)
    return componentContext
}
