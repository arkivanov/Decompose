package com.arkivanov.decompose.lifecycle

import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleObserver
import kotlinx.coroutines.flow.StateFlow
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
 * An implementation of [Lifecycle] that follows the [UIApplication] lifecycle notifications.
 *
 * Since this implementation subscribes to [UIApplication] global lifecycle events,
 * the instance and all its registered observers (and whatever they capture) will stay in
 * memory until the application is destroyed. It's ok to use it in a global scope like
 * `UIApplicationDelegate`, but it may cause memory leaks when used in a narrower scope like
 * `UIViewController` if it gets destroyed earlier.
 */
class ApplicationLifecycle internal constructor(
    private val platform: Platform,
) : Lifecycle() {
    constructor() : this(DefaultPlatform)

    private val lifecycle = LifecycleRegistry()

    override val currentState: State by lifecycle::currentState
    override val currentStateFlow: StateFlow<State> = lifecycle.currentStateFlow

    private val willEnterForegroundObserver =
        platform.addObserver(UIApplicationWillEnterForegroundNotification) { lifecycle.moveToStarted() }

    private val didBecomeActiveObserver =
        platform.addObserver(UIApplicationDidBecomeActiveNotification) { lifecycle.moveToResumed() }

    private val willResignActiveObserver =
        platform.addObserver(UIApplicationWillResignActiveNotification) { lifecycle.moveToStarted() }

    private val didEnterBackgroundObserver =
        platform.addObserver(UIApplicationDidEnterBackgroundNotification) { lifecycle.moveToCreated() }

    private val willTerminateObserver =
        platform.addObserver(UIApplicationWillTerminateNotification) { lifecycle.moveToDestroyed() }

    init {
        platform.addOperationOnMainQueue {
            if (lifecycle.currentState == State.INITIALIZED) {
                when (platform.applicationState) {
                    UIApplicationState.UIApplicationStateActive -> lifecycle.moveToResumed()
                    UIApplicationState.UIApplicationStateInactive -> lifecycle.moveToStarted()
                    else -> lifecycle.moveToCreated()
                }
            }
        }

        lifecycle.doOnDestroy {
            platform.removeObserver(willEnterForegroundObserver)
            platform.removeObserver(didBecomeActiveObserver)
            platform.removeObserver(willResignActiveObserver)
            platform.removeObserver(didEnterBackgroundObserver)
            platform.removeObserver(willTerminateObserver)
        }
    }

    override fun addObserver(observer: LifecycleObserver) {
        lifecycle.addObserver(observer)
    }

    override fun removeObserver(observer: LifecycleObserver) {
        lifecycle.removeObserver(observer)
    }

    /**
     * Destroys this [ApplicationLifecycle], moving it to [Lifecycle.State.DESTROYED] state.
     * Also, unsubscribes from all [UIApplication] lifecycle notifications.
     *
     * If the current state is [Lifecycle.State.INITIALIZED], then the lifecycle is first
     * moved to [Lifecycle.State.CREATED] state and then immediately to [Lifecycle.State.DESTROYED] state.
     */
    fun destroy() {
        lifecycle.moveToDestroyed()
    }

    internal interface Platform {
        val applicationState: UIApplicationState

        fun addObserver(name: NSNotificationName, block: (NSNotification?) -> Unit): NSObjectProtocol
        fun removeObserver(observer: NSObjectProtocol)
        fun addOperationOnMainQueue(block: () -> Unit)
    }

    internal object DefaultPlatform : Platform {
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
}
