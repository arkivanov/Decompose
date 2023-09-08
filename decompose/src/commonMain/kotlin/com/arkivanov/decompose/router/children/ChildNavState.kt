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
         */
        DESTROYED,

        /**
         * The child component is instantiated and inactive. Its maximum lifecycle state is `CREATED`,
         * depending on the parent's lifecycle state. An inactive component cannot handle back button presses.
         */
        INACTIVE,

        /**
         * The child component is instantiated and active. Its maximum lifecycle state is `RESUMED`,
         * depending on the parent's lifecycle state. An active component can handle back button presses.
         * The state of the component is saved when it switches from `ACTIVE` to any other status.
         */
        ACTIVE,
    }
}
