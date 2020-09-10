//
//  ListView.swift
//  ios-app
//
//  Created by Arkadii Ivanov on 9/13/20.
//  Copyright © 2020 Arkadii Ivanov. All rights reserved.
//

import SwiftUI
import Todo

struct ListView: View {
    private let events: TodoListEvents

    @ObservedObject
    private var data: ObservableValue<TodoListData>
    
    init(_ model: TodoListModel) {
        self.events = model
        self.data = ObservableValue(model.data)
    }
    
    var body: some View {
        List(self.data.value.items) { item in
            HStack {
                Text(item.text)
                    .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .leading)
                    .background(Color.white)
                    .onTapGesture { withAnimation { self.events.onItemClicked(id: item.id) } }
                Image(systemName: item.isDone ? "checkmark.square" : "square")
                    .onTapGesture { self.events.onDoneChanged(id: item.id, isDone: !item.isDone) }
            }
        }
    }
}

struct ListView_Previews: PreviewProvider {
    static var previews: some View {
        ListView(Model())
    }
    
    class Model : TodoListModel {
        let data: Value<TodoListData> =
            mutableValue(
                TodoListData(
                    items: [
                        TodoItem(id: 1, order: 1, text: "Item 1", isDone: false),
                        TodoItem(id: 2, order: 2, text: "Item 2", isDone: true),
                        TodoItem(id: 3, order: 3, text: "Item 3", isDone: false)
                    ]
                )
        )
        
        func onDoneChanged(id: Int64, isDone: Bool) {
        }
        
        func onItemClicked(id: Int64) {
        }
    }
}

extension TodoItem : Identifiable {
}
