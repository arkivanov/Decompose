package com.arkivanov.todo.utils

import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.mapNotNull

fun <T, R : Any> Flow<T>.mapNotNull(mapper: (T) -> R?): Flow<R> =
    mapNotNull { mapper(it) }