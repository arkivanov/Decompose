package com.arkivanov.decompose.statekeeper

import kotlin.reflect.KClass

internal fun StateKeeper.child(key: String): StateKeeper = ChildStateKeeper(this, key)

internal class ChildStateKeeper(
    private val parent: StateKeeper,
    private val key: String
) : StateKeeper {

    private val states: MutableMap<String, Parcelable> = parent.consume<SavedState>(key)?.map ?: HashMap()
    private val suppliers = HashMap<String, () -> Parcelable>()

    @Suppress("UNCHECKED_CAST")
    override fun <T : Parcelable> consume(key: String, clazz: KClass<out T>): T? = states.remove(key) as T?

    override fun <T : Parcelable> register(key: String, supplier: () -> T) {
        check(key !in suppliers)

        val isFirst = suppliers.isEmpty()
        suppliers[key] = supplier
        if (isFirst) {
            parent.register(this.key, ::save)
        }
    }

    override fun unregister(key: String) {
        check(key in suppliers)

        suppliers -= key
        if (suppliers.isEmpty()) {
            parent.unregister(this.key)
        }
    }

    private fun save(): Parcelable =
        SavedState(suppliers.mapValuesTo(HashMap()) { it.value() })

    @Parcelize
    private class SavedState(val map: MutableMap<String, Parcelable>) : Parcelable
}
