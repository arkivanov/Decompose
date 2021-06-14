//
//  MutableStateBuilder.swift
//  iosApp
//
//  Created by Nikola Milovic on 12/06/2021.
//

import Foundation
import MasterDetail

func valueOf<T: AnyObject>(_ value: T) -> Value<T> {
    return MutableValueBuilderKt.MutableValue(initialValue: value) as! MutableValue<T>
}
