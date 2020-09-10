package com.arkivanov.decompose.statekeeper

import kotlin.reflect.KClass

internal class StateKeeperDispatcherImpl(savedState: ParcelableContainer?) : StateKeeperDispatcher {

    private val savedState: MutableMap<String, ParcelableContainer>? = savedState?.consume<SavedState>()?.map
    private val suppliers = HashMap<String, () -> Parcelable>()

    override fun save(): ParcelableContainer =
        ParcelableContainer(SavedState(suppliers.mapValuesTo(HashMap()) { ParcelableContainer(it.value()) }))

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

    @Parcelize
    private class SavedState(
        val map: HashMap<String, ParcelableContainer>
    ) : Parcelable
}
