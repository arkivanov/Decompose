package com.arkivanov.decompose.router.statekeeper

import com.arkivanov.decompose.statekeeper.ChildStateKeeper
import kotlin.test.Test
import kotlin.test.assertEquals

class ChildStateKeeperTest {

    @Test
    fun saves_and_restores_state() {
        val parent = TestStateKeeperDispatcher()
        val child = ChildStateKeeper(parent, "key")
        val savedChildState = ParcelableStub()
        child.register("child_key") { savedChildState }
        val savedParentState = parent.save()

        val newChild = ChildStateKeeper(TestStateKeeperDispatcher(savedParentState), "key")
        val restoredChildState = newChild.consume("child_key", ParcelableStub::class)

        assertEquals(savedChildState, restoredChildState)
    }
}
