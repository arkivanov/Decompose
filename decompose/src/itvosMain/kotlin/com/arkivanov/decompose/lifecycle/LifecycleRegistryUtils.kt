package com.arkivanov.decompose.lifecycle

import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleRegistry
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
import kotlin.experimental.ExperimentalObjCName

/**
 * Attaches this [LifecycleRegistry] to [UIApplication] so that it follows its lifecycle notifications.
 *
 * Since it subscribes to [UIApplication] global lifecycle events,
 * the instance and all its registered observers (and whatever they capture) will stay in
 * memory until the application is destroyed. It's ok to use it in a global scope like
 * `UIApplicationDelegate`, but it may cause memory leaks when used in a narrower scope like
 * `UIViewController` if it gets destroyed earlier.
 */
@OptIn(ExperimentalObjCName::class)
fun attachToApplication(@ObjCName(swiftName = "_") lifecycle: LifecycleRegistry): LifecycleRegistry =
    lifecycle.attachToApplication()

internal fun LifecycleRegistry.attachToApplication(
    platform: ApplicationLifecyclePlatform = DefaultApplicationLifecyclePlatform,
): LifecycleRegistry {
    val willEnterForegroundObserver = platform.addObserver(UIApplicationWillEnterForegroundNotification) { moveToStarted() }
    val didBecomeActiveObserver = platform.addObserver(UIApplicationDidBecomeActiveNotification) { moveToResumed() }
    val willResignActiveObserver = platform.addObserver(UIApplicationWillResignActiveNotification) { moveToStarted() }
    val didEnterBackgroundObserver = platform.addObserver(UIApplicationDidEnterBackgroundNotification) { moveToCreated() }
    val willTerminateObserver = platform.addObserver(UIApplicationWillTerminateNotification) { moveToDestroyed() }

    platform.addOperationOnMainQueue {
        if (currentState == Lifecycle.State.INITIALIZED) {
            when (platform.applicationState) {
                UIApplicationState.UIApplicationStateActive -> moveToResumed()
                UIApplicationState.UIApplicationStateInactive -> moveToStarted()
                else -> moveToCreated()
            }
        }
    }

    doOnDestroy {
        platform.removeObserver(willEnterForegroundObserver)
        platform.removeObserver(didBecomeActiveObserver)
        platform.removeObserver(willResignActiveObserver)
        platform.removeObserver(didEnterBackgroundObserver)
        platform.removeObserver(willTerminateObserver)
    }

    return this
}

internal interface ApplicationLifecyclePlatform {
    val applicationState: UIApplicationState

    fun addObserver(name: NSNotificationName, block: (NSNotification?) -> Unit): NSObjectProtocol
    fun removeObserver(observer: NSObjectProtocol)
    fun addOperationOnMainQueue(block: () -> Unit)
}

internal object DefaultApplicationLifecyclePlatform : ApplicationLifecyclePlatform {
    override val applicationState: UIApplicationState get() = UIApplication.sharedApplication.applicationState

    override fun addObserver(name: NSNotificationName, block: (NSNotification?) -> Unit): NSObjectProtocol =
        NSNotificationCenter.defaultCenter.addObserverForName(
            name = name,
            `object` = null,
            queue = NSOperationQueue.mainQueue,
            usingBlock = block,
        )

    override fun removeObserver(observer: NSObjectProtocol) {
        NSNotificationCenter.defaultCenter.removeObserver(observer)
    }

    override fun addOperationOnMainQueue(block: () -> Unit) {
        NSOperationQueue.mainQueue.addOperationWithBlock(block)
    }
}
