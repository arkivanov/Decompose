//
//  SimpleRouterState.swift
//  ios-app
//
//  Created by Nikola Milovic on 12/06/2021.
//
import MasterDetail

func simpleRouterState<T : AnyObject>(_ child: T) -> Value<RouterState<AnyObject, T>> {
    return valueOf(
        RouterState(
            activeChild: ChildCreated(
                configuration: "config" as AnyObject,
                instance: child
            ),
            backStack: []
        )
    )
}
