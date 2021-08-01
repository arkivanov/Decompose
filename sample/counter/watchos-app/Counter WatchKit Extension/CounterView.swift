//
//  CounterView.swift
//  Counter WatchKit Extension
//
//  Created by Andrew Steinmetz on 7/20/21.
//

import SwiftUI
import Counter

struct CounterView: View {
    @ObservedObject
    private var model: ObservableValue<CounterModel>

    init(_ counter: Counter) {
        self.model = ObservableValue(counter.model)
    }
    
    var body: some View {
        Text(model.value.text)
            .padding()
            .border(Color.black, width: 2)
    }
}

struct CounterView_Previews: PreviewProvider {
    static var previews: some View {
        CounterView(CounterPreview())
    }
    
    class CounterPreview : Counter {
        let model: Value<CounterModel> = mutableValue(
            CounterModel(text: "Counter0: 100")
        )
    }
}
