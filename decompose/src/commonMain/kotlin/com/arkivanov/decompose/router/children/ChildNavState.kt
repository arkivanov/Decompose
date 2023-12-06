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
         * The child component is destroyed but still managed, e.g. it's state may be saved and restored later.
         * The state of the component is saved when it switches from any status to `DESTROYED`.
         */
        DESTROYED,

        /**
         * The child component is instantiated and its maximum lifecycle state is `CREATED`,
         * depending on the parent's lifecycle state. A `CREATED` component cannot handle back button presses.
         */
        CREATED,

        /**
         * The child component is instantiated and its maximum lifecycle state is `STARTED`,
         * depending on the parent's lifecycle state. A `STARTED` component can handle back button presses.
         */
        STARTED,

        /**
         * The child component is instantiated and its maximum lifecycle state is `RESUMED`,
         * depending on the parent's lifecycle state. A `RESUMED` component can handle back button presses.
         */
        RESUMED,
    }
}
