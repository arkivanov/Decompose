package com.arkivanov.decompose.router.children

/**
 * Represents a child navigation state.
 */
interface ChildNavState<out C : Any> {

    /**
     * A configuration of the child. Must be unique within the [NavState].
     */
    val configuration: C

    /**
     * Required lifecycle status of the child.
     */
    val status: Status

    /**
     * Enumerates all possible child lifecycle statuses.
     */
    enum class Status {
        /**
         * The child is destroyed but still managed, e.g. it's state may be saved and restored later.
         */
        DESTROYED,

        /**
         * The child is created but not started. The state is saved when the child switches from
         * [ACTIVE] to [INACTIVE]. Back button handling is disabled.
         */
        INACTIVE,

        /**
         * The child is created and may be resumed, depending on the lifecycle of the hosting component.
         * Back button handling is enabled.
         */
        ACTIVE,
    }
}
