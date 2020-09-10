//
//  ObservableState.swift
//  ios-app
//
//  Created by Arkadii Ivanov on 9/12/20.
//  Copyright © 2020 Arkadii Ivanov. All rights reserved.
//

import SwiftUI
import Counter

public class ObservableValue<T : AnyObject> : ObservableObject {
    private let observableValue: Value<T>
    
    @Published
    var value: T
    
    private var observer: ((T) -> Void)?
    
    init(_ value: Value<T>) {
        self.observableValue = value
        self.value = observableValue.value
        
        self.observer = { value in
            self.value = value
        }
        observableValue.subscribe(observer: observer!)
    }
    
    deinit {
        self.observableValue.unsubscribe(observer: self.observer!)
    }
}
