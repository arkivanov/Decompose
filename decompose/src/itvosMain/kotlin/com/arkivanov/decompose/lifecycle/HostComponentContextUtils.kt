package com.arkivanov.decompose.lifecycle

import com.arkivanov.decompose.HostComponentContext
import kotlin.experimental.ExperimentalObjCName

@OptIn(ExperimentalObjCName::class)
fun attachToApplication(
    @ObjCName(swiftName = "_") componentContext: HostComponentContext,
): HostComponentContext {
    componentContext.lifecycle.attachToApplication()
    componentContext.lifecycle.doOnDestroy(componentContext::destroy)
    return componentContext
}
