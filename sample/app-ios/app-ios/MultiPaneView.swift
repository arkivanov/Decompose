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
    private let component: MultiPaneComponent
    
    @ObservedObject
    private var observableModel: ObservableValue<MultiPaneComponentModel>
    
    @ObservedObject
    private var listChildStack: ObservableValue<ChildStack<AnyObject, MultiPaneComponentListChild>>
    
    @ObservedObject
    private var detailsChildStack: ObservableValue<ChildStack<AnyObject, MultiPaneComponentDetailsChild>>
    
    private var model: MultiPaneComponentModel { observableModel.value }
    private var activeListChild: MultiPaneComponentListChild { listChildStack.value.active.instance }
    private var activeDetailsChild: MultiPaneComponentDetailsChild { detailsChildStack.value.active.instance }
    
    init(_ component: MultiPaneComponent) {
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
    let listChild: MultiPaneComponentListChild
    let isMultiPane: Bool
    
    var body: some View {
        switch listChild {
        case let list as MultiPaneComponentListChild.List:
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
    let detailsChild: MultiPaneComponentDetailsChild
    let isMultiPane: Bool
    
    var body: some View {
        switch detailsChild {
        case let details as MultiPaneComponentDetailsChild.Details:
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
        MultiPaneView(PreviewMultiPaneComponent())
    }
}

class PreviewMultiPaneComponent: MultiPaneComponent {
    var listChildStack: Value<ChildStack<AnyObject, MultiPaneComponentListChild>> =
        simpleChildStack(.List(component: PreviewArticleListComponent()))

    var detailsChildStack: Value<ChildStack<AnyObject, MultiPaneComponentDetailsChild>> =
        simpleChildStack(.Details(component: PreviewArticleDetailsComponent()))

    var models: Value<MultiPaneComponentModel> = mutableValue(MultiPaneComponentModel(isMultiPane: true))

    func setMultiPane(isMultiPane: Bool) {}
}
