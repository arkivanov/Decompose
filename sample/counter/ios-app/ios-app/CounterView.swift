//
//  CounterView.swift
//  ios-app
//
//  Created by Arkadii Ivanov on 9/11/20.
//  Copyright © 2020 Arkadii Ivanov. All rights reserved.
//

import SwiftUI
import Counter

struct CounterView: View {
    @ObservedObject
    private var data: ObservableValue<CounterData>

    init(_ model: CounterModel) {
        self.data = ObservableValue(model.data)
    }
    
    var body: some View {
        Text(data.value.text)
            .padding()
            .border(Color.black, width: 2)
    }
}

struct CounterView_Previews: PreviewProvider {
    static var previews: some View {
        CounterView(Model())
    }
    
    class Model : CounterModel {
        let data: Value<CounterData> = mutableValue(
            CounterData(text: "Counter0: 100")
        )
    }
}
