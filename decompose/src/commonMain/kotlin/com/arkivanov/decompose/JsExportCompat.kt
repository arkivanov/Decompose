package com.arkivanov.decompose

import kotlin.annotation.AnnotationTarget.CLASS
import kotlin.annotation.AnnotationTarget.FILE
import kotlin.annotation.AnnotationTarget.FUNCTION
import kotlin.annotation.AnnotationTarget.PROPERTY

/**
 * Workaround until JsExport can be applied to classes on wasmJs.
 *
 * See: https://youtrack.jetbrains.com/issue/KT-62385 and https://youtrack.jetbrains.com/issue/KT-64813.
 */
@OptIn(ExperimentalMultiplatform::class)
@OptionalExpectation
@Retention(AnnotationRetention.BINARY)
@Target(CLASS, PROPERTY, FUNCTION, FILE)
internal expect annotation class JsExportCompat()
