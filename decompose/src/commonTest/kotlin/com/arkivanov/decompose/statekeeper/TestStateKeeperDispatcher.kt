package com.arkivanov.decompose.statekeeper

import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.ParcelableContainer
import com.arkivanov.essenty.parcelable.consume
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher
import kotlin.reflect.KClass
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class TestStateKeeperDispatcher(
    val initialSavedState: ParcelableContainer? = null
) : StateKeeperDispatcher {

    private val savedState: MutableMap<String, ParcelableContainer>? = initialSavedState?.consume<SavedState>()?.map
    private val suppliers = HashMap<String, () -> Parcelable>()

    var lastSavedState: ParcelableContainer? = null

    override fun save(): ParcelableContainer {
        val state = TestParcelableContainer(SavedState(suppliers.mapValuesTo(HashMap()) { TestParcelableContainer(it.value()) }))
        lastSavedState = state

        return state
    }

    override fun <T : Parcelable> consume(key: String, clazz: KClass<out T>): T? =
        savedState
            ?.remove(key)
            ?.consume(clazz)

    override fun <T : Parcelable> register(key: String, supplier: () -> T) {
        check(key !in suppliers)
        suppliers[key] = supplier
    }

    override fun unregister(key: String) {
        check(key in suppliers)
        suppliers -= key
    }

    fun assertSupplierRegistered(key: String) {
        assertTrue(key in suppliers)
    }

    fun assertSupplierNotRegistered(key: String) {
        assertFalse(key in suppliers)
    }

    private class SavedState(
        val map: MutableMap<String, ParcelableContainer>
    ) : Parcelable by ParcelableStub()
}
