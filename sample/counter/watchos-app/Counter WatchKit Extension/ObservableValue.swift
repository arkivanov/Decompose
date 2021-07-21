//
//  ObservableValue.swift
//  Counter WatchKit Extension
//
//  Created by Andrew Steinmetz on 7/20/21.
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
