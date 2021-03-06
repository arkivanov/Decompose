package com.arkivanov.decompose.statekeeper

import com.arkivanov.decompose.ensureNeverFrozen
import kotlin.reflect.KClass

internal class StateKeeperDispatcherImpl(savedState: ParcelableContainer?) : StateKeeperDispatcher {

    init {
        ensureNeverFrozen()
    }

    private val savedState: MutableMap<String, ParcelableContainer>? = savedState?.consume<SavedState>()?.map
    private val suppliers = HashMap<String, () -> Parcelable>()

    override fun save(): ParcelableContainer? =
        try {
            ParcelableContainer(SavedState(suppliers.mapValuesTo(HashMap()) { ParcelableContainer(it.value()) }))
        } catch (e: Exception) {
            null
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

    @Parcelize
    private class SavedState(
        val map: HashMap<String, ParcelableContainer>
    ) : Parcelable
}
