package com.arkivanov.decompose.router.statekeeper

import com.arkivanov.decompose.statekeeper.Parcelable
import com.arkivanov.decompose.statekeeper.ParcelableContainer
import com.arkivanov.decompose.statekeeper.StateKeeperDispatcher
import com.arkivanov.decompose.statekeeper.consume
import kotlin.reflect.KClass

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

    private class SavedState(
        val map: MutableMap<String, ParcelableContainer>
    ) : Parcelable by ParcelableStub()
}
