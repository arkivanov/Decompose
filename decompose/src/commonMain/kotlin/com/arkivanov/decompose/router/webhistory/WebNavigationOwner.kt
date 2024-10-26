package com.arkivanov.decompose.router.webhistory

import com.arkivanov.decompose.ExperimentalDecomposeApi

/**
 * Represents a holder of [WebNavigation], typically implemented by
 * a Decompose component.
 */
@ExperimentalDecomposeApi
interface WebNavigationOwner {

    val webNavigation: WebNavigation<*>

    /**
     * A no-op interface that extends [WebNavigationOwner]. Can be useful
     * for fake or preview component implementations.
     */
    interface NoOp : WebNavigationOwner {
        override val webNavigation: WebNavigation<*> get() = NoOpWebNavigation
    }
}
