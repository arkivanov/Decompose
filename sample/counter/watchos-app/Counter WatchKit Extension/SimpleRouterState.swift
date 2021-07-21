//
//  SimpleRouterState.swift
//  Counter WatchKit Extension
//
//  Created by Andrew Steinmetz on 7/20/21.
//

import Counter

func simpleRouterState<T : AnyObject>(_ child: T) -> Value<RouterState<AnyObject, T>> {
    return mutableValue(
        RouterState(
            activeChild: ChildCreated(
                configuration: "config" as AnyObject,
                instance: child
            ),
            backStack: []
        )
    )
}
