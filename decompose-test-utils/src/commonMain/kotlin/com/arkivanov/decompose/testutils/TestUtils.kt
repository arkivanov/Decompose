package com.arkivanov.decompose.testutils

import androidx.savedstate.SavedState
import androidx.savedstate.SavedStateRegistry
import androidx.savedstate.SavedStateRegistryController
import androidx.savedstate.savedState
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.savedstate.SavedStateSerializer
import com.arkivanov.decompose.savedstate.consume
import com.arkivanov.decompose.savedstate.register
import com.arkivanov.decompose.value.Value
import kotlinx.serialization.json.Json
import kotlinx.serialization.serializer
import kotlin.reflect.KProperty

@PublishedApi
internal val json =
    Json {
        allowStructuredMapKeys = true
    }

inline fun <reified T : Any> SavedStateRegistry.register(key: String, noinline supplier: () -> T?) {
    register(key = key, strategy = serializer<T>(), supplier = supplier)
}

inline fun <reified T : Any> SavedStateRegistry.consume(key: String): T? =
    consume(key = key, strategy = serializer<T>())

fun SavedState.serializeAndDeserialize(): SavedState =
    json.decodeFromString(SavedStateSerializer, json.encodeToString(SavedStateSerializer, this))

//fun SavedStateRegistryController.recreate(isConfigurationChange: Boolean = false): SavedStateRegistryController {
//    val savedState = saveAndRestoreState(isConfigurationChange = isConfigurationChange)
//    SavedStateRegistryController()
//}

fun SavedStateRegistryController.saveAndRestoreState(isConfigurationChange: Boolean = false): SavedState {
    val savedState = savedState().also(this::performSave)
    return if (isConfigurationChange) savedState else savedState.serializeAndDeserialize()
}

operator fun <T : Any> Value<T>.getValue(thisRef: Any?, property: KProperty<*>): T = value

val List<Child<*, *>>.keys: List<String> get() = map { it.key }
