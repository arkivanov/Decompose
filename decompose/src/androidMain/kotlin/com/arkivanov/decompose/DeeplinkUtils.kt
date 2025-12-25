package com.arkivanov.decompose

import android.app.Activity
import android.app.TaskStackBuilder
import android.content.Intent.FLAG_ACTIVITY_CLEAR_TASK
import android.content.Intent.FLAG_ACTIVITY_NEW_TASK
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.os.StrictMode
import android.os.StrictMode.VmPolicy
import androidx.core.os.bundleOf
import androidx.savedstate.SavedStateRegistryOwner

/**
 * Extracts a deep link URL from this [Activity.intent], calls [block]
 * function with the extracted deep link [Uri] (if any) and returns the result.
 *
 * Also restarts this `Activity` with [FLAG_ACTIVITY_CLEAR_TASK] if there is
 * a deep link and the [Activity.intent] has the [FLAG_ACTIVITY_NEW_TASK] flag set
 * and the [FLAG_ACTIVITY_CLEAR_TASK] flag is not set.
 * Returns `null` if this `Activity` restart has been initiated.
 *
 * This function must be called from [Activity.onCreate] method.
 *
 * It is [strongly recommended](https://developer.android.com/guide/navigation/design/deep-link#handle)
 * to always use the `standard` (default)
 * [launchMode](https://developer.android.com/guide/components/activities/tasks-and-back-stack#TaskLaunchModes)
 * for the [Activity] when handling deep links.
 *
 * Example of creating a root component with deep link support.
 *
 * ```kotlin
 * class MainActivity : AppCompatActivity() {
 *     override fun onCreate(savedInstanceState: Bundle?) {
 *         super.onCreate(savedInstanceState)
 *
 *         val root =
 *             handleDeepLink { uri ->
 *                 val itemId = uri?.extractItemId() // Parse the deep link
 *                 DefaultRootComponent(
 *                     componentContext = defaultComponentContext(discardSavedState = itemId != null),
 *                     itemId = itemId,
 *                 )
 *             } ?: return // Return if the Activity restart has been initiated
 *
 *         // Display the root component as usual
 *     }
 *
 *     private fun Uri.extractItemId(): String? =
 *         TODO("Extract item id from the deep link")
 * }
 * ```
 */
@ExperimentalDecomposeApi
fun <A, T : Any> A.handleDeepLink(
    block: (Uri?) -> T,
): T? where A : Activity, A : SavedStateRegistryOwner =
    handleDeepLink(
        deepLink = intent.data,
        block = block,
    )

/**
 * Calls the provided [block] function with the given [deepLink] if this is the first launch of
 * this [Activity] (e.g. not a configuration change or restoration after process death),
 * and returns the result.
 *
 * Also restarts this `Activity` with [FLAG_ACTIVITY_CLEAR_TASK] if the provided [deepLink]
 * is not `null` and [shouldRestartInNewTask] predicate returned `true`. By default,
 * [shouldRestartInNewTask] returns `true` if the [Activity.intent] has the
 * [FLAG_ACTIVITY_NEW_TASK] flag set and the [FLAG_ACTIVITY_CLEAR_TASK] flag is not set.
 * Returns `null` if this `Activity` restart has been initiated.
 *
 * This function must be called from [Activity.onCreate] method.
 *
 * It is [strongly recommended](https://developer.android.com/guide/navigation/design/deep-link#handle)
 * to always use the `standard` (default)
 * [launchMode](https://developer.android.com/guide/components/activities/tasks-and-back-stack#TaskLaunchModes)
 * for the [Activity] when handling deep links.
 *
 * Example of creating a root component with deep link support.
 *
 * ```kotlin
 * class MainActivity : AppCompatActivity() {
 *     override fun onCreate(savedInstanceState: Bundle?) {
 *         super.onCreate(savedInstanceState)
 *
 *         val root =
 *             handleDeepLink(deepLink = { intent.data?.extractItemId() }) { itemId ->
 *                 DefaultRootComponent(
 *                     componentContext = defaultComponentContext(discardSavedState = itemId != null),
 *                     itemId = itemId,
 *                 )
 *             } ?: return // Return if the Activity restart has been initiated
 *
 *         // Display the root component as usual
 *     }
 *
 *     private fun Uri.extractItemId(): String? =
 *         TODO("Extract item id from the deep link")
 * }
 * ```
 */
@ExperimentalDecomposeApi
fun <A, D : Any, T : Any> A.handleDeepLink(
    deepLink: D?,
    shouldRestartInNewTask: (D) -> Boolean = { HandleDeepLinkDefaults.shouldRestartInNewTask(this) },
    block: (D?) -> T,
): T? where A : Activity, A : SavedStateRegistryOwner {
    if ((deepLink != null) && shouldRestartInNewTask(deepLink)) {
        restart()
        return null
    }

    val savedState: Bundle? = savedStateRegistry.consumeRestoredStateForKey(key = KEY_SAVED_DEEP_LINK_STATE)
    val isDeepLinkHandled = savedState?.getBoolean(KEY_DEEP_LINK_HANDLED) ?: false

    savedStateRegistry.registerSavedStateProvider(key = KEY_SAVED_DEEP_LINK_STATE) {
        bundleOf(KEY_DEEP_LINK_HANDLED to (isDeepLinkHandled || (deepLink != null)))
    }

    return block(deepLink?.takeUnless { isDeepLinkHandled })
}

@ExperimentalDecomposeApi
object HandleDeepLinkDefaults {

    /**
     * Checks if the provided [activity] should be restarted for deep link handling.
     *
     * @return `true` if the [Activity.intent] has the [FLAG_ACTIVITY_NEW_TASK] flag set and
     * the [FLAG_ACTIVITY_CLEAR_TASK] flag is not set, `false` otherwise.
     */
    fun shouldRestartInNewTask(activity: Activity): Boolean =
        (activity.intent.flags and FLAG_ACTIVITY_NEW_TASK != 0) &&
            (activity.intent.flags and FLAG_ACTIVITY_CLEAR_TASK == 0)
}

// Derived from https://cs.android.com/androidx/platform/frameworks/support/+/androidx-main:navigation/navigation-runtime/src/main/java/androidx/navigation/NavController.kt;l=1486;drc=fd7d0dc4a56c2aef65424db7986aa057f9717661
private fun Activity.restart() {
    // Someone called us with NEW_TASK, but we don't know what state our whole
    // task stack is in, so we need to manually restart the whole stack to
    // ensure we're in a predictably good state.

    intent.addFlags(FLAG_ACTIVITY_CLEAR_TASK)

    withPermittedUnsafeIntentLaunch {
        TaskStackBuilder.create(this).addNextIntentWithParentStack(intent).startActivities()
    }

    finish()

    // Disable second animation in case where the Activity is created twice.
    @Suppress("DEPRECATION")
    overridePendingTransition(0, 0)
}

private inline fun withPermittedUnsafeIntentLaunch(block: () -> Unit) {
    val savedVmPolicy = StrictMode.getVmPolicy()
    StrictMode.setVmPolicy(savedVmPolicy.withPermittedUnsafeIntentLaunch())

    try {
        block()
    } finally {
        StrictMode.setVmPolicy(savedVmPolicy)
    }
}

private fun VmPolicy.withPermittedUnsafeIntentLaunch(): VmPolicy =
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
        VmPolicy.Builder(this).permitUnsafeIntentLaunch().build()
    } else {
        this
    }

private const val KEY_SAVED_DEEP_LINK_STATE = "SAVED_DEEP_LINK_STATE"
private const val KEY_DEEP_LINK_HANDLED = "DEEP_LINK_HANDLED"

