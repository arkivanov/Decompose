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
    private var listRouterState: ObservableValue<RouterState<AnyObject, MultiPaneListChild>>
    
    @ObservedObject
    private var detailsRouterState: ObservableValue<RouterState<AnyObject, MultiPaneDetailsChild>>
    
    private var model: MultiPaneModel { observableModel.value }
    private var activeListChild: MultiPaneListChild { listRouterState.value.activeChild.instance }
    private var activeDetailsChild: MultiPaneDetailsChild { detailsRouterState.value.activeChild.instance }
    
    init(_ component: MultiPane) {
        self.component = component
        observableModel = ObservableValue(component.models)
        listRouterState = ObservableValue(component.listRouterState)
        detailsRouterState = ObservableValue(component.detailsRouterState)
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
    var listRouterState: Value<RouterState<AnyObject, MultiPaneListChild>> =
        simpleRouterState(.List(component: ArticleListPreview()))

    var detailsRouterState: Value<RouterState<AnyObject, MultiPaneDetailsChild>> =
        simpleRouterState(.Details(component: ArticleDetailsPreview()))

    var models: Value<MultiPaneModel> = mutableValue(MultiPaneModel(isMultiPane: true))

    func setMultiPane(isMultiPane: Bool) {}
}
