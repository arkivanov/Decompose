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
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.InternalDecomposeApi
import com.arkivanov.decompose.R
import com.arkivanov.decompose.extensions.android.DefaultViewContext
import com.arkivanov.decompose.extensions.android.ViewContext
import com.arkivanov.decompose.extensions.android.forEachChild
import com.arkivanov.decompose.lifecycle.MergedLifecycle
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.observe
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.destroy
import com.arkivanov.essenty.lifecycle.resume

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

    fun <C : Any, T : Any> children(
        stack: Value<ChildStack<C, T>>,
        lifecycle: Lifecycle,
        replaceChildView: ViewContext.(parent: ViewGroup, newStack: ChildStack<C, T>, oldStack: ChildStack<C, T>?) -> Unit,
    ) {
        stack.observe(lifecycle) {
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
        replaceChildView:  ViewContext.(parent: ViewGroup, newStack: ChildStack<C, T>, oldStack: ChildStack<C, T>?) -> Unit,
    ) {
        val activeChild = stack.active

        @Suppress("UNCHECKED_CAST")
        val currentStack = currentStack as ChildStack<C, T>?

        @Suppress("UNCHECKED_CAST")
        val currentChild = currentChild as ActiveChild<C, T>?

        if (currentChild?.child?.configuration == activeChild.configuration) {
            return
        }

        val currentChildView = currentChild?.let { findChildView(it.key) }

        if ((currentChildView != null) && stack.backStack.any { it.configuration == currentChild.child.configuration }) {
            inactiveChildren[currentChild.key] = InactiveChild(currentChild.child.configuration, currentChildView.saveHierarchyState())
        }
        currentChild?.lifecycle?.destroy()

        val childViewLifecycle = LifecycleRegistry()
        val viewContext = DefaultViewContext(this, MergedLifecycle(lifecycle, childViewLifecycle))
        viewContext.replaceChildView(this, stack, currentStack)

        val newChildView = findNewChildView()

        val activeChildKey = activeChild.configuration.hashCode().toString()

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

        childViewLifecycle.resume()

        this.currentStack = stack
        this.currentChild = ActiveChild(activeChildKey, activeChild, childViewLifecycle)

        inactiveChildren.values.removeAll { child ->
            stack.backStack.none { it.configuration === child.configuration }
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
        val configuration: Any,
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
