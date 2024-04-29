package com.arkivanov.decompose

actual fun isNodeJs(): Boolean =
    false // Decompose doesn't support wasmJs for NodeJs yet
