//
//  SimpleRouterState.swift
//  app-ios
//
//  Created by Arkadii Ivanov on 13/05/2022.
//

import Shared

func simpleChildStack<T : AnyObject>(_ child: T) -> ReqValue<ChildStack<AnyObject, T>> {
    return value(
        ChildStack(
            configuration: "config" as AnyObject,
            instance: child
        )
    )
}
