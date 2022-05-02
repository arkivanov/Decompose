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
    private var firstRouterState: ObservableValue<RouterState<AnyObject, Counter>>

    @ObservedObject
    private var secondRouterState: ObservableValue<RouterState<AnyObject, Counter>>

    private var firstActiveChild: Counter { firstRouterState.value.activeChild.instance }
    private var secondActiveChild: Counter { secondRouterState.value.activeChild.instance }

    init(_ counters: Counters) {
        self.counters = counters
        firstRouterState = ObservableValue(counters.firstRouterState)
        secondRouterState = ObservableValue(counters.secondRouterState)
    }

    var body: some View {
        VStack(spacing: 8) {
            CounterView(firstRouterState.value.activeChild.instance)
            CounterView(secondRouterState.value.activeChild.instance)
        }
    }
}

struct CountersView_Previews: PreviewProvider {
    static var previews: some View {
        CountersView(CountersPreview())
    }
}

class CountersPreview : Counters {
    let firstRouterState: Value<RouterState<AnyObject, Counter>> = simpleRouterState(CounterPreview())
    let secondRouterState: Value<RouterState<AnyObject, Counter>> = simpleRouterState(CounterPreview())
}
