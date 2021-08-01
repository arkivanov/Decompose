//
//  CounterInnerView.swift
//  Counter WatchKit Extension
//
//  Created by Andrew Steinmetz on 7/20/21.
//

import SwiftUI
import Counter

struct CounterInnerView: View {
    private let counterInner: CounterInner
    
    @ObservedObject
    private var leftRouterState: ObservableValue<RouterState<AnyObject, CounterInnerChild>>
    
    @ObservedObject
    private var rightRouterState: ObservableValue<RouterState<AnyObject, CounterInnerChild>>
    
    init(_ counterInner: CounterInner) {
        self.counterInner = counterInner
        self.leftRouterState = ObservableValue(counterInner.leftRouterState)
        self.rightRouterState = ObservableValue(counterInner.rightRouterState)
    }
    
    var body: some View {
        let activeLeftChild = self.leftRouterState.value.activeChild.instance
        let activeRightChild = self.rightRouterState.value.activeChild.instance
        
        return VStack(spacing: 8) {
            CounterView(self.counterInner.counter)
            
            HStack(spacing: 8) {
                ChildView(child: activeLeftChild, next: self.counterInner.onNextLeftChild, prev: self.counterInner.onPrevLeftChild)
                ChildView(child: activeRightChild, next: self.counterInner.onNextRightChild, prev: self.counterInner.onPrevRightChild)
            }
        }
    }
    
    private func ChildView(
        child: CounterInnerChild,
        next: @escaping () -> Void,
        prev: @escaping () -> Void
    ) -> some View {
        return VStack(spacing: 8) {
            Button(action: next, label: { Text("Next Counter") })
            
            Button(action: prev, label: { Text("Prev Counter") })
                .disabled(!child.isBackEnabled)
            
            CounterView(child.counter)
        }
    }
}

struct CounterInnerView_Previews: PreviewProvider {
    static var previews: some View {
        CounterInnerView(CounterInnerPreview())
    }
    
    class CounterInnerPreview : CounterInner {
        let counter: Counter = CounterView_Previews.CounterPreview()
        
        let leftRouterState: Value<RouterState<AnyObject, CounterInnerChild>> = simpleRouterState(
            CounterInnerChild(
                counter: CounterView_Previews.CounterPreview(),
                isBackEnabled: true
            )
        )
        
        let rightRouterState: Value<RouterState<AnyObject, CounterInnerChild>> = simpleRouterState(
            CounterInnerChild(
                counter: CounterView_Previews.CounterPreview(),
                isBackEnabled: false
            )
        )
        
        init() {
        }
        
        func onNextLeftChild() {
        }
        
        func onNextRightChild() {
        }
        
        func onPrevLeftChild() {
        }
        
        func onPrevRightChild() {
        }
    }
}
