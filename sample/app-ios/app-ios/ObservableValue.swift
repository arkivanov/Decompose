//
//  ObservableValue.swift
//  app-ios
//
//  Created by Arkadii Ivanov on 13/05/2022.
//

import SwiftUI
import Shared

public class ObservableValue<T : AnyObject> : ObservableObject {
    private let observableValue: ReqValue<T>

    @Published
    var value: T

    private var observer: ((T) -> Void)?
    
    init(_ value: ReqValue<T>) {
        observableValue = value
        self.value = observableValue.value
        observer = { [weak self] value in self?.value = value }
        observableValue.subscribe(observer: observer!)
    }

    deinit {
        observableValue.unsubscribe(observer: self.observer!)
    }
}
