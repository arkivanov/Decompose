//
//  RouterView.swift
//  ios-app
//
//  Created by Arkadii Ivanov on 10/7/20.
//  Copyright © 2020 Arkadii Ivanov. All rights reserved.
//

import SwiftUI
import Todo

struct RouterView<T : Hashable & AnyObject, Content : View> : View {
    @ObservedObject
    private var state: ObservableValue<RouterState<AnyObject, T>>
    private let render: (T, _ isHidden: Bool) -> Content

    init(_ routerState: Value<RouterState<AnyObject, T>>, @ViewBuilder render: @escaping (T, _ isHidden: Bool) -> Content) {
        self.state = ObservableValue(routerState)
        self.render = render
    }
    
    var body: some View {
        let routerState = self.state.value
        
        let backstack =
            routerState
                .backStack
                .compactMap { $0 as? RouterStateEntryCreated }
                .map { $0.component }
        
        return ZStack {
            ForEach(backstack, id: \.hashValue) {
                self.render($0, true)
            }

            self.render(routerState.activeChild.component, false)
        }
    }
}
