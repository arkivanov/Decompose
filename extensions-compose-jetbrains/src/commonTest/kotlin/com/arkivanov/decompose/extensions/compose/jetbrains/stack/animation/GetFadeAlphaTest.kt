package com.arkivanov.decompose.extensions.compose.jetbrains.stack.animation

import kotlin.test.Test
import kotlin.test.assertEquals

class GetFadeAlphaTest {

    private val cases =
        listOf(
            Case(factor = 1F, minAlpha = 0F, expected = 0F),
            Case(factor = 0.75F, minAlpha = 0F, expected = 0.25F),
            Case(factor = 0.5F, minAlpha = 0F, expected = 0.5F),
            Case(factor = 0.25F, minAlpha = 0F, expected = 0.75F),
            Case(factor = 0F, minAlpha = 0F, expected = 1F),
            Case(factor = -0.25F, minAlpha = 0F, expected = 0.75F),
            Case(factor = -0.5F, minAlpha = 0F, expected = 0.5F),
            Case(factor = -0.75F, minAlpha = 0F, expected = 0.25F),
            Case(factor = -1F, minAlpha = 0F, expected = 0F),

            Case(factor = 1F, minAlpha = 0.25F, expected = 0.25F),
            Case(factor = 0.75F, minAlpha = 0.25F, expected = 0.4375F),
            Case(factor = 0.5F, minAlpha = 0.25F, expected = 0.625F),
            Case(factor = 0.25F, minAlpha = 0.25F, expected = 0.8125F),
            Case(factor = 0F, minAlpha = 0.25F, expected = 1F),
            Case(factor = -0.25F, minAlpha = 0.25F, expected = 0.8125F),
            Case(factor = -0.5F, minAlpha = 0.25F, expected = 0.625F),
            Case(factor = -0.75F, minAlpha = 0.25F, expected = 0.4375F),
            Case(factor = -1F, minAlpha = 0.25F, expected = 0.25F),

            Case(factor = 1F, minAlpha = 0.5F, expected = 0.5F),
            Case(factor = 0.75F, minAlpha = 0.5F, expected = 0.625F),
            Case(factor = 0.5F, minAlpha = 0.5F, expected = 0.75F),
            Case(factor = 0.25F, minAlpha = 0.5F, expected = 0.875F),
            Case(factor = 0F, minAlpha = 0.5F, expected = 1F),
            Case(factor = -0.25F, minAlpha = 0.5F, expected = 0.875F),
            Case(factor = -0.5F, minAlpha = 0.5F, expected = 0.75F),
            Case(factor = -0.75F, minAlpha = 0.5F, expected = 0.625F),
            Case(factor = -1F, minAlpha = 0.5F, expected = 0.5F),

            Case(factor = 1F, minAlpha = 0.75F, expected = 0.75F),
            Case(factor = 0.75F, minAlpha = 0.75F, expected = 0.8125F),
            Case(factor = 0.5F, minAlpha = 0.75F, expected = 0.875F),
            Case(factor = 0.25F, minAlpha = 0.75F, expected = 0.9375F),
            Case(factor = 0F, minAlpha = 0.75F, expected = 1F),
            Case(factor = -0.25F, minAlpha = 0.75F, expected = 0.9375F),
            Case(factor = -0.5F, minAlpha = 0.75F, expected = 0.875F),
            Case(factor = -0.75F, minAlpha = 0.75F, expected = 0.8125F),
            Case(factor = -1F, minAlpha = 0.75F, expected = 0.75F),

            Case(factor = 1F, minAlpha = 1F, expected = 1F),
            Case(factor = 0.75F, minAlpha = 1F, expected = 1F),
            Case(factor = 0.5F, minAlpha = 1F, expected = 1F),
            Case(factor = 0.25F, minAlpha = 1F, expected = 1F),
            Case(factor = 0F, minAlpha = 1F, expected = 1F),
            Case(factor = -0.25F, minAlpha = 1F, expected = 1F),
            Case(factor = -0.5F, minAlpha = 1F, expected = 1F),
            Case(factor = -0.75F, minAlpha = 1F, expected = 1F),
            Case(factor = -1F, minAlpha = 1F, expected = 1F),
        )

    @Test
    fun getFadeAlpha_allCases() {
        cases.forEach { case ->
            assertEquals(
                expected = case.expected,
                actual = getFadeAlpha(factor = case.factor, minAlpha = case.minAlpha),
                absoluteTolerance = 0.0000001F,
                message = case.toString(),
            )
        }
    }

    private data class Case(
        val factor: Float,
        val minAlpha: Float,
        val expected: Float,
    )
}
