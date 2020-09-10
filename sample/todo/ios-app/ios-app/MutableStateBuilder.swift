//
//  MutableStateBuilder.swift
//  ios-app
//
//  Created by Arkadii Ivanov on 9/14/20.
//  Copyright © 2020 Arkadii Ivanov. All rights reserved.
//

import Foundation
import Todo

func mutableValue<T: AnyObject>(_ initialValue: T) -> MutableValue<T> {
    return MutableValueBuilderKt.MutableValue(initialValue: initialValue) as! MutableValue<T>
}
