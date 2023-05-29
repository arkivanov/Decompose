//
//  CountersView.swift
//  app-ios
//
//  Created by Arkadii Ivanov on 13/05/2022.
//

import SwiftUI
import Shared

struct CountersView: View {
    private let counters: CountersComponent
    
    init(_ counters: CountersComponent) {
        self.counters = counters
    }
    
    var body: some View {
        StackView(
            stackValue: StateValue(counters.childStack),
            getTitle: { $0.model.value.title },
            onBack: counters.onBackClicked,
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
    var backHandler: BackHandler = BackDispatcherKt.BackDispatcher()
    let childStack: Value<ChildStack<AnyObject, CounterComponent>> = simpleChildStack(PreviewCounterComponent())
    
    func onBackClicked(toIndex: Int32) {}
    func onBackClicked() {}
}
