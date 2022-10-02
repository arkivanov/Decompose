package com.arkivanov.decompose.router.overlay

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.Optional
import com.arkivanov.decompose.instancekeeper.attachTo
import com.arkivanov.decompose.optionalOf
import com.arkivanov.decompose.router.stack.StackNavigationSource
import com.arkivanov.decompose.router.stack.childStack
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.operator.map
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.ParcelableContainer
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher
import kotlin.reflect.KClass

/**
 * Initializes and manages component overlay. An overlay component can be either active or dismissed (destroyed).
 *
 * @param source a source of navigation events
 * @param configurationClass a [KClass] of the component configurations
 * @param key a key of the overlay, must be unique within the parent (hosting) component,
 * default value is derived from the [configurationClass.simpleName].
 * @param initialConfiguration a component configuration that should be shown if there is
 * no saved state, return `null` to show nothing.
 * @param persistent determines whether the navigation state should pre preserved or not,
 * default is `true`.
 * @param handleBackButton determines whether the overlay should be automatically dismissed
 * on back button press or not, default is `false`.
 * @param childFactory a factory function that creates new child instances
 * @return an observable [Value] of [ChildOverlay]
 */
fun <C : Parcelable, T : Any> ComponentContext.childOverlay(
    source: OverlayNavigationSource<C>,
    configurationClass: KClass<out C>,
    key: String = "ChildOverlay_${configurationClass.simpleName}",
    initialConfiguration: () -> C? = { null },
    persistent: Boolean = true,
    handleBackButton: Boolean = false,
    childFactory: (configuration: C, ComponentContext) -> T,
): Value<ChildOverlay<C, T>> =
    childStack(
        lifecycle = lifecycle,
        stateKeeper = if (persistent) stateKeeper else StateKeeperDispatcher(),
        instanceKeeper = if (persistent) instanceKeeper else InstanceKeeperDispatcher().attachTo(lifecycle),
        backHandler = backHandler,
        source = StackNavigationSourceImpl(source),
        initialStack = { configurationStack(initialConfiguration()) },
        saveConfiguration = { ParcelableContainer(it.value) },
        restoreConfiguration = { optionalOf(it.consume(configurationClass)) },
        key = key,
        handleBackButton = handleBackButton,
        childFactory = { configuration, componentContext ->
            if (configuration.value != null) {
                optionalOf(childFactory(configuration.value, componentContext))
            } else {
                optionalOf()
            }
        },
    ).map { it.active.toChildOverlay() }

/**
 * A convenience extension function for [ComponentContext.childOverlay].
 */
inline fun <reified C : Parcelable, T : Any> ComponentContext.childOverlay(
    source: OverlayNavigationSource<C>,
    key: String = "ChildOverlay_${C::class.simpleName}",
    noinline initialConfiguration: () -> C? = { null },
    persistent: Boolean = true,
    handleBackButton: Boolean = false,
    noinline childFactory: (configuration: C, ComponentContext) -> T,
): Value<ChildOverlay<C, T>> =
    childOverlay(
        source = source,
        key = key,
        configurationClass = C::class,
        initialConfiguration = initialConfiguration,
        persistent = persistent,
        handleBackButton = handleBackButton,
        childFactory = childFactory,
    )

private fun <C : Parcelable, T : Any> Child.Created<Optional<C>, Optional<T>>.toChildOverlay(): ChildOverlay<C, T> =
    if ((configuration.value != null) && (instance.value != null)) {
        ChildOverlay(
            overlay = Child.Created(
                configuration = configuration.value,
                instance = instance.value,
            )
        )
    } else {
        ChildOverlay()
    }

private fun <C : Any> configurationStack(configuration: C?): List<Optional<C>> =
    listOfNotNull(optionalOf(), configuration?.let(::optionalOf))

private class StackNavigationSourceImpl<C : Parcelable>(
    private val delegate: OverlayNavigationSource<C>,
) : StackNavigationSource<Optional<C>> {

    private var map = HashMap<(StackNavigationSource.Event<Optional<C>>) -> Unit, (OverlayNavigationSource.Event<C>) -> Unit>()

    override fun subscribe(observer: (StackNavigationSource.Event<Optional<C>>) -> Unit) {
        check(observer !in map)

        val sourceObserver: (OverlayNavigationSource.Event<C>) -> Unit = { observer(it.toStackEvent()) }
        map += observer to sourceObserver
        delegate.subscribe(sourceObserver)
    }

    private fun OverlayNavigationSource.Event<C>.toStackEvent(): StackNavigationSource.Event<Optional<C>> =
        StackNavigationSource.Event(
            transformer = { stack -> configurationStack(transformer(stack.last().value)) },
            onComplete = { newStack, oldStack ->
                onComplete(newStack.lastOrNull()?.value, oldStack.lastOrNull()?.value)
            },
        )

    override fun unsubscribe(observer: (StackNavigationSource.Event<Optional<C>>) -> Unit) {
        map.remove(observer)?.also {
            delegate.unsubscribe(it)
        }
    }
}
