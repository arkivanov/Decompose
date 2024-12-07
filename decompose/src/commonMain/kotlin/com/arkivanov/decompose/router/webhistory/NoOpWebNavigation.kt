package com.arkivanov.decompose.router.webhistory

import com.arkivanov.decompose.router.webhistory.WebNavigation.HistoryItem
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.KSerializer
import kotlinx.serialization.builtins.NothingSerializer

internal object NoOpWebNavigation : WebNavigation<Nothing> {

    @OptIn(ExperimentalSerializationApi::class)
    override val serializer: KSerializer<Nothing> get() = NothingSerializer()

    override val history: Value<List<HistoryItem<Nothing>>> = MutableValue(emptyList())

    override fun onBeforeNavigate(): Boolean = true

    override fun navigate(history: List<Nothing>) {
        // No-op
    }
}
