package com.arkivanov.sample.shared

import kotlinx.serialization.Serializable

@Serializable
data class Url(
    val pathSegments: List<String>,
    val parameters: Map<String, String>,
)

fun Url(url: String): Url {
    var path: String = url.substringAfter(delimiter = "://").substringAfter(delimiter = "/")
    var parameters: Map<String, String> = emptyMap()

    if ('?' in path) {
        parameters =
            path.substringAfter(delimiter = "?")
                .split("&")
                .map { it.split("=") }
                .associate { (key, value) -> key to value }

        path = path.substringBefore(delimiter = "?")
    }

    return Url(pathSegments = path.split("/"), parameters = parameters)
}

fun Url.consumePathSegment(): Pair<String?, Url> =
    pathSegments.firstOrNull() to copy(pathSegments = pathSegments.drop(1))


internal fun Any.path(): String =
    this::class.simpleName?.snakeCase() ?: ""

internal inline fun <reified T : Any> pathSegmentOf(): String =
    T::class.simpleName?.snakeCase() ?: ""
