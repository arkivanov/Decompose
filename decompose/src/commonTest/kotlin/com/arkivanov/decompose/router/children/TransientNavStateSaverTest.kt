package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.testutils.serializeAndDeserialize
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull

@Suppress("TestFunctionName")
class TransientNavStateSaverTest {

    @Test
    fun WHEN_not_persistent_THEN_restores_saved_state() {
        val saver = transientNavStateSaver<Int>()

        val savedState = saver.saveState(state = 1)?.let(saver::restoreState)

        assertEquals(1, savedState)
    }

    @Test
    fun WHEN_persistent_THEN_does_not_restore_saved_state() {
        val saver = transientNavStateSaver<Int>()

        val savedState = saver.saveState(state = 1)?.serializeAndDeserialize()?.let(saver::restoreState)

        assertNull(savedState)
    }
}
