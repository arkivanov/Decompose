package com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature

import com.badoo.reaktive.single.Single

interface FeatureInstaller {

    fun install(name: String): Single<Result>

    sealed interface Result {
        data object Installed : Result
        data object Cancelled : Result
        data object Error : Result
    }
}
