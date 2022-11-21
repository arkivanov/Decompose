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

    private var components: [CounterComponent] { childStack.value.items.map { $0.instance! } }

    private var activeChild: CounterComponent { childStack.value.active.instance }

    init(_ counters: CountersComponent) {
        self.counters = counters
        childStack = ObservableValue(counters.childStack)
    }

    var body: some View {
        ChildStackView(components: components, backAction: counters.onPrev) {
            CounterView($0)
        }
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
    func onPrev() {}
}
