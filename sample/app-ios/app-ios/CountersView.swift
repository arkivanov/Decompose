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

    @ObservedObject
    private var firstChildStack: ObservableValue<ChildStack<AnyObject, CounterComponent>>

    @ObservedObject
    private var secondChildStack: ObservableValue<ChildStack<AnyObject, CounterComponent>>

    private var firstActiveChild: CounterComponent { firstChildStack.value.active.instance }
    private var secondActiveChild: CounterComponent { secondChildStack.value.active.instance }

    init(_ counters: CountersComponent) {
        self.counters = counters
        firstChildStack = ObservableValue(counters.firstChildStack)
        secondChildStack = ObservableValue(counters.secondChildStack)
    }

    var body: some View {
        VStack(spacing: 8) {
            CounterView(firstChildStack.value.active.instance)
            CounterView(secondChildStack.value.active.instance)
        }
    }
}

struct CountersView_Previews: PreviewProvider {
    static var previews: some View {
        CountersView(PreviewCountersComponent())
    }
}

class PreviewCountersComponent : CountersComponent {
    let firstChildStack: Value<ChildStack<AnyObject, CounterComponent>> = simpleChildStack(PreviewCounterComponent())
    let secondChildStack: Value<ChildStack<AnyObject, CounterComponent>> = simpleChildStack(PreviewCounterComponent())
}
