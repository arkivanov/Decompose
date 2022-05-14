//
//  SimpleRouterState.swift
//  app-ios
//
//  Created by Arkadii Ivanov on 13/05/2022.
//

import Shared

func simpleRouterState<T : AnyObject>(_ child: T) -> Value<RouterState<AnyObject, T>> {
    return mutableValue(
        RouterState(
            configuration: "config" as AnyObject,
            instance: child
        )
    )
}
