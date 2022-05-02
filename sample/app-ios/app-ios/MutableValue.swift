//
//  MutableValue.swift
//  app-ios
//
//  Created by Arkadii Ivanov on 13/05/2022.
//

import Shared

func mutableValue<T: AnyObject>(_ initialValue: T) -> MutableValue<T> {
    return MutableValueBuilderKt.MutableValue(initialValue: initialValue) as! MutableValue<T>
}
