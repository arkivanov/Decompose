//
//  MutableValue.swift
//  app-ios
//
//  Created by Arkadii Ivanov on 13/05/2022.
//

import Shared

func value<T: AnyObject>(_ value: T) -> ReqValue<T> {
    return ReqValueKt.asRequired(MutableValueBuilderKt.MutableValue(initialValue: value)) as! ReqValue<T>
}
