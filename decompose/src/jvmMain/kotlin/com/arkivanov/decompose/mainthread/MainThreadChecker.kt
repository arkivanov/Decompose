package com.arkivanov.decompose.mainthread

import com.arkivanov.decompose.InternalDecomposeApi

@InternalDecomposeApi
interface MainThreadChecker {

    fun isMainThread(): Boolean
}
