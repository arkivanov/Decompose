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
    private var componentWrappers: [StackComponent<CounterComponent>] { components.map { StackComponent($0) } }

    private var activeChild: CounterComponent { childStack.value.active.instance }

    init(_ counters: CountersComponent) {
        self.counters = counters
        childStack = ObservableValue(counters.childStack)
    }

    var body: some View {
        if #available(iOS 16, *) {
            let pathBinding = Binding(get: { componentWrappers.dropFirst() }, set: { _ in activeChild.onPrevClicked() })
            NavigationStack(path: pathBinding) {
                CounterView(components[0])
                        .navigationDestination(for: StackComponent<CounterComponent>.self) {
                            CounterView($0.component)
                        }
            }
        } else {
            CountersStackView(components: components) {
                CounterView($0)
            }
        }
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
