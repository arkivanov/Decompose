//
//  CountersView.swift
//  app-ios
//
//  Created by Arkadii Ivanov on 13/05/2022.
//

import SwiftUI
import Shared

struct CountersView: View {
    private let counters: Counters

    @ObservedObject
    private var firstChildStack: ObservableValue<ChildStack<AnyObject, Counter>>

    @ObservedObject
    private var secondChildStack: ObservableValue<ChildStack<AnyObject, Counter>>

    private var firstActiveChild: Counter { firstChildStack.value.active.instance }
    private var secondActiveChild: Counter { secondChildStack.value.active.instance }

    init(_ counters: Counters) {
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
        CountersView(CountersPreview())
    }
}

class CountersPreview : Counters {
    let firstChildStack: ReqValue<ChildStack<AnyObject, Counter>> = simpleChildStack(CounterPreview())
    let secondChildStack: ReqValue<ChildStack<AnyObject, Counter>> = simpleChildStack(CounterPreview())
}
