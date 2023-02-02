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
    private var children: ObservableValue<MultiPaneComponentChildren>
    
    private var isMultiPane: Bool { children.value.isMultiPane }
    private var listComponent: ArticleListComponent { children.value.listChild.instance }
    private var detailsComponent: ArticleDetailsComponent? { children.value.detailsChild?.instance }
    
    init(_ component: MultiPaneComponent) {
        self.component = component
        children = ObservableValue(component.children)
    }
    
    var body: some View {
        ZStack(alignment: .top) {
            ListPane(
                listComponent: listComponent,
                isMultiPane: isMultiPane,
                isVisible: isMultiPane || (detailsComponent == nil)
            )
            
            DetailsPane(
                detailsComponent: detailsComponent,
                isMultiPane: isMultiPane
            )
        }.onAppear { component.setMultiPane(isMultiPane: deviceRequiresMultiPane()) }
    }
}

struct ListPane: View {
    let listComponent: ArticleListComponent
    let isMultiPane: Bool
    let isVisible: Bool
    
    var body: some View {
        GeometryReader { metrics in
            HStack {
                ArticleListView(listComponent)
                    .frame(width: isMultiPane ? metrics.size.width * listPaneWeight : metrics.size.width)
                
                if isMultiPane {
                    Spacer().frame(width: metrics.size.width * detailsPaneWeight)
                }
            }
        }.opacity(isVisible ? 1 : 0)
    }
}

struct DetailsPane: View {
    let detailsComponent: ArticleDetailsComponent?
    let isMultiPane: Bool
    
    var body: some View {
        if (detailsComponent != nil) {
            GeometryReader { metrics in
                HStack {
                    if isMultiPane {
                        Spacer().frame(width: metrics.size.width * listPaneWeight)
                    }
                    
                    ArticleDetailsView(detailsComponent!)
                        .frame(width: isMultiPane ? metrics.size.width * detailsPaneWeight : metrics.size.width)
                }
            }
        } else {
            EmptyView()
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
    var listComponent: ArticleListComponent = PreviewArticleListComponent()
    
    var children: Value<MultiPaneComponentChildren> = mutableValue(
        MultiPaneComponentChildren(
            isMultiPane: false,
            listChild: ChildCreated(configuration: "list" as AnyObject, instance: PreviewArticleListComponent()),
            detailsChild: nil
        )
    )
    
    func setMultiPane(isMultiPane: Bool) {}
}
