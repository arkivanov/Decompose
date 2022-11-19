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
    
    @ObservedObject
    private var observableModel: ObservableValue<CounterComponentModel>
    
    @ObservedObject
    private var dialogOverlay: ObservableValue<ChildOverlay<AnyObject, DialogComponent>>

    private var model: CounterComponentModel { observableModel.value }

    init(_ counter: CounterComponent) {
        self.counter = counter
        observableModel = ObservableValue(counter.model)
        dialogOverlay = ObservableValue(counter.dialogOverlay)
    }

    var body: some View {
        VStack(spacing: 8) {
            Text(model.title)
                .font(.title)
            
            Text(model.text)
           
            Button("Info", action: counter.onInfoClicked)
            
            Button("Next", action: counter.onNextClicked)
            
            Button("Prev", action: counter.onPrevClicked)
                .disabled(!model.isBackEnabled)
        }
        .padding()
        .frame(width: 180)
        .border(Color.black, width: 2)
        .alert(
            item: dialogOverlay.value.overlay?.instance,
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

class PreviewCounterComponent : CounterComponent {
    let model: Value<CounterComponentModel> = mutableValue(
        CounterComponentModel(
            title: "Counter 0",
            text: "123",
            isBackEnabled: false
        )
    )
    
    let dialogOverlay: Value<ChildOverlay<AnyObject, DialogComponent>> =
        mutableValue(ChildOverlay(overlay: nil))
    
    func onInfoClicked() {}
    func onNextClicked() {}
    func onPrevClicked() {}
}

