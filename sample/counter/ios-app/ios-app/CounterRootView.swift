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
    private let counterRoot: CounterRoot
    
    @ObservedObject
    private var routerState: ObservableValue<RouterState<AnyObject, CounterRootChild>>
    
    init(_ counterRoot: CounterRoot) {
        self.counterRoot = counterRoot
        self.routerState = ObservableValue(counterRoot.routerState)
    }
    
    
    var body: some View {
        let activeChild = self.routerState.value.activeChild.instance
        
        return VStack(spacing: 8) {
            CounterView(self.counterRoot.counter)
            
            Button(action: self.counterRoot.onNextChild, label: { Text("Next Child") })
            
            Button(action: self.counterRoot.onPrevChild, label: { Text("Prev Child") })
                .disabled(!activeChild.isBackEnabled)
            
            CounterInnerView(activeChild.inner)
        }
    }
}

struct CounterRootView_Previews: PreviewProvider {
    static var previews: some View {
        CounterRootView(CoutnerRootPreview())
    }
    
    class CoutnerRootPreview : CounterRoot {
        let counter: Counter = CounterView_Previews.CounterPreview()
        
        let routerState: Value<RouterState<AnyObject, CounterRootChild>> = simpleRouterState(
            CounterRootChild(
                inner: CounterInnerView_Previews.CounterInnerPreview(),
                isBackEnabled: true
            )
        )
        
        func onNextChild() {
        }
        
        func onPrevChild() {
        }
    }
}
