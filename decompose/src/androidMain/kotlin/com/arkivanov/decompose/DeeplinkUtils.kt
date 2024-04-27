package com.arkivanov.decompose

import android.app.Activity
import android.app.TaskStackBuilder
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import androidx.core.os.bundleOf
import androidx.savedstate.SavedStateRegistryOwner

/**
 * Extracts a deep link URL from this [Activity] [Intent], calls [block]
 * function with the extracted deep link URL (if any) and returns the result.
 *
 * This function must be called from [Activity.onCreate] method.
 *
 * It is strongly recommended to always use the `standard` (default)
 * `launchMode` for the [Activity] when handling deep links. This function takes
 * care of restarting the [Activity] task and finishing this [Activity] if needed,
 * in which case the returned value is `null`.
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
 *             } ?: return
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
): T? where A : Activity, A : SavedStateRegistryOwner {
    if (restartIfNeeded()) {
        return null
    }

    val savedState: Bundle? = savedStateRegistry.consumeRestoredStateForKey(key = KEY_SAVED_DEEP_LINK_STATE)
    val isDeepLinkHandled = savedState?.getBoolean(KEY_DEEP_LINK_HANDLED) ?: false
    val deepLink = intent.data.takeUnless { isDeepLinkHandled }

    savedStateRegistry.registerSavedStateProvider(key = KEY_SAVED_DEEP_LINK_STATE) {
        bundleOf(KEY_DEEP_LINK_HANDLED to (isDeepLinkHandled || (deepLink != null)))
    }

    return block(deepLink)
}

// Derived from https://cs.android.com/androidx/platform/frameworks/support/+/androidx-main:navigation/navigation-runtime/src/main/java/androidx/navigation/NavController.kt;l=1486;drc=fd7d0dc4a56c2aef65424db7986aa057f9717661
private fun Activity.restartIfNeeded(): Boolean {
    if ((intent.flags and Intent.FLAG_ACTIVITY_NEW_TASK == 0) || (intent.flags and Intent.FLAG_ACTIVITY_CLEAR_TASK != 0)) {
        return false
    }

    // Someone called us with NEW_TASK, but we don't know what state our whole
    // task stack is in, so we need to manually restart the whole stack to
    // ensure we're in a predictably good state.

    intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TASK)
    TaskStackBuilder.create(this).addNextIntentWithParentStack(intent).startActivities()
    finish()
    // Disable second animation in case where the Activity is created twice.
    @Suppress("DEPRECATION")
    overridePendingTransition(0, 0)

    return true
}

private const val KEY_SAVED_DEEP_LINK_STATE = "SAVED_DEEP_LINK_STATE"
private const val KEY_DEEP_LINK_HANDLED = "DEEP_LINK_HANDLED"

