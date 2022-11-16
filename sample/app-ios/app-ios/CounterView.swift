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

    private var model: CounterComponentModel { observableModel.value }
    
    init(_ counter: CounterComponent) {
        self.counter = counter
        observableModel = ObservableValue(counter.model)
    }

    var body: some View {
        VStack(spacing: 8) {
            Text(model.title)
                .font(.title)
            
            Text(model.text)
            
            Button("Next", action: counter.onNextClicked)
            
            Button("Prev", action: counter.onPrevClicked)
                .disabled(!model.isBackEnabled)
        }
        .padding()
        .frame(width: 180)
        .border(Color.black, width: 2)
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

