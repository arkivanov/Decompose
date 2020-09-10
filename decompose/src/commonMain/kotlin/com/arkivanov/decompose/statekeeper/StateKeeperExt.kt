package com.arkivanov.decompose.statekeeper

inline fun <reified T : Parcelable> StateKeeper.consume(key: String): T? = consume(key, T::class)
