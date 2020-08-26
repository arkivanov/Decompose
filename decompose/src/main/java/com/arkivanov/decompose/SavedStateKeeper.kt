package com.arkivanov.decompose

import android.os.Bundle

interface SavedStateKeeper {

    fun consume(key: String): Bundle?

    fun register(key: String, supplier: () -> Bundle)

    fun unregister(key: String)
}
