package com.arkivanov.decompose.router

import com.arkivanov.decompose.isUnique
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.instancekeeper.getOrCreate
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.destroy
import com.arkivanov.essenty.lifecycle.doOnDestroy
import com.arkivanov.essenty.lifecycle.resume
import kotlin.properties.Delegates.observable

internal class StackHolderImpl<C : Any, T : Any>(
    private val initialStack: () -> List<C>,
    lifecycle: Lifecycle,
    private val key: String,
    private val stackSaver: StackSaver<C>,
    instanceKeeper: InstanceKeeper,
    private val routerEntryFactory: RouterEntryFactory<C, T>
) : StackHolder<C, T> {

    private val retainedInstance: RetainedInstance<C, T> = instanceKeeper.getOrCreate(key, ::RetainedInstance)

    override var stack: RouterStack<C, T>
        by observable(restoreStack() ?: createInitialStack()) { _, _, newValue ->
            retainedInstance.activeEntry = newValue.active
        }

    init {
        stackSaver.register(key) { stack }
        retainedInstance.activeEntry = stack.active
        stack.active.lifecycleRegistry.resume()

        lifecycle.doOnDestroy(::destroy)
    }

    private fun destroy() {
        stackSaver.unregister(key)

        val stack = stack
        stack.active.lifecycleRegistry.destroy()
        stack.backStack.destroy()
    }

    private fun createInitialStack(): RouterStack<C, T> {
        val initialStack = initialStack()

        check(initialStack.isNotEmpty()) { "Initial stack can not be empty" }
        check(initialStack.isUnique()) { "Configurations in the initial stack must be unique" }

        return RouterStack(
            active = routerEntryFactory(initialStack.last()),
            backStack = initialStack.dropLast(1).map { RouterEntry.Destroyed(configuration = it) }
        )
    }

    private fun restoreStack(): RouterStack<C, T>? {
        val savedStack: StackSaver.RestoredStack<C>? = stackSaver.restore(key)
        val activeRetainedEntry: RouterEntry.Created<C, T>? = retainedInstance.activeEntry

        var activeInstanceKeeperDispatcher: InstanceKeeperDispatcher? = null
        if (activeRetainedEntry != null) {
            if (savedStack != null) {
                activeInstanceKeeperDispatcher = activeRetainedEntry.instanceKeeperDispatcher
            } else {
                retainedInstance.destroyActiveEntry()
            }
        }

        return savedStack?.restore(activeInstanceKeeperDispatcher)
    }

    private fun StackSaver.RestoredStack<C>.restore(activeInstanceKeeperDispatcher: InstanceKeeperDispatcher?): RouterStack<C, T> =
        RouterStack(
            active = routerEntryFactory(
                configuration = active.configuration,
                savedState = active.savedState,
                instanceKeeperDispatcher = activeInstanceKeeperDispatcher
            ),
            backStack = backStack
        )

    private class RetainedInstance<C : Any, T : Any> : InstanceKeeper.Instance {
        var activeEntry: RouterEntry.Created<C, T>? = null

        override fun onDestroy() {
            destroyActiveEntry()
        }

        fun destroyActiveEntry() {
            activeEntry?.instanceKeeperDispatcher?.destroy()
            activeEntry = null
        }
    }
}
