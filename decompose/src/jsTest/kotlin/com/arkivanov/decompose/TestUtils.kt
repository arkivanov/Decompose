package com.arkivanov.decompose

actual fun isNodeJs(): Boolean =
    jsTypeOf(kotlinx.browser.window) == "undefined"
