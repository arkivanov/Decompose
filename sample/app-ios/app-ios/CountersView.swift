//
//  CountersView.swift
//  app-ios
//
//  Created by Arkadii Ivanov on 13/05/2022.
//

import SwiftUI
import Shared

struct CountersView: View {
    @ObservedObject
    private var childStack: ObservableValue<ChildStack<AnyObject, CounterComponent>>
    
    private var stack: ChildStack<AnyObject, CounterComponent> { childStack.value }
    
    init(_ counters: CountersComponent) {
        childStack = ObservableValue(counters.childStack)
    }
    
    var body: some View {
        StackView(
            stackValue: childStack,
            getTitle: { $0.model.value.title },
            onBack: stack.active.instance.onPrevClicked,
            childContent: CounterView.init
        )
    }
}

struct CountersView_Previews: PreviewProvider {
    static var previews: some View {
        CountersView(PreviewCountersComponent())
    }
}

class PreviewCountersComponent: CountersComponent {
    let childStack: Value<ChildStack<AnyObject, CounterComponent>> =
    simpleChildStack(PreviewCounterComponent())
}
