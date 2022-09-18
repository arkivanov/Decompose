//
//  MultiPaneView.swift
//  app-ios
//
//  Created by Arkadii Ivanov on 13/05/2022.
//

import SwiftUI
import Shared

private let listPaneWeight = CGFloat(0.4)
private let detailsPaneWeight = CGFloat(0.6)

struct MultiPaneView: View {
    private let component: MultiPane
    
    @ObservedObject
    private var observableModel: ObservableValue<MultiPaneModel>
    
    @ObservedObject
    private var listChildStack: ObservableValue<ChildStack<AnyObject, MultiPaneListChild>>
    
    @ObservedObject
    private var detailsChildStack: ObservableValue<ChildStack<AnyObject, MultiPaneDetailsChild>>
    
    private var model: MultiPaneModel { observableModel.value }
    private var activeListChild: MultiPaneListChild { listChildStack.value.active.instance }
    private var activeDetailsChild: MultiPaneDetailsChild { detailsChildStack.value.active.instance }
    
    init(_ component: MultiPane) {
        self.component = component
        observableModel = ObservableValue(component.models)
        listChildStack = ObservableValue(component.listChildStack)
        detailsChildStack = ObservableValue(component.detailsChildStack)
    }
    
    var body: some View {
        ZStack(alignment: .top) {
            ListPane(listChild: activeListChild, isMultiPane: model.isMultiPane)
            DetailsPane(detailsChild: activeDetailsChild, isMultiPane: model.isMultiPane)
        }.onAppear { component.setMultiPane(isMultiPane: deviceRequiresMultiPane()) }
    }
}

struct ListPane: View {
    let listChild: MultiPaneListChild
    let isMultiPane: Bool
    
    var body: some View {
        switch listChild {
        case let list as MultiPaneListChild.List:
            GeometryReader { metrics in
                HStack {
                    ArticleListView(list.component)
                        .frame(width: isMultiPane ? metrics.size.width * listPaneWeight : metrics.size.width)
                    
                    if isMultiPane {
                        Spacer().frame(width: metrics.size.width * detailsPaneWeight)
                    }
                }
            }
            
        default: EmptyView()
        }
    }
}

struct DetailsPane: View {
    let detailsChild: MultiPaneDetailsChild
    let isMultiPane: Bool
    
    var body: some View {
        switch detailsChild {
        case let details as MultiPaneDetailsChild.Details:
            GeometryReader { metrics in
                HStack {
                    if isMultiPane {
                        Spacer().frame(width: metrics.size.width * listPaneWeight)
                    }
                    
                    ArticleDetailsView(details.component)
                        .frame(width: isMultiPane ? metrics.size.width * detailsPaneWeight : metrics.size.width)
                }
            }
            
        default: EmptyView()
        }
    }
}

private func deviceRequiresMultiPane() -> Bool {
    return UIDevice.current.userInterfaceIdiom == .pad
}

struct MultiPaneView_Previews: PreviewProvider {
    static var previews: some View {
        MultiPaneView(MultiPanePreview())
    }
}

class MultiPanePreview: MultiPane {
    var listChildStack: ReqValue<ChildStack<AnyObject, MultiPaneListChild>> =
        simpleChildStack(.List(component: ArticleListPreview()))

    var detailsChildStack: ReqValue<ChildStack<AnyObject, MultiPaneDetailsChild>> =
        simpleChildStack(.Details(component: ArticleDetailsPreview()))

    var models: ReqValue<MultiPaneModel> = value(MultiPaneModel(isMultiPane: true))

    func setMultiPane(isMultiPane: Bool) {}
}
