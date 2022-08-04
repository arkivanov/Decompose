package com.arkivanov.sample.shared

import com.arkivanov.decompose.value.Value
import react.ChildrenBuilder
import react.FC
import react.StateInstance
import react.key
import react.useEffectOnce
import react.useState

internal fun <T : Any> Value<T>.useAsState(): StateInstance<T> {
    val state = useState { value }
    val (_, set) = state

    useEffectOnce {
        val observer: (T) -> Unit = { set(it) }
        subscribe(observer)
        cleanup { unsubscribe(observer) }
    }

    return state
}

internal fun <T : Any> ChildrenBuilder.componentContent(component: T, content: FC<RProps<T>>) {
    content {
        this.component = component
        key = component.uniqueKey()
    }
}
