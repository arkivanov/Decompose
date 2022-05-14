package com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature

import android.content.Context
import com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.FeatureInstaller.Result
import com.badoo.reaktive.base.setCancellable
import com.badoo.reaktive.maybe.Maybe
import com.badoo.reaktive.maybe.map
import com.badoo.reaktive.maybe.switchIfEmpty
import com.badoo.reaktive.scheduler.mainScheduler
import com.badoo.reaktive.single.Single
import com.badoo.reaktive.single.delaySubscription
import com.badoo.reaktive.single.doOnBeforeSuccess
import com.badoo.reaktive.single.filter
import com.badoo.reaktive.single.single
import com.badoo.reaktive.single.singleFromFunction
import com.google.android.play.core.splitinstall.SplitInstallManagerFactory
import com.google.android.play.core.splitinstall.SplitInstallRequest
import com.google.android.play.core.splitinstall.SplitInstallSessionState
import com.google.android.play.core.splitinstall.SplitInstallStateUpdatedListener
import com.google.android.play.core.splitinstall.model.SplitInstallSessionStatus

class DefaultFeatureInstaller(
    context: Context
) : FeatureInstaller {

    private val manager = SplitInstallManagerFactory.create(context)
    private val installedFeatures = HashSet<String>()

    override fun install(name: String): Single<Result> =
        checkFeatureInstalled(name = name)
            .switchIfEmpty(installFeature(name = name))
            .simulateInstallationProcessIfNeeded(name = name)

    // For testing purposes all dynamic features are configured as `install-time`, so simulating installation process
    private fun Single<Result>.simulateInstallationProcessIfNeeded(name: String): Single<Result> =
        takeUnless { name in installedFeatures }
            ?.delaySubscription(delayMillis = 3000L, scheduler = mainScheduler)
            ?.doOnBeforeSuccess {
                if (it is Result.Installed) {
                    installedFeatures += name
                }
            }
            ?: this

    private fun checkFeatureInstalled(name: String): Maybe<Result.Installed> =
        singleFromFunction { name in manager.installedModules }
            .filter { it }
            .map { Result.Installed }

    private fun installFeature(name: String): Single<Result> =
        single { emitter ->
            val listener =
                StateUpdatedListener(
                    onInstalled = { emitter.onSuccess(Result.Installed) },
                    onCancelled = { emitter.onSuccess(Result.Cancelled) }
                )

            manager.registerListener(listener)

            emitter.setCancellable {
                manager.unregisterListener(listener)
                if (listener.sessionId != 0) {
                    manager.cancelInstall(listener.sessionId)
                }
            }

            manager
                .startInstall(
                    SplitInstallRequest
                        .newBuilder()
                        .addModule(name)
                        .build()
                )
                .addOnSuccessListener { listener.sessionId = it }
                .addOnFailureListener { emitter.onSuccess(Result.Error) }
        }

    private class StateUpdatedListener(
        private val onInstalled: () -> Unit,
        private val onCancelled: () -> Unit,
    ) : SplitInstallStateUpdatedListener {
        var sessionId: Int = 0

        override fun onStateUpdate(state: SplitInstallSessionState) {
            if (state.sessionId() != sessionId) {
                return
            }

            when (state.status()) {
                SplitInstallSessionStatus.INSTALLED -> {
                    sessionId = 0
                    onInstalled()
                }

                SplitInstallSessionStatus.CANCELED -> {
                    sessionId = 0
                    onCancelled()
                }

                SplitInstallSessionStatus.REQUIRES_USER_CONFIRMATION -> Unit // Handle user confirmation
                else -> Unit
            }
        }
    }
}
