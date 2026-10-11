package com.arkivanov.decompose.errorhandler

import kotlin.test.Test

class PrintErrorTest {

    @Test
    fun printError_message() {
        printError(message = "Test error, ignore")
    }
}
