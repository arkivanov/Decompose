package com.arkivanov.decompose.lifecycle

import androidx.lifecycle.Lifecycle
import platform.Foundation.NSNotification
import platform.Foundation.NSNotificationName
import platform.UIKit.UIApplicationDidBecomeActiveNotification
import platform.UIKit.UIApplicationDidEnterBackgroundNotification
import platform.UIKit.UIApplicationState
import platform.UIKit.UIApplicationState.UIApplicationStateActive
import platform.UIKit.UIApplicationState.UIApplicationStateBackground
import platform.UIKit.UIApplicationState.UIApplicationStateInactive
import platform.UIKit.UIApplicationWillEnterForegroundNotification
import platform.UIKit.UIApplicationWillResignActiveNotification
import platform.UIKit.UIApplicationWillTerminateNotification
import platform.darwin.NSObject
import platform.darwin.NSObjectProtocol
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class ApplicationLifecycleTest {

    private val platform = TestPlatform()
    private val lifecycle = ApplicationLifecycle(platform = platform)

    @Test
    fun WHEN_WillEnterForeground_notification_THEN_state_STARTED() {
        postNotification(UIApplicationWillEnterForegroundNotification)

        assertEquals(Lifecycle.State.STARTED, lifecycle.currentState)
    }

    @Test
    fun WHEN_DidBecomeActive_notification_THEN_state_RESUMED() {
        postNotification(UIApplicationDidBecomeActiveNotification)

        assertEquals(Lifecycle.State.RESUMED, lifecycle.currentState)
    }

    @Test
    fun GIVEN_state_RESUMED_WHEN_WillResignActive_notification_THEN_state_STARTED() {
        postNotification(UIApplicationDidBecomeActiveNotification)

        postNotification(UIApplicationWillResignActiveNotification)

        assertEquals(Lifecycle.State.STARTED, lifecycle.currentState)
    }

    @Test
    fun GIVEN_state_RESUMED_WHEN_DidEnterBackground_notification_THEN_state_CREATED() {
        postNotification(UIApplicationDidBecomeActiveNotification)

        postNotification(UIApplicationDidEnterBackgroundNotification)

        assertEquals(Lifecycle.State.CREATED, lifecycle.currentState)
    }

    @Test
    fun GIVEN_state_STARTED_WHEN_DidEnterBackground_notification_THEN_state_CREATED() {
        postNotification(UIApplicationWillEnterForegroundNotification)

        postNotification(UIApplicationDidEnterBackgroundNotification)

        assertEquals(Lifecycle.State.CREATED, lifecycle.currentState)
    }

    @Test
    fun GIVEN_state_RESUMED_WHEN_WillTerminate_notification_THEN_state_DESTROYED() {
        postNotification(UIApplicationDidBecomeActiveNotification)

        postNotification(UIApplicationWillTerminateNotification)

        assertEquals(Lifecycle.State.DESTROYED, lifecycle.currentState)
    }

    @Test
    fun GIVEN_state_RESUMED_WHEN_WillTerminate_notification_THEN_observers_removed() {
        postNotification(UIApplicationDidBecomeActiveNotification)

        postNotification(UIApplicationWillTerminateNotification)

        platform.assertNotificationObserversEmpty()
    }

    @Test
    fun GIVEN_state_STATED_WHEN_WillTerminate_notification_THEN_state_DESTROYED() {
        postNotification(UIApplicationWillEnterForegroundNotification)

        postNotification(UIApplicationWillTerminateNotification)

        assertEquals(Lifecycle.State.DESTROYED, lifecycle.currentState)
    }

    @Test
    fun GIVEN_state_STATED_WHEN_WillTerminate_notification_THEN_observers_removed() {
        postNotification(UIApplicationWillEnterForegroundNotification)

        postNotification(UIApplicationWillTerminateNotification)

        platform.assertNotificationObserversEmpty()
    }

    @Test
    fun GIVEN_state_CREATED_WHEN_WillTerminate_notification_THEN_state_DESTROYED() {
        postNotification(UIApplicationWillEnterForegroundNotification)
        postNotification(UIApplicationDidEnterBackgroundNotification)

        postNotification(UIApplicationWillTerminateNotification)

        assertEquals(Lifecycle.State.DESTROYED, lifecycle.currentState)
    }

    @Test
    fun GIVEN_state_CREATED_WHEN_WillTerminate_notification_THEN_observers_removed() {
        postNotification(UIApplicationWillEnterForegroundNotification)
        postNotification(UIApplicationDidEnterBackgroundNotification)

        postNotification(UIApplicationWillTerminateNotification)

        platform.assertNotificationObserversEmpty()
    }

    @Test
    fun GIVEN_state_INITIALIZED_WHEN_destroy_THEN_state_DESTROYED() {
        lifecycle.destroy()

        assertEquals(Lifecycle.State.DESTROYED, lifecycle.currentState)
    }

    @Test
    fun GIVEN_state_INITIALIZED_WHEN_destroy_THEN_observers_removed() {
        lifecycle.destroy()

        platform.assertNotificationObserversEmpty()
    }

    @Test
    fun GIVEN_state_RESUMED_WHEN_destroy_THEN_state_DESTROYED() {
        postNotification(UIApplicationDidBecomeActiveNotification)

        lifecycle.destroy()

        assertEquals(Lifecycle.State.DESTROYED, lifecycle.currentState)
    }

    @Test
    fun GIVEN_state_RESUMED_WHEN_destroy_THEN_observers_removed() {
        postNotification(UIApplicationDidBecomeActiveNotification)

        lifecycle.destroy()

        platform.assertNotificationObserversEmpty()
    }

    @Test
    fun GIVEN_state_STATED_WHEN_destroy_THEN_state_DESTROYED() {
        postNotification(UIApplicationWillEnterForegroundNotification)

        lifecycle.destroy()

        assertEquals(Lifecycle.State.DESTROYED, lifecycle.currentState)
    }

    @Test
    fun GIVEN_state_STATED_WHEN_destroy_THEN_observers_removed() {
        postNotification(UIApplicationWillEnterForegroundNotification)

        lifecycle.destroy()

        platform.assertNotificationObserversEmpty()
    }

    @Test
    fun GIVEN_state_CREATED_WHEN_destroy_THEN_state_DESTROYED() {
        postNotification(UIApplicationWillEnterForegroundNotification)
        postNotification(UIApplicationDidEnterBackgroundNotification)

        lifecycle.destroy()

        assertEquals(Lifecycle.State.DESTROYED, lifecycle.currentState)
    }

    @Test
    fun GIVEN_state_CREATED_WHEN_destroy_THEN_observers_removed() {
        postNotification(UIApplicationWillEnterForegroundNotification)
        postNotification(UIApplicationDidEnterBackgroundNotification)

        lifecycle.destroy()

        platform.assertNotificationObserversEmpty()
    }

    @Test
    fun GIVEN_state_INITIALIZED_and_applicationState_Active_WHEN_main_queue_processed_THEN_state_RESUMED() {
        platform.applicationState = UIApplicationStateActive

        platform.processMainQueue()

        assertEquals(Lifecycle.State.RESUMED, lifecycle.currentState)
    }

    @Test
    fun GIVEN_state_INITIALIZED_and_applicationState_Inactive_WHEN_main_queue_processed_THEN_state_STARTED() {
        platform.applicationState = UIApplicationStateInactive

        platform.processMainQueue()

        assertEquals(Lifecycle.State.STARTED, lifecycle.currentState)
    }

    @Test
    fun GIVEN_state_INITIALIZED_and_applicationState_Background_WHEN_main_queue_processed_THEN_state_CREATED() {
        platform.applicationState = UIApplicationStateBackground

        platform.processMainQueue()

        assertEquals(Lifecycle.State.CREATED, lifecycle.currentState)
    }

    @Test
    fun GIVEN_state_CREATED_and_applicationState_Active_WHEN_main_queue_processed_THEN_state_CREATED() {
        postNotification(UIApplicationWillEnterForegroundNotification)
        postNotification(UIApplicationDidEnterBackgroundNotification)
        platform.applicationState = UIApplicationStateActive

        platform.processMainQueue()

        assertEquals(Lifecycle.State.CREATED, lifecycle.currentState)
    }

    @Test
    fun GIVEN_state_CREATED_and_applicationState_Inactive_WHEN_main_queue_processed_THEN_state_CREATED() {
        postNotification(UIApplicationWillEnterForegroundNotification)
        postNotification(UIApplicationDidEnterBackgroundNotification)
        platform.applicationState = UIApplicationStateInactive

        platform.processMainQueue()

        assertEquals(Lifecycle.State.CREATED, lifecycle.currentState)
    }

    @Test
    fun GIVEN_state_RESUMED_and_applicationState_Background_WHEN_main_queue_processed_THEN_state_RESUMED() {
        postNotification(UIApplicationDidBecomeActiveNotification)
        platform.applicationState = UIApplicationStateBackground

        platform.processMainQueue()

        assertEquals(Lifecycle.State.RESUMED, lifecycle.currentState)
    }

    private fun postNotification(name: NSNotificationName) {
        platform.postNotification(name = name)
    }

    private class TestPlatform : ApplicationLifecycle.Platform {
        private val notificationObservers = HashMap<NSObjectProtocol, Pair<NSNotificationName, (NSNotification?) -> Unit>>()
        private val mainQueue = ArrayList<() -> Unit>()
        override var applicationState: UIApplicationState = UIApplicationStateActive

        override fun addObserver(name: NSNotificationName, block: (NSNotification?) -> Unit): NSObjectProtocol {
            val handle = NSObject()
            notificationObservers += handle to (name to block)

            return handle
        }

        override fun removeObserver(observer: NSObjectProtocol) {
            notificationObservers -= observer
        }

        fun postNotification(name: NSNotificationName) {
            notificationObservers.values
                .firstOrNull { (observerName, _) -> observerName == name }
                ?.second
                ?.invoke(null)
        }

        fun assertNotificationObserversEmpty() {
            assertTrue(notificationObservers.isEmpty())
        }

        override fun addOperationOnMainQueue(block: () -> Unit) {
            mainQueue += block
        }

        fun processMainQueue() {
            val blocks = mainQueue.toList()
            mainQueue.clear()
            blocks.forEach { it() }
        }
    }
}
