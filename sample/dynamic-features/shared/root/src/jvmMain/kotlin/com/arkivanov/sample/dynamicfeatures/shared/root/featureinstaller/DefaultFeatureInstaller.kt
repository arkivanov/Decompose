package com.arkivanov.sample.dynamicfeatures.shared.root.featureinstaller

import com.arkivanov.sample.dynamicfeatures.shared.root.featureinstaller.FeatureInstaller.Result
import com.badoo.reaktive.single.Single
import com.badoo.reaktive.single.singleOf

class DefaultFeatureInstaller : FeatureInstaller {

    override fun install(name: String): Single<Result> = singleOf(Result.Installed)
}
