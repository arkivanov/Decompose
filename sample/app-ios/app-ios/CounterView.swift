//
//  CounterView.swift
//  app-ios
//
//  Created by Arkadii Ivanov on 13/05/2022.
//

import SwiftUI
import Shared

struct CounterView: View {
    private let counter: CounterComponent
    
    @StateValue
    private var model: CounterComponentModel
    
    @StateValue
    private var dialogSlot: ChildSlot<AnyObject, DialogComponent>
    
    init(_ counter: CounterComponent) {
        self.counter = counter
        _model = StateValue(counter.model)
        _dialogSlot = StateValue(counter.dialogSlot)
    }
    
    var body: some View {
        VStack(alignment: .center, spacing: 8) {
            Text(model.title)
                .bold()
            
            Text(model.text)

            Button("Info", action: counter.onInfoClicked)

            Button("Next", action: counter.onNextClicked)

            Button("Prev", action: counter.onPrevClicked)
                .disabled(!model.isBackEnabled)
        }
        .alert(
            item: dialogSlot.child?.instance,
            onDismiss: { $0.onDismissClicked() },
            title: { Text($0.title) },
            message: { Text($0.message) },
            actions: { _ in Button("OK", action: {}) }
        )
    }
}

extension View {
    @ViewBuilder func alert<T, A>(
        item: T?,
        onDismiss: @escaping (T) -> Void,
        title: (T) -> Text,
        message: (T) -> Text,
        actions: (T) -> A
    ) -> some View where A : View {
        if let item = item {
            alert(
                title(item),
                isPresented: Binding(get: { true }, set: {_,_ in onDismiss(item) }),
                actions: { actions(item) },
                message: { message(item) }
            )
        } else {
            self
        }
    }
}

struct CounterView_Previews: PreviewProvider {
    static var previews: some View {
        CounterView(PreviewCounterComponent())
    }
}
