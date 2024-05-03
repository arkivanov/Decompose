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
    
    @StateValue
    private var stack: ChildStack<AnyObject, CounterComponent>
    
    private var activeChild: ChildCreated<AnyObject, CounterComponent> { stack.active }
    
    init(_ counters: CountersComponent) {
        self.counters = counters
        _stack = StateValue(counters.stack)
    }

    var body: some View {
        CounterView(activeChild.instance)
            .id(activeChild.configuration.hash)
    }
}

struct CountersView_Previews: PreviewProvider {
    static var previews: some View {
        CountersView(PreviewCountersComponent())
    }
}
