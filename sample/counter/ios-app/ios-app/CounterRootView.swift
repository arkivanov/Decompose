//
//  CounterRootView.swift
//  ios-app
//
//  Created by Arkadii Ivanov on 9/12/20.
//  Copyright © 2020 Arkadii Ivanov. All rights reserved.
//

import SwiftUI
import Counter

struct CounterRootView: View {
    private let events: CounterRootContainerEvents
    private let counter: CounterModel
    
    @ObservedObject
    private var child: ObservableValue<CounterRootContainerModelChild>
    
    init(_ model: CounterRootContainerModel) {
        self.events = model
        self.counter = model.counter
        self.child = ObservableValue(model.child)
    }
    
    
    var body: some View {
        VStack(spacing: 8) {
            CounterView(self.counter)
            
            Button(action: self.events.onNextChild, label: { Text("Next Child") })
            
            Button(action: self.events.onPrevChild, label: { Text("Prev Child") })
                .disabled(!child.value.isBackEnabled)
            
            CounterInnerView(child.value.inner)
        }
    }
}

struct CounterRootView_Previews: PreviewProvider {
    static var previews: some View {
        CounterRootView(Model())
    }
    
    class Model : CounterRootContainerModel {
        let counter: CounterModel = CounterView_Previews.Model()
        
        let child: Value<CounterRootContainerModelChild> =
            mutableValue(
                CounterRootContainerModelChild(
                    inner: CounterInnerView_Previews.Model(),
                    isBackEnabled: true
                )
        )
        
        func onNextChild() {
        }
        
        func onPrevChild() {
        }
    }
}
