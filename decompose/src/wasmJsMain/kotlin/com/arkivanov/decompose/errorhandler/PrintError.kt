package com.arkivanov.decompose.errorhandler

@OptIn(ExperimentalWasmJsInterop::class)
@JsFun("(message) => console.error(message)")
internal actual external fun printError(message: String)
