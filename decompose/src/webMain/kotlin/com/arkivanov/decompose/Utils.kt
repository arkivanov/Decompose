package com.arkivanov.decompose

import kotlinx.serialization.json.Json

internal val Json =
    Json {
        allowStructuredMapKeys = true
    }
