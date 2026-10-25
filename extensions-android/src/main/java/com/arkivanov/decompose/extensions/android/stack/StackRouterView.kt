package com.arkivanov.decompose.extensions.android.stack

import android.content.Context
import android.os.Bundle
import android.os.Parcel
import android.os.Parcelable
import android.util.AttributeSet
import android.util.SparseArray
import android.view.View
import android.view.ViewGroup
import android.widget.FrameLayout
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleRegistry
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.InternalDecomposeApi
import com.arkivanov.decompose.extensions.android.DefaultViewContext
import com.arkivanov.decompose.extensions.android.R
import com.arkivanov.decompose.extensions.android.ViewContext
import com.arkivanov.decompose.extensions.android.forEachChild
import com.arkivanov.decompose.lifecycle.LifecycleRegistry
import com.arkivanov.decompose.lifecycle.mergedLifecycle
import com.arkivanov.decompose.lifecycle.moveToDestroyed
import com.arkivanov.decompose.lifecycle.moveToResumed
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.subscribe

@ExperimentalDecomposeApi
class StackRouterView @JvmOverloads constructor(
    context: Context,
    attrs: AttributeSet? = null,
    defStyleAttr: Int = 0
) : FrameLayout(context, attrs, defStyleAttr) {

    private var currentStack: ChildStack<*, *>? = null
    private var currentChild: ActiveChild<*, *>? = null
    private val inactiveChildren = HashMap<String, InactiveChild>()
    private var savedState: Bundle? = null

    /**
     * Renders the active child of the provided [stack].
     * The subscription follows [ObserveLifecycleMode.START_STOP][com.arkivanov.decompose.value.ObserveLifecycleMode.START_STOP].
     * Each child view gets a [Lifecycle] merged from the provided [lifecycle] and a view lifecycle that is
     * [Lifecycle.State.RESUMED] while that child is active, and [Lifecycle.State.DESTROYED] when it is replaced.
     *
     * @param stack an observable [ChildStack] to be displayed.
     * @param lifecycle a [Lifecycle] that controls the subscription and is merged into each child view's lifecycle.
     * @param replaceChildView renders the active child. The receiver [ViewContext] exposes the child view lifecycle.
     */
    fun <C : Any, T : Any> children(
        stack: Value<ChildStack<C, T>>,
        lifecycle: Lifecycle,
        replaceChildView: ViewContext.(parent: ViewGroup, newStack: ChildStack<C, T>, oldStack: ChildStack<C, T>?) -> Unit,
    ) {
        stack.subscribe(lifecycle) {
            onStackChanged(it, lifecycle, replaceChildView)
        }
    }

    override fun onSaveInstanceState(): Parcelable {
        val bundle = savedState?.let(::Bundle) ?: Bundle()

        inactiveChildren.forEach { (key, childState) ->
            bundle.putSparseParcelableArray(key, childState.savedState)
        }

        return SavedState(superState = super.onSaveInstanceState(), state = bundle)
    }

    override fun onRestoreInstanceState(state: Parcelable?) {
        val savedState = state as SavedState? ?: return

        super.onRestoreInstanceState(savedState.superState)

        this.savedState = savedState.state
    }


    private fun findChildView(key: String): View? {
        forEachChild {
            if (it.key == key) {
                return it
            }
        }

        return null
    }

    private fun findNewChildView(): View {
        var newChildView: View? = null
        forEachChild {
            if (it.key == null) {
                check(newChildView == null) { "More than one child view added" }
                newChildView = it
            }
        }

        return newChildView ?: error("No child view added")
    }

    private var View.key: String?
        get() = getTag(R.id.decompose_router_view_key) as String?
        set(value) {
            setTag(R.id.decompose_router_view_key, value)
        }

    @OptIn(InternalDecomposeApi::class)
    private fun <C : Any, T : Any> onStackChanged(
        stack: ChildStack<C, T>,
        lifecycle: Lifecycle,
        replaceChildView: ViewContext.(parent: ViewGroup, newStack: ChildStack<C, T>, oldStack: ChildStack<C, T>?) -> Unit,
    ) {
        val activeChild = stack.active

        @Suppress("UNCHECKED_CAST")
        val currentStack = currentStack as ChildStack<C, T>?

        @Suppress("UNCHECKED_CAST")
        val currentChild = currentChild as ActiveChild<C, T>?

        if (currentChild?.child?.key == activeChild.key) {
            return
        }

        val currentChildView = currentChild?.let { findChildView(it.key) }

        if ((currentChildView != null) && stack.backStack.any { it.key == currentChild.child.key }) {
            inactiveChildren[currentChild.key] = InactiveChild(currentChild.child.key, currentChildView.saveHierarchyState())
        }
        currentChild?.lifecycle?.moveToDestroyed()

        val childViewLifecycle = LifecycleRegistry()
        val viewContext = DefaultViewContext(this, mergedLifecycle(lifecycle, childViewLifecycle))
        viewContext.replaceChildView(this, stack, currentStack)

        val newChildView = findNewChildView()

        val activeChildKey = activeChild.key

        newChildView.key = activeChildKey

        val inactiveChild: InactiveChild? = inactiveChildren.remove(activeChildKey)
        if (inactiveChild != null) {
            newChildView.restoreHierarchyState(inactiveChild.savedState)
        } else {
            @Suppress("DEPRECATION")
            val childSavedState: SparseArray<Parcelable>? = savedState?.getSparseParcelableArray(activeChildKey)
            if (childSavedState != null) {
                savedState?.remove(activeChildKey)
                newChildView.restoreHierarchyState(childSavedState)
            }
        }

        childViewLifecycle.moveToResumed()

        this.currentStack = stack
        this.currentChild = ActiveChild(activeChildKey, activeChild, childViewLifecycle)

        inactiveChildren.values.removeAll { child ->
            stack.backStack.none { it.key == child.key }
        }
    }

    private companion object {
        fun View.saveHierarchyState(): SparseArray<Parcelable> =
            SparseArray<Parcelable>()
                .also(::saveHierarchyState)
    }

    private class ActiveChild<out C : Any, out T : Any>(
        val key: String,
        val child: Child<C, T>,
        val lifecycle: LifecycleRegistry
    )

    private class InactiveChild(
        val key: String,
        val savedState: SparseArray<Parcelable>
    )

    private class SavedState(
        val superState: Parcelable?,
        val state: Bundle
    ) : Parcelable {
        override fun writeToParcel(parcel: Parcel, flags: Int) {
            parcel.writeParcelable(superState, 0)
            parcel.writeBundle(state)
        }

        override fun describeContents(): Int = 0

        companion object CREATOR : Parcelable.ClassLoaderCreator<SavedState> {
            @Suppress("DEPRECATION")
            override fun createFromParcel(source: Parcel, loader: ClassLoader?): SavedState =
                SavedState(
                    superState = source.readParcelable(loader),
                    state = requireNotNull(source.readBundle(loader)),
                )

            override fun createFromParcel(parcel: Parcel): SavedState = createFromParcel(parcel, null)

            override fun newArray(size: Int): Array<SavedState?> = arrayOfNulls(size)
        }
    }
}
