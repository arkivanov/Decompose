package com.arkivanov.decompose.lifecycle

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.destroy
import com.arkivanov.essenty.lifecycle.pause
import com.arkivanov.essenty.lifecycle.resume
import com.arkivanov.essenty.lifecycle.start
import com.arkivanov.essenty.lifecycle.stop
import kotlinx.cinterop.BetaInteropApi
import kotlinx.cinterop.ExperimentalForeignApi
import kotlinx.cinterop.ObjCAction
import platform.Foundation.NSNotificationCenter
import platform.Foundation.NSNotificationName
import platform.Foundation.NSSelectorFromString
import platform.UIKit.UIApplicationDidBecomeActiveNotification
import platform.UIKit.UIApplicationDidEnterBackgroundNotification
import platform.UIKit.UIApplicationWillEnterForegroundNotification
import platform.UIKit.UIApplicationWillResignActiveNotification
import platform.UIKit.UIApplicationWillTerminateNotification

/**
 * An implementation of [Lifecycle] that follows the [UIApplication][platform.UIKit.UIApplication] lifecycle notifications.
 */
@ExperimentalDecomposeApi
class ApplicationLifecycle private constructor(
    private val lifecycle: LifecycleRegistry,
) : Lifecycle by lifecycle {

    constructor() : this(lifecycle = LifecycleRegistry())

    init {
        addObserver(name = UIApplicationWillEnterForegroundNotification, selectorName = "willEnterForeground")
        addObserver(name = UIApplicationDidBecomeActiveNotification, selectorName = "didBecomeActive")
        addObserver(name = UIApplicationWillResignActiveNotification, selectorName = "willResignActive")
        addObserver(name = UIApplicationDidEnterBackgroundNotification, selectorName = "didEnterBackground")
        addObserver(name = UIApplicationWillTerminateNotification, selectorName = "willTerminate")
    }

    @OptIn(ExperimentalForeignApi::class)
    private fun addObserver(name: NSNotificationName, selectorName: String) {
        NSNotificationCenter.defaultCenter.addObserver(
            name = name,
            `object` = null,
            observer = this,
            selector = NSSelectorFromString(selectorName),
        )
    }

    @Suppress("unused")
    @OptIn(BetaInteropApi::class)
    @ObjCAction
    fun willEnterForeground() {
        lifecycle.start()
    }

    @Suppress("unused")
    @OptIn(BetaInteropApi::class)
    @ObjCAction
    fun didBecomeActive() {
        lifecycle.resume()
    }

    @Suppress("unused")
    @OptIn(BetaInteropApi::class)
    @ObjCAction
    fun willResignActive() {
        lifecycle.pause()
    }

    @Suppress("unused")
    @OptIn(BetaInteropApi::class)
    @ObjCAction
    fun didEnterBackground() {
        lifecycle.stop()
    }

    @OptIn(BetaInteropApi::class)
    @ObjCAction
    fun willTerminate() {
        lifecycle.destroy()
    }
}
