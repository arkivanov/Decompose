package com.arkivanov.decompose

import kotlin.test.Test
import kotlin.test.assertEquals

class UrlEncodeTest {

    @Test
    fun encode_decode() {
        val original = "asd кек"

        val decoded = decodeURIComponent(encodeURIComponent(original))

        assertEquals(original, decoded)
    }
}
