package com.arkivanov.decompose.extensions.compose.jetpack

import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.SnapshotMutationPolicy
import androidx.compose.runtime.State
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.structuralEqualityPolicy
import com.arkivanov.decompose.value.Value

/**
 * Subscribes to the [Value] and returns Compose [State].
 *
 * @param policy a [SnapshotMutationPolicy] that will be used by Compose when comparing values.
 * Default is [structuralEqualityPolicy].
 */
@Composable
fun <T : Any> Value<T>.subscribeAsState(policy: SnapshotMutationPolicy<T> = structuralEqualityPolicy()): State<T> {
    val state = remember(this, policy) { mutableStateOf(value, policy) }

    DisposableEffect(this) {
        val cancellation = observe { state.value = it }
        onDispose { cancellation.cancel() }
    }

    return state
}
