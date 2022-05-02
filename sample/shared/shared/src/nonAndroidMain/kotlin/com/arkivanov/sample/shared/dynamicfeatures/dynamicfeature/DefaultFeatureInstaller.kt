package com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature

import com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.FeatureInstaller.Result
import com.badoo.reaktive.single.Single
import com.badoo.reaktive.single.singleOf

object DefaultFeatureInstaller : FeatureInstaller {

    override fun install(name: String): Single<Result> = singleOf(Result.Installed)
}
