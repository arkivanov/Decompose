//
//  SimpleRouterState.swift
//  app-ios
//
//  Created by Arkadii Ivanov on 13/05/2022.
//

import Shared

func simpleChildStack<T : AnyObject>(_ child: T) -> Value<ChildStack<AnyObject, T>> {
    return mutableValue(
        ChildStack(
            configuration: "config" as AnyObject,
            instance: child
        )
    )
}
