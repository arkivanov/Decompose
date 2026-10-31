package com.arkivanov.decompose.lifecycle

import platform.Foundation.NSNotificationCenter
import platform.UIKit.UIApplicationWillEnterForegroundNotification
import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals

@Suppress("TestFunctionName")
class ApplicationLifecyclePlatformTest {

    private val notificationName = UIApplicationWillEnterForegroundNotification
    private val platform = ApplicationLifecycle.DefaultPlatform

    @Test
    fun WHEN_addObserver_and_notification_posted_THEN_notification_received() {
        val objects = ArrayList<Any?>()

        platform.addObserver(notificationName) { objects += it?.`object` }
        NSNotificationCenter.defaultCenter.postNotificationName(aName = notificationName, `object` = "str")

        assertContentEquals(listOf("str"), objects)
    }

    @Test
    fun GIVEN_observer_added_WHEN_removeObserver_and_notification_posted_THEN_notification_not_received() {
        val objects = ArrayList<Any?>()
        val observer = platform.addObserver(notificationName) { objects += it?.`object` }

        platform.removeObserver(observer)
        NSNotificationCenter.defaultCenter.postNotificationName(aName = notificationName, `object` = "str")

        assertEquals(emptyList(), objects)
    }
}
