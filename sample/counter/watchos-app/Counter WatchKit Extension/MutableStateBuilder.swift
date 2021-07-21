//
//  MutableStateBuilder.swift
//  Counter WatchKit Extension
//
//  Created by Andrew Steinmetz on 7/20/21.
//

import Foundation
import Counter

func mutableValue<T: AnyObject>(_ initialValue: T) -> MutableValue<T> {
    return MutableValueBuilderKt.MutableValue(initialValue: initialValue) as! MutableValue<T>
}
