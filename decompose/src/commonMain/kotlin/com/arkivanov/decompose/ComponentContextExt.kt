package com.arkivanov.decompose

import com.arkivanov.decompose.backhandler.child
import com.arkivanov.decompose.instancekeeper.attachTo
import com.arkivanov.decompose.instancekeeper.child
import com.arkivanov.decompose.lifecycle.MergedLifecycle
import com.arkivanov.decompose.statekeeper.child
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher

/**
 * Creates a new instance of child [ComponentContext] and attaches it the parent (`this`) [ComponentContext].
 * The lifecycle of the returned [ComponentContext] is the same as the parent's.
 *
 * @param key A key of the child [ComponentContext], must be unique within the parent [ComponentContext].
 */
fun ComponentContext.childContext(key: String): ComponentContext =
    DefaultComponentContext(
        lifecycle = lifecycle,
        stateKeeper = stateKeeper.child(key),
        instanceKeeper = instanceKeeper.child(key),
        backHandler = backHandler.child(),
    )

/**
 * Creates a new instance of child [ComponentContext] and attaches it the parent (`this`) [ComponentContext].
 * The lifecycle of the returned [ComponentContext] honours both the parent's lifecycle and the supplied [lifecycle].
 *
 * @param key A key of the child [ComponentContext], must be unique within the parent [ComponentContext].
 * @param lifecycle A [Lifecycle] of the child [ComponentContext] to be merged with the parent [Lifecycle].
 * [LifecycleRegistry][com.arkivanov.essenty.lifecycle.LifecycleRegistry] can be passed for manual control.
 * The following conditions apply:
 * - The resulting [Lifecycle] of the child component will honour both the parent (`this`) [Lifecycle] and the supplied one.
 * - When the supplied [Lifecycle] is explicitly destroyed, the child [ComponentContext] detaches from its parent.
 * @param persistent A flag indicating whether the child [ComponentContext] should be persistent or not.
 * A persistent child [ComponentContext] automatically saves the child state
 * via [StateKeeper][com.arkivanov.essenty.statekeeper.StateKeeper] and retains instances
 * via [InstanceKeeper][com.arkivanov.essenty.instancekeeper.InstanceKeeper]. In this case **it is your responsibility**
 * to recreate all **currently attached** child components on configuration changes or process death.
 * Otherwise, a memory leak may occur. If the component is not persistent, it won't save the state and won't
 * retain instances. Therefore, it is safe to not recreate it on configuration changes or process death.
 */
@DelicateDecomposeApi
fun ComponentContext.childContext(key: String, lifecycle: Lifecycle, persistent: Boolean): ComponentContext =
    DefaultComponentContext(
        lifecycle = MergedLifecycle(this.lifecycle, lifecycle),
        stateKeeper = if (persistent) stateKeeper.child(key, lifecycle) else StateKeeperDispatcher(),
        instanceKeeper = if (persistent) instanceKeeper.child(key, lifecycle) else InstanceKeeperDispatcher().attachTo(this.lifecycle),
        backHandler = backHandler.child(lifecycle),
    )
