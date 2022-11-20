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
    private var childStack: ObservableValue<ChildStack<AnyObject, CounterComponent>>

    private var activeChild: CounterComponent { childStack.value.active.instance }

    init(_ counters: CountersComponent) {
        self.counters = counters
        childStack = ObservableValue(counters.childStack)
    }

    var body: some View {
        CounterView(childStack.value.active.instance)
    }
}

struct CountersView_Previews: PreviewProvider {
    static var previews: some View {
        CountersView(PreviewCountersComponent())
    }
}

class PreviewCountersComponent : CountersComponent {
    let childStack: Value<ChildStack<AnyObject, CounterComponent>> =
        simpleChildStack(PreviewCounterComponent())
}
