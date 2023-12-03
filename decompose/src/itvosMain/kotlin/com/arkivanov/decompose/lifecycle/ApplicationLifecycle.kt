package com.arkivanov.decompose.lifecycle

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.create
import com.arkivanov.essenty.lifecycle.destroy
import com.arkivanov.essenty.lifecycle.doOnDestroy
import com.arkivanov.essenty.lifecycle.pause
import com.arkivanov.essenty.lifecycle.resume
import com.arkivanov.essenty.lifecycle.start
import com.arkivanov.essenty.lifecycle.stop
import platform.Foundation.NSNotification
import platform.Foundation.NSNotificationCenter
import platform.Foundation.NSNotificationName
import platform.Foundation.NSOperationQueue
import platform.UIKit.UIApplication
import platform.UIKit.UIApplicationDidBecomeActiveNotification
import platform.UIKit.UIApplicationDidEnterBackgroundNotification
import platform.UIKit.UIApplicationState
import platform.UIKit.UIApplicationWillEnterForegroundNotification
import platform.UIKit.UIApplicationWillResignActiveNotification
import platform.UIKit.UIApplicationWillTerminateNotification
import platform.darwin.NSObjectProtocol

/**
 * An implementation of [Lifecycle] that follows the [UIApplication][platform.UIKit.UIApplication] lifecycle notifications.
 */
@ExperimentalDecomposeApi
class ApplicationLifecycle private constructor(
    private val lifecycle: LifecycleRegistry,
) : Lifecycle by lifecycle {

    constructor() : this(lifecycle = LifecycleRegistry())

    private val willEnterForegroundObserver = addObserver(UIApplicationWillEnterForegroundNotification) { lifecycle.start() }
    private val didBecomeActiveObserver = addObserver(UIApplicationDidBecomeActiveNotification) { lifecycle.resume() }
    private val willResignActiveObserver = addObserver(UIApplicationWillResignActiveNotification) { lifecycle.pause() }
    private val didEnterBackgroundObserver = addObserver(UIApplicationDidEnterBackgroundNotification) { lifecycle.stop() }
    private val willTerminateObserver = addObserver(UIApplicationWillTerminateNotification) { lifecycle.destroy() }

    init {
        NSOperationQueue.mainQueue.addOperationWithBlock {
            if (lifecycle.state == Lifecycle.State.INITIALIZED) {
                when (UIApplication.sharedApplication.applicationState) {
                    UIApplicationState.UIApplicationStateActive -> lifecycle.resume()
                    UIApplicationState.UIApplicationStateInactive -> lifecycle.start()
                    UIApplicationState.UIApplicationStateBackground -> lifecycle.create()
                    else -> lifecycle.create()
                }
            }
        }

        doOnDestroy {
            NSNotificationCenter.defaultCenter.removeObserver(willEnterForegroundObserver)
            NSNotificationCenter.defaultCenter.removeObserver(didBecomeActiveObserver)
            NSNotificationCenter.defaultCenter.removeObserver(willResignActiveObserver)
            NSNotificationCenter.defaultCenter.removeObserver(didEnterBackgroundObserver)
            NSNotificationCenter.defaultCenter.removeObserver(willTerminateObserver)
        }
    }

    private fun addObserver(name: NSNotificationName, block: (NSNotification?) -> Unit): NSObjectProtocol =
        NSNotificationCenter.defaultCenter.addObserverForName(
            name = name,
            `object` = null,
            queue = NSOperationQueue.mainQueue,
            usingBlock = block,
        )
}
