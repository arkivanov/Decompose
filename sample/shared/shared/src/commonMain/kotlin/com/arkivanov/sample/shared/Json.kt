package com.arkivanov.sample.shared

import kotlinx.serialization.json.Json

internal val json =
    Json {
        allowStructuredMapKeys = true
    }
